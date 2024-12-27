define(['app'], function (app) {
    app.controller("PopupSettingsController", function ($scope, $uibModal, $localStorage, $state, AdminService, $filter) {


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

            $scope.AddDetails = '1';
            $scope.UpdateDetails = '0';
            $scope.GetPopups();


        }


        $scope.GetPopups = function () {
            var DataType = 1;
            var GetPopups = AdminService.GetOrEditOrDeletePopup(DataType, 0);
            GetPopups.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetPopupsList = res.Table;

            },
                function (error) {
                    alert("error while loading Popups");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


        $scope.GetPopupsById = function (PopupID) {
            var DataType = 2;
            var GetPopupsById = AdminService.GetOrEditOrDeletePopup(DataType, PopupID);
            GetPopupsById.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                //window.scroll({
                //    top: 0,
                //    left: 0,
                //    behavior: 'smooth'
                //});
                //$scope.AddDetails = '0';
                //$scope.UpdateDetails = '1';
                $scope.EditData = res.Table;
                $scope.URL = res.Table[0].PopupImage;

                //$scope.PopupID = res.Table[0].PopupID
                //$scope.PopupText = res.Table[0].PopupText
                //$scope.PopupName = res.Table[0].PopupName
                for (var j = 0; j < $scope.EditData.length; j++) {
                    var url = $scope.EditData[j].PopupFile;
                    var filename = url.substring(url.lastIndexOf('/') + 1);
                    $scope.EditData[j].FileNmae = filename;
                }
                $scope.imgLabel = true;
            },
                function (error) {
                    alert("error while loading Popups");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }








        $scope.AddPopup = function () {

            if ($scope.PopupDate == null || $scope.PopupDate == "" || $scope.PopupDate == undefined) {
                alert("Please Select Popup Date");
                return;
            }

            if ($scope.PopupName == null || $scope.PopupName == "" || $scope.PopupName == undefined) {
                alert("Please Enter Popup Name");
                return;
            }
            var file = document.getElementById("stdPhotoFile");


            //var obj = {
            //    "DataType": 1,
            //    "PopupID": 0,
            //    "PopupName": $scope.PopupName,
            //    "PopupText": $scope.PopupText,
            //    "Active": 1,
            //    "UserName": $scope.UserName
            //}
            //if ($scope.addpdffile == '' || $scope.addpdffile == null || $scope.addpdffile == undefined) {
            //    var DataType = 3;
            //}
            //else
            if ($scope.userPhotoConvert != '' || $scope.userPhotoConvert != null || $scope.userPhotoConvert != undefined) {
                var DataType = 1;
            }
            $scope.Loading = true;
            var PopupDate = moment($scope.PopupDate, "DD-MM-YYYY").add(1, 'days');
            var obj = {
                "DataType": DataType,
                "PopupID": 0,
                "PopupImage": $scope.userPhotoConvert,
                "PopupText": $scope.PopupName,
                "PopupDate": PopupDate,
                "Name": file.value.split("\\").pop(),
                "Active": 1,
                "UserName": $scope.UserName
            }       
            var addPopup = AdminService.AddorUpdatePopup(obj);
            addPopup.then(function (res) {
                //try {
                //    var res = JSON.parse(response);
                //}
                //catch (err) {
                //    $scope.ClearData()
                //}
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetPopups()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetPopups()
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
            $scope.PopupID = "";
            $scope.PopupText = "";
            $scope.PopupName = "";
            $scope.PopupDate = "";
            $scope.userPhotoConvert = "";
            ImgUploaded = "";
            DataType = "";
            $('#stdPhotoImg').attr('src', '');
            $("#stdPhotoFile").val(null);
         //   $('img').removeAttr('src');​ // Remove t
        }

        $scope.UpdatePopup = function (data) {
            var file = document.getElementById("stdPhotoFile");

            if (data.PopupText == null || data.PopupText == "" || data.PopupText == undefined) {
                alert("Please Enter Popup Name");
                return;
            }
            $scope.Loading = true;
            if ($scope.userPhotoConvert == undefined || $scope.userPhotoConvert == "" || $scope.userPhotoConvert == null) {
                //  $scope.EditData.SliderImagePath = "";
                var ImgUploaded = '0';
                $scope.userPhotoConvert = $scope.URL
                
            } else {
                
                var ImgUploaded = '1';
            }
            var DataType = 2;
            //if ($scope.updatepdffile == '' || $scope.updatepdffile == null || $scope.updatepdffile == undefined) {
            //    var DataType = 4;
            //}
            //else if ($scope.updatepdffile != '' || $scope.updatepdffile != null || $scope.updatepdffile != undefined) {
            //    var DataType = 2;
            //}
            var UpdatePopupDate = moment(data.PopupDate).format("YYYY-MM-DD");
             var obj = {
                "DataType": 2,
                 "PopupID": data.PopupID,
                 "PopupImage": $scope.userPhotoConvert,
                 "ImgUploaded": ImgUploaded,
                 "PopupText": data.PopupText,
                 "PopupDate": UpdatePopupDate,
                 "Name": file.value.split("\\").pop(),
                 "Active": data.Active,
                "UserName": $scope.UserName
            }
              
            //console.log(obj)
            var updatePopup = AdminService.AddorUpdatePopup(obj);
            updatePopup.then(function (res) {
                //try {
                //    var res = JSON.parse(response);
                //}
                //catch (err) {
                //    $scope.ClearData()
                //}
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetPopups()
                    $scope.modalInstance.close();
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetPopups()
                    $scope.ClearData()
                    $scope.modalInstance.close();
                    ;
                }

                else {
                    alert("Not Added")
                    $scope.GetPopups()
                    $scope.ClearData()
                    $scope.modalInstance.close();

                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }


        $scope.DeletePopup = function (data, PopupID) {
            $scope.Id = PopupID
            $scope.PopupText1 = data.PopupText
            $scope.PopupName1 = data.PopupName;
            document.getElementById('id01').style.display = 'block'
        }

        $scope.DeletePopupConfirm = function () {
            var DataType = 3;
            var GetPopupById = AdminService.GetOrEditOrDeletePopup(DataType, $scope.Id);
            GetPopupById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) {
                    document.getElementById('id01').style.display = 'none'
                }

                if (res.Table.length > 0) {
                    document.getElementById('id01').style.display = 'none'
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetPopups();

                }
                else {
                    $scope.DistrictsData = [];
                    document.getElementById('id01').style.display = 'none'
                    $scope.GetPopups();
                }

            },
                function (error) {
                    alert("data is not loaded");
                    document.getElementById('id01').style.display = 'none'
                    var err = JSON.parse(error);
                });
        }

        $scope.EditPopup = function (PopupID) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/EditPopupSettings.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.GetPopupsById(PopupID)
        }

        $scope.closeModal = function () {

            $scope.modalInstance.close();
        }


        $scope.uploadPhoto = function () {
            var input = document.getElementById("stdPhotoFile");
            var fileSize = input.files[0].size;

            if (fileSize > 1000000) {
                alert("Image Size must be less than 1 MB");
                $('#stdPhotoImg').attr('src', '');
                $("#stdPhotoFile").val(null);
                return;
            }
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.readAsDataURL(input.files[0]);
                reader.onload = function (e) {
                    $('#stdPhotoImg').attr('src', e.target.result);

                    var canvas = document.createElement("canvas");
                    var imageElement = document.createElement("img");

                    imageElement.setAttribute = $('<img>', {
                        src: e.target.result
                    });
                    var context = canvas.getContext("2d");
                    imageElement.setAttribute.one("load", function () {
                        canvas.width = this.width;
                        canvas.height = this.height;
                        context.drawImage(this, 0, 0);
                        //var base64Image1 = canvas.toDataURL("image/png").replace(/^data:image\/[a-z]+;base64,/, "");
                        var base64Image = canvas.toDataURL("image/png");
                        //$scope.userPhoto1 = base64Image1;
                        //$scope.userPhoto = base64Image;
                        //console.log($scope.userPhoto)
                        //console.log($scope.userPhoto1)
                        $scope.userPhoto = base64Image;
                        $scope.userPhotoConvert = $scope.userPhoto.replace(/^data:image\/[a-z]+;base64,/, "");
                    });


                }
                reader.onerror = function (e) {
                    console.error("File could not be read! Code " + e.target.error.code);
                };

            }
            //} else if (fileSize <= 1000000) {
            //    alert("file size should not be less than 1MB");
            //    $('#stdPhotoFile').val('');
            //    return;
            //} else if (fileSize >= 3000000) {
            //    alert("file size should not be greater than 3MB");
            //    $('#stdPhotoFile').val('');
            //    return;
            //} else {
            //    alert("file size should be between 1MB and 3MB");
            //    $('#stdPhotoFile').val('');
            //    return;
            //}
        }


        $scope.uploadpdffiles = function () {
            var input = document.getElementById("Circular");

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.readAsDataURL(input.files[0]);
                $scope.FileName = input.files[0].name
                var base64file;
                var canvas = document.createElement("canvas");
                reader.onload = function (ele) {
                    $('#Circular').attr('src', ele.target.result);

                    base64file = ele.target.result;
                    //$scope.addpdffile = base64file.replace(/^data:application\/pdf+;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "");

                    $scope.wesfile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                    ("image/png").replace(/^data:image\/[a-z]+;base64,/, "");
                    $scope.addpdffile = base64file.replace(/^data:application\/pdf+;base64,/, "").replace(/^data:application\/x-compressed;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "").replace(/^data:application\/doc+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace(/^data:application\/vnd\.openxmlformats-officedocument\.spreadsheetml\.sheet;base64,/, "");

                    //$scope.NotificationFile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                    //("image/png").replace(/^data:image\/[a-z]+;base64,/, "");

                }
                reader.onerror = function (e) {
                    console.error("File could not be read! Code " + e.target.error.code);
                };

            }



        }

        $scope.DownloadFile = function () {
            window.open($scope.URL, 'Download');

        }

    })
})