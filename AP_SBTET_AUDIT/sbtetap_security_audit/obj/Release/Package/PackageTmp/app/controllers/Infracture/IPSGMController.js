define(['app'], function (app) {
    app.controller("IPSGMController", function ($scope, $state, AdminService, $filter, $localStorage) {


        const $ctrl = this;
        $ctrl.$onInit = () => {

            $scope.GetAcademicYears()
            $scope.GetDistricts()
            $scope.GetSports();
        }


        $scope.Levels = [{ "Id": "1", "Value": "State" }, { "Id": "2", "Value": "District" }]


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


        $scope.FilterIPSGM = function () {
            var FilterTechFest = AdminService.FilterIPSGM($scope.AcademicYear, $scope.IPSGMLevel, $scope.District);
            FilterTechFest.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                if (res.Table.length > 0) {
                    $scope.GetIPSGMList = res.Table;
                    console.log($scope.GetIPSGMList)
                    // console.log($scope.GetTechFestList)
                    $scope.LatestAcademicYear = res.Table[0].AcademicYear;
                    $scope.Venue = res.Table[0].Venue;
                    $scope.FromDate = res.Table[0].FromDate;
                    $scope.ToDate = res.Table[0].ToDate;
                    var DataFiles = []

                    for (let j = 1; j < $scope.GetIPSGMList.length ; j++) {
                        for (let i = 1; i < $scope.GetSportsList.length; i++) {
                            if ($scope.GetIPSGMList[j].SportID == $scope.GetSportsList[i].Id) {
                                var obj = {};
                                obj = $scope.GetIPSGMList[j]
                                obj.colour = "btn-success";
                                DataFiles.push();
                                DataFiles.push(obj);
                            }

                        }
                        console.log(DataFiles)
                    }

                } else {
                    alert("No Data Found")
                    $scope.GetIPSGMList = []
                }


            },
                function (error) {
                    alert("error while loading TechFest ");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }
    })
})