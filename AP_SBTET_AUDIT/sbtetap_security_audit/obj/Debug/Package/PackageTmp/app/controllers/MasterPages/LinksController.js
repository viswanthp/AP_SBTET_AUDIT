define(['app'], function (app) {
    app.controller("LinksController", function ($scope, $uibModal, $localStorage, $state, AdminService, $filter) {


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
            $scope.GetLinks();


        }


        $scope.GetLinks = function () {
            var DataType = 1;
            var GetLinks = AdminService.GetLinks(DataType,0);
            GetLinks.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetLinksList = res.Table;

            },
                function (error) {
                    alert("error while loading Links");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


        $scope.GetLinksById = function (LinkID) {
            var DataType = 2;
            var GetLinksById = AdminService.GetLinksById(DataType, LinkID);
            GetLinksById.then(function (response) {
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
                $scope.URL = res.Table[0].LinkFile;

                //$scope.LinkID = res.Table[0].LinkID
                //$scope.LinkText = res.Table[0].LinkText
                //$scope.LinkName = res.Table[0].LinkName
                for (var j = 0; j < $scope.EditData.length; j++) {
                    var url = $scope.EditData[j].LinkFile;
                    var filename = url.substring(url.lastIndexOf('/') + 1);
                    $scope.EditData[j].FileNmae = filename;
                }
                $scope.imgLabel = true;
            },
                function (error) {
                    alert("error while loading Links");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }








        $scope.AddLink = function () {

            if ($scope.LinkDate == null || $scope.LinkDate == "" || $scope.LinkDate == undefined) {
                alert("Please Select Link Date");
                return;
            }
            
            if ($scope.LinkText == null || $scope.LinkText == "" || $scope.LinkText == undefined) {
                alert("Please Enter Link Description");
                return;
            }
            if ($scope.LinkName == null || $scope.LinkName == "" || $scope.LinkName == undefined) {
                alert("Please Enter Link");
                return;
            }
            var file = document.getElementById("Circular");


            //var obj = {
            //    "DataType": 1,
            //    "LinkID": 0,
            //    "LinkName": $scope.LinkName,
            //    "LinkText": $scope.LinkText,
            //    "Active": 1,
            //    "UserName": $scope.UserName
            //}
            if ($scope.addpdffile == '' || $scope.addpdffile == null || $scope.addpdffile == undefined) {
                var DataType = 3;
            }
            else if ($scope.addpdffile != '' || $scope.addpdffile != null || $scope.addpdffile != undefined) {
                var DataType = 1;
            }
            $scope.Loading = true;
            var LinkDate = moment($scope.LinkDate, "DD-MM-YYYY").add(1, 'days');
            var addlink = AdminService.AddLink(DataType, 0, $scope.LinkName, $scope.LinkText, LinkDate, $scope.addpdffile, file.value.split("\\").pop(), 1, $scope.UserName);
            addlink.then(function (res) {
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
                    $scope.GetLinks()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetLinks()
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
            $scope.LinkID = "";
            $scope.LinkText = "";
            $scope.LinkName = "";
        }

        $scope.UpdateLink = function (data) {
            var file = document.getElementById("Circular");

            if (data.LinkName == null || data.LinkName == "" || data.LinkName == undefined) {
                alert("Please Enter Link Name");
                return;
            }
            if (data.LinkText == null || data.LinkText == "" || data.LinkText == undefined) {
                alert("Please Enter Link Text");
                return;
            }


            //var obj = {
            //    "DataType": 2,
            //    "LinkID": $scope.LinkID,
            //    "LinkName": $scope.LinkName,
            //    "LinkText": $scope.LinkText,
            //    "Active": 1,
            //    "UserName": $scope.UserName
            //}
            //console.log(obj)
            $scope.Loading = true;
            if ($scope.updatepdffile == '' || $scope.updatepdffile == null || $scope.updatepdffile == undefined) {
                var DataType = 4;
            }
            else if ($scope.updatepdffile != '' || $scope.updatepdffile != null || $scope.updatepdffile != undefined) {
                var DataType = 2;
            }
            var UpdateLinkDate = moment(data.LinkDate).format("YYYY-MM-DD");
            var updatelink = AdminService.UpdateLink(DataType, data.LinkID, data.LinkName, data.LinkText, UpdateLinkDate, $scope.updatepdffile, file.value.split("\\").pop(), 1, $scope.UserName);
            updatelink.then(function (res) {
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
                    $scope.GetLinks()
                    $scope.modalInstance.close();
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetLinks()
                    $scope.ClearData()
                    $scope.modalInstance.close();
;
                }

                else {
                    alert("Not Added")
                    $scope.GetLinks()
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


        $scope.DeleteLink = function (data, LinkID) {
            $scope.Id = LinkID
            $scope.LinkText1 = data.LinkText
            $scope.LinkName1 = data.LinkName;
            document.getElementById('id01').style.display = 'block'
        }

        $scope.DeleteLinkConfirm = function () {
            var DataType = 3;
            var GetLinkById = AdminService.DeleteLinkById(DataType,$scope.Id);
            GetLinkById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) {
                    document.getElementById('id01').style.display = 'none'
                }

                if (res.Table.length > 0) {
                    document.getElementById('id01').style.display = 'none'
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetLinks();

                }
                else {
                    $scope.DistrictsData = [];
                    document.getElementById('id01').style.display = 'none'
                    $scope.GetLinks();
                }

            },
                function (error) {
                    alert("data is not loaded");
                    document.getElementById('id01').style.display = 'none'
                    var err = JSON.parse(error);
                });
        }

        $scope.EditLink = function (LinkID) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/EditLinkPopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.GetLinksById(LinkID)
        }

        $scope.closeModal = function () {

            $scope.modalInstance.close();
        }


        $scope.uploadfiles = function () {
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
                    //$scope.updatepdffile = base64file.replace(/^data:application\/pdf+;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "");


                    $scope.updatepdffile = base64file.replace(/^data:application\/pdf+;base64,/, "").replace(/^data:application\/x-compressed;base64,/, "").replace(/^data:application\/zip+;base64,/, "").replace(/^data:image\/[a-z]+;base64,/, "").replace(/^data:application\/octet\-stream+;base64,/, "").replace(/^data:application\/x\-zip\-compressed+;base64,/, "").replace(/^data:application\/msword+;base64,/, "").replace(/^data:application\/doc+;base64,/, "").replace(/^data:application\/docx+;base64,/, "").replace(/^data:application\/vnd\.openxmlformats-officedocument\.spreadsheetml\.sheet;base64,/, "");


                    $scope.wesfile1 = canvas.toDataURL("application\/pdf").replace(/^data:application\/pdf+;base64,/, "");
                    ("image/png").replace(/^data:image\/[a-z]+;base64,/, "");

                }
                reader.onerror = function (e) {
                    console.error("File could not be read! Code " + e.target.error.code);
                };

            }



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