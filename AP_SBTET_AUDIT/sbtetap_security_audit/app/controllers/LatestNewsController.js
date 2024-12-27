define(['app'], function (app) {
    app.controller("LatestNewsController", function ($scope, $state, $uibModal, $localStorage, AdminService) {
        //var authData = $localStorage.authorizationData;
        //if (!authData) {
        //    $state.go('index.OfficialsLogin')
        //}
        //$scope.UserName = authData.UserName;

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        $scope.Loading = true;
        var GetLatestNews = AdminService.GetAdminLatestNews();
        GetLatestNews.then(function (response) {
            try {
                $scope.Loading = false;
                var res = JSON.parse(response);
            }
            catch (err) {
                $scope.Loading = false;}
            $scope.GetLatestNews = res.Table;

        },
            function (error) {
                $scope.Loading = false;
                alert("error while loading Latest News");
                var err = JSON.parse(error);

            });

        $scope.GetAllLatestNews = function () {
            var GetLatestNews = AdminService.GetAdminLatestNews();
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
        }

        $scope.GoBack = function () {
            $state.go('Dashboard.SubDashboard')
        }

        $scope.ViewLatestNews = function (Id) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/ViewDistCentresPopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.GetLatestNewsById(Id)
        }
        $scope.EditLatestNews = function (Id) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/EditDistCentresPopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.GetLatestNewsById(Id)
        }

        $scope.closeModal = function () {

            $scope.modalInstance.close();
        }

        $scope.GetLatestNewsById = function ( Id) {
          
            var GetLatestNewsById = AdminService.GetLatestNewsById(Id);
            GetLatestNewsById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) { }

                if (res.Table.length > 0) {
                    $scope.EditData = res.Table[0];
                    console.log($scope.EditData)
                }
                else {
                    $scope.DistrictsData = [];
                }

            },
                function (error) {
                    alert("data is not loaded");
                    var err = JSON.parse(error);
                });
        }


        $scope.Submit = function () {
            if ($scope.Message == null || $scope.Message == "" || $scope.Message == undefined) {
                alert("Please Enter Message");
                return;
            }

            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddLatestNews($scope.Message, "Admin");
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.Subject = "";
                    $scope.Message = "";
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Subject = "";
                    $scope.Message = "";
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllLatestNews();



                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Subject = "";
                    $scope.Message = "";
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllLatestNews();



                }

                else {
                    $scope.Subject = "";
                    $scope.Message = "";
                    alert("Not Added")

                    $scope.Loading = false;
                }
            },

                function (error) {
                    $scope.Subject = "";
                    $scope.Message = "";
                    $scope.Loading = false;
                    var err = JSON.parse(error);
                })

        }



        $scope.UpdateLatestNews = function () {
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdateLatestNews( $scope.EditData.LatestNewsText, $scope.EditData.Active, $scope.EditData.LatestNewsID);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.closeModal()
                    $scope.GetAllLatestNews();



                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllLatestNews();



                }

                else {
                    $scope.Loading = false;
                    alert("Not Added")


                }
            },

                function (error) {
                    $scope.Loading = false;
                    var err = JSON.parse(error);
                })

        }

        $scope.DeleteLatestNews = function (data, Id) {
            $scope.Subject1 = data.LatestNewsSubject;
            $scope.Message1 = data.LatestNewsText;
            $scope.Id=Id
            document.getElementById('id01').style.display = 'block'
        }

        $scope.DeleteLatestNewsConfirm = function () {
            var GetLatestNewsById = AdminService.DeleteLatestNewsById($scope.Id);
            GetLatestNewsById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) {
                    document.getElementById('id01').style.display = 'none'
                }

                if (res.Table.length > 0) {
                    document.getElementById('id01').style.display = 'none'
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllLatestNews();
                   
                }
                else {
                    $scope.DistrictsData = [];
                    document.getElementById('id01').style.display = 'none'
                    $scope.GetAllLatestNews();
                }

            },
                function (error) {
                    alert("data is not loaded");
                    document.getElementById('id01').style.display = 'none'
                    var err = JSON.parse(error);
                });
        }
    })
})

