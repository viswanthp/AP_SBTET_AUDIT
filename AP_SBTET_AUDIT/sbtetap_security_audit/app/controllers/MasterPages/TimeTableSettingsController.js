define(['app'], function (app) {
    app.controller("TimeTableSettingsController", function ($scope, $state, AdminService, $filter, $localStorage, $uibModal) {

        const $ctrl = this;
        $ctrl.$onInit = () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            $scope.GetAcademicYears()
            $scope.GetSchemes()
            $scope.GetExamMonthYears()
            $scope.GetTimeTable()
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
                //$scope.TimeTableFile = base64file.replace(/^data:application\/pdf+;base64,/, "");;
                //$scope.TimeTableFile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                //  ("image/png").replace(/^data:image\/[a-z]+;base64,/, "");
                $scope.TimeTableFile = base64file.replace(/^data:application\/pdf+;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "").replace(/^data:application\/doc+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace("data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,", "");

                $scope.TimeTableFile1 = canvas.toDataURL("application\/zip").replace(/^data:application\/zip+;base64,/, "");
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
                    //$scope.EditData.TimeTableFilePath = base64file.replace(/^data:application\/pdf+;base64,/, "");;
                    //$scope.TimeTableFile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                    //("image/png").replace(/^data:image\/[a-z]+;base64,/, "");

                    //("image/png").replace(/^data:image\/[a-z]+;base64,/, "");
                    //$scope.EditData.TimeTableFilePath = base64file.replace(/^data:application\/pdf+;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "").replace(/^data:application\/doc+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace("data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,", "");

                    //$scope.TimeTableFile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                    //("image/png").replace(/^data:image\/[a-z]+;base64,/, "");

                    $scope.EditTimeTablePath = base64file.replace(/^data:application\/rar+;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "").replace(/^data:application\/doc+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace("data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,", "");

                    $scope.TimeTableFile1 = canvas.toDataURL("application\/zip").replace(/^data:application\/zip+;base64,/, "");
                    ("zip/rar").replace(/^data:image\/[a-z]+;base64,/, "");
                }
                reader.onerror = function (e) {
                    console.error("File could not be read! Code " + e.target.error.code);
                };

            }
        }

        $scope.GetTimeTable = function () {
        $scope.Loading = true;
        var GetTimeTableList = AdminService.GetAdminTimeTable();
        GetTimeTableList.then(function (response) {
            try {
                var res = JSON.parse(response);
            }
            catch (err) { }
            if (res.Table.length > 0) {
                $scope.Loading = false;
                $scope.GetTimeTableList = res.Table;
            } else {
                $scope.Loading = false;
                // alert("No Data Found")
            }
        },
            function (error) {
                $scope.Loading = false;
                alert("error while loading TimeTable");
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


        $scope.GetAllTimeTable = function () {
            var GetTimeTableList = AdminService.GetAdminTimeTable();
            GetTimeTableList.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetTimeTableList = res.Table;


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

        $scope.ViewTimeTable = function (Id) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/ViewTimeTablePopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.GetTimeTableById(Id)
        }
        $scope.EditTimeTable = function (Id) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/EditTimeTablePopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.GetTimeTableById(Id)
        }

        $scope.closeModal = function () {

            $scope.modalInstance.close();
        }

        $scope.GetTimeTableById = function (Id) {
            var GetTimeTableById = AdminService.GetTimeTableById(Id);
            GetTimeTableById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) { }

                if (res.Table.length > 0) {
                    $scope.EditData = res.Table[0];
                    console.log($scope.EditData)
                }
                else {
                    $scope.DistrictsData = [];
                }

            },
                function (error) {
                    alert("data is not loaded");
                    var err = JSON.parse(error);
                });
        }


        $scope.Add = function () {
            if ($scope.TimeTableDate == null || $scope.TimeTableDate == "" || $scope.TimeTableDate == undefined) {
                alert("Please Enter TimeTable Date");
                return;
            }
            if ($scope.ImageText == null || $scope.ImageText == "" || $scope.ImageText == undefined) {
                alert("Please Enter TimeTable Text");
                return;
            }

            if ($scope.TimeTableFile == null || $scope.TimeTableFile == "" || $scope.TimeTableFile == undefined) {
                alert("Please Upload File");
                return;
            }
            var file = document.getElementById("PdfFile");
            $scope.Loading = true;
            var TimeTableDate = moment($scope.TimeTableDate, "DD-MM-YYYY").add(1, 'days');
            var adddistcoorcentre = AdminService.AddTimeTable($scope.Scheme, $scope.ExamMonthYear, $scope.AcademicYear, $scope.ImageText, $scope.TimeTableFile, file.value.split("\\").pop(), TimeTableDate, "Admin");
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.TimeTableDate = "";
                    $scope.TimeTableFile = "";
                    $scope.TimeTableFile1 = "";
                }
                if (res.Table[0].ResponseCode == '200') {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.TimeTableDate = "";
                    $scope.TimeTableFile = "";
                    $scope.TimeTableFile1 = "";
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllTimeTable();



                } else if (res.Table[0].ResponseCode == '400') {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.TimeTableDate = "";
                    $scope.TimeTableFile = "";
                    $scope.TimeTableFile1 = "";
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllTimeTable();



                }

                else {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.TimeTableDate = "";
                    $scope.TimeTableFile = "";
                    $scope.TimeTableFile1 = "";
                    $scope.Loading = false;
                    alert("Not Added")


                }
            },

                function (error) {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.TimeTableDate = "";
                    $scope.TimeTableFile = "";
                    $scope.TimeTableFile1 = "";
                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })

        }



        $scope.UpdateTimeTable = function () {
            $scope.Loading = true;
            if ($scope.EditTimeTablePath == undefined || $scope.EditTimeTablePath == "" || $scope.EditTimeTablePath == null) {
                //  $scope.EditData.SliderImagePath = "";
                var FileUpload = '2';
                var FileName = "";
            } else {
                $scope.EditData.SyllabusFilePath = $scope.EditTimeTablePath
                var FileUpload = '1';
                var file = document.getElementById("PdfFile1");
                var FileName = file.value.split("\\").pop()
            }
            console.log($scope.EditData.Scheme, $scope.EditData.ExamMonthYearID, $scope.EditData.AcademicYearID, $scope.EditData.TimeTableText, $scope.EditData.TimeTableFilePath, $scope.EditData.TimeTableDate, $scope.EditData.Active, $scope.EditData.TimeTableID, FileName, FileUpload)
            var UpdateTimeTableDate = moment($scope.EditData.TimeTableDate, "DD-MM-YYYY").add(1, 'days');
            alert(FileUpload)
            var adddistcoorcentre = AdminService.UpdateTimeTable($scope.EditData.SchemeID, $scope.EditData.AcademicYearID, $scope.EditData.ExamMonthYearID, $scope.EditData.TimeTableText, $scope.EditData.TimeTableFilePath, $scope.EditData.TimeTableDate, $scope.EditData.Active, $scope.EditData.TimeTableID, FileName, FileUpload);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.closeModal()
                    $scope.GetAllTimeTable();



                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllTimeTable();



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

        $scope.DeleteTimeTable = function (data, Id) {
            $scope.Id = Id
            $scope.TimeTableDate1 = data.TimeTableDate
            $scope.TimeTableText1 = data.TimeTableText;
            document.getElementById('id01').style.display = 'block'
        }

        $scope.DeleteTimeTableConfirm = function () {
            var GetTimeTableById = AdminService.DeleteTimeTableById($scope.Id);
            GetTimeTableById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) {
                    document.getElementById('id01').style.display = 'none'
                }

                if (res.Table.length > 0) {
                    document.getElementById('id01').style.display = 'none'
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllTimeTable();

                }
                else {
                    $scope.DistrictsData = [];
                    document.getElementById('id01').style.display = 'none'
                    $scope.GetAllTimeTable();
                }

            },
                function (error) {
                    alert("data is not loaded");
                    document.getElementById('id01').style.display = 'none'
                    var err = JSON.parse(error);
                });
        }
    })
})