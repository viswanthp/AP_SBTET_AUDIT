define(['app'], function (app) {
    app.controller("LabsController", function ($scope, $state, AdminService, $filter, $localStorage) {


        const $ctrl = this;
    
        $ctrl.$onInit = () => {
          
            $scope.District = '27';
            $scope.CollegeType = '2'
            $scope.GetRegions()
            $scope.Region = '3'
         //   $scope.GetCollegeLabs()
            $scope.GetDistricts($scope.Region)
            $scope.CollegeTypes()
         
            $scope.FilterCollegeLabs()
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
              //  $scope.Region = '2'
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
           //     $scope.District = '9'


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
//$scope.CollegeType = '1'
            },
                function (error) {
                    //  $scope.Loading = false;
                    alert("error while loading College Types");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.FilterCollegeLabs = function () {
        
            $scope.NoData = false;
            $scope.Data = false;
            $scope.Loading = true;
            console.log($scope.Region, $scope.District, $scope.CollegeType)
            var FilterCollegeLabs = AdminService.FilterCollegeLabs($scope.Region, $scope.District, $scope.CollegeType);
            FilterCollegeLabs.then(function (response) {
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
                    $scope.LabsData = res.Table1;
                } else {
                    //alert("No Data Found")
                    $scope.CollegeList = "";
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