define(['app'], function (app) {
    app.controller("AcademicCalenderSetingsController", function ($scope, $localStorage, $state, AdminService, $filter) {


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

            $scope.GetAcademicCalender()
            $scope.GetAcademicYears()
            // alert($scope.UserName)
            $scope.GetAcademicCalender($scope.UserName)
            $scope.AddDetails = '1';
            $scope.UpdateDetails = '0';
        }

        $scope.uploadPdf = function () {
            var input = document.getElementById("PdfFile");
            var fileSize = input.files[0].size;
            //if (fileSize > 1000000) {
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

                $scope.AcademicCalenderID = res.Table[0].AcademicCalenderID
                $scope.AcademicYear = res.Table[0].AcademicYear
                $scope.Eidition = res.Table[0].Eidition
                $scope.MajorTopics = res.Table[0].MajorTopics
                $scope.AcademicCalenderPath = res.Table[0].AcademicCalenderPath




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

            $scope.AcademicYear = "";
            $scope.Eidition = "";
            $scope.MajorTopics = "";
            $scope.CollegeAcademicCalender1 = "";
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
                    $scope.GetAcademicCalender($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAcademicCalender($scope.UserName)
                    $scope.ClearData()
                }

                else {
                    alert("Not Added")
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

    })
})