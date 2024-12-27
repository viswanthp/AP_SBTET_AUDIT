define(['app'], function (app) {
    app.controller("IPSGMSettingsController", function ($scope, $localStorage, $state, AdminService, $filter) {


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
//$scope.GetColleges()

         //   $scope.GetIPSGM($scope.UserName)

            $scope.AddDetails = '1';
            $scope.UpdateDetails = '0';
            $scope.GetIPSGM();
            $scope.GetSports();
            $scope.GetAcademicYears();

            $scope.Levels = [{ "Id": "1", "Value": "State" }, { "Id": "2", "Value": "District" }]

            //$scope.GetPlaces = [{ "Id": "1", "Value": "WINNER" }, { "Id": "2", "Value": " First  RUNNER" }, { "Id": "2", "Value": "Second RUNNER" }]

            $scope.GetDistricts();
            $scope.GetWinningPlaces()
        }


        
        $scope.GetWinningPlaces = function () {
            var GetWinningPlaces = AdminService.GetWinningPlaces();
            GetWinningPlaces.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetPlaces = res.Table;

            },
                function (error) {
                    alert("error while loading WinningPlaces");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetSports = function () {
            var GetSport = AdminService.GetSports();
            GetSport.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetSportsList = res.Table;

            },
                function (error) {
                    alert("error while loading Sports");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


        $scope.GetAcademicYears = function () {
            var GetAcademicYears = AdminService.GetAcademicYears();
            GetAcademicYears.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetAcademicYearsList = res.Table;

            },
                function (error) {
                    alert("error while loading Academic Years");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetDistricts = function () {
            var GetDistricts = AdminService.GetAllDistricts();
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


        

        $scope.GetIPSGMDetails = function () {
           
            if ($scope.AcademicYear != null && $scope.IPSGMLevel != null) {
                 
                if ($scope.IPSGMLevel == 'District Level') {
                
                    if ($scope.District == null || $scope.District == "" || $scope.District == undefined) {
                        alert("Please Select District");
                        return;
                    } 
                    
                }
                if ($scope.District){
                    //alert($scope.District)
                    $scope.GetCollegesByDistrictId($scope.District)
                }
                if ($scope.IPSGMLevel == 'State'){
                    $scope.GetCollegesByDistrictId(0)
                }
            var GetIPSGMDetails = AdminService.GetIPSGMDetails($scope.AcademicYear, $scope.IPSGMLevel, $scope.District);
            GetIPSGMDetails.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                if (res.Table.length > 0) {
                    $scope.GetIPSGMDetailsList = res.Table;
                    $scope.Venue = res.Table[0].Venue
                    $scope.FromDate = res.Table[0].FromDate
                    $scope.ToDate = res.Table[0].ToDate
                    $scope.IPSGMID = res.Table[0].IPSGMID
                } else {
                    if ($scope.IPSGMLevel=='State') {
                    alert("Please Add Details in IPSGM Mater")
                        $scope.IPSGMLevel = "";
                        $scope.Venue = "";
                        $scope.FromDate = "";
                        $scope.ToDate = "";
                        $scope.District = null;
                    } else if ($scope.IPSGMLevel == 'District' && $scope.District != null) {
                        alert("Please Add Details in IPSGM Mater")
                        $scope.IPSGMLevel = "";
                        $scope.Venue = "";
                        $scope.FromDate = "";
                        $scope.ToDate = "";
                        $scope.District = null;
                    }
                }
            },
                function (error) {
                    alert("error while loading IPSGM Details");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
                    }
           
        }


        $scope.GetCollegesByDistrictId = function (username) {
            var GetCollegesByDistrictId = AdminService.GetCollegesByDistrictId(username);
            GetCollegesByDistrictId.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetCollegesList = res.Table;

            },
                function (error) {
                    alert("error while loading Colleges ");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetIPSGM = function (username) {
            var GetIPSGM = AdminService.GetAllIPSGMDetails(username);
            GetIPSGM.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetIPSGMList = res.Table;

            },
                function (error) {
                    alert("error while loading IPSGM ");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


        $scope.GetIPSGMById = function (CollegeId) {
            var GetIPSGMById = AdminService.GetIPSGMById(CollegeId);
            GetIPSGMById.then(function (response) {
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
                $scope.AddData = true;
                $scope.IPSGMDetailsID = res.Table[0].IPSGMDetailsID
                $scope.IPSGMLevel = res.Table[0].IPSGMLevel
                $scope.District = res.Table[0].DistrictID
              
                if ($scope.IPSGMLevel == 'State') {
                    $scope.GetCollegesByDistrictId(0)
                } else {
                    $scope.GetCollegesByDistrictId($scope.District)
                }
                $scope.Venue = res.Table[0].Venue
                $scope.FromDate = res.Table[0].FromDate
                $scope.ToDate = res.Table[0].ToDate
                $scope.NameofSport = res.Table[0].NameofSport
                $scope.TeamMembers = res.Table[0].TeamMembers
                $scope.WinningPlace = res.Table[0].WinningPlace
                $scope.College = res.Table[0].CollegeID
                $scope.AcademicYear = res.Table[0].AcademicYearID
             
            },
                function (error) {
                    alert("error while loading IPSGM");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

    



        $scope.AddIPSGM = function () {
            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
          
            
            if ($scope.IPSGMLevel == null || $scope.IPSGMLevel == "" || $scope.IPSGMLevel == undefined) {
                alert("Please Enter IPSGM Level");
                return;
            }
            if ($scope.Venue == null || $scope.Venue == "" || $scope.Venue == undefined) {
                alert("Please Enter Venue");
                return;
            }
            if ($scope.FromDate == null || $scope.FromDate == "" || $scope.FromDate == undefined) {
                alert("Please select FromDate");
                return;
            }
            if ($scope.ToDate == null || $scope.ToDate == "" || $scope.ToDate == undefined) {
                alert("Please select ToDate");
                return;
            }
            if ($scope.NameofSport == null || $scope.NameofSport == "" || $scope.NameofSport == undefined) {
                alert("Please Select NameofSport");
                return;
            }
            if ($scope.TeamMembers == null || $scope.TeamMembers == "" || $scope.TeamMembers == undefined) {
                alert("Please Enter TeamMembers");
                return;
            }
            if ($scope.WinningPlace == null || $scope.WinningPlace == "" || $scope.WinningPlace == undefined) {
                alert("Please Enter Venue");
                return;
            }

            if ($scope.College == null || $scope.College == "" || $scope.College == undefined) {
                alert("Please Select College");
                return;
            }

            var obj = {

           
                "IPSGMID": $scope.IPSGMID,
                "NameofSport": $scope.NameofSport,
                "TeamMembers": $scope.TeamMembers,
                "WinningPlace": $scope.WinningPlace,
                "CollegeID": $scope.College,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddIPSGM(obj);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    $scope.AddDetails = '1';
                    $scope.UpdateDetails = '0';
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetIPSGM($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetIPSGM($scope.UserName)
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
            $scope.CollegeIPSGMID = "";
            $scope.IPSGMLevel = "";
            $scope.Venue = "";
            $scope.FromDate = "";
            $scope.ToDate = "";
            $scope.NameofSport = "";
            $scope.TeamMembers = "";
            $scope.WinningPlace = "";
            $scope.CollegeID = "";
            $scope.CollegeIPSGMID = "";
            $scope.College = "";
            $scope.AcademicYear = "";
           

        }

        $scope.UpdateIPSGM = function (CollegeLabID) {
            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.College == null || $scope.College == "" || $scope.College == undefined) {
                alert("Please Select College");
                return;
            }

            if ($scope.IPSGMLevel == null || $scope.IPSGMLevel == "" || $scope.IPSGMLevel == undefined) {
                alert("Please Enter IPSGM Level");
                return;
            }
            if ($scope.Venue == null || $scope.Venue == "" || $scope.Venue == undefined) {
                alert("Please Enter Venue");
                return;
            }
            if ($scope.FromDate == null || $scope.FromDate == "" || $scope.FromDate == undefined) {
                alert("Please select FromDate");
                return;
            }
            if ($scope.ToDate == null || $scope.ToDate == "" || $scope.ToDate == undefined) {
                alert("Please select ToDate");
                return;
            }
            if ($scope.NameofSport == null || $scope.NameofSport == "" || $scope.NameofSport == undefined) {
                alert("Please Enter NameofSport");
                return;
            }
            if ($scope.TeamMembers == null || $scope.TeamMembers == "" || $scope.TeamMembers == undefined) {
                alert("Please Enter TeamMembers");
                return;
            }
            if ($scope.WinningPlace == null || $scope.WinningPlace == "" || $scope.WinningPlace == undefined) {
                alert("Please Enter Venue");
                return;
            }

            var obj = {
                "IPSGMDetailsID": $scope.IPSGMDetailsID,
                "NameofSport": $scope.NameofSport,
                "TeamMembers": $scope.TeamMembers,
                "WinningPlace": $scope.WinningPlace,
                "CollegeID": $scope.College,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdateIPSGM(obj);
            adddistcoorcentre.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    $scope.AddData = false;
                    $scope.AddDetails = '1';
                    $scope.UpdateDetails = '0';
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetIPSGM($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetIPSGM($scope.UserName)
                    $scope.ClearData()
                }

                else {
                    alert("Not Added")
                    $scope.GetIPSGM($scope.UserName)
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }

        $scope.DeleteIPSGMById = function (IPSGMID) {


            var objs = {
                "IPSGMID": IPSGMID,

            }

            var admstaff = AdminService.DeleteIPSGM(objs);
            admstaff.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetIPSGM($scope.UserName)
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