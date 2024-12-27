define(['app'], function (app) {
    app.controller("CollegeDetailsController", function ($scope, $localStorage, $state, AdminService, $filter) {



        $scope.GoBack = function () {
            $state.go('Dashboard.SubDashboard')
        }

        const $ctrl = this;
        $ctrl.$onInit = () => {
            var authData = $localStorage.authorizationData;
            console.log(authData)
            $scope.UserID = authData.UserID;
            $scope.UserTypeID = authData.UserTypeID;
            $scope.UserName = authData.UserName;
            $scope.CollegeCode = $scope.UserName
            
            console.log(authData)
         //   $scope.CollegeId ="18"
            $scope.GetCollegeTypes()
            $scope.GetRegions()
         
            $scope.GetCollegeDetails()
            $scope.AddDetails = '1';
            $scope.UpdateDetails = '0';
            $scope.Editsemesterdat()
        }
        $scope.DCno = [{ "Id": 0, "Name": 0 },{ "Id": 1, "Name": 1 }, { "Id": 2, "Name": 2 }, { "Id": 3, "Name": 3 }, { "Id": 4, "Name": 4 }, { "Id": 5, "Name": 5 }, { "Id": 6, "Name": 6 }, { "Id": 7, "Name": 7 }, { "Id": 8, "Name": 8 }, { "Id": 9, "Name": 9 }, { "Id": 10, "Name": 10 }, { "Id": 11, "Name": 11 }, { "Id": 12, "Name": 12 }, { "Id": 13, "Name": 13 }, { "Id": 14, "Name": 14 }, { "Id": 15, "Name": 15 }, { "Id": 16, "Name": 16 }, { "Id": 17, "Name": 17 }, { "Id": 18, "Name": 18 }, { "Id": 19, "Name": 19 }, { "Id": 20, "Name": 20 }]
        $scope.DataValues = [{ "Id": true, "Name": "Yes" }, { "Id": false, "Name": "No" }]
        $scope.GetCollegeTypes = function () {
            var GetCollegeTypes = AdminService.GetCollegeTypes();
            GetCollegeTypes.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetCollegeTypesList = res.Table;

            },
                function (error) {
                    alert("error while loading College Types");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

      
        $scope.ChangeHostel = function (HostelAvailable) {
            if (HostelAvailable == false) {
                $scope.BoysHostel = false
                $scope.GirlsHostel = false
                $scope.BoysHostelCapacity = 0;
                $scope.GirlsHostelCapacity = 0;
            } else if (HostelAvailable == true) {
                if ($scope.BoysHostel == false) {
                    $scope.BoysHostelCapacity = 0;
                }
                if ($scope.GirlsHostel == false) {
                    $scope.GirlsHostelCapacity = 0;
                }
            }
        }
        

        $scope.GetRegions = function () {
            var GetRegions = AdminService.GetRegions();
            GetRegions.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetRegionsList = res.Table;

            },
                function (error) {
                    alert("error while loading Regions");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.ChangeRegion = function (Region) {
            var GetDistricts = AdminService.GetDistrictsByRegionId(Region);
            GetDistricts.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetDistrictsList = res.Table;

            },
                function (error) {
                    alert("error while loading Districts");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetCollegeDetails = function () {
            var sessiodata = AdminService.GetCollegeDetails($scope.UserTypeID, $scope.UserName);
        sessiodata.then(function (data) {
            try { var data = JSON.parse(data) } catch (err) { }
            if (data.Table.length > 0) {
                $scope.ReportFound = true;
                $scope.Noreports = false;
               
                $scope.GetCollegeDetailsLists = data.Table;
                console.log($scope.GetCollegeDetailsLists)
                for (var j = 0; j < data.Table.length + 1; j++) {
                    $scope['edit' + j] = true;
                    console.log(data.Table[j].RegionID)
                    $scope.ChangeRegion(data.Table[j].RegionID);
                    //$scope['edit' + j] = true;
                    // $scope.ChangeRegion(data.Table[j].RegionID);
                }

                
            } else {
                $scope.ReportFound = false;
                $scope.Noreports = true;
            }
        }, function (error) {
            $scope.GetCollegeDetailsList = [];
            $scope.ReportFound = fale;
            $scope.Noreports = true;
        });


    }

        $scope.uploadPhoto = function () {
            var input = document.getElementById("stdPhotoFile");
            var fileSize = input.files[0].size;

            if (fileSize > 1000000) {
                alert("Image Size must be less than 1MB");
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
            if ($scope.CollegeCode == null || $scope.CollegeCode == "" || $scope.CollegeCode == undefined) {
                alert("Please Enter College Code");
                return;
            }
            if ($scope.CollegeName == null || $scope.CollegeName == "" || $scope.CollegeName == undefined) {
                alert("Please Enter CollegeName");
                return;
            }

            if ($scope.Village == null || $scope.Village == "" || $scope.Village == undefined) {
                alert("Please Enter Village Name");
                return;
            }

            if ($scope.CollegeType == null || $scope.CollegeType == "" || $scope.CollegeType == undefined) {
                alert("Please Select CollegeType");
                return;
            }
            if ($scope.Region == null || $scope.Region == "" || $scope.Region == undefined) {
                alert("Please Select Region");
                return;
            }
            if ($scope.District == null || $scope.District == "" || $scope.District == undefined) {
                alert("Please Select District");
                return;
            }
            if ($scope.YearofEstablishment == null || $scope.YearofEstablishment == "" || $scope.YearofEstablishment == undefined) {
                alert("Please Enter Year of Establishment");
                return;
            }
            if ($scope.CollegeAddress == null || $scope.CollegeAddress == "" || $scope.CollegeAddress == undefined) {
                alert("Please Enter College Address");
                return;
            }
            if ($scope.PrinciaplName == null || $scope.PrinciaplName == "" || $scope.PrinciaplName == undefined) {
                alert("Please Enter Princiapal Name");
                return;
            }

            if ($scope.PhoneNumber == null || $scope.PhoneNumber == "" || $scope.PhoneNumber == undefined) {
                alert("Please Enter Phone Number");
                return;
            }

            if ($scope.Email == null || $scope.Email == "" || $scope.Email == undefined) {
                alert("Please Enter Email");
                return;
            }
            if ($scope.CollegeWebSite == null || $scope.CollegeWebSite == "" || $scope.CollegeWebSite == undefined) {
                alert("Please Enter College WebSite");
                return;
            }
            if ($scope.HostelAvailable == false) {
                $scope.BoysHostel = false
                $scope.GirlsHostel = false
                $scope.BoysHostelCapacity = 0;
                $scope.GirlsHostelCapacity = 0;
            } else {
                if ($scope.HostelAvailable == null || $scope.HostelAvailable == "" || $scope.HostelAvailable == undefined) {
                    alert("Please Enter Hostel Available");
                    return;
                }
                if ($scope.BoysHostel == false) {
                    $scope.BoysHostelCapacity = 0;
                    $scope.BoysHostel = false
                } else {
                    if ($scope.BoysHostel == null || $scope.BoysHostel == "" || $scope.BoysHostel == undefined) {
                        alert("Please Enter Boys Hostel");
                        return;
                    }
                    if ($scope.BoysHostelCapacity == null || $scope.BoysHostelCapacity == "" || $scope.BoysHostelCapacity == undefined) {
                        alert("Please Enter Boys Hostel Capacity");
                        return;
                    }
                }
                if ($scope.GirlsHostel == false) {
                    $scope.GirlsHostel = false
                    $scope.GirlsHostelCapacity = 0;
                } else {
                    if ($scope.GirlsHostel == null || $scope.GirlsHostel == "" || $scope.GirlsHostel == undefined) {
                        alert("Please Enter Girls Hostel");
                        return;
                    }
                    if ($scope.GirlsHostelCapacity == null || $scope.GirlsHostelCapacity == "" || $scope.GirlsHostelCapacity == undefined) {
                        alert("Please Enter Girls Hostel Capacity");
                        return;
                    }

                }
            }

            if ($scope.NoOfDigitalClassrooms == null || $scope.NoOfDigitalClassrooms == "" || $scope.NoOfDigitalClassrooms == undefined) {
                alert("Please Enter No Of Digital Classrooms");
                return;
            }
            if ($scope.DigitalClassroomMajorEquipment == null || $scope.DigitalClassroomMajorEquipment == "" || $scope.DigitalClassroomMajorEquipment == undefined) {
                alert("Please Enter Digital Class room Major Equipment");
                return;
            }
            
            if ($scope.DigitalClassromRemarks == null || $scope.DigitalClassromRemarks == "" || $scope.DigitalClassromRemarks == undefined) {
                alert("Please Enter Digital Classroom Remarks");
                return;
            }
            if ($scope.NoOfDigitalClassrooms == null || $scope.NoOfDigitalClassrooms == "" || $scope.NoOfDigitalClassrooms == undefined) {
                alert("Please No Of Virtual Classrooms ");
                return;
            }
            if ($scope.VirtualClassroomMajorEquipment == null || $scope.VirtualClassroomMajorEquipment == "" || $scope.VirtualClassroomMajorEquipment == undefined) {
                alert("Please Enter Virtual Class room Major Equipment");
                return;
            }
            if ($scope.VirtualClassromRemarks == null || $scope.VirtualClassromRemarks == "" || $scope.VirtualClassromRemarks == undefined) {
                alert("Please Enter Virtual Class Room Remarks");
                return;
            }
            if ($scope.AntiRaggingCommitee == null || $scope.AntiRaggingCommitee == "" || $scope.AntiRaggingCommitee == undefined) {
                $scope.AntiRaggingCommitee = "NA";
            }
            if ($scope.ParentsCommitee == null || $scope.ParentsCommitee == "" || $scope.ParentsCommitee == undefined) {
                $scope.ParentsCommitee = "NA";
            }
            if ($scope.GrievanceCellCommitee == null || $scope.GrievanceCellCommitee == "" || $scope.GrievanceCellCommitee == undefined) {
                $scope.GrievanceCellCommitee = "NA";
            }
            if ($scope.WomenEmpowermentCellCommitee == null || $scope.WomenEmpowermentCellCommitee == "" || $scope.WomenEmpowermentCellCommitee == undefined) {
                $scope.WomenEmpowermentCellCommitee = "NA";
            }
            if ($scope.IndustryConnectandPlacementCell == null || $scope.IndustryConnectandPlacementCell == "" || $scope.IndustryConnectandPlacementCell == undefined) {
                $scope.IndustryConnectandPlacementCell = "NA";
            }
            if ($scope.userPhoto1 == null || $scope.userPhoto1 == "" || $scope.userPhoto1 == undefined) {
               // alert("Upload College Photo");
               // return;
                $scope.userPhoto1 = "/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg2RDhDNjMwRDU2RjExRTk4MkU5QTU3ODJGNEREQjQxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg2RDhDNjMxRDU2RjExRTk4MkU5QTU3ODJGNEREQjQxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODZEOEM2MkVENTZGMTFFOTgyRTlBNTc4MkY0RERCNDEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODZEOEM2MkZENTZGMTFFOTgyRTlBNTc4MkY0RERCNDEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8N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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==";

            }
            alert($scope.DigitalClassromRemarks)
            var obj = {
                "CollegeCode": $scope.CollegeCode,
                "CollegeName": $scope.CollegeName,
                "Village_Town": $scope.Village,
                "CollegeTypeID": $scope.CollegeType,
                "RegionID": $scope.Region,
                "DistrictID": $scope.District,
                "YearofEstablishment": $scope.YearofEstablishment,
                "CollegeAddress": $scope.CollegeAddress,
                "PrinciaplName": $scope.PrinciaplName,
                "PhoneNumber": $scope.PhoneNumber,
                "Email": $scope.Email,
                "CollegeWebSite": $scope.CollegeWebSite,
                "HostelAvailable": $scope.HostelAvailable,
                "BoysHostel": $scope.BoysHostel,
                "GirlsHostel": $scope.GirlsHostel,
                "BoysHostelCapacity": $scope.BoysHostelCapacity,
                "GirlsHostelCapacity": $scope.GirlsHostelCapacity,
                "NoOfDigitalClassrooms": $scope.NoOfDigitalClassrooms,
                "DCMajorEquipment": $scope.DigitalClassroomMajorEquipment,
                "DigitalClassromRemarks": $scope.DigitalClassromRemarks,
                "NoOfVirtualClassrooms": $scope.NoOfVirtualClassrooms,
                "VCMajorEquipment": $scope.VirtualClassroomMajorEquipment,
                "VirtualClassromRemarks": $scope.VirtualClassromRemarks,
                "AntiRaggingCommitee": $scope.AntiRaggingCommitee,
                "ParentsCommitee": $scope.ParentsCommitee,
                "GrievanceCellCommitee": $scope.GrievanceCellCommitee,
                "WomenEmpowermentCellCommitee": $scope.WomenEmpowermentCellCommitee,
                "IndustryConnectandPlacementCell": $scope.IndustryConnectandPlacementCell,
                "CollegePhoto": $scope.userPhoto1,
                "UserName": $scope.UserName
            }
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddCollegeData(obj);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                   
                    $scope.ImageText = "";
                    $scope.SyllabusDate = "";
                    $scope.SyllabusFile = "";
                    $scope.SyllabusFile1 = "";
                }
                if (res.Table[0].ResponseCode == '200') {
                  
                    $scope.ImageText = "";
                    $scope.SyllabusDate = "";
                    $scope.SyllabusFile = "";
                    $scope.SyllabusFile1 = "";
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                   // $scope.ClearData()
                    $scope.GetCollegeDetails()



                } else if (res.Table[0].ResponseCode == '400') {
                   
                    $scope.ImageText = "";
                    $scope.SyllabusDate = "";
                    $scope.SyllabusFile = "";
                    $scope.SyllabusFile1 = "";
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetAllSyllabus();



                }

                else {
                   
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

            $scope.Editsemesterdat = function (data, ind) {

                //var ele1 = document.getElementsByClassName("enabletable" + ind);
                //for (var j = 0; j < ele1.length; j++) {
                //    ele1[j].style['pointer-events'] = "auto";
                //    ele1[j].style.border = "1px solid #ddd";
                //    ele1[j].style['-webkit-appearance'] = "auto";
                //    ele1[j].style['-moz-appearance'] = "auto";
                //}
                //$scope['edit' + ind] = false;
                var sessiodata = AdminService.GetCollegeDetails($scope.UserTypeID, $scope.UserName);
                sessiodata.then(function (data) {
                    try { var data = JSON.parse(data) } catch (err) { }
                    if (data.Table.length > 0) {
                        $scope.ReportFound = true;
                        $scope.Noreports = false;
                        $scope.AddDetails = '0';
                        $scope.UpdateDetails = '1';
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        });
                        $scope.GetCollegeDetailsList = data.Table[0];
                        console.log($scope.GetCollegeDetailsList)
                      //  for (var j = 0; j < data.Table.length + 1; j++) {
                            //$scope['edit' + j] = true;
                            //console.log(data.Table[j].RegionID)
                        $scope.ChangeRegion($scope.GetCollegeDetailsList.RegionID);

                            //$scope['edit' + j] = true;
                            // $scope.ChangeRegion(data.Table[j].RegionID);
                        //}
                        $scope.CollegeID = $scope.GetCollegeDetailsList.CollegeID,
                        $scope.CollegeCode= $scope.GetCollegeDetailsList.CollegeCode,
                            $scope.CollegeName= $scope.GetCollegeDetailsList.CollegeName,
                            $scope.Village = $scope.GetCollegeDetailsList.Village_Town,
                            $scope.CollegeType = $scope.GetCollegeDetailsList.CollegeTypeID,
                            $scope.Region = $scope.GetCollegeDetailsList.RegionID,
                            $scope.District = $scope.GetCollegeDetailsList.DistrictID,
                            $scope.YearofEstablishment = $scope.GetCollegeDetailsList.YearOfEstablishment,
                            $scope.CollegeAddress = $scope.GetCollegeDetailsList.CollegeAddress,
                                                        $scope.PrinciaplName= $scope.GetCollegeDetailsList.PrinciaplName,
                                                            $scope.PhoneNumber= $scope.GetCollegeDetailsList.PhoneNumber,
                            $scope.Email = $scope.GetCollegeDetailsList.CollegeEmail,
                            $scope.CollegeWebSite = $scope.GetCollegeDetailsList.CollegeWebSie,
                                                                        $scope.HostelAvailable= $scope.GetCollegeDetailsList.HostelAvailable,
                                                                            $scope.BoysHostel= $scope.GetCollegeDetailsList.BoysHostel,
                                                                                $scope.GirlsHostel= $scope.GetCollegeDetailsList.GirlsHostel,
                                                                                    $scope.BoysHostelCapacity= $scope.GetCollegeDetailsList.BoysHostelCapacity,
                                                                                        $scope.GirlsHostelCapacity= $scope.GetCollegeDetailsList.GirlsHostelCapacity,
                                                                                            $scope.NoOfDigitalClassrooms= $scope.GetCollegeDetailsList.NoOfDigitalClassrooms,
                                                                                                $scope.DigitalClassromRemarks= $scope.GetCollegeDetailsList.DigitalClassromRemarks,
                            $scope.DigitalClassroomMajorEquipment = $scope.GetCollegeDetailsList.DCMajorEquipment,
                            $scope.VirtualClassroomMajorEquipment = $scope.GetCollegeDetailsList.VCMajorEquipment,
                            $scope.AntiRaggingCommitee = $scope.GetCollegeDetailsList.AntiRaggingCommitee,
                            $scope.ParentsCommitee = $scope.GetCollegeDetailsList.ParentsCommitee,
                            $scope.GrievanceCellCommitee = $scope.GetCollegeDetailsList.GrievanceCellCommitee,
                            $scope.WomenEmpowermentCellCommitee = $scope.GetCollegeDetailsList.WomenEmpowermentCellCommitee,
                            $scope.IndustryConnectandPlacementCell = $scope.GetCollegeDetailsList.IndustryConnectandPlacementCell,
                                                                                                    $scope.NoOfVirtualClassrooms= $scope.GetCollegeDetailsList.NoOfVirtualClassrooms,
                                                                                                        $scope.VirtualClassromRemarks= $scope.GetCollegeDetailsList.VirtualClassromRemarks
                        $scope.userPhoto = $scope.GetCollegeDetailsList.CollegePhotos


                    } else {
                        $scope.ReportFound = false;
                        $scope.Noreports = true;
                    }
                }, function (error) {
                    $scope.GetCollegeDetailsList = [];
                    $scope.ReportFound = fale;
                    $scope.Noreports = true;
                });

            }

            $scope.UpdateCollegeData = function (data, ind) {
                $scope['edit' + ind] = true;

                var ele2 = document.getElementsByClassName("enabletable" + ind);
                for (var j = 0; j < ele2.length; j++) {
                    ele2[j].style['pointer-events'] = "none";
                    ele2[j].style.border = "0";
                    ele2[j].style['-webkit-appearance'] = "none";
                    ele2[j].style['-moz-appearance'] = "none";
                }

                var datatypeid = 2;

                if ($scope.CollegeCode == null || $scope.CollegeCode == "" || $scope.CollegeCode == undefined) {
                    alert("Please Enter College Code");
                    return;
                }
                if ($scope.CollegeName == null || $scope.CollegeName == "" || $scope.CollegeName == undefined) {
                    alert("Please Enter CollegeName");
                    return;
                }

                if ($scope.Village == null || $scope.Village == "" || $scope.Village == undefined) {
                    alert("Please Enter Village Name");
                    return;
                }

                if ($scope.CollegeType == null || $scope.CollegeType == "" || $scope.CollegeType == undefined) {
                    alert("Please Select CollegeType");
                    return;
                }
                if ($scope.Region == null || $scope.Region == "" || $scope.Region == undefined) {
                    alert("Please Select Region");
                    return;
                }
                if ($scope.District == null || $scope.District == "" || $scope.District == undefined) {
                    alert("Please Select District");
                    return;
                }
                if ($scope.YearofEstablishment == null || $scope.YearofEstablishment == "" || $scope.YearofEstablishment == undefined) {
                    alert("Please Enter Year of Establishment");
                    return;
                }
                if ($scope.CollegeAddress == null || $scope.CollegeAddress == "" || $scope.CollegeAddress == undefined) {
                    alert("Please Enter College Address");
                    return;
                }
                if ($scope.PrinciaplName == null || $scope.PrinciaplName == "" || $scope.PrinciaplName == undefined) {
                    alert("Please Enter Princiapal Name");
                    return;
                }

                if ($scope.PhoneNumber == null || $scope.PhoneNumber == "" || $scope.PhoneNumber == undefined) {
                    alert("Please Enter Phone Number");
                    return;
                }

                if ($scope.Email == null || $scope.Email == "" || $scope.Email == undefined) {
                    alert("Please Enter Email");
                    return;
                }
                if ($scope.CollegeWebSite == null || $scope.CollegeWebSite == "" || $scope.CollegeWebSite == undefined) {
                    alert("Please Enter College WebSite");
                    return;
                }
                if ($scope.HostelAvailable == false) {
                    $scope.BoysHostel = false
                    $scope.GirlsHostel = false
                    $scope.BoysHostelCapacity = 0;
                    $scope.GirlsHostelCapacity = 0;
                } else {
                    if ($scope.HostelAvailable == null || $scope.HostelAvailable == "" || $scope.HostelAvailable == undefined) {
                        alert("Please Enter Hostel Available");
                        return;
                    }
                    if ($scope.BoysHostel == false) {
                        $scope.BoysHostelCapacity = 0;
                        $scope.BoysHostel = false
                    } else {
                        if ($scope.BoysHostel == null || $scope.BoysHostel == "" || $scope.BoysHostel == undefined) {
                            alert("Please Enter Boys Hostel");
                            return;
                        }
                        if ($scope.BoysHostelCapacity == null || $scope.BoysHostelCapacity == "" || $scope.BoysHostelCapacity == undefined) {
                            alert("Please Enter Boys Hostel Capacity");
                            return;
                        }
                    }
                    if ($scope.GirlsHostel == false) {
                        $scope.GirlsHostel = false
                        $scope.GirlsHostelCapacity = 0;
                    } else {
                        if ($scope.GirlsHostel == null || $scope.GirlsHostel == "" || $scope.GirlsHostel == undefined) {
                            alert("Please Enter Girls Hostel");
                            return;
                        }
                        if ($scope.GirlsHostelCapacity == null || $scope.GirlsHostelCapacity == "" || $scope.GirlsHostelCapacity == undefined) {
                            alert("Please Enter Girls Hostel Capacity");
                            return;
                        }

                    }
                }

                if ($scope.NoOfDigitalClassrooms == null || $scope.NoOfDigitalClassrooms == "" || $scope.NoOfDigitalClassrooms == undefined) {
                    alert("Please Enter No Of Digital Classrooms");
                    return;
                }
                if ($scope.DigitalClassroomMajorEquipment == null || $scope.DigitalClassroomMajorEquipment == "" || $scope.DigitalClassroomMajorEquipment == undefined) {
                    alert("Please Enter Digital Class room Major Equipment");
                    return;
                }
                if ($scope.DigitalClassromRemarks == null || $scope.DigitalClassromRemarks == "" || $scope.DigitalClassromRemarks == undefined) {
                    alert("Please Enter Digital Classrom Remarks");
                    return;
                }
                if ($scope.NoOfVirtualClassrooms == null || $scope.NoOfVirtualClassrooms == "" || $scope.NoOfVirtualClassrooms == undefined) {
                    alert("Please No Of Virtual Classrooms ");
                    return;
                }
                if ($scope.VirtualClassroomMajorEquipment == null || $scope.VirtualClassroomMajorEquipment == "" || $scope.VirtualClassroomMajorEquipment == undefined) {
                    alert("Please Enter Virtual Class room Major Equipment");
                    return;
                }
                if ($scope.VirtualClassromRemarks == null || $scope.VirtualClassromRemarks == "" || $scope.VirtualClassromRemarks == undefined) {
                    alert("Please Enter Virtual Class Room Remarks");
                    return;
                }
                if ($scope.AntiRaggingCommitee == null || $scope.AntiRaggingCommitee == "" || $scope.AntiRaggingCommitee == undefined) {
                    $scope.AntiRaggingCommitee = "NA";
                }
                if ($scope.ParentsCommitee == null || $scope.ParentsCommitee == "" || $scope.ParentsCommitee == undefined) {
                    $scope.ParentsCommitee = "NA";
                }
                if ($scope.GrievanceCellCommitee == null || $scope.GrievanceCellCommitee == "" || $scope.GrievanceCellCommitee == undefined) {
                    $scope.GrievanceCellCommitee = "NA";
                }
                if ($scope.WomenEmpowermentCellCommitee == null || $scope.WomenEmpowermentCellCommitee == "" || $scope.WomenEmpowermentCellCommitee == undefined) {
                    $scope.WomenEmpowermentCellCommitee = "NA";
                }
                if ($scope.IndustryConnectandPlacementCell == null || $scope.IndustryConnectandPlacementCell == "" || $scope.IndustryConnectandPlacementCell == undefined) {
                    $scope.IndustryConnectandPlacementCell = "NA";
                }
                if ($scope.userPhoto == null || $scope.userPhoto == "" || $scope.userPhoto == undefined) {
                  //  alert("Upload College Photo");
                   /// return;
                    $scope.userPhoto1 = "/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg2RDhDNjMwRDU2RjExRTk4MkU5QTU3ODJGNEREQjQxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg2RDhDNjMxRDU2RjExRTk4MkU5QTU3ODJGNEREQjQxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODZEOEM2MkVENTZGMTFFOTgyRTlBNTc4MkY0RERCNDEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODZEOEM2MkZENTZGMTFFOTgyRTlBNTc4MkY0RERCNDEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8N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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q=="
                }
            

                var obj = {
                    "CollegeID": $scope.CollegeID,
                    "CollegeCode": $scope.CollegeCode,
                    "CollegeName": $scope.CollegeName,
                    "Village_Town": $scope.Village,
                    "CollegeTypeID": $scope.CollegeType,
                    "RegionID": $scope.Region,
                    "DistrictID": $scope.District,
                    "YearofEstablishment": $scope.YearofEstablishment,
                    "CollegeAddress": $scope.CollegeAddress,
                    "PrinciaplName": $scope.PrinciaplName,
                    "PhoneNumber": $scope.PhoneNumber,
                    "Email": $scope.Email,
                    "CollegeWebSite": $scope.CollegeWebSite,
                    "HostelAvailable": $scope.HostelAvailable,
                    "BoysHostel": $scope.BoysHostel,
                    "GirlsHostel": $scope.GirlsHostel,
                    "BoysHostelCapacity": $scope.BoysHostelCapacity,
                    "GirlsHostelCapacity": $scope.GirlsHostelCapacity,
                    "NoOfDigitalClassrooms": $scope.NoOfDigitalClassrooms,
                    "DCMajorEquipment": $scope.DigitalClassroomMajorEquipment,
                    "DigitalClassromRemarks": $scope.DigitalClassromRemarks,
                    "NoOfVirtualClassrooms": $scope.NoOfVirtualClassrooms,
                    "VCMajorEquipment": $scope.VirtualClassroomMajorEquipment,
                    "VirtualClassromRemarks": $scope.VirtualClassromRemarks,
                    "AntiRaggingCommitee": $scope.AntiRaggingCommitee,
                    "ParentsCommitee": $scope.ParentsCommitee,
                    "GrievanceCellCommitee": $scope.GrievanceCellCommitee,
                    "WomenEmpowermentCellCommitee": $scope.WomenEmpowermentCellCommitee,
                    "IndustryConnectandPlacementCell": $scope.IndustryConnectandPlacementCell,
                    "CollegePhoto": $scope.userPhoto1,
                    "UserName": $scope.UserName
                }
                console.log(obj)
                var UpdateCollegeData = AdminService.UpdateCollegeData(obj)
                UpdateCollegeData.then(function (response) {
                    try { var response = JSON.parse(response) } catch (err) { }
                    if (response.Table[0].ResponseCode == '200') {
                        alert(response.Table[0].ResponseDescription);
                        $scope.GetCollegeDetails()
                       // $scope.ClearData()
                        $scope.AddDetails = '0';
                        $scope.UpdateDetails = '1';
                        $scope.Editsemesterdat()
                    } else {
                        alert(response.Table[0].ResponseDescription);

                    }
                },
                    function (error) {
                        alert("something Went Wrong")


                    });
            }

        $scope.ClearData = function () {
        $scope.CollegeID ="";
            $scope.CollegeCode ="";
               $scope.CollegeName ="";
                    $scope.Village ="";
                       $scope.CollegeType ="";
                            $scope.Region ="";
                                $scope.District ="";
                                     $scope.YearofEstablishment ="";
                                       $scope.CollegeAddress ="";
                                          $scope.PrinciaplName ="";
                                             $scope.PhoneNumber ="";
                                                $scope.Email ="";
                                                   $scope.CollegeWebSite ="";
                                                      $scope.HostelAvailable ="";
                                                        $scope.BoysHostel ="";
                                                           $scope.GirlsHostel ="";
                                                                $scope.BoysHostelCapacity ="";
                                                                    $scope.GirlsHostelCapacity ="";
                                                                        $scope.NoOfDigitalClassrooms ="";
                                                                               $scope.DigitalClassromRemarks ="";
                                                                                     $scope.NoOfVirtualClassrooms ="";
            $scope.DigitalClassroomMajorEquipment = "";
            $scope.VirtualClassroomMajorEquipment = "";
            $scope.AntiRaggingCommitee = "";
            $scope.ParentsCommitee = "";
            $scope.GrievanceCellCommitee = "";
            $scope.WomenEmpowermentCellCommitee = "";
            $scope.IndustryConnectandPlacementCell = "";
                                                                           //    $scope.UserName
        }

    })
})