define(['app'], function (app) {
    app.controller("IndexController", function ($scope, $state, AdminService, $uibModal) {


        const $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.PolycetYear = new Date();
            $scope.GetPopups();


            $scope.SiteViews = 0;
            $scope.GetPublishData()
            $scope.websiteCounts();
            $scope.GetGallery()
            $('#bs-carousel').carousel({ interval: 2000 })


            //$('.start-count').each(function () {
            //    var $this = $(this);
            //    $this.data('target', parseInt($this.html()));
            //    $this.data('counted', false);
            //    $this.html('0');
            //});

            //$(window).bind('mouseenter ', function () {
            //    var speed = 3000;
            //    $('.start-count').each(function () {
            //        var $this = $(this);
            //        if (!$this.data('counted') && $(window).scrollTop() + $(window).height() >= $this.offset().top) {
            //            $this.data('counted', true);
            //            $this.animate({
            //                dummy: 1
            //            }, {
            //                duration: speed,
            //                step: function (now) {
            //                    var $this = $(this);
            //                    var val = Math.round($this.data('target') * now);
            //                    $this.html(val);
            //                    if (0 < $this.parent('.value').length) {
            //                        $this.parent('.value').css('width', val + '%');
            //                    }
            //                }
            //            });
            //        }
            //    });
            //}).triggerHandler('scroll');

        }


        $scope.GetPopups = function () {
            var DataType = 1;
            var GetPopups = AdminService.GetOrEditOrDeletePopup(DataType, 0);
            GetPopups.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetPopupsList = res.Table;
                $scope.Popup = false;
                var Popup = false
                for (var i = 0; i < $scope.GetPopupsList.length; i++) {
                    if ($scope.GetPopupsList[i].Active == true) {
                        Popup = true;
                    }
                }
                $scope.Popup = Popup

                var isFired = localStorage.getItem('checkFired');
                if (isFired != '1') {
                    if ($scope.Popup == true) {
                        $scope.modalInstance = $uibModal.open({
                            templateUrl: "/app/views/Popups/HomePopup.html",
                            size: 'xlg',
                            scope: $scope,
                            windowClass: 'modal-fit-att',
                            backdrop: 'static',
                        });
                    }
                } else {
                    // $(".se-pre-con").fadeOut("fast");
                    localStorage.setItem('checkFired', '1');
                    // alert("1")
                }

            },
                function (error) {
                    alert("error while loading Popups");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.closeModal = function () {

            $scope.modalInstance.close();
        }

        $scope.GetPublishData = function () {
            var getResults = AdminService.GetPublishData();// ReleaseResults
            getResults.then(function (response) {
                console.log(response)
                try {
                    var res = JSON.parse(response)
                    $scope.Publish = res.Table[0].publish
                    if ($scope.Publish == 0) {
                        //  $timeout(function () {
                        $state.go('CommingSoon')
                        // }, 7000);
                    }
                }
                catch (err) { }
                if (res.Table[0].ResponseCode == '200') {


                } else if (res.Table[0].ResponseCode == '400') {
                    //   $state.go('index')
                    // alert(res.Table[0].ResponseDescription);
                    //  $state.go('index.GetRankCard')

                }
            },
                function (error) {
                    alert("error while loading Data")
                    //var err = JSON.parse(error);
                });
        }


        $scope.websiteCounts = function () {

            var GetWebSiteVisiterCount = AdminService.GetWebSiteVisiterCount();
            GetWebSiteVisiterCount.then(function (response) {
                var response = JSON.parse(response)

                $scope.SiteViews = response.Table[0].WebsiteVisitedCount;
            },
                function (error) {

                    var err = JSON.parse(error);
                });
        }

        $scope.GetGallery = function () {

            var GetWebSiteVisiterCount = AdminService.GetGallery();
            GetWebSiteVisiterCount.then(function (response) {
                var response = JSON.parse(response)

                $scope.GetGalleryList = response.Table;
            },
                function (error) {

                    var err = JSON.parse(error);
                });
        }
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
               
            }
        },
            function (error) {
                alert("error while loading Events");
                var err = JSON.parse(error);

            });

        $scope.Count=0
        $scope.GetCounters = function () {
            if ($scope.Count == 0) {
            $scope.Count = 1
        var GetWebsiteCounts = AdminService.GetWebsiteCounts();
        GetWebsiteCounts.then(function (response) {
            try {
                var res = JSON.parse(response);
            }
            catch (err) { }
           
            if (res.Table.length > 0) {
                $scope.Faculty = res.Table[0].Faculty;
                $scope.Courses = res.Table[0].Courses;
                $scope.Students = res.Table[0].Students;
                $scope.institutions = res.Table[0].institutions;
                $scope.OnRoll = res.Table[0].OnRoll;
                $scope.Awarded = res.Table[0].Awarded;
                
                //var array = [1, 2, 3, 4, 5,6,7,8]
                //for (var i = 0; i < array.length; i++) {
                   
                //    console.log(i)
                //    delay(i)
                //}
                //function delay(i) {
                //    setTimeout(() => {
                //        console.log(array[i])
                //    }, 5000);
                //    console.log(array[i])
                //}


               //var Count = 0
               // for (var i = 1; i < $scope.Faculty; i++) {
              
               //     setTimeout(function () {
               //         Count ++
               //         console.log(Count)
               //         $scope.Count = Count
               //     }, 1000);
               //    // console.log($scope.Count)
               // }
               // console.log($scope.Count)
                
            }
        },
            function (error) {
                alert("error while loading Counts");
                var err = JSON.parse(error);

            });
            }
        }


        window.onscroll = function () {
            if (window.scrollY > 2700 && window.scrollY < 3000) {
                $scope.GetCounters()
             //  console.log("Yes")
            } else if (window.scrollY > 500) {

              //  console.log("No")

            }
        };

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


        $scope.OpenDisable = function () {

            if ($('body').css('filter') == 'sepia(100%) saturate(0%)') {
                $("body").css("filter", "none");
            } else if ($('body').css('filter') == 'none') {
                $("body").css("filter", "sepia(100%) saturate(0%)");
            }
        }
    });
});


