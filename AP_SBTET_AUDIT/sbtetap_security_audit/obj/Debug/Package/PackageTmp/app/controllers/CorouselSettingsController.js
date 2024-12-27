define(['app'], function (app) {
    app.controller("CorouselSettingsController", function ($scope, $state, AdminService, $uibModal ) {

     
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        $scope.GoBack = function () {
            $state.go('Dashboard')
        }

       
        $scope.uploadPhoto = function () {
            var input = document.getElementById("stdPhotoFile");
            var fileSize = input.files[0].size;
       //     var fileSize = input.files[0].size;
            if (fileSize > 1000000) {
                alert("Image Size must be less than 1 MB");
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
                            var base64Image1 = canvas.toDataURL("image/png").replace(/^data:image\/[a-z]+;base64,/, "");
                            var base64Image = canvas.toDataURL("image/png");
                            $scope.userPhoto1 = base64Image1;
                            $scope.userPhoto = base64Image;
                            console.log($scope.userPhoto)
                            console.log($scope.userPhoto1)
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

        $scope.uploadPhoto1 = function () {
            var input = document.getElementById("stdPhotoFile1");
            var fileSize = input.files[0].size;

            if (fileSize > 1000000) {
                alert("Image Size must be less than 1 MB");
                return;
            }
            //if (fileSize <= 3000000 && fileSize >= 1000000) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.readAsDataURL(input.files[0]);
                reader.onload = function (e) {
                    $('#stdPhotoImg1').attr('src', e.target.result);

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
                        var base64Image1 = canvas.toDataURL("image/png").replace(/^data:image\/[a-z]+;base64,/, "");
                        var base64Image = canvas.toDataURL("image/png");
                        $scope.EditSliderImagePath = base64Image1;
                        $scope.EditSliderImagePath1 = base64Image;
                        console.log($scope.userPhoto)
                        console.log($scope.userPhoto1)
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
        $scope.Loading = true;
        var GetCorouselList = AdminService.GetAdminCorousels();
        GetCorouselList.then(function (response) {
            try {
                var res = JSON.parse(response);
            }
            catch (err) { }
            if (res.Table.length > 0) {
                 $scope.Loading = false;
            $scope.GetCorouselList = res.Table;
            }
        },
            function (error) {
                $scope.Loading = false;
                alert("error while loading States");
                var err = JSON.parse(error);

            });

        $scope.GetAllCorousels = function () {
            $scope.Loading = true;
            var GetCorouselList = AdminService.GetAdminCorousels();
            GetCorouselList.then(function (response) {
                try {
                    $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.Loading = false;}
                $scope.GetCorouselList = res.Table;

            },
                function (error) {
                    $scope.Loading = false;
                    alert("error while loading Slides");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GoBack = function () {
            $state.go('Dashboard.SubDashboard')
        }

        $scope.ViewCorousel = function (Id) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/ViewCorouselPopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.GetCorouselsById(Id)
        }
        $scope.EditCorousel = function (Id) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/EditCorouselPopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.GetCorouselsById(Id)
        }

        $scope.closeModal = function () {

            $scope.modalInstance.close();
        }

        $scope.GetCorouselsById = function (Id) {
            var GetCorouselsById = AdminService.GetCorouselsById(Id);
            GetCorouselsById.then(function (resp) {
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

          
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddCorousel($scope.ImageText, $scope.userPhoto1, "Admin");
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                if (res.Table[0].ResponseCode == '200') {
                    $('#stdPhotoImg').attr('src', '');
                    $("#stdPhotoFile").val('');
                    $scope.ImageText = "";
                    $scope.userPhoto1 = "";
                    $scope.userPhoto = "";
                    alert(res.Table[0].ResponseDescription);
                    $scope.Loading = false;
                    $scope.GetAllCorousels();



                } else if (res.Table[0].ResponseCode == '400') {
                    $('#stdPhotoImg').attr('src', '');
                    $("#stdPhotoFile").val('');
                    $scope.ImageText = "";
                    $scope.userPhoto1 = "";
                    $scope.userPhoto = "";
                    alert(res.Table[0].ResponseDescription);
                    $scope.Loading = false;
                    $scope.GetAllCorousels();
                }

                else {
                    $('#stdPhotoImg').attr('src', '');
                    $("#stdPhotoFile").val('');
                    $scope.ImageText = "";
                    $scope.userPhoto1 = "";
                    $scope.userPhoto = "";
                    alert("Error While Adding Image")
                    $scope.Loading = false;

                }
            },

                function (error) {
                    $('#stdPhotoImg').attr('src', '');
                    $("#stdPhotoFile").val('');
                    $scope.ImageText = "";
                    $scope.userPhoto1 = "";
                    $scope.userPhoto = "";
                    $scope.Loading = false;

                    var err = JSON.parse(error);
                })

        }



        $scope.UpdateCorousels = function () {
            $scope.Loading = true;
            if ($scope.EditSliderImagePath == undefined || $scope.EditSliderImagePath == "" || $scope.EditSliderImagePath1 == "" || $scope.EditSliderImagePath1 == undefined ||
                $scope.EditSliderImagePath == null || $scope.EditSliderImagePath1 == null) {
              //  $scope.EditData.SliderImagePath = "";
                var ImgUploaded = '0';
            } else {
                $scope.EditData.SliderImagePath = $scope.EditSliderImagePath
                var ImgUploaded = '1';
            }
            console.log($scope.EditData.SliderImagePath)
            var adddistcoorcentre = AdminService.UpdateCorousels($scope.EditData.SliderImageText, $scope.EditData.SliderImagePath, $scope.EditData.Active, $scope.EditData.SliderImageID,ImgUploaded);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                    $scope.Loading = false;
                }
                catch (err) {
                    $scope.Loading = false;}
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    EditSliderImagePath =""
                    EditSliderImagePath = null;
                    $("#stdPhotoImg1").val(null);
                    alert(res.Table[0].ResponseDescription);
                    $scope.closeModal()
                    $scope.GetAllCorousels();



                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllCorousels();



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

        $scope.DeleteCorousels = function (data, Id) {
            $scope.SliderImageText1 = data.SliderImageText;
            $scope.SliderImagePath1 = data.SliderImagePath;
            $scope.Id = Id
            document.getElementById('id01').style.display = 'block'
        }

        $scope.DeleteCorouselsConfirm = function () {
            var GetCorouselsById = AdminService.DeleteCorouselsById($scope.Id);
            GetCorouselsById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) {
                    document.getElementById('id01').style.display = 'none'
                }

                if (res.Table.length > 0) {
                    document.getElementById('id01').style.display = 'none'
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllCorousels();

                }
                else {
                    $scope.DistrictsData = [];
                    document.getElementById('id01').style.display = 'none'
                    $scope.GetAllCorousels();
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

