define(['app'], function (app) {
    app.controller("OtherLinksController", function ($scope, $uibModal, $localStorage, $state, AdminService, $filter) {


        $scope.GoBack = function () {
            $state.go('Dashboard.SubDashboard')
        }

        const $ctrl = this;
        $ctrl.$onInit = () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            var authData = $localStorage.authorizationData;
            $scope.UserID = authData.UserID;
            $scope.UserTypeID = authData.UserTypeID;
            $scope.UserName = authData.UserName;

            $scope.GetLinks();


        }


        $scope.GetLinks = function () {
            var DataType = 1;
            var GetLinks = AdminService.GetLinks(DataType, 0);
            GetLinks.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetLinksList = res.Table;
                $scope.URL = res.Table[0].LinkFile;
            },
                function (error) {
                    alert("error while loading Links");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.DownloadFile = function () {
            window.open($scope.URL, 'Download');

        }
        

    
        

    })
})