define(['app'], function (app) {
    app.controller("FDPController", function ($scope, $state, AdminService, $filter, $localStorage) {


        const $ctrl = this;
        $ctrl.$onInit = () => {

            $scope.GetFDPCalenders()
            $scope.GetFDPTrainings()
           

        }

        $scope.GetFDPCalenders = function () {
            var GetFDPCalenders = AdminService.GetFDPCalenders();
            GetFDPCalenders.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetFDPCalendersList = res.Table;
                $scope.AcademicYears = res.Table1;

            },
                function (error) {
                    alert("error while loading FDP Calenders");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }




        $scope.GetFDPTrainings = function () {
            var GetFDPTrainings = AdminService.GetFDPTrainings();
            GetFDPTrainings.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetFDPTrainingsList = res.Table;
                $scope.AcademicYears1 = res.Table1;
            },
                function (error) {
                    alert("error while loading FDP Trainings");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

       
    })
})