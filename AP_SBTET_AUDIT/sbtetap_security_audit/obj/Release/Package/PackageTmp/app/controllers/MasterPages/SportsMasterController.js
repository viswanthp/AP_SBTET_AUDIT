define(['app'], function (app) {
    app.controller("SportsMasterController", function ($scope, $localStorage, $state, AdminService, $filter) {


        $scope.GoBack = function () {
            $state.go('Dashboard.SubDashboard')
        }

        const $ctrl = this;
        $ctrl.$onInit = () => {
            var authData = $localStorage.authorizationData;
            $scope.UserID = authData.UserID;
            $scope.UserTypeID = authData.UserTypeID;
            if ($scope.UserTypeID != '1') {
                alert("Unauthorized Access")
                $state.go('Dashboard.SubDashboard')
            }
            $scope.UserName = authData.UserName;
            $scope.edit = true;
            //  $scope.GetCollegeTypes()

            $scope.GetSports()

            $scope.AddDetails = '1';
            $scope.UpdateDetails = '0';
        }





        $scope.GetSportById = function (CollegeId) {
            var GetCollegeSportById = AdminService.GetSportById(CollegeId);
            GetCollegeSportById.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                $scope.AddDetails = '0';
                $scope.UpdateDetails = '1';
                // $scope.GetCollegeSportList = res.Table;
                $scope.Sport = res.Table[0].SportName;
                $scope.SportId = res.Table[0].SportID;


            },
                function (error) {
                    alert("error while loading College Sports");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetSports = function () {
            var GetSport = AdminService.GetSports();
            GetSport.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetSportsList = res.Table;

            },
                function (error) {
                    alert("error while loading Sports");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }



        $scope.AddSport = function () {
            if ($scope.Sport == null || $scope.Sport == "" || $scope.Sport == undefined) {
                alert("Please Select Sport");
                return;
            }
            var objs = {
                "SportName": $scope.Sport,
                "UserName": $scope.UserName
            }
            console.log(objs)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddSport(objs);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetSports()
                    $scope.AddDetails = '1';
                    $scope.UpdateDetails = '0';
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetSports()
                    $scope.ClearData()
                    $scope.AddDetails = '1';
                    $scope.UpdateDetails = '0';
                }

                else {
                    alert("Not Added")
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }


        $scope.ClearData = function () {

            $scope.Sport = "";

        }

        $scope.UpdateSport = function (SportId) {
            if ($scope.Sport == null || $scope.Sport == "" || $scope.Sport == undefined) {
                alert("Please Select Sport");
                return;
            }


            var obj = {
                "SportID": $scope.SportId,
                "SportName": $scope.Sport,
                "UserName": $scope.UserName
            }
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdateSport(obj);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetSports()
                    $scope.AddDetails = '1';
                    $scope.UpdateDetails = '0';
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetSports()
                    $scope.ClearData()
                    $scope.AddDetails = '1';
                    $scope.UpdateDetails = '0';
                }

                else {
                    alert("Not Added")
                    $scope.GetSport($scope.UserName)
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }

    })
})