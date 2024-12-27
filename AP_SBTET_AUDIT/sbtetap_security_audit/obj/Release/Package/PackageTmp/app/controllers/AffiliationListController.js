define(['app'], function (app) {
    app.controller("AffiliationListController", function ($scope, $state, AdminService, $filter, $localStorage) {

      

        //$scope.OpenPage = function (image, Title) {
        //    $localStorage.CourseData = {
        //        "image": image,
        //        "Title": Title,
        //    }
        //    $state.go('index.CourseDetails')
        //}

        $scope.OpenPage = function (page) {
            $state.go(page)
        }



    })
})