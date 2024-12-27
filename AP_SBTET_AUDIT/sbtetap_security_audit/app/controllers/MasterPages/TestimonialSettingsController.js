define(['app'], function (app) {
    app.controller("TestimonialSettingsController", function ($scope, $localStorage, $state, AdminService, $filter) {


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
      //      alert("In Development")
        //    $state.go('Dashboard.SubDashboard')
            var authData = $localStorage.authorizationData;
            $scope.UserID = authData.UserID;
            $scope.UserTypeID = authData.UserTypeID;
            $scope.UserName = authData.UserName;
           
            $scope.edit = true;
              $scope.GetAcademicYears()

            //$scope.GetTestimonialByUserName()
            // alert($scope.UserName)
            $scope.GetTestimonialByUserName($scope.UserName)
            $scope.AddDetails = '1';
            $scope.UpdateDetails = '0';
        }


        $scope.GetAcademicYears = function () {
            var GetAcademicYears = AdminService.GetYears();
            GetAcademicYears.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetYearsList = res.Table;

            },
                function (error) {
                    alert("error while loading Academic Years");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
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


        $scope.uploadPhoto = function () {
            var input = document.getElementById("stdPhotoFile");
            var fileSize = input.files[0].size;

            if (fileSize > 300000) {
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



        $scope.GetTestimonialById = function (CollegeId) {
            var GetTestimonialById = AdminService.GetTestimonialById(CollegeId);
            GetTestimonialById.then(function (response) {
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

                $scope.TestimonialID = res.Table[0].TestimonialID
                $scope.Pin = res.Table[0].PIN
                $scope.Name = res.Table[0].Name
                $scope.YearOfAppointment = res.Table[0].YearOfAppointment
                $scope.ModeOfAppointment = res.Table[0].ModeOfAppointment
                $scope.FromYear = res.Table[0].FromYear
                $scope.ToYear = res.Table[0].ToYear
                $scope.CompanyNameAddress = res.Table[0].CompanyNameAddress
                $scope.PackageAmount = res.Table[0].PackageAmount
                $scope.TestimonialDetails = res.Table[0].TestimonialDetails
                $scope.CollegeAddress = res.Table[0].CollegeAddress
                $scope.userPhoto = res.Table[0].Photo
                $scope.Photo = res.Table[0].Photo
              


            },
                function (error) {
                    alert("error while loading Journals");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetTestimonialByUserName = function (UserName) {
            var GetTestimonialByUserName = AdminService.GetTestimonialByUserName(UserName);
            GetTestimonialByUserName.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetTestimonialsList = res.Table;

            },
                function (error) {
                    alert("error while loading Journals");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }



        $scope.AddTestimonial = function () {
            if ($scope.Pin == null || $scope.Pin == "" || $scope.Pin == undefined) {
                alert("Please Select PIN");
                return;
            }

            if ($scope.Name == null || $scope.Name == "" || $scope.Name == undefined) {
                alert("Please Enter Name");
                return;
            }
            if ($scope.YearOfAppointment == null || $scope.YearOfAppointment == "" || $scope.YearOfAppointment == undefined) {
                alert("Please Enter Year Of Appointment");
                return;
            }
            if ($scope.ModeOfAppointment == null || $scope.ModeOfAppointment == "" || $scope.ModeOfAppointment == undefined) {
                alert("Please Enter ModeOfAppointment");
                return;
            }
            if ($scope.FromYear == null || $scope.FromYear == "" || $scope.FromYear == undefined) {
                alert("Please Enter FromYear");
                return;
            }
            if ($scope.ToYear == null || $scope.ToYear == "" || $scope.ToYear == undefined) {
                alert("Please Enter ToYear");
                return;
            }
            if ($scope.CollegeAddress == null || $scope.CollegeAddress == "" || $scope.CollegeAddress == undefined) {
                alert("Please Enter College Address");
                return;
            }
            
            if ($scope.CompanyNameAddress == null || $scope.CompanyNameAddress == "" || $scope.CompanyNameAddress == undefined) {
                alert("Please Enter CompanyNameAddress");
                return;
            }
            if ($scope.PackageAmount == null || $scope.PackageAmount == "" || $scope.PackageAmount == undefined) {
                alert("Please Enter Package Amount");
                return;
            }
            if ($scope.TestimonialDetails == null || $scope.TestimonialDetails == "" || $scope.TestimonialDetails == undefined) {
                alert("Please Enter Testimonial Details");
                return;
            }
            if ($scope.PackageAmount == null || $scope.PackageAmount == "" || $scope.PackageAmount == undefined) {
                alert("Please Enter ModeOfAppointment");
                return;
            }
            
            if ($scope.userPhoto == undefined || $scope.userPhoto == "" || $scope.userPhotoConvert == "" || $scope.userPhotoConvert == undefined ||
                $scope.userPhoto == null || $scope.userPhotoConvert == null) {
                alert("Please Upload Photo");
                return;
            }
            var obj = {
                "PIN": $scope.Pin,
                "Name": $scope.Name,
                "YearOfAppointment": $scope.YearOfAppointment,
                "ModeOfAppointment": $scope.ModeOfAppointment,
                "FromYear": $scope.FromYear,
                "ToYear": $scope.ToYear,
                "CompanyNameAddress": $scope.CompanyNameAddress,
                "PackageAmount": $scope.PackageAmount,
                "TestimonialDetails": $scope.TestimonialDetails,
                "CollegeAddress":$scope.CollegeAddress,
                "Photo": $scope.userPhotoConvert,
                "UserName": $scope.UserName,
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddTestimonial(obj);
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
                    $scope.GetTestimonialByUserName($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetTestimonialByUserName($scope.UserName)
                    $scope.ClearData()
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

            $scope.TestimonialID = "";
            $scope.Pin = "";
            $scope.Name = "";
            $scope.YearOfAppointment = "";
            $scope.ModeOfAppointment = "";
            $scope.FromYear = "";
            $scope.ToYear = "";
            $scope.CompanyNameAddress = "";
            $scope.PackageAmount = "";
            $scope.TestimonialDetails = "";
            $scope.CollegeAddress = "";
            $scope.Photo = "";
            $('#stdPhotoImg').attr('src', '');
            $("#stdPhotoFile").val('');
        }

        $scope.UpdateTestimonial = function (CollegeLabID) {
            if ($scope.Pin == null || $scope.Pin == "" || $scope.Pin == undefined) {
                alert("Please Select PIN");
                return;
            }

            if ($scope.Name == null || $scope.Name == "" || $scope.Name == undefined) {
                alert("Please Enter Name");
                return;
            }
            if ($scope.YearOfAppointment == null || $scope.YearOfAppointment == "" || $scope.YearOfAppointment == undefined) {
                alert("Please Enter Year Of Appointment");
                return;
            }
            if ($scope.ModeOfAppointment == null || $scope.ModeOfAppointment == "" || $scope.ModeOfAppointment == undefined) {
                alert("Please Enter ModeOfAppointment");
                return;
            }
            if ($scope.FromYear == null || $scope.FromYear == "" || $scope.FromYear == undefined) {
                alert("Please Enter FromYear");
                return;
            }
            if ($scope.ToYear == null || $scope.ToYear == "" || $scope.ToYear == undefined) {
                alert("Please Enter ToYear");
                return;
            }
            if ($scope.CompanyNameAddress == null || $scope.CompanyNameAddress == "" || $scope.CompanyNameAddress == undefined) {
                alert("Please Enter CompanyNameAddress");
                return;
            }
            if ($scope.PackageAmount == null || $scope.PackageAmount == "" || $scope.PackageAmount == undefined) {
                alert("Please Enter Package Amount");
                return;
            }
            if ($scope.CollegeAddress == null || $scope.CollegeAddress == "" || $scope.CollegeAddress == undefined) {
                alert("Please Enter College Address");
                return;
            }
            if ($scope.TestimonialDetails == null || $scope.TestimonialDetails == "" || $scope.TestimonialDetails == undefined) {
                alert("Please Enter Testimonial Details");
                return;
            }
            if ($scope.PackageAmount == null || $scope.PackageAmount == "" || $scope.PackageAmount == undefined) {
                alert("Please Enter ModeOfAppointment");
                return;
            }
            if ($scope.userPhoto == undefined || $scope.userPhoto == "" || $scope.userPhotoConvert == "" || $scope.userPhotoConvert == undefined ||
                $scope.userPhoto == null || $scope.userPhotoConvert == null) {
                //  $scope.EditData.SliderImagePath = "";
                var ImgUploaded = '0';
            } else {
                $scope.Photo = $scope.userPhotoConvert
                var ImgUploaded = '1';
            }


            if ($scope.Photo == null || $scope.Photo == "" || $scope.Photo == undefined) {
                alert("Please Upload Photo");
                return;
            }
            var obj = {
                "TestimonialID": $scope.TestimonialID,
                "PIN": $scope.Pin,
                "Name": $scope.Name,
                "YearOfAppointment": $scope.YearOfAppointment,
                "ModeOfAppointment": $scope.ModeOfAppointment,
                "FromYear": $scope.FromYear,
                "ToYear": $scope.ToYear,
                "CompanyNameAddress": $scope.CompanyNameAddress,
                "PackageAmount": $scope.PackageAmount,
                "TestimonialDetails": $scope.TestimonialDetails,
                "CollegeAddress": $scope.CollegeAddress,
                //"Photo": $scope.userPhoto,
                "Photo": $scope.userPhotoConvert,
                "UserName": $scope.UserName,
                "ImgUploaded": ImgUploaded
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdateTestimonial(obj);
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
                    $scope.GetTestimonialByUserName($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetTestimonialByUserName($scope.UserName)
                    $scope.ClearData()
                }

                else {
                    alert("Not Added")
                    $scope.GetTestimonialByUserName($scope.UserName)
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }

        $scope.DeleteTestimonialById = function (TestimonialID) {


            var objs = {
                "TestimonialID": TestimonialID,

            }

            var deletetestimonials = AdminService.DeleteTestimonial(objs);
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
                    $scope.GetTestimonialByUserName($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    alert(res.Table[0].ResponseDescription);

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

    })
})