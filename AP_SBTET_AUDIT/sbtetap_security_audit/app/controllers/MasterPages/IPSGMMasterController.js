define(['app'], function (app) {
    app.controller("IPSGMMasterController", function ($scope, $localStorage, $state, AdminService, $filter) {


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
            //  $scope.GetCollegeTypes()

            //   $scope.GetIPSGM($scope.UserName)
            $scope.AddDetails = '1';
            $scope.UpdateDetails = '0';
            //     $scope.GetColleges();
            $scope.GetIPSGM();
            $scope.GetAcademicYears();

            $scope.Levels = [{ "Id": "1", "Value": "State" }, { "Id": "2", "Value": "District" }]

            $scope.GetDistricts();
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


        $scope.GetColleges = function (username) {
            var GetColleges = AdminService.GetColleges(username);
            GetColleges.then(function (response) {
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
            var GetIPSGM = AdminService.GetMasterIPSGM(username);
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
            var GetIPSGMById = AdminService.GetMasterIPSGMById(CollegeId);
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
                // $scope.GetCollegeLabsList = res.Table;

                $scope.IPSGMID = res.Table[0].IPSGMID
                $scope.IPSGMLevel = res.Table[0].IPSGMLevel
                $scope.Venue = res.Table[0].Venue
                $scope.FromDate = res.Table[0].FromDate
                $scope.ToDate = res.Table[0].ToDate
                $scope.NameofSport = res.Table[0].NameofSport
                $scope.TeamMembers = res.Table[0].TeamMembers
                $scope.WinningPlace = res.Table[0].WinningPlace
                $scope.College = res.Table[0].CollegeID
                $scope.AcademicYear = res.Table[0].AcademicYearID
                $scope.District = res.Table[0].DistrictID
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
                alert("Please Enter IPSGMLevell");
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
            if ($scope.IPSGMLevel == 'State') {
                $scope.District = 0
            }
            if ($scope.District == null || $scope.District == "" || $scope.District == undefined) {
                $scope.District =0
            }

            var obj = {
                "AcademicYearID": $scope.AcademicYear,
                "IPSGMLevel": $scope.IPSGMLevel,
                "Venue": $scope.Venue,
                "FromDate": moment($scope.FromDate).format("DD-MM-YYYY"),
                "ToDate": moment($scope.ToDate).format("DD-MM-YYYY") ,
                "DistrictID": $scope.District,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddMasterIPSGM(obj);
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
            $scope.District = "";

        }

        $scope.UpdateIPSGM = function (CollegeLabID) {
            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.IPSGMLevel == null || $scope.IPSGMLevel == "" || $scope.IPSGMLevel == undefined) {
                alert("Please Enter IPSGMLevell");
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
            if ($scope.IPSGMLevel == 'State') {
                $scope.District = 0
            }
            if ($scope.District == null || $scope.District == "" || $scope.District == undefined) {
                $scope.District = 0
            }

            var obj = {
                "IPSGMID": $scope.IPSGMID,
                "AcademicYearID": $scope.AcademicYear,
                "IPSGMLevel": $scope.IPSGMLevel,
                "Venue": $scope.Venue,
                "FromDate": moment($scope.FromDate).format("DD-MM-YYYY"),
                "ToDate": moment($scope.ToDate).format("DD-MM-YYYY"),
                "DistrictID": $scope.District,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdateMasterIPSGM(obj);
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

        $scope.DeleteIPSGMMasterById = function (IPSGMID, active) {
            if (active == false) {
                active = 1
            } else if (active == true) {
                active = 0
            }

            var objs = {
                "IPSGMID": IPSGMID,
                "active": active,
            }

            var admstaff = AdminService.DeleteIPSGMMasterById(objs);
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