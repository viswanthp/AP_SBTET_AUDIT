define(['app'], function (app) {
    app.controller("CollegeIndustrialTrainingController", function ($scope, $localStorage, $state, AdminService, $filter) {


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
            console.log(authData)
            $scope.UserID = authData.UserID;
            $scope.UserTypeID = authData.UserTypeID;
            $scope.UserName = authData.UserName;
            $scope.edit = true;
            //  $scope.GetCollegeTypes()

            $scope.GetColleges()
            $scope.GetAcademicYears()
           // $scope.Spells()
            $scope.GetCoursesByUserName($scope.UserName)
            // alert($scope.UserName)
            $scope.GetCollegeIndustrialTrainingByUserName($scope.UserName)
            $scope.AddDetails = '1';
            $scope.UpdateDetails = '0';
        }

        $scope.GetCollegeIndustrialTrainingByUserName = function (UserName) {
            var GetLabs = AdminService.GetCollegeIndustrialTrainingByUserName(UserName);
            GetLabs.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetIndustrialTrainingList = res.Table;
              //  $scope.CollegeId = res.Table[0].CollegeID;
            },
                function (error) {
                    alert("error while loading College Labs");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }



        $scope.GetCollegeIndustrialTrainingById = function (CollegeId) {
            var GetCollegeIndustrialTrainingById = AdminService.GetCollegeIndustrialTrainingById(CollegeId);
            GetCollegeIndustrialTrainingById.then(function (response) {
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
                $scope.AcademicYear = res.Table[0].AcademicYearID
                $scope.Spell = res.Table[0].Spell
                $scope.Course = res.Table[0].CourseID
                $scope.NoofTrained = res.Table[0].NoofTrained
                $scope.MinimumStipend = res.Table[0].MinimumStipend
                $scope.MaximumStipend = res.Table[0].MaximumStipend
                $scope.CollegeIndustrialTrainingID = res.Table[0].CollegeIndustrialTrainingID
                $scope.TrainingOffered = res.Table[0].TrainingOfferedIndustries

            },
                function (error) {
                    alert("error while loading College Labs");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetColleges = function () {
            var GetColleges = AdminService.GetColleges();
            GetColleges.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetCollegesList = res.Table;

            },
                function (error) {
                    alert("error while loading Colleges");
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

            $scope.Spells = [{ "Id": 1, "Name": "Spell 1" }, { "Id": 2, "Name": "Spell 2 "}]

        $scope.GetCoursesByUserName = function (username) {
            var GetCoursesByUserName = AdminService.GetCoursesByUserName(username);
            GetCoursesByUserName.then(function (response) {
                    try {
                        var res = JSON.parse(response);
                    }
                    catch (err) { }
                    $scope.GetBranchsList = res.Table;

                },
                    function (error) {
                        alert("error while loading Branchs");
                        var err = JSON.parse(error);
                        var err = JSON.parse(error);

                    });
            }
          

        $scope.AddIndustrialTraining = function () {

            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select AcademicYear");
                return;
            }
            if ($scope.Spell == null || $scope.Spell == "" || $scope.Spell == undefined) {
                alert("Please Select Spell");
                return;
            }
            if ($scope.Course == null || $scope.Course == "" || $scope.Course == undefined) {
                alert("Please Select Course");
                return;
            }
            if ($scope.NoofTrained == null || $scope.NoofTrained == "" || $scope.NoofTrained == undefined) {
                alert("Please No of Trained");
                return;
            }
            if ($scope.MinimumStipend == null || $scope.MinimumStipend == "" || $scope.MinimumStipend == undefined) {
                alert("Please Enter Minimum Stipend");
                return;
            }
            if ($scope.MaximumStipend == null || $scope.MaximumStipend == "" || $scope.MaximumStipend == undefined) {
                alert("Please Enter Maximum Stipend");
                return;
            }
            if ($scope.TrainingOffered == null || $scope.TrainingOffered == "" || $scope.TrainingOffered == undefined) {
                alert("Please Enter Training Offered Industries");
                return;
            }
            

            var objs = {
                "AcademicYearID": $scope.AcademicYear,
                "Spell": $scope.Spell,
                "CourseID": $scope.Course,
                "NoofTrained": $scope.NoofTrained,
                "MinimumStipend": $scope.MinimumStipend,
                "MaximumStipend": $scope.MaximumStipend,
                "TrainingOfferedIndustries": $scope.TrainingOffered,
                "UserName": $scope.UserName
            }
            console.log(objs)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddIndustrialTraining(objs);
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
                    $scope.GetCollegeIndustrialTrainingByUserName($scope.UserName)
                    $scope.ClearData()
                    $scope.GetCollegeDetails()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetCollegeIndustrialTrainingByUserName($scope.UserName)
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
            $scope.Spell = "";
            $scope.Course = "";
            $scope.NoofTrained = "";
            $scope.MinimumStipend = "";
            $scope.MaximumStipend = "";
            $scope.CollegeIndustrialTrainingID = "";
            $scope.TrainingOffered = "";
          
        }

        $scope.UpdateIndustrialTraining = function (CollegeLabID) {

            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select AcademicYear");
                return;
            }
            if ($scope.Spell == null || $scope.Spell == "" || $scope.Spell == undefined) {
                alert("Please Select Spell");
                return;
            }
            if ($scope.Course == null || $scope.Course == "" || $scope.Course == undefined) {
                alert("Please Select Course");
                return;
            }
            if ($scope.NoofTrained == null || $scope.NoofTrained == "" || $scope.NoofTrained == undefined) {
                alert("Please No of Trained");
                return;
            }
            if ($scope.MinimumStipend == null || $scope.MinimumStipend == "" || $scope.MinimumStipend == undefined) {
                alert("Please Enter Minimum Stipend");
                return;
            }
            if ($scope.MaximumStipend == null || $scope.MaximumStipend == "" || $scope.MaximumStipend == undefined) {
                alert("Please Enter Maximum Stipend");
                return;
            }
            if ($scope.TrainingOffered == null || $scope.TrainingOffered == "" || $scope.TrainingOffered == undefined) {
                alert("Please Enter Training Offered Industries");
                return;
            }


            var obj = {
                "CollegeIndustrialTrainingID": $scope.CollegeIndustrialTrainingID,
                "AcademicYearID": $scope.AcademicYear,
                "Spell": $scope.Spell,
                "CourseID": $scope.Course,
                "NoofTrained": $scope.NoofTrained,
                "MinimumStipend": $scope.MinimumStipend,
                "MaximumStipend": $scope.MaximumStipend,
                "TrainingOfferedIndustries": $scope.TrainingOffered,
                "UserName": $scope.UserName
            }
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdateIndustrialTraining(obj);
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
                    $scope.GetCollegeIndustrialTrainingByUserName($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetCollegeIndustrialTrainingByUserName($scope.UserName)
                    $scope.ClearData()
                }

                else {
                    alert("Not Added")
                    $scope.GetCollegeIndustrialTrainingByUserName($scope.UserName)
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }

        $scope.DeleteCollegeIndustrialTrainingById = function (CollegeIndustrialTrainingID) {


            var objs = {
                "CollegeIndustrialTrainingID": CollegeIndustrialTrainingID,

            }

            var delindustrialtraining = AdminService.DeleteCollegeIndustrialTraining(objs);
            delindustrialtraining.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetCollegeIndustrialTrainingByUserName($scope.UserName)
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