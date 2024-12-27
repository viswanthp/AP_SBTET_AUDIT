define(['app'], function (app) {
    app.controller("TestimonialController", function ($scope, $state, AdminService, $filter, $localStorage) {


        const $ctrl = this;
        $ctrl.$onInit = () => {
   
            $scope.GetTestimonial()
        }


        $scope.GetTestimonial = function () {
        
            $scope.NoData = false;
            $scope.Data = false;
            $scope.Loading = true;

            var GetDistricts = AdminService.GetTestimonial();
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
                    $scope.TestimonialData = res.Table;
               //     $scope.CollegeListData = res.Table1;
                    // $scope.HostelData = res.Table2;
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