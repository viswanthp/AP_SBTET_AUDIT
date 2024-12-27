define(['app'], function (app) {
    app.controller("CCICAffiliationListController", function ($scope, $state, AdminService, $filter, $localStorage) {

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        $scope.OpenPage1 = function () {
         
            $state.go('index.CCICProcess')
        }

        $scope.OpenPages = function () {
            window.open('https://dte.ap.gov.in/', '_blank');
        }


    })
})