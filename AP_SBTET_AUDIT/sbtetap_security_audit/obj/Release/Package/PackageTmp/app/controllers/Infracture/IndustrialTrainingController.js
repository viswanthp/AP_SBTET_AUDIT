define(['app'], function (app) {
    app.controller("IndustrialTrainingController", function ($scope, $state, AdminService, $filter, $localStorage) {


        const $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.Region = '3'
            $scope.District = '7'
            $scope.CollegeType = '2'
            $scope.AcademicYear = 8;
            $scope.GetAcademicYears()
           
            $scope.GetRegions()
            $scope.GetDistricts($scope.Region)
            $scope.CollegeTypes()
            $scope.GetCollegeList()
         
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

        $scope.GetRegions = function () {
            //  $scope.Loading = true;
            var GetRegions = AdminService.GetRegions();
            GetRegions.then(function (response) {
                try {
                    //    $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    //   $scope.Loading = false;
                }
                $scope.Regions = res.Table;
             //   $scope.Region = '2'
                //GetCollegeList()

            },
                function (error) {
                    //  $scope.Loading = false;
                    alert("error while loading Regions");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


        $scope.GetDistricts = function () {
            //$scope.Loading = true;
            var GetDistricts = AdminService.GetDistrictsByRegionId($scope.Region);
            GetDistricts.then(function (response) {
                try {
                    //    $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    // $scope.Loading = false;
                }
                $scope.Districts = res.Table;
             //   $scope.District = '9'


            },
                function (error) {
                    //  $scope.Loading = false;
                    alert("error while loading Districts");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }



        $scope.CollegeTypes = function () {
            //  $scope.Loading = true;
            var CollegeTypes = AdminService.CollegeTypes();
            CollegeTypes.then(function (response) {
                try {
                    //  $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    //  $scope.Loading = false;
                }
                $scope.CollegeTypes = res.Table;
              //  $scope.CollegeType = '1'
            },
                function (error) {
                    //  $scope.Loading = false;
                    alert("error while loading College Types");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetCollegeList = function () {
            
            if ($scope.AcademicYear == "" || $scope.AcademicYear == null || $scope.AcademicYear == undefined) {
                alert("Please Select Academic Year");
                return;
            }
            if ($scope.Region == "" || $scope.Region == null || $scope.Region == undefined) {
                alert("Please Select Region");
                return;
            }
            if ($scope.District == "" || $scope.District == null || $scope.District == undefined) {
                alert("Please Select District");
                return;
            }
            if ($scope.CollegeType == "" || $scope.CollegeType == null || $scope.CollegeType == undefined) {
                alert("Please Select CollegeType");
                return;
            }
            $scope.NoData = false;
            $scope.Data = false;
            $scope.Loading = true;

            var GetDistricts = AdminService.FilterIndustrialTraining($scope.Region, $scope.District, $scope.CollegeType, $scope.AcademicYear);
            GetDistricts.then(function (response) {
                try {

                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.Loading = false;
                }
                if (res.Table.length > 0) {
                    $scope.Loading = false;
                    $scope.NoData = false;
                    $scope.Data = true;
                    $scope.CollegeData = res.Table;
                    $scope.Spell1List = res.Table1;
                    $scope.Spell2List = res.Table2;
                    $scope.AcademicYearName = res.Table2[0].AcademicYear;
                  //  $scope.HostelData = res.Table2;
                } else {
                    $scope.Loading = false;
                    $scope.NoData = true;
                    $scope.Data = false;
                }




            },
                function (error) {
                    $scope.Loading = false;
                    $scope.NoData = true;
                    $scope.Data = false;
                    alert("error while loading Colleges");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }
    })
})