define(['app'], function (app) {
    app.controller("IndustryConnectController", function ($scope, $state, AdminService, $filter, $localStorage) {

        const $ctrl = this;
        $ctrl.$onInit = () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            $scope.Region = '3'
            $scope.District = '7'
            $scope.CollegeType = '2'
            $scope.GetRegions()
            $scope.GetDistricts($scope.Region)
            $scope.CollegeTypes()
            $scope.FilterIndustryConnect()
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

        $scope.FilterIndustryConnect = function () {
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

            var GetDistricts = AdminService.FilterIndustryConnect($scope.Region, $scope.District, $scope.CollegeType);
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
                    $scope.CollegeList = res.Table;

                } else {
                    $scope.CollegeList = []
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