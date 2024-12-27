define(['app'], function (app) {
    app.controller("EventsController", function ($scope, $state, $uibModal, $localStorage, AdminService) {
        //var authData = $localStorage.authorizationData;
        //if (!authData) {
        //    $state.go('index.OfficialsLogin')
        //}
        //$scope.UserName = authData.UserName;

        $scope.Loading = true;
        var GetEvents = AdminService.GetEvents();
        GetEvents.then(function (response) {
            try {
                $scope.Loading = false;
                var res = JSON.parse(response);
            }
            catch (err) {
                $scope.Loading = false;}
            $scope.GetEvents = res.Table;

        },
            function (error) {
                $scope.Loading = false;
                alert("error while loading Events");
                var err = JSON.parse(error);

            });

        $scope.GetAllEvents = function () {
            $scope.Loading = true;
            var GetEvents = AdminService.GetEvents();
            GetEvents.then(function (response) {
                try {
                    $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.Loading = false;}
                $scope.GetEvents = res.Table;

            },
                function (error) {
                    $scope.Loading = false;
                    alert("error while loading States");
                    var err = JSON.parse(error);

                });
        }

        $scope.GoBack = function () {
            $state.go('Dashboard.SubDashboard')
        }

        $scope.ViewEvents = function (Id) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/ViewEventsPopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.GetEventsById(Id)
        }
        $scope.EditEvents = function (Id) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/EditEventsPopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.GetEventsById(Id)
        }

        $scope.closeModal = function () {

            $scope.modalInstance.close();
        }

        $scope.GetEventsById = function (Id) {
            var GetEventsById = AdminService.GetEventsById(Id);
            GetEventsById.then(function (resp) {
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
            if ($scope.EventDate == null || $scope.EventDate == "" || $scope.EventDate == undefined) {
                alert("Please Enter Event Date");
                return;
            }
            if ($scope.Subject == null || $scope.Subject == "" || $scope.Subject == undefined) {
                alert("Please Enter Event Subject");
                return;
            }
            if ($scope.Text == null || $scope.Text == "" || $scope.Text == undefined) {
                alert("Please Enter Event Text");
                return;
            }
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddEvents($scope.Subject, $scope.Text,$scope.EventDate, "Admin");
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                    $scope.Loading = false;
                }
                catch (err) {
                    $scope.Subject = "";
                    $scope.Text = "";
                    $scope.EventDate = "";
                   
                    $scope.Loading = false;}
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Subject = "";
                    $scope.Text = "";
                    $scope.EventDate = "";
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllEvents();



                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    $scope.Subject = "";
                    $scope.Text = "";
                    $scope.EventDate = "";
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllEvents();



                }

                else {
                    $scope.Subject = "";
                    $scope.Text = "";
                    $scope.EventDate = "";
                    $scope.Loading = false;
                    alert("Not Added")


                }
            },

                function (error) {
                    $scope.Subject = "";
                    $scope.Text = "";
                    $scope.EventDate = "";
                    $scope.Loading = false;
                    var err = JSON.parse(error);
                })

        }



        $scope.UpdateEvents = function () {
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdateEvents($scope.EditData.EventSubject, $scope.EditData.EventText, $scope.EditData.EventDate, $scope.EditData.Active, $scope.EditData.EventID);
            adddistcoorcentre.then(function (response) {
                try {
                    $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.Loading = false;}
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.closeModal()
                    $scope.GetAllEvents();



                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllEvents();



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

        $scope.DeleteEvents = function (data, Id) {
            $scope.Id = Id;
            $scope.EventDate1 = data.EventDate;
            $scope.EventSubject1 = data.EventSubject;
            $scope.EventText1 = data.EventText;
            document.getElementById('id01').style.display = 'block'
        }

        $scope.DeleteEventsConfirm = function () {
       

            var GetEventsById = AdminService.DeleteEventsById($scope.Id);
            GetEventsById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) {
                    document.getElementById('id01').style.display = 'none'
                }

                if (res.Table.length > 0) {
                    document.getElementById('id01').style.display = 'none'
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllEvents();

                }
                else {
                    $scope.DistrictsData = [];
                    document.getElementById('id01').style.display = 'none'
                    $scope.GetAllEvents();
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

