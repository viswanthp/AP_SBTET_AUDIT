define(['app'], function (app) {
    app.controller("AcademicCalenderSetingsController", function ($scope, $localStorage, $state, AdminService, $filter) {


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
            $scope.UserName = authData.UserName;
            $scope.edit = true;
            //  $scope.GetCollegeTypes()

            $scope.GetAcademicCalender()
            $scope.GetAcademicYears()
            // alert($scope.UserName)
            $scope.GetAcademicCalender($scope.UserName)
            $scope.GetAllAcademicCalenders()
            $scope.AddDetails1 = '1';
            $scope.UpdateDetails1 = '0';
            $scope.AddDetails2 = '1';
            $scope.UpdateDetails2 = '0';
            $scope.AddDetails3 = '1';
            $scope.UpdateDetails3 = '0';
            $scope.AddDetails4 = '1';
            $scope.UpdateDetails4 = '0';
            $scope.AddDetails5 = '1';
            $scope.UpdateDetails5 = '0';
            $scope.AddDetails6 = '1';
            $scope.AddDetails6 = '1';
            $scope.UpdateDetails6 = '0';
            $scope.AddDetails7 = '1';
            $scope.UpdateDetails7 = '0';
        }

        $scope.uploadPdf = function () {
            var input = document.getElementById("PdfFile");
            var fileSize = input.files[0].size;
            //if (fileSize > 100000) {
            //    alert("File Size must be less than 1 MB")
            //}
            // if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            $scope.FileName = input.files[0].name
            var base64file;
            var canvas = document.createElement("canvas");
            reader.onload = function (ele) {
                $('#PdfFile').attr('src', ele.target.result);
                base64file = ele.target.result;
                //$scope.QuestionPaperFile = base64file.replace(/^data:application\/pdf+;base64,/, "");;
                //$scope.QuestionPaperFile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                //  ("image/png").replace(/^data:image\/[a-z]+;base64,/, "");
                $scope.CollegeAcademicCalender = base64file.replace(/^data:application\/pdf+;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "").replace(/^data:application\/doc+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace("data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,", "");

                $scope.CollegeAcademicCalender1 = canvas.toDataURL("application\/zip").replace(/^data:application\/zip+;base64,/, "");
                // ("zip/rar").replace(/^data:image\/[a-z]+;base64,/, "");
                // ("image/png").replace(/^data:image\/[a-z]+;base64,/, "");


            }
            reader.onerror = function (e) {
                console.error("File could not be read! Code " + e.target.error.code);
            };

            //  }
        }





        $scope.GetAcademicCalenderById = function (CollegeId) {
           
            var GetAcademicCalenderById = AdminService.GetAcademicCalenderById(CollegeId);
            GetAcademicCalenderById.then(function (response) {
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

                $scope.AcademicCalenderID = res.Table[0].CalendarID
                $scope.AcademicYear = res.Table[0].CalendarID
                $scope.Name = res.Table[0].CalendarName
                //$scope.MajorTopics = res.Table[0].MajorTopics
                $scope.AcademicCalenderPath = res.Table[0].CalendarName




            },
                function (error) {
                    alert("error while loading AcademicCalenders");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }



        $scope.GetAcademicCalender = function () {
            var GetAcademicCalender = AdminService.GetAcademicCalenders();
            GetAcademicCalender.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetAcademicCalenderList = res.Table;

                console.log($scope.GetAcademicCalenderList)

            },
                function (error) {
                    alert("error while loading AcademicCalenders");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        
        $scope.GetAllAcademicCalenders = function () {
            var GetAllAcademicCalenders = AdminService.GetAllAcademicCalenders();
            GetAllAcademicCalenders.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                var data = res;
                console.log(data)
                $scope.DiplomaAC = data.Table
                $scope.DPharmacyAC = data.Table1
                $scope.HolidaysAC = data.Table2
                $scope.IndTrainingAC = data.Table3
                $scope.CalendarNotesAC = data.Table4
                $scope.UnitTestsAC = data.Table5
                $scope.ActivitiesAC = data.Table6
             
            },
                function (error) {
                    alert("error while loading AcademicCalenders");
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
                    alert("error while loading Years");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }
        $scope.AddAcademicCalender = function () {
            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }

            
            if ($scope.CollegeAcademicCalender == null || $scope.CollegeAcademicCalender == "" || $scope.CollegeAcademicCalender== undefined) {
                alert("Please Upload AcademicCalender");
                return;
            }

            var obj = {
                "CalendarName": $scope.Name,
                "CalendarDownloadPath": $scope.CollegeAcademicCalender,
                "UserName": $scope.UserName,
                "AcademicYearID": $scope.AcademicYear
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddAcademicCalender(obj);
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
                    $scope.GetAcademicCalender()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetAcademicCalender()
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

          //  $scope.AcademicYear = "";

            $scope.Courses = "";
            $scope.CommencementofClassWork = "";
            $scope.LastWorkingDay = "";
            $scope.CommencementofExaminations = "";
            $scope.AcademicCalenderID = "";

            $scope.CollegeAcademicCalender1 = "";
            $scope.Eidition = "";
            $scope.MajorTopics = "";
            $scope.CollegeAcademicCalender1 = "";

            $scope.PCourses = "";
            $scope.PCommencementofClassWork = "";
            $scope.PLastWorkingDay = "";
            $scope.PCommencementofExaminations = "";

            $scope.HCourses = "";
            $scope.HolidaysFrom = "";
            $scope.HolidaysTo = "";
            $scope.IRemarks = "";
            $scope.CRemarks = "";
         
             $scope.UCourses = "";
            $scope.UnitTest = "";
           $scope.UnitTestFrom = "";
            $scope.UnitTestTo = "";
           $scope.Subject = "";
            $scope.CARemarks = "";
        }

        $scope.UpdateAcademicCalender = function (CollegeLabID) {
            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }


            if ($scope.CollegeAcademicCalender1 == null || $scope.CollegeAcademicCalender1 == "" || $scope.CollegeAcademicCalender1 == undefined) {
                alert("Please Upload AcademicCalender");
                return;
            }

            var obj = {
                "AcademicCalenderID": $scope.AcademicCalenderID,
                "AcademicYear": $scope.AcademicYear,            
                "AcademicCalenderPath": $scope.CollegeAcademicCalender1,
                "UserName": $scope.UserName,
                "AcademicYearID": $scope.AcademicYear
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdateAcademicCalender(obj);
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
                    $scope.GetAllAcademicCalenders()
                    $scope.GetAcademicCalender($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                   

                    $scope.ClearData()
                    $scope.GetAllAcademicCalenders()
                    $scope.GetAcademicCalender($scope.UserName)

                }

                else {
                    alert("Not Added")
                    $scope.GetAllAcademicCalenders()

                    $scope.GetAcademicCalender($scope.UserName)
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }



        $scope.AddUpdateDiplomaCalender = function (DataType) {
            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.Courses == null || $scope.Courses == "" || $scope.Courses == undefined) {
                alert("Please Enter Course Name");
                return;
            }
            if ($scope.CommencementofClassWork == null || $scope.CommencementofClassWork == "" || $scope.CommencementofClassWork == undefined) {
                alert("Please Enter Commencement of ClassWork");
                return;
            }
            if ($scope.LastWorkingDay == null || $scope.LastWorkingDay == "" || $scope.LastWorkingDay == undefined) {
                alert("Please Enter Last Working Day");
                return;
            }
            if ($scope.CommencementofExaminations == null || $scope.CommencementofExaminations == "" || $scope.CommencementofExaminations == undefined) {
                alert("Please Enter Commencement of Examinations");
                return;
            }

           
            if ($scope.UpdateDetails1 == '1') {
                $scope.ACDiplomaID
            } else {
                $scope.ACDiplomaID=null
            }
            var obj = {
                "AcademicYearID": $scope.AcademicYear,
                "Courses": $scope.Courses,
                "CommencementofClassWork": $scope.CommencementofClassWork,
                "LastWorkingDay": $scope.LastWorkingDay,
                "CommencementofExaminations": $scope.CommencementofExaminations,
                "UserName": $scope.UserName,
                "DataType": DataType,
                "ACDiplomaID": $scope.ACDiplomaID
               
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddUpdateDiplomaCalender(obj);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.GetAllAcademicCalenders()

                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()

                    $scope.ClearData()
                    $scope.GetAcademicCalender()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()

                    $scope.ClearData()
                    $scope.GetAcademicCalender()
                }

                else {
                    alert("Not Added")
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }


        $scope.AddUpdateDpharmCalender = function (DataType) {
            if ($scope.PAcademicYear == null || $scope.PAcademicYear == "" || $scope.PAcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.PCourses == null || $scope.PCourses == "" || $scope.PCourses == undefined) {
                alert("Please Enter Course Name");
                return;
            }
            if ($scope.PCommencementofClassWork == null || $scope.PCommencementofClassWork == "" || $scope.PCommencementofClassWork == undefined) {
                alert("Please Enter Commencement of ClassWork");
                return;
            }
            if ($scope.PLastWorkingDay == null || $scope.PLastWorkingDay == "" || $scope.PLastWorkingDay == undefined) {
                alert("Please Enter Last Working Day");
                return;
            }
            if ($scope.PCommencementofExaminations == null || $scope.PCommencementofExaminations == "" || $scope.PCommencementofExaminations == undefined) {
                alert("Please Enter Commencement of Examinations");
                return;
            }

            if ($scope.UpdateDetails2 == '1') {
                $scope.ACDPharmacyID
            } else {
                $scope.ACDPharmacyID = null
            }
            var obj = {
                "AcademicYearID": $scope.PAcademicYear,
                "Courses": $scope.PCourses,
                "CommencementofClassWork": $scope.PCommencementofClassWork,
                "LastWorkingDay": $scope.PLastWorkingDay,
                "CommencementofExaminations": $scope.PCommencementofExaminations,
                "UserName": $scope.UserName,
                "DataType": DataType,
                "ACDPharmacyID": $scope.ACDPharmacyID

            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddUpdateDpharmCalender(obj);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                    $scope.GetAcademicCalender()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                    $scope.GetAcademicCalender()
                }

                else {
                    alert("Not Added")
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }
        $scope.AddUpdateHolidaysCalender = function (DataType) {
            if ($scope.HAcademicYear == null || $scope.HAcademicYear == "" || $scope.HAcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.HCourses == null || $scope.HCourses == "" || $scope.HCourses == undefined) {
                alert("Please Enter Course Name");
                return;
            }
            if ($scope.HolidaysFrom == null || $scope.HolidaysFrom == "" || $scope.HolidaysFrom == undefined) {
                alert("Please Enter Holiday From");
                return;
            }
            if ($scope.HolidaysTo == null || $scope.HolidaysTo == "" || $scope.HolidaysTo == undefined) {
                alert("Please Enter Holiday To");
                return;
            }
            if ($scope.UpdateDetails3 == '1') {
                $scope.ACHolidaysID
            } else {
                $scope.ACHolidaysID = null
            }
            var obj = {
                "AcademicYearID": $scope.HAcademicYear,
                "Courses": $scope.HCourses,
                "HolidayFrom": $scope.HolidaysFrom,
                "HolidayTo": $scope.HolidaysTo,
                "UserName": $scope.UserName,
                "DataType": DataType,
                "ACHolidaysID": $scope.ACHolidaysID
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddUpdateHolidaysCalender(obj);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                    $scope.GetAcademicCalender()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                    $scope.GetAcademicCalender()
                }

                else {
                    alert("Not Added")
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }


  
        $scope.AddUpdateIndustryCalender = function (DataType) {
            if ($scope.IAcademicYear == null || $scope.IAcademicYear == "" || $scope.IAcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.IRemarks == null || $scope.IRemarks == "" || $scope.IRemarks == undefined) {
                alert("Please Enter Remarks");
                return;
            }
            if ($scope.UpdateDetails4 == '1') {
                $scope.ACIndTrainingID
            } else {
                $scope.ACIndTrainingID = null
            }
            var obj = {
                "AcademicYearID": $scope.IAcademicYear,
                "Remarks": $scope.IRemarks,
                "UserName": $scope.UserName,
                "DataType": DataType,
                "ACIndTrainingID": $scope.ACIndTrainingID
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddUpdateIndustryCalender(obj);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                    $scope.GetAcademicCalender()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                    $scope.GetAcademicCalender()
                }

                else {
                    alert("Not Added")
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }


        $scope.AddUpdateCalendarNotes = function (DataType) {
            if ($scope.CAcademicYear == null || $scope.CAcademicYear == "" || $scope.CAcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.CRemarks == null || $scope.CRemarks == "" || $scope.CRemarks == undefined) {
                alert("Please Enter Remarks");
                return;
            }
            if ($scope.UpdateDetails5 == '1') {
                $scope.ACNotesID
            } else {
                $scope.ACNotesID = null
            }


            var obj = {
                "AcademicYearID": $scope.CAcademicYear,
                "Remarks": $scope.CRemarks,
                "UserName": $scope.UserName,
                "DataType": DataType,
                "ACNotesID": $scope.ACNotesID
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddUpdateCalendarNotes(obj);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                    $scope.GetAcademicCalender()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                    $scope.GetAcademicCalender()
                }

                else {
                    alert("Not Added")
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }

        $scope.AddUpdateUnitTest = function (DataType) {
            if ($scope.UAcademicYear == null || $scope.UAcademicYear == "" || $scope.UAcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.UCourses == null || $scope.UCourses == "" || $scope.UCourses == undefined) {
                alert("Please Enter Course Name");
                return;
            }
            if ($scope.UnitTest == null || $scope.UnitTest == "" || $scope.UnitTest == undefined) {
                alert("Please Enter Unit Test");
                return;
            }
            if ($scope.UnitTestFrom == null || $scope.UnitTestFrom == "" || $scope.UnitTestFrom == undefined) {
                alert("Please Enter Unit Test From");
                return;
            }
            if ($scope.UnitTestTo == null || $scope.UnitTestTo == "" || $scope.UnitTestTo == undefined) {
                alert("Please Enter Unit Test To");
                return;
            }

            if ($scope.UpdateDetails6 == '1') {
                $scope.ACUnitTestsID
            } else {
                $scope.ACUnitTestsID = null
            }
            var obj = {
                "AcademicYearID": $scope.UAcademicYear,
                "Courses": $scope.UCourses,
                "UnitTest": $scope.UnitTest,
                "UnitTestFrom": $scope.UnitTestFrom,
                "UnitTestTo": $scope.UnitTestTo,
                "UserName": $scope.UserName,
                "DataType": DataType,
                "ACUnitTestsID": $scope.ACUnitTestsID
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddUpdateUnitTest(obj);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                    $scope.GetAcademicCalender()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                    $scope.GetAcademicCalender()
                }

                else {
                    alert("Not Added")
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }

        $scope.AddUpdateCalenderActivities = function (DataType) {
            if ($scope.CAAcademicYear == null || $scope.CAAcademicYear == "" || $scope.CAAcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.Subject == null || $scope.Subject == "" || $scope.Subject == undefined) {
                alert("Please Enter Activity Subject");
                return;
            }
            if ($scope.CARemarks == null || $scope.CARemarks == "" || $scope.CARemarks == undefined) {
                alert("Please Enter Remarks");
                return;
            }
            if ($scope.UpdateDetails7 == '1') {
                $scope.ACActivitiesID
            } else {
                $scope.ACActivitiesID = null
            }

            var obj = {
                "AcademicYearID": $scope.CAAcademicYear,
                "ActivitySubject": $scope.Subject,
                "Remarks": $scope.CARemarks,
                "UserName": $scope.UserName,
                "DataType": DataType,
                "ACActivitiesID": $scope.ACActivitiesID
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddUpdateCalenderActivities(obj);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                    $scope.GetAcademicCalender()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                    $scope.GetAcademicCalender()
                }

                else {
                    alert("Not Added")
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }

        $scope.EditDiplomaAC = function (CollegeId) {
            var EditDiplomaAC = AdminService.EditDiplomaAC(CollegeId);
            EditDiplomaAC.then(function (response) {
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
                // $scope.GetCollegeLabsList = res.Table;
                $scope.ACDiplomaID = res.Table[0].ACDiplomaID
                $scope.AcademicYear = res.Table[0].AcademicYearID
                $scope.Courses = res.Table[0].Courses
                $scope.CommencementofClassWork = res.Table[0].CommencementofClassWork
                $scope.LastWorkingDay = res.Table[0].LastWorkingDay
                $scope.CommencementofExaminations = res.Table[0].CommencementofExaminations
            },
                function (error) {
                    alert("error while loading Diploma Academic Calenders");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.EditDPharmAC = function (CollegeId) {
            var EditDPharmAC = AdminService.EditDPharmAC(CollegeId);
            EditDPharmAC.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                $scope.AddDetails2 = '0';
                $scope.UpdateDetails2 = '1';
                // $scope.GetCollegeLabsList = res.Table;
                $scope.ACDPharmacyID = res.Table[0].ACDPharmacyID
                $scope.AcademicYear = res.Table[0].AcademicYearID
                $scope.Courses = res.Table[0].Courses
                $scope.CommencementofClassWork = res.Table[0].CommencementofClassWork
                $scope.LastWorkingDay = res.Table[0].LastWorkingDay
                $scope.CommencementofExaminations = res.Table[0].CommencementofExaminations
            },
                function (error) {
                    alert("error while loading Dpharm Academic Calenders");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.EditHolidays = function (CollegeId) {
            var EditHolidays = AdminService.EditHolidays(CollegeId);
            EditHolidays.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                $scope.AddDetails3 = '0';
                $scope.UpdateDetails3 = '1';
                // $scope.GetCollegeLabsList = res.Table;
                $scope.ACHolidaysID = res.Table[0].ACHolidaysID
                $scope.AcademicYear = res.Table[0].AcademicYearID
                $scope.Courses = res.Table[0].Courses
                $scope.HolidayFrom = res.Table[0].HolidayFrom
                $scope.HolidayTo = res.Table[0].LastWorkingDay
            },
                function (error) {
                    alert("error while loading Holidays Calenders");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.EditIndustrialTraining = function (CollegeId) {
            var EditIndustrialTraining = AdminService.EditIndustrialTraining(CollegeId);
            EditIndustrialTraining.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                $scope.AddDetails4 = '0';
                $scope.UpdateDetails4 = '1';
                // $scope.GetCollegeLabsList = res.Table;
                $scope.ACIndTrainingID = res.Table[0].ACIndTrainingID
                $scope.AcademicYear = res.Table[0].AcademicYearID
                $scope.Courses = res.Table[0].Courses
                $scope.HolidayFrom = res.Table[0].HolidayFrom
                $scope.HolidayTo = res.Table[0].LastWorkingDay
            },
                function (error) {
                    alert("error while loading Industrial Training Calenders");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.EditNotes = function (CollegeId) {
            var EditNotes = AdminService.EditNotes(CollegeId);
            EditNotes.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                $scope.AddDetails5 = '0';
                $scope.UpdateDetails5 = '1';
                // $scope.GetCollegeLabsList = res.Table;
                $scope.ACNotesID = res.Table[0].ACNotesID
                $scope.AcademicYear = res.Table[0].AcademicYearID
                $scope.Remarks = res.Table[0].Remarks
            },
                function (error) {
                    alert("error while loading Industrial Training Calenders");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.EditUnitTests = function (CollegeId) {
            var EditUnitTests = AdminService.EditUnitTests(CollegeId);
            EditUnitTests.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                $scope.AddDetails6 = '0';
                $scope.UpdateDetails6 = '1';
                // $scope.GetCollegeLabsList = res.Table;
                $scope.ACUnitTestsID = res.Table[0].ACUnitTestsID
                $scope.AcademicYear = res.Table[0].AcademicYearID
                $scope.Courses = res.Table[0].Courses
                $scope.UnitTest = res.Table[0].UnitTest
                $scope.UnitTestFrom = res.Table[0].UnitTestFrom
                $scope.UnitTestTo = res.Table[0].UnitTestTo
            },
                function (error) {
                    alert("error while loading Industrial Training Calenders");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.EditActivities = function (CollegeId) {
            var EditActivities = AdminService.EditActivities(CollegeId);
            EditActivities.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                $scope.AddDetails7 = '0';
                $scope.UpdateDetails7 = '1';
                // $scope.GetCollegeLabsList = res.Table;
                $scope.ACActivitiesID = res.Table[0].ACActivitiesID
                $scope.AcademicYear = res.Table[0].AcademicYearID
                $scope.Remarks = res.Table[0].Remarks
                $scope.ActivitySubject = res.Table[0].ActivitySubject
            },
                function (error) {
                    alert("error while loading Activities");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


        $scope.deleteDiplomaAC = function (ACDiplomaID) {
            var obj = {
                datatype:1,
                ACDiplomaID: ACDiplomaID,
                ACDPharmacyID: '',
                ACHolidaysID: '',
                ACIndTrainingID: '',
                ACNotesID: '',
                ACUnitTestsID: '',
                ACActivitiesID: ''
            }
            var deletediplomaac = AdminService.DeleteDiplomaAC(obj);
            deletediplomaac.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                }

                else {
                    alert("Not Added")
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })

        }


        $scope.deleteDPharmAC = function (ACDPharmacyID) {
            var obj = {
                datatype: 2,
                ACDiplomaID: '',
                ACDPharmacyID: ACDPharmacyID,
                ACHolidaysID: '',
                ACIndTrainingID: '',
                ACNotesID: '',
                ACUnitTestsID: '',
                ACActivitiesID: ''
            }           
            var deletediplomaac = AdminService.DeleteDPharmAC(obj);
            deletediplomaac.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                }

                else {
                    alert("Not Added")
                    $scope.GetAllAcademicCalenders()
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })

        }

        $scope.deleteHolidays = function (ACHolidaysID) {
            var obj = {
                datatype: 3,
                ACDiplomaID: '',
                ACDPharmacyID: '',
                ACHolidaysID: ACHolidaysID,
                ACIndTrainingID: '',
                ACNotesID: '',
                ACUnitTestsID: '',
                ACActivitiesID: ''
            }  
            var deletediplomaac = AdminService.DeleteHolidays(obj);
            deletediplomaac.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
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


        $scope.deleteIndustrialTraining = function (ACIndTrainingID) {
            var obj = {
                datatype: 4,
                ACDiplomaID: '',
                ACDPharmacyID: '',
                ACHolidaysID: '',
                ACIndTrainingID: ACIndTrainingID,
                ACNotesID: '',
                ACUnitTestsID: '',
                ACActivitiesID: ''
            } 
            var deletediplomaac = AdminService.DeleteIndustrialTraining(obj);
            deletediplomaac.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
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

        $scope.deleteNotes = function (ACNotesID) {
            var obj = {
                datatype: 5,
                ACDiplomaID: '',
                ACDPharmacyID: '',
                ACHolidaysID: '',
                ACIndTrainingID: '',
                ACNotesID: ACNotesID,
                ACUnitTestsID: '',
                ACActivitiesID: ''
            } 
            var deletediplomaac = AdminService.DeleteNotes(obj);
            deletediplomaac.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
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

        $scope.deleteUnitTests = function (ACUnitTestsID) {
            var obj = {
                datatype: 6,
                ACDiplomaID: '',
                ACDPharmacyID: '',
                ACHolidaysID: '',
                ACIndTrainingID: '',
                ACNotesID: '',
                ACUnitTestsID: ACUnitTestsID,
                ACActivitiesID: ''
            } 
            var deletediplomaac = AdminService.DeleteUnitTests(obj);
            deletediplomaac.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
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


        $scope.deleteActivities = function (ACActivitiesID) {
            var obj = {
                datatype: 7,
                ACDiplomaID: '',
                ACDPharmacyID: '',
                ACHolidaysID: '',
                ACIndTrainingID: '',
                ACNotesID: '',
                ACUnitTestsID: '',
                ACActivitiesID: ACActivitiesID
            } 
            var deletediplomaac = AdminService.DeleteActivities(obj);
            deletediplomaac.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllAcademicCalenders()
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



    })
})