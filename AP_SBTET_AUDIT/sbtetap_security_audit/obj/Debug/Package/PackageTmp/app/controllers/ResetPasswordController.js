define(['app'], function (app) {
    app.controller("ResetPasswordController", function ($scope, $state, ChangePasswordService, AdminService, $crypto, $filter, $localStorage) {

        const $ctrl = this;
        $ctrl.$onInit = () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            var authData = $localStorage.authorizationData;
            console.log(authData)
            $scope.UserID = authData.UserID;
            $scope.UserTypeID = authData.UserTypeID;
            $scope.UserName = authData.UserName;
            $scope.Loading = true;
            
            $scope.GetUsersList()
        }


        $scope.GoBack = function () {
            $state.go('Dashboard.SubDashboard')
        }
        $scope.GetUsersList = function () {
            $scope.Loading = true;
            var GetUsersList = AdminService.GetUsersForPasswordReset();
            GetUsersList.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.Loading = false;
                $scope.GetUsersList = res.Table;


                //console.log($scope.GetFeedbackList)

            },
                function (error) {
                    $scope.Loading = false;
                    alert("error while loading Data");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
           // $scope.Loading = false;
        }

        
        $scope.ViewPassword = function (Id,Password,collegecode) {
            let reqdata = $crypto.encrypt(Password, sessionStorage.Ekey) + "$$@@$$" + $crypto.encrypt(Id.toString(), sessionStorage.Ekey) + "$$@@$$" + sessionStorage.Ekey;
            var GetUsersList = ChangePasswordService.GetCheckOldPassword(reqdata);
            GetUsersList.then(function (res) {
                try {
                    var res = JSON.parse(res);
                }
                catch (err) { }
               // "{\"status\":\"200\",\"statusdesc\": \"123\"}"
                if (res.status == '200') {
                    $scope.Loading = false;
                    alert(collegecode+" Password is "+res.statusdesc);
                    //$scope.Logout()

                } else if (res.status == '400') {
                    $scope.Loading = false;
                    alert(res.statusdesc);
                    $scope.ClearData()

                }
                //$scope.GetUsersList = res.Table;

                //console.log($scope.GetFeedbackList)

            },
                function (error) {
                    alert("error while loading Data");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


        $scope.ResetPassword = function (Id) {
            $scope.NewPassword = 'sbtetap'
            DataType = 1;

            let reqdata = $crypto.encrypt($scope.NewPassword, sessionStorage.Ekey) + "$$@@$$" + $crypto.encrypt(Id.toString(), sessionStorage.Ekey) + "$$@@$$" + $crypto.encrypt(DataType.toString(), sessionStorage.Ekey) + "$$@@$$" + sessionStorage.Ekey;
            var GetUsersList = ChangePasswordService.ResetUserPassword(reqdata);
            GetUsersList.then(function (res) {
                try {
                    var res = JSON.parse(res);
                }
                catch (err) { }
                if (res.ResponceCode == '200') {
                    $scope.Loading = false;
                    alert(res.ResponceDescription);
                    //$scope.Logout()

                } else if (res.ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.ResponseDescription);
                    $scope.ClearData()

                }
                //$scope.GetUsersList = res.Table;

                //console.log($scope.GetFeedbackList)

            },
                function (error) {
                    alert("error while loading Data");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.Reset = function (Id, UserName) {
            let text = "Are You Sure You want to Reset Password for " + UserName;
            if (confirm(text) == true) {
                text = "Yes";
                $scope.ResetPassword(Id)
            } else {
                text = "No";
            }
            //document.getElementById("demo").innerHTML = text;
        }

    })
})