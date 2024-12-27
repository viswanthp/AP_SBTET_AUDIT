define(['app'], function (app) {
    app.controller("IndexController", function ($scope, $state, AdminService) {

        //var captcha = AdminService.GetCaptchaString10();
        //captcha.then(function (res) {
        //    try {
        //        var newcapt = res;
        //        sessionStorage.clear();
        //        alert(newcapt)
        //        sessionStorage.setItem('SessionCaptcha', newcapt);
        //    } catch (err) {
        //        $scope.GetCatcha = ''
        //    }
        //}, function (error) {
        //    $scope.GetCatcha = ''
        //    alert('Unable to load Captcha')
        //});

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        $scope.OpenModule = function (Module) {
            $state.go(Module);
        }
        $scope.Data = false
        $scope.Loading = true;
        var GetCorouselList = AdminService.GetCorousels();
        GetCorouselList.then(function (response) {
            try {
               
                $scope.Loading = false;
                var res = JSON.parse(response);
            }
            catch (err) {
                $scope.Loading = false;
            } 

            $('.loadImg').css('display', 'none');
            $('.IndexData').css('display', 'block');
            $scope.Data = true;
            //document.getElementById('loading').style.display = 'none'
            $scope.GetCorouselList = res.Table;
            console.log($scope.GetCorouselList)

        },
            function (error) {
                $scope.Loading = false;
                alert("error while loading Slides");
                var err = JSON.parse(error);

            });

        var GetEvents = AdminService.GetEvents();
        GetEvents.then(function (response) {
            try {
                var res = JSON.parse(response);
            }
            catch (err) { }
            if (res.Table.length > 0) {
                $scope.GetALLEvents = res.Table;
                console.log($scope.GetALLEvents)
            }
        },
            function (error) {
                alert("error while loading Events");
                var err = JSON.parse(error);

            });

        var GetLatestNews = AdminService.GetLatestNews();
        GetLatestNews.then(function (response) {
            try {
                var res = JSON.parse(response);
            }
            catch (err) { }
            $scope.GetLatestNews = res.Table;

        },
            function (error) {
                alert("error while loading Latest News");
                var err = JSON.parse(error);

            });

        var GetNotificationList = AdminService.GetNotifications();
        GetNotificationList.then(function (response) {
            try {
                var res = JSON.parse(response);
            }
            catch (err) { }
            if (res.Table.length > 0) {
                $scope.Loading = false;
                $scope.GetNotificationList = res.Table;
            }
        },
            function (error) {
                $scope.Loading = false;
                alert("error while loading States");
                var err = JSON.parse(error);

            });

        //$scope.OpenLogin = function () {
        //    $state.go('index.OfficialsLogin')
        //}

    });
});


