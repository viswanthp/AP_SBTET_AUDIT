define(['app'], function (app) {
    app.controller("TechFestMasterController", function ($scope, $localStorage, $state, AdminService, $filter) {


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

        $scope.GetTechFest = function (username) {
            var GetTechFest = AdminService.GetMasterTechFest(username);
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
            var GetTechFestById = AdminService.GetMasterTechFestById(CollegeId);
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

                $scope.TechFestID = res.Table[0].TechFestID
                $scope.TechFestLevel = res.Table[0].TechFestLevel
                $scope.Venue = res.Table[0].Venue
                $scope.FromDate = res.Table[0].FromDate
                $scope.ToDate = res.Table[0].ToDate
   
                $scope.AcademicYear = res.Table[0].AcademicYearID
                $scope.District = res.Table[0].DistrictID
            },
                function (error) {
                    alert("error while loading TechFest");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }





        $scope.AddTechFest = function () {
            if ($scope.AcademicYear == null || $scope.AcademicYear == "" || $scope.AcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.TechFestLevel == null || $scope.TechFestLevel == "" || $scope.TechFestLevel == undefined) {
                alert("Please Enter TechFest Level");
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
     
           

            if ($scope.TechFestLevel == 'State') {
                $scope.District = 0
            }
            if ($scope.District == null || $scope.District == "" || $scope.District == undefined) {
                $scope.District = 0
            }

            var obj = {

                "AcademicYearID": $scope.AcademicYear,
                "TechFestLevel": $scope.TechFestLevel,
                "Venue": $scope.Venue,
                "FromDate": moment($scope.FromDate).format("DD-MM-YYYY"),
                "ToDate": moment($scope.ToDate).format("DD-MM-YYYY"),
                
                "DistrictID": $scope.District,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddMasterTechFest(obj);
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
          
            if ($scope.TechFestLevel == null || $scope.TechFestLevel == "" || $scope.TechFestLevel == undefined) {
                alert("Please Enter TechFest Level");
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
            if ($scope.TechFestLevel == 'State') {
                $scope.District = 0
            }
            if ($scope.District == null || $scope.District == "" || $scope.District == undefined) {
                $scope.District = 0
            }

            var obj = {
                "TechFestID": $scope.TechFestID,
                "AcademicYearID": $scope.AcademicYear,
                "TechFestLevel": $scope.TechFestLevel,
                "Venue": $scope.Venue,
                "FromDate": moment($scope.FromDate).format("DD-MM-YYYY"),
                "ToDate": moment($scope.ToDate).format("DD-MM-YYYY"),
                "DistrictID": $scope.District,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdateMasterTechFest(obj);
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


        $scope.DeleteTechFestMaster = function (data, TechFestID) {
            $scope.Id = TechFestID;
            $scope.TechFestLevel1 = data.TechFestLevel;
            $scope.Venue1 = data.Venue;
            document.getElementById('id01').style.display = 'block'
        }

        $scope.DeleteTechFestMasterConfirm = function () {
            var GetTechFestMasterById = AdminService.DeleteTechFestMasterById($scope.Id);
            GetTechFestMasterById.then(function (resp) {
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