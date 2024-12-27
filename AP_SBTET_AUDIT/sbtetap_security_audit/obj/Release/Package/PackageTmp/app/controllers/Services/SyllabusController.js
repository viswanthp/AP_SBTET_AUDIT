define(['app'], function (app) {
    app.controller("SyllabusController", function ($scope, $state, AdminService, $filter, $localStorage) {

        const $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.Scheme = '-1';
            $scope.Branch = '-1';
            $scope.GetBranchs()
            $scope.GetSchemes()
            $scope.GetAllSyllabus()
        }

        $scope.GetBranchs = function () {
            var GetBranchsList = AdminService.GetBranchs();
            GetBranchsList.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetBranchsList = res.Table;

            },
                function (error) {
                    alert("error while loading Branchs");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetSchemes = function () {
            var GetSchemes = AdminService.GetSchemes();
            GetSchemes.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetSchemesList = res.Table;

            },
                function (error) {
                    alert("error while loading Schemes");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetAllSyllabus = function () {
            var GetSyllabusList = AdminService.GetFilterSyllabus($scope.Scheme,$scope.Branch);
            GetSyllabusList.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetSyllabusList = res.Table;


            },
                function (error) {
                    alert("error while loading States");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

    })
})