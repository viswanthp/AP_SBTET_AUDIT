define(['app'], function (app) {
    app.controller("LabSettingsController", function ($scope, $localStorage, $state, AdminService, $filter) {


        $scope.GoBack = function () {
            $state.go('Dashboard.SubDashboard')
        }

        const $ctrl = this;
        $ctrl.$onInit = () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
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

            $scope.GetLabs()

            $scope.AddDetails = '1';
            $scope.UpdateDetails = '0';
        }

     



        $scope.GetLabById = function (CollegeId) {
            var GetCollegeLabsById = AdminService.GetLabById(CollegeId);
            GetCollegeLabsById.then(function (response) {
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
                // $scope.GetCollegeLabsList = res.Table;
                $scope.Lab = res.Table[0].LabName;
                $scope.LabId = res.Table[0].LabID;
               

            },
                function (error) {
                    alert("error while loading College Labs");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetLabs = function () {
            var GetLabs = AdminService.GetAdminLabs();
            GetLabs.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetLabsList = res.Table;

            },
                function (error) {
                    alert("error while loading Labs");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }



        $scope.AddLab = function () {
            if ($scope.Lab == null || $scope.Lab == "" || $scope.Lab == undefined) {
                alert("Please Select Lab");
                return;
            }
            var objs = {
                "LabName": $scope.Lab,
                "UserName": $scope.UserName
            }
            console.log(objs)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddLab(objs);
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
                    $scope.GetLabs()
                  
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetLabs()
                    $scope.ClearData()
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

            $scope.Lab = "";

        }

        $scope.UpdateLab = function (LabId) {
            if ($scope.Lab == null || $scope.Lab == "" || $scope.Lab == undefined) {
                alert("Please Select Lab");
                return;
            }
          

            var obj = {
                "LabID": $scope.LabId,
                "LabName": $scope.Lab,
                "UserName": $scope.UserName
            }
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdateLab(obj);
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
                    $scope.AddDetails = '1';
                    $scope.UpdateDetails = '0';
                    $scope.ClearData()
                    $scope.GetLabs()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetLabs()
                    $scope.ClearData()
                }

                else {
                    alert("Not Added")
                    $scope.GetLabs($scope.UserName)
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }

        $scope.DeleteLabById = function (Id) {
           
            var objs = {
                "LabID": Id,

            }

            var deletelab = AdminService.DeleteLab(objs);
            deletelab.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetLabs()
                } else if (res.Table[0].ResponseCode == '400') {
                    alert(res.Table[0].ResponseDescription);

                }

                else {
                    alert("Unable to delete")
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