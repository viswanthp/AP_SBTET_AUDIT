define(['app'], function (app) {
    app.controller("IndustryInteractionsController", function ($scope, $localStorage, $state, AdminService, $filter) {


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

            $scope.GetIndustryInteractionByUserName($scope.UserName)
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
                $scope.CollegeJournal = base64file.replace(/^data:application\/pdf+;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "").replace(/^data:application\/doc+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace("data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,", "");

                $scope.CollegeJournal1 = canvas.toDataURL("application\/zip").replace(/^data:application\/zip+;base64,/, "");
                // ("image/png").replace(/^data:image\/[a-z]+;base64,/, "");


            }
            reader.onerror = function (e) {
                console.error("File could not be read! Code " + e.target.error.code);
            };

            //  }
        }





        $scope.GetIndustryInteractionById = function (CollegeId) {
            var GetIndustryInteractionById = AdminService.GetIndustryInteractionById(CollegeId);
            GetIndustryInteractionById.then(function (response) {
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
                $scope.CollegeIndustryInteractionID = res.Table[0].CollegeIndustryInteractionID
                $scope.IndustryName = res.Table[0].IndustryName
                $scope.NoofMOUS = res.Table[0].NoofMOUS
                $scope.ComitteMembers = res.Table[0].ComitteMembers
                $scope.SupportActivitiesfromIndustry = res.Table[0].SupportActivitiesfromIndustry
                $scope.MOUValidFromDate = res.Table[0].MOUValidFromDate
                $scope.MOUValidToDate = res.Table[0].MOUValidToDate
                $scope.Remarks = res.Table[0].Remarks

            },
                function (error) {
                    alert("error while loading Journals");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetIndustryInteractionByUserName = function (username) {
            var GetIndustryInteractionByUserName = AdminService.GetIndustryInteractionByUserName(username);
            GetIndustryInteractionByUserName.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetIndustryInteractionList = res.Table;

            },
                function (error) {
                    alert("error while loading Journals");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.ChangeInteractionStatus = function (CollegeIndustryInteractionID) {


            var objs = {
                "CollegeIndustryInteractionID": CollegeIndustryInteractionID,

            }

            var deletetestimonials = AdminService.ChangeInteractionStatus(objs);
            deletetestimonials.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetIndustryInteractionByUserName($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetIndustryInteractionByUserName($scope.UserName)
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



        $scope.AddIndustryInteraction = function () {
            if ($scope.IndustryName == null || $scope.IndustryName == "" || $scope.IndustryName == undefined) {
                alert("Please Enter Industry Name");
                return;
            }
            if ($scope.NoofMOUS == null || $scope.NoofMOUS == "" || $scope.NoofMOUS == undefined) {
                alert("Please Enter No of MOUS");
                return;
            }
            if ($scope.ComitteMembers == null || $scope.ComitteMembers == "" || $scope.ComitteMembers == undefined) {
                alert("Please Enter Comitte Members");
                return;
            }
            if ($scope.SupportActivitiesfromIndustry == null || $scope.SupportActivitiesfromIndustry == "" || $scope.SupportActivitiesfromIndustry == undefined) {
                alert("Please Enter Support Activities from Industry");
                return;
            }
            if ($scope.MOUValidFromDate == null || $scope.MOUValidFromDate == "" || $scope.MOUValidFromDate == undefined) {
                alert("Please Select MOU Valid From Date");
                return;
            }
            if ($scope.MOUValidToDate == null || $scope.MOUValidToDate == "" || $scope.MOUValidToDate == undefined) {
                alert("Please Select MOU Valid To Date");
                return;
            }
            if ($scope.Remarks == null || $scope.Remarks == "" || $scope.Remarks == undefined) {
                alert("Please Select MOU Valid To Date");
                return;
            }
            

            var obj = {

                "IndustryName": $scope.IndustryName,
                "NoofMOUS": $scope.NoofMOUS,
                "ComitteMembers": $scope.ComitteMembers,
                "SupportActivitiesfromIndustry": $scope.SupportActivitiesfromIndustry,
                "MOUValidFromDate": $scope.MOUValidFromDate,
                "MOUValidToDate": $scope.MOUValidToDate, 
                "Remarks": $scope.Remarks,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddIndustryInteraction(obj);
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
                    $scope.GetIndustryInteractionByUserName($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetIndustryInteractionByUserName($scope.UserName)
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
            $scope.CollegeIndustryInteractionID = "";
            $scope.IndustryName = "";
            $scope.NoofMOUS = "";
            $scope.ComitteMembers = "";
            $scope.SupportActivitiesfromIndustry = "";
            $scope.MOUValidFromDate = "";
            $scope.MOUValidToDate = "";
            $scope.Remarks = "";

        }

        $scope.UpdateIndustryInteraction = function (CollegeLabID) {
            if ($scope.IndustryName == null || $scope.IndustryName == "" || $scope.IndustryName == undefined) {
                alert("Please Enter Industry Name");
                return;
            }
            if ($scope.NoofMOUS == null || $scope.NoofMOUS == "" || $scope.NoofMOUS == undefined) {
                alert("Please Enter No of MOUS");
                return;
            }
            if ($scope.ComitteMembers == null || $scope.ComitteMembers == "" || $scope.ComitteMembers == undefined) {
                alert("Please Enter Comitte Members");
                return;
            }
            if ($scope.SupportActivitiesfromIndustry == null || $scope.SupportActivitiesfromIndustry == "" || $scope.SupportActivitiesfromIndustry == undefined) {
                alert("Please Enter Support Activities from Industry");
                return;
            }
            if ($scope.MOUValidFromDate == null || $scope.MOUValidFromDate == "" || $scope.MOUValidFromDate == undefined) {
                alert("Please Select MOU Valid From Date");
                return;
            }
            if ($scope.MOUValidToDate == null || $scope.MOUValidToDate == "" || $scope.MOUValidToDate == undefined) {
                alert("Please Select MOU Valid To Date");
                return;
            }
            if ($scope.Remarks == null || $scope.Remarks == "" || $scope.Remarks == undefined) {
                alert("Please Select MOU Valid To Date");
                return;
            }


            var obj = {
                "CollegeIndustryInteractionID": $scope.CollegeIndustryInteractionID,
                "IndustryName": $scope.IndustryName,
                "NoofMOUS": $scope.NoofMOUS,
                "ComitteMembers": $scope.ComitteMembers,
                "SupportActivitiesfromIndustry": $scope.SupportActivitiesfromIndustry,
                "MOUValidFromDate": $scope.MOUValidFromDate,
                "MOUValidToDate": $scope.MOUValidToDate,
                "Remarks": $scope.Remarks,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdateIndustryInteraction(obj);
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
                    $scope.GetIndustryInteractionByUserName($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetIndustryInteractionByUserName($scope.UserName)
                    $scope.ClearData()
                }

                else {
                    alert("Not Added")
                    $scope.GetIndustryInteractionByUserName($scope.UserName)
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