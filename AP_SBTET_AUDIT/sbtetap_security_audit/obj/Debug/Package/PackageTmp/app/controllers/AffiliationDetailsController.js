define(['app'], function (app) {
    app.controller("AffiliationDetailsController", function ($scope, $state, AdminService, $filter) {

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        $scope.OpenPages = function () {
            window.open('https://dte.ap.gov.in/', '_blank');
        }

    })
})