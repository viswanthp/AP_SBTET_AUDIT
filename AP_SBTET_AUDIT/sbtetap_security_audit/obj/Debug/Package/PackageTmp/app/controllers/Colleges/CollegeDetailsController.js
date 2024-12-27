define(['app'], function (app) {
    app.controller("CollegeDetailsController", function ($scope, $state, AdminService, $filter, $localStorage) {
        const $ctrl = this;
        $ctrl.$onInit = () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            $scope.CollegeId = localStorage.getItem('CollegeId')
            $scope.GetCollegeDetailsById()
        }
      
       

        $scope.GetCollegeDetailsById = function () {
            //$scope.Loading = true;
            var getdata = AdminService.GetCollegeDetailsById($scope.CollegeId);
            getdata.then(function (response) {
                try {
                    //    $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    // $scope.Loading = false;
                }
                $scope.CollegeData = res.Table[0];
              

            },
                function (error) {
                    //  $scope.Loading = false;
                    alert("error while loading Districts");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }
    })
})