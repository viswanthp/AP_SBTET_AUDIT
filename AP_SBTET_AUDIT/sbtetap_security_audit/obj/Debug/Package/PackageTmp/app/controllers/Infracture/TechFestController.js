define(['app'], function (app) {
    app.controller("TechFestController", function ($scope, $state, AdminService, $filter, $localStorage) {


        const $ctrl = this;
        $ctrl.$onInit = () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            $scope.GetAcademicYears()
            $scope.GetDistricts()
        }

        $scope.Levels = [{ "Id": "1", "Value": "State" }, { "Id": "2", "Value": "District" }]

        $scope.Districts = [{ "Id": "1", "Value": "Guntur" }, { "Id": "2", "Value": "Krishna" }]

        $scope.AcademicYears = [{ "Id": "1", "Value": "2023" },{ "Id": "1", "Value": "2022" },{ "Id": "1", "Value": "2021" }]


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


        $scope.FilterTechFest = function () {
            var FilterTechFest = AdminService.FilterTechFest($scope.AcademicYear, $scope.TechFestLevel, $scope.District);
            FilterTechFest.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                if (res.Table.length > 0) {
                    $scope.GetTechFestList = res.Table;
                   // console.log($scope.GetTechFestList)
                    $scope.LatestAcademicYear = res.Table[0].AcademicYear;
                    $scope.Venue = res.Table[0].Venue;
                    $scope.FromDate = res.Table[0].FromDate;
                    $scope.ToDate = res.Table[0].ToDate;
                } else {
                    alert("No Data Found")
                    $scope.GetTechFestList =[]
                }
                

            },
                function (error) {
                    alert("error while loading TechFest ");
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

    })
})