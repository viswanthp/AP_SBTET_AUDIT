define(['app'], function (app) {
    app.controller("QuestionPapersSettingsController", function ($scope, $state, AdminService, $filter, $localStorage, $uibModal) {

        const $ctrl = this;
        $ctrl.$onInit = () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            $scope.GetBranchs()
            $scope.GetSchemes()
            $scope.GetExamMonthYears()
            $scope.imgLabel = true;

        }

        $scope.ChangeFile = function () {
            $scope.imgLabel = false;
        }
        $scope.GoBack = function () {
            $state.go('Dashboard.SubDashboard')
        }

        function getExtension(filename) {
            var parts = filename.split('.');
            return parts[parts.length - 1];
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
                $scope.QuestionPaperFile = base64file.replace(/^data:application\/pdf+;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "").replace(/^data:application\/doc+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace("data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,", "");

                $scope.QuestionPaperFile1 = canvas.toDataURL("application\/zip").replace(/^data:application\/zip+;base64,/, "");
                // ("image/png").replace(/^data:image\/[a-z]+;base64,/, "");


            }
            reader.onerror = function (e) {
                console.error("File could not be read! Code " + e.target.error.code);
            };

            //  }
        }

        $scope.uploadPdf1 = function () {
            var input = document.getElementById("PdfFile1");
            var fileSize = input.files[0].size;
            //if (fileSize > 1000000) {
            //    alert("File Size must be less than 1 MB")
            //}

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.readAsDataURL(input.files[0]);
                var base64file;
                reader.onload = function (ele) {
                    $('#PdfFile1').attr('src', ele.target.result);

                    base64file = ele.target.result;
                    //$scope.EditData.QuestionPaperFilePath = base64file.replace(/^data:application\/pdf+;base64,/, "");;
                    //$scope.QuestionPaperFile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                    //("image/png").replace(/^data:image\/[a-z]+;base64,/, "");

                    //("image/png").replace(/^data:image\/[a-z]+;base64,/, "");
                    //$scope.EditData.QuestionPaperFilePath = base64file.replace(/^data:application\/pdf+;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "").replace(/^data:application\/doc+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace("data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,", "");

                    //$scope.QuestionPaperFile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                    //("image/png").replace(/^data:image\/[a-z]+;base64,/, "");

                    $scope.EditData[0].QuestionPaperFilePath = base64file.replace(/^data:application\/rar+;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "").replace(/^data:application\/doc+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace("data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,", "");

                    $scope.QuestionPaperFile1 = canvas.toDataURL("application\/zip").replace(/^data:application\/zip+;base64,/, "");
                    ("zip/rar").replace(/^data:image\/[a-z]+;base64,/, "");
                }
                reader.onerror = function (e) {
                    console.error("File could not be read! Code " + e.target.error.code);
                };

            }
        }

        $scope.Loading = true;
        var GetQuestionPaperList = AdminService.GetAdminQuestionPaper();
        GetQuestionPaperList.then(function (response) {
            try {
                var res = JSON.parse(response);
            }
            catch (err) { }
            if (res.Table.length > 0) {
                $scope.Loading = false;
                $scope.GetQuestionPaperList = res.Table;
            } else {
                $scope.Loading = false;
                // alert("No Data Found")
            }
        },
            function (error) {
                $scope.Loading = false;
                alert("error while loading QuestionPaper");
                var err = JSON.parse(error);

            });

        $scope.GetBranchs = function () {
            var GetBranchsList = AdminService.GetBranchs();
            GetBranchsList.then(function (response) {
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

        $scope.GetSchemes = function () {
            var GetSchemes = AdminService.GetSchemes();
            GetSchemes.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetSchemesList = res.Table;

            },
                function (error) {
                    alert("error while loading Schemes");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetExamMonthYears = function () {
            var GetExamMonthYears = AdminService.GetExamMonthYears();
            GetExamMonthYears.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetExamMonthYearsList = res.Table;

            },
                function (error) {
                    alert("error while loading Schemes");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


        $scope.GetAllQuestionPaper = function () {
            var GetQuestionPaperList = AdminService.GetAdminQuestionPaper();
            GetQuestionPaperList.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetQuestionPaperList = res.Table;


            },
                function (error) {
                    alert("error while loading States");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GoBack = function () {
            $state.go('Dashboard.SubDashboard')
        }

        $scope.ViewQuestionPaper = function (Id) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/ViewQuestionPaperPopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.GetQuestionPaperById(Id)
        }
        $scope.EditQuestionPaper = function (Id) {

            var GetQuestionPaperById = AdminService.GetQuestionPaperById(Id);
            GetQuestionPaperById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) { }

                if (res.Table.length > 0) {
                    $scope.EditData = res.Table;
                    $scope.EditExamMonthYearData = res.Table1;
                    for (var j = 0; j < $scope.EditData.length; j++) {
                        var url = $scope.EditData[j].QuestionPaperFilePath;
                        var filename = url.substring(url.lastIndexOf('/') + 1);
                        $scope.EditData[j].FileNmae = filename;
                    }
                    $scope.imgLabel = true;
                }
                else {
                    $scope.DistrictsData = [];
                }

            },
                function (error) {
                    alert("data is not loaded");
                    var err = JSON.parse(error);
                });

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/EditQuestionPaperPopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

        }

        $scope.closeModal = function () {

            $scope.modalInstance.close();
        }




        $scope.Add = function () {
            if ($scope.QuestionPaperDate == null || $scope.QuestionPaperDate == "" || $scope.QuestionPaperDate == undefined) {
                alert("Please Enter QuestionPaper Date");
                return;
            }
            if ($scope.ImageText == null || $scope.ImageText == "" || $scope.ImageText == undefined) {
                alert("Please Enter QuestionPaper Text");
                return;
            }

            if ($scope.QuestionPaperFile == null || $scope.QuestionPaperFile == "" || $scope.QuestionPaperFile == undefined) {
                alert("Please Upload File");
                return;
            }
            var file = document.getElementById("PdfFile");
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddQuestionPaper($scope.Scheme, $scope.Branch, $scope.ExamMonthYear, $scope.ImageText, $scope.QuestionPaperFile, file.value.split("\\").pop(), $scope.QuestionPaperDate, "Admin");
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.QuestionPaperDate = "";
                    $scope.QuestionPaperFile = "";
                    $scope.QuestionPaperFile1 = "";
                }
                if (res.Table[0].ResponseCode == '200') {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.QuestionPaperDate = "";
                    $scope.QuestionPaperFile = "";
                    $scope.QuestionPaperFile1 = "";
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllQuestionPaper();



                } else if (res.Table[0].ResponseCode == '400') {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.QuestionPaperDate = "";
                    $scope.QuestionPaperFile = "";
                    $scope.QuestionPaperFile1 = "";
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllQuestionPaper();



                }

                else {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.QuestionPaperDate = "";
                    $scope.QuestionPaperFile = "";
                    $scope.QuestionPaperFile1 = "";
                    $scope.Loading = false;
                    alert("Not Added")


                }
            },

                function (error) {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.QuestionPaperDate = "";
                    $scope.QuestionPaperFile = "";
                    $scope.QuestionPaperFile1 = "";
                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })

        }



        $scope.UpdateQuestionPaper = function () {
            $scope.Loading = true;
            if ($scope.EditQuestionPaperPath == undefined || $scope.EditQuestionPaperPath == null || $scope.EditQuestionPaperPath == "") {
                //  $scope.EditData.SliderImagePath = "";
                var FileName = "";
                var FileUpload = '0';
            } else {
                $scope.EditData[0].QuestionPaperFilePath = $scope.EditQuestionPaperPath
                var FileUpload = '1';
                var file = document.getElementById("PdfFile1")
                 var FileName = file.value.split("\\").pop()
            }
            var adddistcoorcentre = AdminService.UpdateQuestionPaper($scope.EditData[0].SchemeID, $scope.EditData[0].CourseID, $scope.EditData[0].ExamMonthYearID, $scope.EditData[0].QuestionPaperText, FileName, $scope.EditData[0].QuestionPaperFilePath, $scope.EditData[0].QuestionPaperDate, $scope.EditData[0].Active, $scope.EditData[0].QuestionPaperID, FileUpload);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.closeModal()
                    $scope.GetAllQuestionPaper();



                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllQuestionPaper();



                }

                else {
                    $scope.Loading = false;
                    alert("Not Added")


                }
            },

                function (error) {
                    $scope.Loading = false;
                    var err = JSON.parse(error);
                })

        }

        //$scope.DeleteQuestionPaper = function (data, Id) {
        //    $scope.Id = Id
        //    $scope.QuestionPaperDate1 = data.QuestionPaperDate
        //    $scope.QuestionPaperText1 = data.QuestionPaperText;
        //    document.getElementById('id01').style.display = 'block'
        //}

        $scope.DeleteQuestionPaperConfirm = function (data, Id) {
                   $scope.Id = Id
            $scope.QuestionPaperDate1 = data.QuestionPaperDate
            $scope.QuestionPaperText1 = data.QuestionPaperText;
            var GetQuestionPaperById = AdminService.DeleteQuestionPaperById($scope.Id);
            GetQuestionPaperById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) {
                    //document.getElementById('id01').style.display = 'none'
                }

                if (res.Table.length > 0) {
                  //  document.getElementById('id01').style.display = 'none'
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllQuestionPaper();

                }
                else {
                    $scope.DistrictsData = [];
                  //  document.getElementById('id01').style.display = 'none'
                    $scope.GetAllQuestionPaper();
                }

            },
                function (error) {
                    alert("data is not loaded");
                   // document.getElementById('id01').style.display = 'none'
                    var err = JSON.parse(error);
                });
        }
    })
})