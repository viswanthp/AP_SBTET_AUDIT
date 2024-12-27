define(['app'], function (app) {
    app.controller("ChangePasswordController", function ($scope, $crypto, ChangePasswordService, SystemUserService, AppSettings, $http, $localStorage, $state) {

        var authData = $localStorage.authorizationData;
        $scope.UserID = authData.UserID;

        $scope.GoBack = function () {

            $state.go('Dashboard.SubDashboard')
        }

        $scope.Submit = function () {
            if ($scope.OldPassword == null || $scope.OldPassword == "" || $scope.OldPassword == undefined) {
                alert("Please Enter Old Password");
                return;
            }
            if ($scope.NewPassword == null || $scope.NewPassword == "" || $scope.NewPassword == undefined) {
                alert("Please Enter New Password");
                return;
            }
            if ($scope.ConfirmNewPassword == null || $scope.ConfirmNewPassword == "" || $scope.ConfirmNewPassword == undefined) {
                alert("Please Enter Confirm New Password");
                return;
            }
            if ($scope.NewPassword.length > 12 || $scope.NewPassword.length < 6) {
                alert("New Password Length Must be grater than 6 characters & less than 13 Characters")
                return;
            }
            if ($scope.NewPassword != $scope.ConfirmNewPassword) {
                alert("New Password and Confirm Password Not Matched")
                return;
            }
          
            var objs = {
                "OldPassword": $scope.OldPassword,
                "NewPassword": $scope.NewPassword,
                "UserID": $scope.UserID
            }
            console.log(objs)
            $scope.Loading = true;
            var DataType = 1;
            let reqdata = $crypto.encrypt($scope.NewPassword, sessionStorage.Ekey) + "$$@@$$" + $crypto.encrypt($scope.OldPassword, sessionStorage.Ekey) + "$$@@$$" + $crypto.encrypt($scope.UserID.toString(), sessionStorage.Ekey) + "$$@@$$" + $crypto.encrypt(DataType.toString(), sessionStorage.Ekey) + "$$@@$$" + sessionStorage.Ekey;
            var adddistcoorcentre = ChangePasswordService.GetChangePassword(reqdata);
            adddistcoorcentre.then(function (res) {
               
                if (res.ResponceCode == '200') {
                    $scope.Loading = false;
                    alert(res.ResponceDescription);
                    $scope.Logout()

                } else if (res.ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.ResponseDescription);
                    $scope.ClearData()

                }

                else {
                    alert("Not Added")
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }

        $scope.Logout = function () {

            sessionStorage.loggedIn = "no";
            //var GetUserLogout = SystemUserService.PostUserLogout($scope.UserName, $scope.SessionID);

            delete $localStorage.authorizationData;
            delete $localStorage.authToken;
            delete $scope.SessionID;

            $scope.authentication = {
                isAuth: false,
                UserID: 0,
                UserName: ""

            };
            $state.go('index')
        }

    })
})