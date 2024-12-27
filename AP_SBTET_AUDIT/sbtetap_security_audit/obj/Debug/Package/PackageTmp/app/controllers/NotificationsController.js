define(['app'], function (app) {
    app.controller("NotificationsController", function ($scope, $state, AdminService, $uibModal) {

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        $scope.GoBack = function () {
            $state.go('Dashboard')
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
                        //$scope.NotificationFile = base64file.replace(/^data:application\/pdf+;base64,/, "");;
                        //$scope.NotificationFile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                      //  ("image/png").replace(/^data:image\/[a-z]+;base64,/, "");
                    $scope.NotificationFile = base64file.replace(/^data:application\/pdf+;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "").replace(/^data:application\/doc+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace("data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,", "") ;

                    $scope.NotificationFile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                    ("image/png").replace(/^data:image\/[a-z]+;base64,/, "");


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
                    //$scope.EditData.NotificationFilePath = base64file.replace(/^data:application\/pdf+;base64,/, "");;
                    //$scope.NotificationFile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                    //("image/png").replace(/^data:image\/[a-z]+;base64,/, "");

                    ("image/png").replace(/^data:image\/[a-z]+;base64,/, "");
                    $scope.EditNotificationPath = base64file.replace(/^data:application\/pdf+;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "").replace(/^data:application\/doc+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace("data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,", "");

                    $scope.NotificationFile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                    ("image/png").replace(/^data:image\/[a-z]+;base64,/, "");

                }
                reader.onerror = function (e) {
                    console.error("File could not be read! Code " + e.target.error.code);
                };

            }
        }

        $scope.Loading = true;
        var GetNotificationList = AdminService.GetAdminNotifications();
        GetNotificationList.then(function (response) {
            try {
                var res = JSON.parse(response);
            }
            catch (err) { }
            if (res.Table.length > 0) {
                $scope.Loading = false;
                $scope.GetNotificationList = res.Table;
            }
        },
            function (error) {
                $scope.Loading = false;
                alert("error while loading States");
                var err = JSON.parse(error);

            });

        $scope.GetAllNotifications = function () {
            var GetNotificationList = AdminService.GetAdminNotifications();
            GetNotificationList.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetNotificationList = res.Table;

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

        $scope.ViewNotification = function (Id) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/ViewNotificationPopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.GetNotificationsById(Id)
        }
        $scope.EditNotification = function (Id) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/EditNotificationPopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.GetNotificationsById(Id)
        }

        $scope.closeModal = function () {

            $scope.modalInstance.close();
        }

        $scope.GetNotificationsById = function (Id) {
            var GetNotificationsById = AdminService.GetNotificationsById(Id);
            GetNotificationsById.then(function (resp) {
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
            if ($scope.NotificationDate == null || $scope.NotificationDate == "" || $scope.NotificationDate == undefined) {
                alert("Please Enter Notification Date");
                return;
            }
            if ($scope.ImageText == null || $scope.ImageText == "" || $scope.ImageText == undefined) {
                alert("Please Enter Notification Text");
                return;
            }
           
            if ($scope.NotificationFile == null || $scope.NotificationFile == "" || $scope.NotificationFile == undefined) {
                alert("Please Upload File");
                return;
            }
            var file = document.getElementById("PdfFile");
            $scope.Loading = true;
            var NotificationDate = moment($scope.NotificationDate, "DD-MM-YYYY").add(1, 'days');
            var adddistcoorcentre = AdminService.AddNotifications($scope.ImageText, $scope.NotificationFile, file.value.split("\\").pop(), NotificationDate, "Admin");
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.NotificationDate = "";
                    $scope.NotificationFile = "";
                    $scope.NotificationFile1 = "";}
                if (res.Table[0].ResponseCode == '200') {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.NotificationDate = "";
                    $scope.NotificationFile = "";
                    $scope.NotificationFile1 = "";
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllNotifications();



                } else if (res.Table[0].ResponseCode == '400') {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.NotificationDate = "";
                    $scope.NotificationFile = "";
                    $scope.NotificationFile1 = "";
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllNotifications();



                }

                else {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.NotificationDate = "";
                    $scope.NotificationFile = "";
                    $scope.NotificationFile1 = "";
                    $scope.Loading = false;
                    alert("Not Added")


                }
            },

                function (error) {
                    $("#PdfFile").val('');
                    $scope.ImageText = "";
                    $scope.NotificationDate = "";
                    $scope.NotificationFile = "";
                    $scope.NotificationFile1 = "";
                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })

        }



        $scope.UpdateNotifications = function () {
            $scope.Loading = true;
            if ($scope.EditNotificationPath == undefined || $scope.EditNotificationPath == "" || $scope.EditNotificationPath == null ) {
              //  $scope.EditData.SliderImagePath = "";
                var FileUpload = '0';
                var FileName=""
            } else {
               // var FileNameAlready = $scope.EditData.NotificationFilePath.value.split("\\").pop()
                var FileNameAlready = new URL($scope.EditData.NotificationFilePath).pathname.split('/').pop();
                $scope.EditData.NotificationFilePath = $scope.EditNotificationPath
                var FileUpload = '1';
                var file = document.getElementById("PdfFile1");
                var FileName = file.value.split("\\").pop();
                if (FileNameAlready == FileName) {
                    var SameFile = "1"
                } else {
                    var SameFile = "0"
                }
            }
            var UpdateNotificationDate = moment($scope.EditData.NotificationDate, "DD-MM-YYYY").add(1, 'days');
            var adddistcoorcentre = AdminService.UpdateNotifications($scope.EditData.NotificationText, FileName, $scope.EditData.NotificationFilePath, UpdateNotificationDate, $scope.EditData.Active, $scope.EditData.NotificationID, FileUpload, SameFile);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.closeModal()
                    $scope.GetAllNotifications();



                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllNotifications();



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

        $scope.DeleteNotifications = function (data,Id) {
            $scope.Id = Id
            $scope.NotificationDate1 = data.NotificationDate
            $scope.NotificationText1 = data.NotificationText;
            $scope.Url = data.NotificationFilePath;
            $scope.Active = data.Active
            if ($scope.Active == true) {
                alert("Please Inactive Notification to Delete")
                return;
            } else {
                document.getElementById('id01').style.display = 'block'
            }
        }

        $scope.InactiveNotifications = function (Id) {
            var GetNotificationsById = AdminService.DeleteNotificationById(Id);
            GetNotificationsById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) {
                  //  document.getElementById('id01').style.display = 'none'
                }

                if (res.Table.length > 0) {
                   // document.getElementById('id01').style.display = 'none'
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllNotifications();

                }
                else {
                    $scope.DistrictsData = [];
                  //  document.getElementById('id01').style.display = 'none'
                    $scope.GetAllNotifications();
                }

            },
                function (error) {
                    alert("data is not loaded");
                    document.getElementById('id01').style.display = 'none'
                    var err = JSON.parse(error);
                });
        }

       
        $scope.DeleteNotificationsConfirm = function () {
            
            var filename = new URL($scope.Url).pathname.split('/').pop();
     
           // var filename = $scope.Url.split('/').pop()
            var GetNotificationsById = AdminService.DeleteNotification($scope.Id, filename);
            GetNotificationsById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) {
                    document.getElementById('id01').style.display = 'none'
                }

                if (res.Table.length > 0) {
                    document.getElementById('id01').style.display = 'none'
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllNotifications();

                }
                else {
                    $scope.DistrictsData = [];
                    document.getElementById('id01').style.display = 'none'
                    $scope.GetAllNotifications();
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

