define(['app'], function (app) {
    app.controller("TypewritingCollegesController", function ($scope, $state, AdminService, $filter, $localStorage) {
        const $ctrl = this;
        $ctrl.$onInit = () => {

            $scope.District = '9'

            $scope.GetDistricts()

            $scope.GetCollegeList()
        }





      


        $scope.GetDistricts = function () {
            //$scope.Loading = true;
            var GetDistricts = AdminService.GetAllDistricts();
            GetDistricts.then(function (response) {
                try {
                    //    $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    // $scope.Loading = false;
                }
                $scope.Districts = res.Table;
                $scope.District = '9'


            },
                function (error) {
                    //  $scope.Loading = false;
                    alert("error while loading Districts");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }



      
        $scope.GetCollegeList = function () {
         
            if ($scope.District == "" || $scope.District == null || $scope.District == undefined) {
                alert("Please Select District");
                return;
            }
         
            $scope.NoData = false;
            $scope.Data = false;
            $scope.Loading = true;

            var GetDistricts = AdminService.GetTwshCollegeList( $scope.District);
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
                    $scope.CollegeListData = res.Table1;
                    $scope.HostelData = res.Table2;
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

        $scope.OpenPage = function (CollegeId) {
            localStorage.setItem('CollegeId', CollegeId)
            $state.go('index.CollegeDetails')
        }


    })
})