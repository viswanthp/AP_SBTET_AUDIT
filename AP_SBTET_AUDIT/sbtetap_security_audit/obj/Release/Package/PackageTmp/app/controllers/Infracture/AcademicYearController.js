define(['app'], function (app) {
    app.controller("AcademicYearController", function ($scope, $state, AdminService, $filter, $localStorage) {


        const $ctrl = this;
        $ctrl.$onInit = () => {

            $scope.GetAcademicCalenders()
        }
      
        $scope.GetAcademicCalenders = function () {

            $scope.NoData = false;
            $scope.Data = false;
            $scope.Loading = true;
            var GetDistricts = AdminService.GetAcademicCalenders();
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
                    $scope.GetAcademicCalenderList = res.Table;
                    //$scope.CollegeListData = res.Table1;
                } else {
                    //alert("No Data Found")
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