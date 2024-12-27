define(['app'], function (app) {
    app.controller("CollegeJournalController", function ($scope, $localStorage, $state, AdminService, $filter) {


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

            $scope.GetJournals()
            $scope.GetYears()
            // alert($scope.UserName)
            $scope.GetJournals($scope.UserName)
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
            var base64file ;
            var canvas = document.createElement("canvas");
            reader.onload = function (ele) {
                $('#PdfFile').attr('src', ele.target.result);
                base64file = ele.target.result;
                //$scope.QuestionPaperFile = base64file.replace(/^data:application\/pdf+;base64,/, "");;
                //$scope.QuestionPaperFile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                //  ("image/png").replace(/^data:image\/[a-z]+;base64,/, "");
                $scope.CollegeJournal = base64file.replace(/^data:application\/pdf+;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "").replace(/^data:application\/doc+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace("data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,", "");

                $scope.CollegeJournal1 = canvas.toDataURL("application\/zip").replace(/^data:application\/zip+;base64,/, "");
               // ("zip/rar").replace(/^data:image\/[a-z]+;base64,/, "");
                // ("image/png").replace(/^data:image\/[a-z]+;base64,/, "");


            }
            reader.onerror = function (e) {
                console.error("File could not be read! Code " + e.target.error.code);
            };

            //  }
        }

 



        $scope.GetJournalById = function (CollegeId) {
            var GetJournalById = AdminService.GetJournalById(CollegeId);
            GetJournalById.then(function (response) {
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
     
                $scope.JournalID = res.Table[0].JournalID
                $scope.PublishYear = res.Table[0].PublishYear
                $scope.Eidition = res.Table[0].Eidition
                $scope.MajorTopics = res.Table[0].MajorTopics
                $scope.JournalPath = res.Table[0].JournalPath




            },
                function (error) {
                    alert("error while loading Journals");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetJournals = function () {
            var GetJournals = AdminService.GetJournals();
            GetJournals.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetJournalsList = res.Table;

            },
                function (error) {
                    alert("error while loading Journals");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }



        $scope.GetYears = function () {
            var GetYears = AdminService.GetYears();
            GetYears.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetYearsList = res.Table;

            },
                function (error) {
                    alert("error while loading Years");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }
$scope.AddJournal = function () {
            if ($scope.PublishYear == null || $scope.PublishYear == "" || $scope.PublishYear == undefined) {
                alert("Please Select Publish Year");
                return;
            }

            if ($scope.Eidition == null || $scope.Eidition == "" || $scope.Eidition == undefined) {
                alert("Please Enter Eidition");
                return;
            }
            if ($scope.MajorTopics == null || $scope.MajorTopics == "" || $scope.MajorTopics == undefined) {
                alert("Please Enter College Address");
                return;
            }
            if ($scope.CollegeJournal1 == null || $scope.CollegeJournal1 == "" || $scope.CollegeJournal1 == undefined) {
                alert("Please Upload Journal");
                return;
            }

            var obj = {
                "PublishYear": $scope.PublishYear,
                "Eidition": $scope.Eidition,
                "MajorTopics": $scope.MajorTopics,
                "JournalPath": $scope.CollegeJournal,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddJournal(obj);
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
                    $scope.GetJournals()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetJournals()
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
          
            $scope.PublishYear = "";
            $scope.Eidition = "";
            $scope.MajorTopics = "";
            $scope.CollegeJournal1 = "";
        }

        $scope.UpdateJournal = function (CollegeLabID) {
            if ($scope.PublishYear == null || $scope.PublishYear == "" || $scope.PublishYear == undefined) {
                alert("Please Select Publish Year");
                return;
            }

            if ($scope.Eidition == null || $scope.Eidition == "" || $scope.Eidition == undefined) {
                alert("Please Enter Eidition");
                return;
            }
            if ($scope.MajorTopics == null || $scope.MajorTopics == "" || $scope.MajorTopics == undefined) {
                alert("Please Enter College Address");
                return;
            }
            if ($scope.CollegeJournal1 == null || $scope.CollegeJournal1 == "" || $scope.CollegeJournal1 == undefined) {
                alert("Please Upload Journal");
                return;
            }

            var obj = {
                "JournalID": $scope.JournalID,
                "PublishYear": $scope.PublishYear,
                "Eidition": $scope.Eidition,
                "MajorTopics": $scope.MajorTopics,
                "JournalPath": $scope.CollegeJournal1,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdateJournal(obj);
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
                    $scope.GetJournals($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetJournals($scope.UserName)
                    $scope.ClearData()
                }

                else {
                    alert("Not Added")
                    $scope.GetJournals($scope.UserName)
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