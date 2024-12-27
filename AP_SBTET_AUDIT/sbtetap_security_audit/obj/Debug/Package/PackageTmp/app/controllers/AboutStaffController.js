define(['app'], function (app) {
    app.controller("AboutStaffController", function ($scope, $state, AdminService, $filter, $localStorage) {

        const $ctrl = this;
        $ctrl.$onInit = () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            $scope.GetStaffData()
        }

        $scope.GetStaffData = function () {
            $scope.Loading = true;
            var GetStaffData = AdminService.GetStaffData();
            GetStaffData.then(function (response) {
                try {
                    $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.Loading = false;
                }
                $scope.StaffList = res.Table;

            },
                function (error) {
                    $scope.Loading = false;
                    alert("error while loading Slides");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

    })
})