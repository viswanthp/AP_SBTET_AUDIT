define(['app'], function (app) {
    app.controller("DashboardController", function ($scope, $localStorage, SystemUserService, $state) {
        var authData = $localStorage.authorizationData;
        //$scope.SessionID = $localStorage.SessionID;
        $scope.UserName = authData.UserName;
        $scope.UserTypeID = authData.UserTypeID;
        //$scope.UserTypeID = authData.UserTypeID;
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        $scope.OpenModule = function (DataType) {
            $localStorage.DataType = DataType
            $state.go('Dashboard.SubDashboard')
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