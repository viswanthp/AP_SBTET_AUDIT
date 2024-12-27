define(['app'], function (app) {
    app.controller("AdminFDPController", function ($scope, $state, AdminService, $filter, $localStorage) {

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

            $scope.AddDetails = '1';
            $scope.UpdateDetails = '0';
            $scope.AddDetails1 = '1';
            $scope.UpdateDetails1 = '0';
            $scope.GetAcademicYears();
            $scope.GetFDPCalenders();
            $scope.GetFDPAcademicYears();
            $scope.GetFDPTrainings()
            $scope.Levels = [{ "Id": "1", "Value": "State" }, { "Id": "2", "Value": "District" }]
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

        $scope.GetFDPAcademicYears = function () {
            var GetFDPAcademicYears = AdminService.GetFDPAcademicYears();
            GetFDPAcademicYears.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetFDPAcademicYearsList = res.Table;

            },
                function (error) {
                    alert("error while loading Academic Years");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetFDPProgramsByAcademicYear = function () {
            var GetFDPProgramsByAcademicYear = AdminService.GetFDPProgramsByAcademicYear($scope.TrainingAcademicYear);
            GetFDPProgramsByAcademicYear.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetFDPProgramsList = res.Table;

            },
                function (error) {
                    alert("error while loading Programs");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetFDPCalenders = function () {
            var GetFDPCalenders = AdminService.GetFDPCalenders();
            GetFDPCalenders.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetFDPCalendersList = res.Table;

            },
                function (error) {
                    alert("error while loading FDP Calenders");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetFDPTrainings = function () {
            var GetFDPTrainings = AdminService.GetFDPTrainings();
            GetFDPTrainings.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetFDPTrainingsList = res.Table;

            },
                function (error) {
                    alert("error while loading FDP Trainings");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetFDPTrainingById = function (CollegeId) {
            var GetFDPTrainingById = AdminService.GetFDPTrainingById(CollegeId);
            GetFDPTrainingById.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                $scope.AddDetails1 = '0';
                $scope.UpdateDetails1 = '1';
                $scope.AddData = true;

                $scope.TrainingAcademicYear = res.Table[0].AcademicYearID
                $scope.GetFDPProgramsByAcademicYear()
                $scope.TrainingProgram = res.Table[0].FDPID
                $scope.ActualStrength = res.Table[0].ActualStrength
                $scope.ConductedFrom = moment(res.Table[0].ConductedFrom).format("DD-MM-YYYY")
                $scope.ConductedTo = moment(res.Table[0].ConductedTo).format("DD-MM-YYYY")

                $scope.Remarks = res.Table[0].Remarks

                $scope.FDPDetailsID = res.Table[0].FDPDetailsID

            },
                function (error) {
                    alert("error while loading FDP Training");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


        $scope.GetFDPCalenderById = function (CollegeId) {
            var GetFDPCalenderById = AdminService.GetFDPCalenderById(CollegeId);
            GetFDPCalenderById.then(function (response) {
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
                $scope.AddData = true;

                $scope.AcademicYear = res.Table[0].AcademicYearID
                $scope.ProgramName = res.Table[0].ProgramName
                $scope.Venue = res.Table[0].Venue
                $scope.PlannedStrength = res.Table[0].PlannedStrength
                $scope.OfferedBy = res.Table[0].OfferedBy
                $scope.MentorName = res.Table[0].MentorName
                $scope.PlannedTo = res.Table[0].PlannedTo
                $scope.PlannedFrom = res.Table[0].PlannedFrom

                $scope.FDPID = res.Table[0].FDPID

            },
                function (error) {
                    alert("error while loading FDPCalender");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.SetEndDate = function (StartDate) {

            if (StartDate !== null && StartDate !== undefined) {
                var d = StartDate.toISOString().slice(0, 10).split('-');
                d[2] = parseInt(d[2]);
                // d[2] = d[2] + 2; // offset time zone recovery
                var day = d[2];
                if (d[0].length === 4) {
                    var Start_date = d[0] + "-" + d[1] + "-" + d[2];
                }
            }
            //var date = new Date(Start_date);
            var indiaTime = new Date(StartDate).toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
            indiaTime = new Date(indiaTime);

            $scope.tomorrow = indiaTime.toLocaleString();
            //var time = indiaTime.toLocaleTimeString();
            //console.log(time);


            var tomorrow = new Date($scope.tomorrow);
            tomorrow.setDate(tomorrow.getDate() + 1);

            var dates = new Date(tomorrow.toLocaleString());
            //var time = new Date(tomorrow.toLocaleTimeString())
            //console.log(time)
            month = '' + (dates.getMonth() + 1);
            day = '' + dates.getDate();
            year = dates.getFullYear();


            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            $scope.endDisable = false;
            $scope.enD = [year, month, day].join('-');

            document.getElementById("datetimepicker2").setAttribute("min", $scope.enD);

        };



        $scope.AddFDPTraining = function () {
            if ($scope.TrainingAcademicYear == null || $scope.TrainingAcademicYear == "" || $scope.TrainingAcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.TrainingProgram == null || $scope.TrainingProgram == "" || $scope.TrainingProgram == undefined) {
                alert("Please Select Program Name");
                return;
            }
            if ($scope.ActualStrength == null || $scope.ActualStrength == "" || $scope.ActualStrength == undefined) {
                alert("Please Enter ActualStrength");
                return;
            }

            if ($scope.ConductedFrom == null || $scope.ConductedFrom == "" || $scope.ConductedFrom == undefined) {
                alert("Please Enter Planned From");
                return;
            }
            if ($scope.ConductedTo == null || $scope.ConductedTo == "" || $scope.ConductedTo == undefined) {
                alert("Please select Planned To");
                return;
            }
            if ($scope.Remarks == null || $scope.Remarks == "" || $scope.Remarks == undefined) {
                alert("Please Enter Remarks");
                return;
            }
            var obj = {
                "FDPID": $scope.TrainingProgram,
                "ActualStrength": $scope.ActualStrength,
                "ConductedFrom": moment($scope.ConductedFrom).format("DD-MM-YYYY"),
                "ConductedTo": moment($scope.ConductedTo).format("DD-MM-YYYY"),
                "Remarks": $scope.Remarks,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var AddFDPTraining = AdminService.AddFDPTraining(obj);
            AddFDPTraining.then(function (response) {
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
                    $scope.GetFDPTrainings($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetFDPTrainings($scope.UserName)
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


        $scope.UpdateFDPTraining = function () {
            if ($scope.TrainingAcademicYear == null || $scope.TrainingAcademicYear == "" || $scope.TrainingAcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.TrainingProgram == null || $scope.TrainingProgram == "" || $scope.TrainingProgram == undefined) {
                alert("Please Enter Program Name");
                return;
            }
            if ($scope.ActualStrength == null || $scope.ActualStrength == "" || $scope.ActualStrength == undefined) {
                alert("Please Enter ActualStrength");
                return;
            }

            if ($scope.ConductedFrom == null || $scope.ConductedFrom == "" || $scope.ConductedFrom == undefined) {
                alert("Please Enter Conducted From");
                return;
            }
            if ($scope.ConductedTo == null || $scope.ConductedTo == "" || $scope.ConductedTo == undefined) {
                alert("Please select Conducted To");
                return;
            }
            if ($scope.Remarks == null || $scope.Remarks == "" || $scope.Remarks == undefined) {
                alert("Please Enter Remarks");
                return;
            }

            var obj = {
                "FDPDetailsID": $scope.FDPDetailsID,
                "FDPID": $scope.TrainingProgram,
                "ActualStrength": $scope.ActualStrength,
                "ConductedFrom": moment($scope.ConductedFrom).format("DD-MM-YYYY"),
                "ConductedTo": moment($scope.ConductedTo).format("DD-MM-YYYY"),
                "Remarks": $scope.Remarks,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var AddFDPTraining = AdminService.UpdateFDPTraining(obj);
            AddFDPTraining.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    $scope.AddDetails1 = '0';
                    $scope.UpdateDetails1 = '1';
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetFDPTrainings($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetFDPTrainings($scope.UserName)
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


        $scope.AddFDPCalender = function () {
            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.ProgramName == null || $scope.ProgramName == "" || $scope.ProgramName == undefined) {
                alert("Please Enter Program Name");
                return;
            }
            if ($scope.Venue == null || $scope.Venue == "" || $scope.Venue == undefined) {
                alert("Please Enter Venue");
                return;
            }
            if ($scope.PlannedStrength == null || $scope.PlannedStrength == "" || $scope.PlannedStrength == undefined) {
                alert("Please Enter Planned Strength");
                return;
            }
            if ($scope.OfferedBy == null || $scope.OfferedBy == "" || $scope.OfferedBy == undefined) {
                alert("Please Enter OfferedBy");
                return;
            }
            if ($scope.OfferedBy == null || $scope.OfferedBy == "" || $scope.OfferedBy == undefined) {
                alert("Please Enter OfferedBy");
                return;
            }

            if ($scope.PlannedFrom == null || $scope.PlannedFrom == "" || $scope.PlannedFrom == undefined) {
                alert("Please Enter Planned From");
                return;
            }
            if ($scope.PlannedTo == null || $scope.PlannedTo == "" || $scope.PlannedTo == undefined) {
                alert("Please select Planned To");
                return;
            }

            var obj = {
                "AcademicYearID": $scope.AcademicYear,
                "ProgramName": $scope.ProgramName,
                "Venue": $scope.Venue,
                "PlannedStrength": $scope.PlannedStrength,
                "OfferedBy": $scope.OfferedBy,
                "MentorName": $scope.MentorName,
                "PlannedFrom": moment($scope.PlannedFrom).format("DD-MM-YYYY"),
                "PlannedTo": moment($scope.PlannedTo).format("DD-MM-YYYY"),
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var AddFDPCalender = AdminService.AddFDPCalender(obj);
            AddFDPCalender.then(function (response) {
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
                    $scope.GetFDPCalenders($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetFDPCalenders($scope.UserName)
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

        $scope.UpdateFDPCalender = function () {
            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.ProgramName == null || $scope.ProgramName == "" || $scope.ProgramName == undefined) {
                alert("Please Enter Program Name");
                return;
            }
            if ($scope.Venue == null || $scope.Venue == "" || $scope.Venue == undefined) {
                alert("Please Enter Venue");
                return;
            }
            if ($scope.PlannedStrength == null || $scope.PlannedStrength == "" || $scope.PlannedStrength == undefined) {
                alert("Please Enter Planned Strength");
                return;
            }
            if ($scope.OfferedBy == null || $scope.OfferedBy == "" || $scope.OfferedBy == undefined) {
                alert("Please Enter OfferedBy");
                return;
            }

            if ($scope.PlannedFrom == null || $scope.PlannedFrom == "" || $scope.PlannedFrom == undefined) {
                alert("Please Enter Planned From");
                return;
            }
            if ($scope.PlannedTo == null || $scope.PlannedTo == "" || $scope.PlannedTo == undefined) {
                alert("Please select Planned To");
                return;
            }

            var obj = {
                "FDPID": $scope.FDPID,
                "AcademicYearID": $scope.AcademicYear,
                "ProgramName": $scope.ProgramName,
                "Venue": $scope.Venue,
                "PlannedStrength": $scope.PlannedStrength,
                "OfferedBy": $scope.OfferedBy,
                "MentorName": $scope.MentorName,
                "PlannedFrom": moment($scope.PlannedFrom).format("DD-MM-YYYY"),
                "PlannedTo": moment($scope.PlannedTo).format("DD-MM-YYYY"),
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var AddFDPCalender = AdminService.UpdateFDPCalender(obj);
            AddFDPCalender.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.AddDetails = '0';
                    $scope.UpdateDetails = '1';
                    $scope.ClearData()
                    $scope.GetFDPCalenders($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetFDPCalenders($scope.UserName)
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
            $scope.ProgramName = "";
            $scope.Venue = "";
            $scope.PlannedStrength = "";
            $scope.OfferedBy = "";
            $scope.MentorName = "";
            $scope.PlannedFrom = "";
            $scope.PlannedTo = "";
            $scope.FDPID = "";
            $scope.District = "";
            $scope.TrainingAcademicYear = "";
            // $scope.GetFDPProgramsByAcademicYear()
            $scope.TrainingProgram = "";
            $scope.ActualStrength = "";
            $scope.ConductedFrom = "";
            $scope.ConductedTo = "";

            $scope.Remarks = "";
        }


    })
})