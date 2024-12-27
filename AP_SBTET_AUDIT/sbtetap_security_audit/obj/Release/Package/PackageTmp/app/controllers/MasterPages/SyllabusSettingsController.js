define(['app'], function (app) {
    app.controller("SyllabusSettingsController", function ($scope, $state, AdminService, $filter, $localStorage, $uibModal) {

        const $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.GetBranchs()
            $scope.GetSchemes()
          //$scope.GetBranchs()
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
                //$scope.SyllabusFile = base64file.replace(/^data:application\/pdf+;base64,/, "");;
                //$scope.SyllabusFile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                //  ("image/png").replace(/^data:image\/[a-z]+;base64,/, "");
                $scope.SyllabusFile = base64file.replace(/^data:application\/pdf+;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "").replace(/^data:application\/doc+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace("data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,", "");

                $scope.SyllabusFile1 = canvas.toDataURL("application\/zip").replace(/^data:application\/zip+;base64,/, "");
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
                    //$scope.EditData.SyllabusFilePath = base64file.replace(/^data:application\/pdf+;base64,/, "");;
                    //$scope.SyllabusFile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                    //("image/png").replace(/^data:image\/[a-z]+;base64,/, "");

                    //("image/png").replace(/^data:image\/[a-z]+;base64,/, "");
                    //$scope.EditData.SyllabusFilePath = base64file.replace(/^data:application\/pdf+;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "").replace(/^data:application\/doc+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace("data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,", "");

                    //$scope.SyllabusFile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                    //("image/png").replace(/^data:image\/[a-z]+;base64,/, "");

                    $scope.EditData.SyllabusFilePath = base64file.replace(/^data:application\/rar+;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "").replace(/^data:application\/doc+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace("data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,", "");

                    $scope.SyllabusFile1 = canvas.toDataURL("application\/zip").replace(/^data:application\/zip+;base64,/, "");
                    ("zip/rar").replace(/^data:image\/[a-z]+;base64,/, "");
                }
                reader.onerror = function (e) {
                    console.error("File could not be read! Code " + e.target.error.code);
                };

            }
        }

        $scope.Loading = true;
        var GetSyllabusList = AdminService.GetSyllabus();
        GetSyllabusList.then(function (response) {
            try {
                var res = JSON.parse(response);
            }
            catch (err) { }
            if (res.Table.length > 0) {
                $scope.Loading = false;
                $scope.GetSyllabusList = res.Table;
            } else {
                $scope.Loading = false;
               // alert("No Data Found")
            }
        },
            function (error) {
                $scope.Loading = false;
                alert("error while loading Syllabus");
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

        $scope.GetAllSyllabus = function () {
            var GetSyllabusList = AdminService.GetSyllabus();
            GetSyllabusList.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetSyllabusList = res.Table;
                

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

        $scope.ViewSyllabus = function (Id) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/ViewSyllabusPopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.GetSyllabusById(Id)
        }
        $scope.EditSyllabus = function (Id) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/EditSyllabusPopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.GetSyllabusById(Id)
        }

        $scope.closeModal = function () {

            $scope.modalInstance.close();
        }

        $scope.GetSyllabusById = function (Id) {
            var GetSyllabusById = AdminService.GetSyllabusById(Id);
            GetSyllabusById.then(function (resp) {
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
            if ($scope.SyllabusDate == null || $scope.SyllabusDate == "" || $scope.SyllabusDate == undefined) {
                alert("Please Enter Syllabus Date");
                return;
            }
            if ($scope.ImageText == null || $scope.ImageText == "" || $scope.ImageText == undefined) {
                alert("Please Enter Syllabus Text");
                return;
            }

            if ($scope.SyllabusFile == null || $scope.SyllabusFile == "" || $scope.SyllabusFile == undefined) {
                alert("Please Upload File");
                return;
            }
            var file = document.getElementById("PdfFile");
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddSyllabus($scope.Scheme,$scope.Branch,$scope.ImageText, $scope.SyllabusFile, file.value.split("\\").pop(), $scope.SyllabusDate, "Admin");
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.SyllabusDate = "";
                    $scope.SyllabusFile = "";
                    $scope.SyllabusFile1 = "";
                }
                if (res.Table[0].ResponseCode == '200') {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.SyllabusDate = "";
                    $scope.SyllabusFile = "";
                    $scope.SyllabusFile1 = "";
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllSyllabus();



                } else if (res.Table[0].ResponseCode == '400') {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.SyllabusDate = "";
                    $scope.SyllabusFile = "";
                    $scope.SyllabusFile1 = "";
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllSyllabus();



                }

                else {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.SyllabusDate = "";
                    $scope.SyllabusFile = "";
                    $scope.SyllabusFile1 = "";
                    $scope.Loading = false;
                    alert("Not Added")


                }
            },

                function (error) {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.SyllabusDate = "";
                    $scope.SyllabusFile = "";
                    $scope.SyllabusFile1 = "";
                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })

        }



        $scope.UpdateSyllabus = function () {
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdateSyllabus($scope.EditData.Scheme, $scope.EditData.Branch,$scope.EditData.SyllabusText, $scope.EditData.SyllabusFilePath, $scope.EditData.SyllabusDate, $scope.EditData.Active, $scope.EditData.SyllabusID);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.closeModal()
                    $scope.GetAllSyllabus();



                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllSyllabus();



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

        $scope.DeleteSyllabus = function (data, Id) {
            $scope.Id = Id
            $scope.SyllabusDate1 = data.SyllabusDate
            $scope.SyllabusText1 = data.SyllabusText;
            document.getElementById('id01').style.display = 'block'
        }

        $scope.DeleteSyllabusConfirm = function () {
            var GetSyllabusById = AdminService.DeleteSyllabusById($scope.Id);
            GetSyllabusById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) {
                    document.getElementById('id01').style.display = 'none'
                }

                if (res.Table.length > 0) {
                    document.getElementById('id01').style.display = 'none'
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllSyllabus();

                }
                else {
                    $scope.DistrictsData = [];
                    document.getElementById('id01').style.display = 'none'
                    $scope.GetAllSyllabus();
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