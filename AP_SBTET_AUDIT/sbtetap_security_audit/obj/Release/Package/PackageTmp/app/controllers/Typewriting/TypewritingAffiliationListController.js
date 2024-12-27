define(['app'], function (app) {
    app.controller("TypewritingAffiliationListController", function ($scope, $state, AdminService, $filter, $localStorage) {



        $scope.OpenPage = function (image, Title) {
            $localStorage.CourseData = {
                "image": image,
                "Title": Title,
            }
            $state.go('index.CourseDetails')
        }




    })
})