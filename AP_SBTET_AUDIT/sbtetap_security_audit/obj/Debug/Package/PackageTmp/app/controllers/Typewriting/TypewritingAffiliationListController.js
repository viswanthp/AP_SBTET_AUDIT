define(['app'], function (app) {
    app.controller("TypewritingAffiliationListController", function ($scope, $state, AdminService, $filter, $localStorage) {


        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        $scope.OpenPage = function (image, Title) {
            $localStorage.CourseData = {
                "image": image,
                "Title": Title,
            }
            $state.go('index.CourseDetails')
        }


        $scope.OpenPages = function () {
            window.open('https://dte.ap.gov.in/', '_blank');
        }

    })
})