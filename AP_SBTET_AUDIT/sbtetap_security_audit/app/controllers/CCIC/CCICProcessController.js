define(['app'], function (app) {
    app.controller("CCICProcessController", function ($scope, $state, AdminService, $filter, $localStorage) {
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




    })
})