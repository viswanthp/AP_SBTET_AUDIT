define(['app'], function (app) {
    app.controller("CollegePlacementsController", function ($scope, $localStorage, $state, AdminService, $filter) {


        $scope.GoBack = function () {
            $state.go('Dashboard.SubDashboard')
        }

        const $ctrl = this;
        $ctrl.$onInit = () => {
            var authData = $localStorage.authorizationData;
            $scope.UserID = authData.UserID;
            $scope.UserTypeID = authData.UserTypeID;
            $scope.UserName = authData.UserName;
            $scope.edit = true;
            //  $scope.GetCollegeTypes()

            $scope.GetAcademicYears()
            $scope.GetCoursesByUserName($scope.UserName)
            // alert($scope.UserName)
            $scope.GetPlacementsByUserName($scope.UserName)
            $scope.AddDetails = '1';
            $scope.UpdateDetails = '0';
        }

        $scope.GetPlacementsByUserName = function (UserName) {
            var GetLabs = AdminService.GetPlacementsByUserName(UserName);
            GetLabs.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetPlacementsList = res.Table;
                $scope.CollegeId = res.Table[0].CollegeID;
            },
                function (error) {
                    alert("error while loading Placements");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }



        $scope.GetPlacementsById = function (CollegeId) {
            var GetPlacementsById = AdminService.GetPlacementsById(CollegeId);
            GetPlacementsById.then(function (response) {
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
                // $scope.GetPlacementsList = res.Table;
                $scope.CollegePlacementID = res.Table[0].CollegePlacementID
                $scope.AcademicYear = res.Table[0].AcademicYearID
                $scope.Course = res.Table[0].CourseID
                $scope.NoofPlaced = res.Table[0].NoofPlaced
                $scope.MinimumPackage = res.Table[0].MinimumPackage
                $scope.MaximumPackage = res.Table[0].MaximumPackage
                $scope.IndustryName = res.Table[0].IndustryName;



            },
                function (error) {
                    alert("error while loading Placements");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

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


        $scope.GetCoursesByUserName = function (username) {
            var GetActiveCourses = AdminService.GetCoursesByUserName(username);
            GetActiveCourses.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetActiveCoursesList = res.Table;

            },
                function (error) {
                    alert("error while loading Courses");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


        $scope.AddPlacements = function () {
            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.Course == null || $scope.Course == "" || $scope.Course == undefined) {
                alert("Please Select Course");
                return;
            }
            if ($scope.NoofPlaced == null || $scope.NoofPlaced == "" || $scope.NoofPlaced == undefined) {
                alert("Please Enter No of Placed");
                return;
            }
            if ($scope.IndustryName == null || $scope.IndustryName == "" || $scope.IndustryName == undefined) {
                alert("Please Enter Industry Name");
                return;
            }
            
            if ($scope.MinimumPackage == null || $scope.MinimumPackage == "" || $scope.MinimumPackage == undefined) {
                alert("Please Enter MinimumPackage");
                return;
            }
            if ($scope.MaximumPackage == null || $scope.MaximumPackage == "" || $scope.MaximumPackage == undefined) {
                alert("Please Enter MaximumPackage");
                return;
            }
            var objs = {
                "AcademicYearID": $scope.AcademicYear,
                "CourseID": $scope.Course,
                "NoofPlaced": $scope.NoofPlaced,
                "IndustryName": $scope.IndustryName,
                "MinimumPackage": $scope.MinimumPackage,
                "MaximumPackage": $scope.MaximumPackage,
                "UserName": $scope.UserName
            }
            console.log(objs)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddPlacements(objs);
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
                    $scope.GetPlacementsByUserName($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetPlacementsByUserName($scope.UserName)
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
         
            $scope.AcademicYear = "";
            $scope.Course = "";
            $scope.NoofPlaced = "";
            $scope.MinimumPackage = "";
            $scope.MaximumPackage = "";
            $scope.IndustryName = "";
        }

        $scope.UpdatePlacements = function (CollegeLabID) {
            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.Course == null || $scope.Course == "" || $scope.Course == undefined) {
                alert("Please Select Course");
                return;
            }
            if ($scope.NoofPlaced == null || $scope.NoofPlaced == "" || $scope.NoofPlaced == undefined) {
                alert("Please Enter No of Placed");
                return;
            }
            if ($scope.IndustryName == null || $scope.IndustryName == "" || $scope.IndustryName == undefined) {
                alert("Please Enter Industry Name");
                return;
            }
            if ($scope.MinimumPackage == null || $scope.MinimumPackage == "" || $scope.MinimumPackage == undefined) {
                alert("Please Enter MinimumPackage");
                return;
            }
            if ($scope.MaximumPackage == null || $scope.MaximumPackage == "" || $scope.MaximumPackage == undefined) {
                alert("Please Enter MaximumPackage");
                return;
            }
         
            var obj = {
                "CollegePlacementID": $scope.CollegePlacementID,
                "AcademicYearID": $scope.AcademicYear,
                "CourseID": $scope.Course,
                "NoofPlaced": $scope.NoofPlaced,
                "IndustryName": $scope.IndustryName,
                "MinimumPackage": $scope.MinimumPackage,
                "MaximumPackage": $scope.MaximumPackage,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdatePlacements(obj);
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
                    $scope.GetPlacementsByUserName($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetPlacementsByUserName($scope.UserName)
                    $scope.ClearData()
                }

                else {
                    alert("Not Added")
                    $scope.GetPlacementsByUserName($scope.UserName)
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