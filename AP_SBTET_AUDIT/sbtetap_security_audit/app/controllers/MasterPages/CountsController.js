define(['app'], function (app) {
    app.controller("CountsController", function ($scope, $localStorage, $state, AdminService, $filter) {


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
            $scope.GetAcademicYears();
            $scope.GetCounts()

            $scope.AddDetails = '1';
            $scope.UpdateDetails = '0';
        }


        //$scope.ChangeAcademicYear = function () {
        //    $scope.GetCounts();
        //}


        $scope.GetAcademicYears = function () {
            var GetAcademicYears = AdminService.GetAcademicYears();
            GetAcademicYears.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetAcademicYearsList = res.Table;

            },
                function (error) {
                    alert("error while loading Academic Years");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }



        $scope.getCountsById = function (CountID) {
            var objs = {
                "DataType": 2,
                "CountID": CountID,
                "Active": 0
            }
            var GetCountsById = AdminService.GetCountsById(objs);
            GetCountsById.then(function (response) {
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

                $scope.CountID = res.Table[0].CountID;
                $scope.AcademicYear = res.Table[0].AcademicYearID;
                $scope.Faculty = res.Table[0].Faculty;
                $scope.Courses = res.Table[0].Courses;
                $scope.Students = res.Table[0].Students;
                $scope.Institutions = res.Table[0].institutions;
                $scope.OnRolls = res.Table[0].OnRoll;
                $scope.Awarded = res.Table[0].Awarded;


            },
                function (error) {
                    alert("error while loading Counts");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetCounts = function () {
            var objs = {
                "DataType": 1,
                "CountID": 0,
                "Active": 0
            }
            var GetCounts = AdminService.GetCounts(objs);
            GetCounts.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetCountsList = res.Table;

            },
                function (error) {
                    alert("error while loading Counts");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.DeleteCount = function (CountID) {
            var objs = {
                "DataType": 3,
                "CountID": CountID,
                "Active": 0
            }
            var deleteCount = AdminService.DeleteCount(objs);
            deleteCount.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                if (res.Table[0].ResponseCode == '200') {
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetCounts();
                }
                else {
                    alert('Not Deleted')
                }

            },
                function (error) {
                    alert("error while loading Sports");
                    var err = JSON.parse(error);
                });
        }



        $scope.AddCount = function () {
            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select AcademicYear");
                return;
            }
            if ($scope.Faculty == null || $scope.Faculty == "" || $scope.Faculty == undefined) {
                alert("Please Enter Faculty Count");
                return;
            }
            if ($scope.Courses == null || $scope.Courses == "" || $scope.Courses == undefined) {
                alert("Please Enter Courses Count");
                return;

            }
            if ($scope.Students == null || $scope.Students == "" || $scope.Students == undefined) {
                alert("Please Enter Students Count");
                return;
            }
            if ($scope.Institutions == null || $scope.Institutions == "" || $scope.Institutions == undefined) {
                alert("Please Enter Instutions Count");
                return;
            }
            if ($scope.OnRolls == null || $scope.OnRolls == "" || $scope.OnRolls == undefined) {
                alert("Please Enter OnRolls Count");
                return;
            }
            if ($scope.Awarded == null || $scope.Awarded == "" || $scope.Awarded == undefined) {
                alert("Please Enter Awards Count");
                return;
            }
            var objs = {
                "DataType": 1,
                "CountID": 0,
                "AcademicYearID": $scope.AcademicYear,
                "Faculty": $scope.Faculty,
                "Courses": $scope.Courses,
                "Students": $scope.Students,
                "Institutions": $scope.Institutions,
                "OnRoll": $scope.OnRolls,
                "Awarded": $scope.Awarded,
                "Active": 1,
                "UserName": $scope.UserName
            }

            $scope.Loading = true;
            var addCounts = AdminService.AddCount(objs);
            addCounts.then(function (response) {
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
                    $scope.GetCounts()
                    $scope.AddDetails = '1';
                    $scope.UpdateDetails = '0';
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetCounts()
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

            $scope.AcademicYear = null;
            $scope.Faculty = "";
            $scope.Courses = "";
            $scope.Students = "";
            $scope.Institutions = "";
            $scope.OnRolls = "";
            $scope.Awarded = "";


        }

        $scope.UpdateCount = function () {
            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select AcademicYear");
                return;
            }
            if ($scope.Faculty == null || $scope.Faculty == "" || $scope.Faculty == undefined) {
                alert("Please Enter Faculty Count");
                return;
            }
            if ($scope.Courses == null || $scope.Courses == "" || $scope.Courses == undefined) {
                alert("Please Enter Courses Count");
                return;

            }
            if ($scope.Students == null || $scope.Students == "" || $scope.Students == undefined) {
                alert("Please Enter Students Count");
                return;
            }
            if ($scope.Institutions == null || $scope.Institutions == "" || $scope.Institutions == undefined) {
                alert("Please Enter Instutions Count");
                return;
            }
            if ($scope.OnRolls == null || $scope.OnRolls == "" || $scope.OnRolls == undefined) {
                alert("Please Enter OnRolls Count");
                return;
            }
            if ($scope.Awarded == null || $scope.Awarded == "" || $scope.Awarded == undefined) {
                alert("Please Enter Awards Count");
                return;
            }
            var objs = {
                "DataType": 2,
                "CountID": $scope.CountID,
                "AcademicYearID": $scope.AcademicYear,
                "Faculty": $scope.Faculty,
                "Courses": $scope.Courses,
                "Students": $scope.Students,
                "Institutions": $scope.Institutions,
                "OnRoll": $scope.OnRolls,
                "Awarded": $scope.Awarded,
                "Active": 1,
                "UserName": $scope.UserName
            }
            $scope.Loading = true;
            var UpdateCount = AdminService.UpdateCount(objs);
            UpdateCount.then(function (response) {
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
                    $scope.GetCounts()
                    $scope.AddDetails = '1';
                    $scope.UpdateDetails = '0';
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetCounts()
                    $scope.ClearData()
                    $scope.AddDetails = '1';
                    $scope.UpdateDetails = '0';
                }

                else {
                    alert("Not Added")
                    $scope.getCountsById($scope.UserName)
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