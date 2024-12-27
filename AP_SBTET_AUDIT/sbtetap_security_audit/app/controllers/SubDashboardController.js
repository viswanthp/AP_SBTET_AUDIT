define(['app'], function (app) {
    app.controller("SubDashboardController", function ($scope, $localStorage, SystemUserService, $state) {
        var authData = $localStorage.authorizationData;
        //$scope.SessionID = $localStorage.SessionID;
        //$scope.UserName = authData.UserName;
        $scope.UserTypeID = authData.UserTypeID;
        $scope.UserName = authData.UserName;
        $scope.CardType =  $localStorage.DataType
        console.log($scope.UserTypeID)
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        $scope.GoBack = function () {

            $state.go('Dashboard')
        }


        $scope.ChangePassword = function () {

            $state.go('Dashboard.SubDashboard.ChangePassword')
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