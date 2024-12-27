define(['app'], function (app) {
    app.controller("TechFestController", function ($scope, $localStorage, $state, AdminService, $filter) {


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
              $scope.GetColleges()

            $scope.GetTechFest()
            $scope.AddDetails = '1';
            $scope.UpdateDetails = '0';
          $scope.GetDistricts();
            $scope.GetAcademicYears();
            $scope.Levels = [{ "Id": "1", "Value": "State" }, { "Id": "2", "Value": "District" }]

            $scope.GetPlaces = [{ "Id": "1", "Value": "WINNER" }, { "Id": "2", "Value": " First  RUNNER" }, { "Id": "2", "Value": "Second RUNNER" }]


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

        $scope.GetCollegesByDistrictId = function () {
            var GetCollegesByDistrictId = AdminService.GetCollegesByDistrictId($scope.District);
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

        $scope.GetTechFest = function (username) {
            var GetTechFest = AdminService.GetTechFest(username);
            GetTechFest.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetTechFestList = res.Table;

            },
                function (error) {
                    alert("error while loading TechFest ");
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

        $scope.GetTechFestById = function (CollegeId) {
            var GetTechFestById = AdminService.GetTechFestById(CollegeId);
            GetTechFestById.then(function (response) {
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
                $scope.TechFestDetailsID = res.Table[0].TechFestDetailsID
         
                $scope.TechFestLevel = res.Table[0].TechFestLevel
                $scope.Venue = res.Table[0].Venue
                $scope.FromDate = res.Table[0].FromDate
                $scope.ToDate = res.Table[0].ToDate
                $scope.NameofProject = res.Table[0].NameofProject
                $scope.TeamMembers = res.Table[0].TeamMembers
                $scope.WinningPlace = res.Table[0].WinningPlace
                $scope.AcademicYear = res.Table[0].AcademicYearID
                $scope.College = res.Table[0].CollegeID
     
                $scope.TechFestID = res.Table[0].TechFestID
            },
                function (error) {
                    alert("error while loading TechFest");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }



        

        $scope.GetTechFestDetails = function () {
            if ($scope.AcademicYear != null && $scope.TechFestLevel != null) {

                if ($scope.TechFestLevel == 'District') {

                    if ($scope.District == null) {

                        if ($scope.District == null || $scope.District == "" || $scope.District == undefined) {
                            alert("Please Select District");
                            return;
                        }
                    }
                } else {
                    $scope.District == 0;
                }

                if ($scope.District) {
                    //alert($scope.District)
                    $scope.GetCollegesByDistrictId($scope.District)
                }
                if ($scope.IPSGMLevel == 'State') {
                    $scope.GetCollegesByDistrictId(0)
                }
                var GetTechFestDetails = AdminService.GetTechFestDetails($scope.AcademicYear, $scope.TechFestLevel, $scope.District);
                GetTechFestDetails.then(function (response) {
                    try {
                        var res = JSON.parse(response);
                    }
                    catch (err) { }
                    if (res.Table.length > 0) {
                    $scope.GetIPSGMDetailsList = res.Table;
                    $scope.Venue = res.Table[0].Venue
                    $scope.FromDate = res.Table[0].FromDate
                    $scope.ToDate = res.Table[0].ToDate
                        $scope.ToDate = res.Table[0].ToDate
                        $scope.TechFestID = res.Table[0].TechFestID
                    } else {
                    if ($scope.TechFestLevel == 'State') {
                        alert("Please Add Details in Tech Fest Mater")
                        $scope.TechFestLevel = "";
                        $scope.Venue = "";
                        $scope.FromDate = "";
                        $scope.ToDate = "";
                    } else if ($scope.TechFestLevel == 'District' && $scope.District != null) {
                        alert("Please Add Details in Tech Fest Mater")
                        $scope.TechFestLevel = "";
                        $scope.Venue = "";
                        $scope.FromDate = "";
                        $scope.ToDate = "";
                        $scope.District = null;
                    }
                    }
                },
                    function (error) {
                        alert("error while loading Tech Fest Details");
                        var err = JSON.parse(error);
                        var err = JSON.parse(error);

                    });
            }

        }



        $scope.AddTechFest = function () {
            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.College == null || $scope.College == "" || $scope.College == undefined) {
                alert("Please Select College");
                return;
            }

            if ($scope.NameofProject == null || $scope.NameofProject == "" || $scope.NameofProject == undefined) {
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
              
                "TechFestID": $scope.TechFestID,
                "TechFestLevel": $scope.TechFestLevel,
                "Venue": $scope.Venue,
                "FromDate": $scope.FromDate,
                "ToDate": $scope.ToDate,
                "NameofProject": $scope.NameofProject,
                "TeamMembers": $scope.TeamMembers,
                "WinningPlace": $scope.WinningPlace,
                "CollegeID": $scope.College,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddTechFest(obj);
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
                    $scope.GetTechFest()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetTechFest()
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
            $scope.CollegeTechFestID = "";
            $scope.TechFestLevel = "";
            $scope.Venue = "";
            $scope.FromDate = "";
            $scope.ToDate = "";
            $scope.NameofProject = "";
            $scope.TeamMembers = "";
            $scope.WinningPlace = "";
            $scope.CollegeID = "";
            $scope.CollegeTechFestID = "";
            $scope.College = "";
            $scope.AcademicYear = "";


        }

        $scope.UpdateTechFest = function (CollegeLabID) {
            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.College == null || $scope.College == "" || $scope.College == undefined) {
                alert("Please Select College");
                return;
            }

            
            if ($scope.NameofProject == null || $scope.NameofProject == "" || $scope.NameofProject == undefined) {
                alert("Please Enter Name of Project");
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
                "TechFestDetailsID": $scope.TechFestDetailsID,
                "NameofProject": $scope.NameofProject,
                "TeamMembers": $scope.TeamMembers,
                "WinningPlace": $scope.WinningPlace,
                "CollegeID": $scope.College,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdateTechFest(obj);
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
                    $scope.GetTechFest()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetTechFest()
                    $scope.ClearData()
                }

                else {
                    alert("Not Added")
                    $scope.GetTechFest()
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }


        $scope.DeleteTechFest = function (data, TechFestDetailsID) {
            $scope.Id = TechFestDetailsID
            $scope.CollegeName1 = data.CollegeName
            $scope.TechFestLevel1 = data.TechFestLevel;
            document.getElementById('id01').style.display = 'block'
        }

        $scope.DeleteTechFestConfirm = function () {
            var GetTechFestById = AdminService.DeleteTechFestById($scope.Id);
            GetTechFestById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) {
                    document.getElementById('id01').style.display = 'none'
                }

                if (res.Table.length > 0) {
                    document.getElementById('id01').style.display = 'none'
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetTechFest();

                }
                else {
                    $scope.DistrictsData = [];
                    document.getElementById('id01').style.display = 'none'
                    $scope.GetTechFest();
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