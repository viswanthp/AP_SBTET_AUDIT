define(['app'], function (app) {
    app.controller("StaffDetailsController", function ($scope, $state, AdminService, $filter, $localStorage, $uibModal) {


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
            $scope.GetStaffOrder()
            $scope.GetStaffList()
            $scope.AddData = '1'
            $scope.UpdateData = '0'
        }



        $scope.GetStaffOrder = function () {
            $scope.Loading = true;
            var GetStaffOrder = AdminService.GetStaffOrder();
            GetStaffOrder.then(function (response) {
                try {
                    $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.Loading = false;
                }
                $scope.OrderList = res.Table;

            },
                function (error) {
                    $scope.Loading = false;
                    alert("error while loading Staff Order List");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }



        $scope.GetStaffList = function () {
            $scope.Loading = true;
            var GetStaffList = AdminService.GetStaffList();
            GetStaffList.then(function (response) {
                try {
                    $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.Loading = false;
                }
                $scope.StaffList = res.Table;

            },
                function (error) {
                    $scope.Loading = false;
                    alert("error while loading Staff  List");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
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



        $scope.AddStaffDetails = function () {

            $scope.Loading = true;
            if ($scope.Name == "" || $scope.Name == null || $scope.Name == undefined) {
                alert("Enter Name");
                return;
            }
            if ($scope.Designation == "" || $scope.Designation == null || $scope.Designation == undefined) {
                alert("Enter Designation");
                return;
            }
            if ($scope.PhoneNumber == "" || $scope.PhoneNumber == null || $scope.PhoneNumber == undefined) {
                alert("Enter Phone Number");
                return;
            }
            if ($scope.Email == "" || $scope.Email == null || $scope.Email == undefined) {
                alert("Enter Email");
                return;
            }
            if ($scope.Qualification == "" || $scope.Qualification == null || $scope.Qualification == undefined) {
                alert("Enter Qualification");
                return;
            }
            if ($scope.userPhoto1 == "" || $scope.userPhoto1 == null || $scope.userPhoto1 == undefined) {

                alert("Upload Staff Photo");
                return;
            }
            if ($scope.PriorityOrder == "" || $scope.PriorityOrder == null || $scope.PriorityOrder == undefined) {
                alert("Enter StaffPriorityOrder");
                return;
            }
            if ($scope.StaffDescription == "" || $scope.StaffDescription == null || $scope.StaffDescription == undefined) {
                alert("Enter StaffDescription");
                return;
            }
            var obj = {
                "StaffName": $scope.Name,
                "StaffDesignation": $scope.Designation,
                "StaffPhone": $scope.PhoneNumber,
                "StaffEmail": $scope.Email,
                "StaffPhoto": $scope.userPhoto1,
                "StaffPriorityOrder": $scope.PriorityOrder,
                "StaffDetailedDescription": $scope.StaffDescription,
                "Qualification": $scope.Qualification,
                "UserName": $scope.UserName
            }

            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddStaffDetails(obj);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                if (res.Table[0].ResponseCode == '200') {
                    $('#stdPhotoImg').attr('src', '');
                    $("#stdPhotoFile").val('');
                    $scope.Name = "";
                    $scope.Designation = "";
                    $scope.PhoneNumber = "";
                    $scope.Email = "";
                    $scope.userPhoto1 = "";
                    $scope.Qualification = "";
                    alert(res.Table[0].ResponseDescription);
                    $scope.Loading = false;
                    $scope.GetStaffList();
                } else if (res.Table[0].ResponseCode == '400') {
                    $('#stdPhotoImg').attr('src', '');
                    $("#stdPhotoFile").val('');
                    $scope.ImageText = "";
                    $scope.userPhoto1 = "";
                    $scope.userPhoto = "";
                    alert(res.Table[0].ResponseDescription);
                    $scope.Loading = false;
                    $scope.GetStaffList();
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




        $scope.EditStaff = function (Id) {
            var GetStaffById = AdminService.GetStaffById(Id);
            GetStaffById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) { }

                if (res.Table.length > 0) {

                    $scope.EditData = res.Table[0];
                    $scope.SataffDetailID = res.Table[0].SataffDetailID
                    $scope.Name = res.Table[0].SataffName,
                        $scope.Designation = res.Table[0].SataffDesignation,
                        $scope.PhoneNumber = res.Table[0].SataffPhone,
                        $scope.Email = res.Table[0].SataffEmail,
                        $scope.Qualification = res.Table[0].Qualification,
                        $scope.userPhoto1 = res.Table[0].SataffPhotoPath,
                        $scope.PriorityOrder = res.Table[0].StaffPriorityOrder,
                        $scope.StaffDescription = res.Table[0].StaffDetailedDescription;
                    $scope.AddData = '0'
                    $scope.UpdateData = '1'
                    // console.log($scope.EditData)
                }
                else {
                    $scope.DistrictsData = [];
                }
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            },
                function (error) {
                    alert("data is not loaded");
                    var err = JSON.parse(error);
                });
        }


        $scope.UpdateStaffDetails = function () {
            $scope.Loading = true;
            if ($scope.Name == "" || $scope.Name == null || $scope.Name == undefined) {
                alert("Enter Name");
                return;
            }
            if ($scope.Designation == "" || $scope.Designation == null || $scope.Designation == undefined) {
                alert("Enter Designation");
                return;
            }
            if ($scope.PhoneNumber == "" || $scope.PhoneNumber == null || $scope.PhoneNumber == undefined) {
                alert("Enter Phone Number");
                return;
            }
            if ($scope.Email == "" || $scope.Email == null || $scope.Email == undefined) {
                alert("Enter Email");
                return;
            }

            if ($scope.Qualification == "" || $scope.Qualification == null || $scope.Qualification == undefined) {
                alert("Enter Qualification");
                return;
            }
            if ($scope.userPhoto1 == "" || $scope.userPhoto1 == null || $scope.userPhoto1 == undefined) {

                alert("Upload Staff Photo");
                return;
            }
            if ($scope.PriorityOrder == "" || $scope.PriorityOrder == null || $scope.PriorityOrder == undefined) {
                alert("Enter Staff Priority Order");
                return;
            }
            if ($scope.StaffDescription == "" || $scope.StaffDescription == null || $scope.StaffDescription == undefined) {
                alert("Enter Staff Description");
                return;
            }
            var obj = {
                "StaffDetailID": $scope.SataffDetailID,
                "StaffName": $scope.Name,
                "StaffDesignation": $scope.Designation,
                "StaffPhone": $scope.PhoneNumber,
                "StaffEmail": $scope.Email,
                "StaffQualification": $scope.Qualification,
                "StaffPhoto": $scope.userPhoto1,
                "StaffPriorityOrder": $scope.PriorityOrder,
                "StaffDetailedDescription": $scope.StaffDescription,
                "UserName": $scope.UserName
            }

            var adddistcoorcentre = AdminService.UpdateStaffDetails(obj);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                    $scope.Loading = false;
                }
                catch (err) {
                    $scope.Loading = false;
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.AddData = '1'
                    $scope.UpdateData = '0'
                    $scope.Loading = false;
                    $scope.Name = "";
                    $scope.Designation = "";
                    $scope.PhoneNumber = "";
                    $scope.Email = "";
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetStaffList()
                    $scope.closeModal()
                        ;



                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetStaffList();



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