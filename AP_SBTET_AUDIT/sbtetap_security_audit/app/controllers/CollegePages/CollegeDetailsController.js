define(['app'], function (app) {
    app.controller("CollegeDetailsController", function ($scope, $localStorage, $state, AdminService, $filter) {



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

            if (fileSize > 100000) {
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
            //if ($scope.NBAAffiliated == null || $scope.NBAAffiliated == "" || $scope.NBAAffiliated == undefined) {
            //    alert("Please Select NBA Status");
            //    return;
            //}
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
                $scope.userPhoto1 = "";

            }
           
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
                "UserName": $scope.UserName,
                //"NBAAffiliated": $scope.NBAAffiliated
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
                //if ($scope.NBAAffiliated == null || $scope.NBAAffiliated == "" || $scope.NBAAffiliated == undefined) {
                //    alert("Please Select NBA Status");
                //    return;
                //}
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
                    $scope.userPhoto1 = "";
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
                    "UserName": $scope.UserName,
                    //"NBAAffiliated": $scope.NBAAffiliated
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