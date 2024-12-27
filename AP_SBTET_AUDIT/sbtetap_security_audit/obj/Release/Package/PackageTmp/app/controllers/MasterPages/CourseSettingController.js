define(['app'], function (app) {
    app.controller("CourseSettingController", function ($scope, $state, AdminService, $filter, $localStorage, $uibModal) {


        $scope.GoBack = function () {
            $state.go('Dashboard.SubDashboard')
        }

        const $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.GetCourses()
        }

        $scope.GetCourses = function () {
            $scope.Loading = true;
            var GetCourses = AdminService.GetCourses();
            GetCourses.then(function (response) {
                try {
                    $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.Loading = false;
                }
                $scope.GetCoursesList = res.Table;

            },
                function (error) {
                    $scope.Loading = false;
                    alert("error while loading Slides");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }




        $scope.uploadPhoto = function () {
            var input = document.getElementById("stdPhotoFile");
            var fileSize = input.files[0].size;

            if (fileSize >  300000) {
                alert("Image Size must be less than 300kb");
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



        $scope.Add = function () {
          
            $scope.Loading = true;
            if ($scope.CourseCode == "" || $scope.CourseCode == null || $scope.CourseCode == undefined) {
                alert("Enter Course Code");
                return;
            }
            if ($scope.CourseName == "" || $scope.CourseName == null || $scope.CourseName == undefined) {
                alert("Enter Course Name");
                return;
            }
            if ($scope.CourseShortDescription == "" || $scope.CourseShortDescription == null || $scope.CourseShortDescription == undefined) {
                alert("Enter Course Short Description");
                return;
            }
            if ($scope.CourseLongDescription == "" || $scope.CourseLongDescription == null || $scope.CourseLongDescription == undefined) {
                alert("Enter Course Long Description");
                return;
            }
            if ($scope.userPhoto1 == "" || $scope.userPhoto1 == null || $scope.userPhoto1 == undefined) {
               
                    alert("Enter Course Image");
                    return;
            }

            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddCourse($scope.CourseCode, $scope.CourseName, $scope.CourseShortDescription, $scope.CourseLongDescription, $scope.userPhoto1, "Admin");
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                if (res.Table[0].ResponseCode == '200') {
                    $('#stdPhotoImg').attr('src', '');
                    $("#stdPhotoFile").val('');
                    $scope.CourseCode = "";
                    $scope.CourseName = "";
                    $scope.CourseShortDescription = "";
                    $scope.CourseLongDescription = "";
                    $scope.userPhoto1 = "";
                    alert(res.Table[0].ResponseDescription);
                    $scope.Loading = false;
                    $scope.GetCourses();
                } else if (res.Table[0].ResponseCode == '400') {
                    $('#stdPhotoImg').attr('src', '');
                    $("#stdPhotoFile").val('');
                    $scope.ImageText = "";
                    $scope.userPhoto1 = "";
                    $scope.userPhoto = "";
                    alert(res.Table[0].ResponseDescription);
                    $scope.Loading = false;
                    $scope.GetCourses();
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

        $scope.GoBack = function () {
            $state.go('Dashboard.SubDashboard')
        }


        $scope.EditCourse = function (Id) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/EditCoursePopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.GetCourseById(Id)
        }

        $scope.closeModal = function () {

            $scope.modalInstance.close();
        }

        $scope.GetCourseById = function (Id) {
            var GetCourseById = AdminService.GetCourseById(Id);
            GetCourseById.then(function (resp) {
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

        $scope.DeleteCourse = function (data, Id) {
            $scope.EditCourseName = data.CourseName;
            $scope.EditCoursePhoto = data.CoursePhoto;
            $scope.Id = Id
            document.getElementById('id01').style.display = 'block'
        }

        $scope.DeleteCourseConfirm = function () {

            var GetCourseById = AdminService.DeleteCourseById($scope.Id);
            GetCourseById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) {
                    document.getElementById('id01').style.display = 'none'
                }

                if (res.Table.length > 0) {
                    document.getElementById('id01').style.display = 'none'
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetCourses();

                }
                else {
                    $scope.DistrictsData = [];
                    document.getElementById('id01').style.display = 'none'
                    $scope.GetCourses();
                }

            },
                function (error) {
                    alert("data is not loaded");
                    document.getElementById('id01').style.display = 'none'
                    var err = JSON.parse(error);
                });
        }

        $scope.uploadPhoto1 = function () {
            var input = document.getElementById("stdPhotoFile1");
            var fileSize = input.files[0].size;
            $scope.FileName = input.files[0].name;

            if (fileSize > 300000) {
                alert("Image Size must be less than 300kb");
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
                        $scope.EditData.CoursePhoto = base64Image1;
                        $scope.EditData.CoursePhoto1 = base64Image;
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

        $scope.UpdateCourses = function () {
            if ($scope.FileName == "" || $scope.FileName == null || $scope.FileName == undefined) {
                $scope.update = "1";
            } else {
                $scope.update = "0";
            }
            $scope.Loading = true;
            if ($scope.EditData.CourseCode == "" || $scope.EditData.CourseCode == null || $scope.EditData.CourseCode == undefined) {
                alert("Enter Course Code");
                return;
            }
            if ($scope.EditData.CourseName == "" || $scope.EditData.CourseName == null || $scope.EditData.CourseName == undefined) {
                alert("Enter Course Name");
                return;
            }
            if ($scope.EditData.CourseShortDescription == "" || $scope.EditData.CourseShortDescription == null || $scope.EditData.CourseShortDescription == undefined) {
                alert("Enter Course Short Description");
                return;
            }
            if ($scope.EditData.CourseDetailedDescription == "" || $scope.EditData.CourseDetailedDescription == null || $scope.EditData.CourseDetailedDescription == undefined) {
                alert("Enter Course Long Description");
                return;
            }
            if ($scope.EditData.CoursePhoto == "" || $scope.EditData.CoursePhoto == null || $scope.EditData.CoursePhoto == undefined) {
                if ($scope.FileName == "" || $scope.FileName == null || $scope.FileName == undefined) {
                alert("Enter Course Image");
                    return;
                }
            }
            var adddistcoorcentre = AdminService.UpdateCourses($scope.EditData.CourseCode, $scope.EditData.CourseName, $scope.EditData.CourseShortDescription, $scope.EditData.CourseDetailedDescription, $scope.EditData.CoursePhoto, $scope.EditData.Active, $scope.EditData.CourseID, "Admin", $scope.update);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                    $scope.Loading = false;
                }
                catch (err) {
                    $scope.Loading = false;
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.closeModal()
                    $scope.GetCourses();



                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetCourses();



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

    
    })
})