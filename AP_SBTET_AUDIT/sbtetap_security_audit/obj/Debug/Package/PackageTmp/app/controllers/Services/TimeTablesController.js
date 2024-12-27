
define(['app'], function (app) {
    app.controller("TimeTablesController", function ($scope, $state, AdminService, $filter, $localStorage) {

        const $ctrl = this;
        $ctrl.$onInit = () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            $scope.Scheme = "-1";
            $scope.AcademicYear = "-1";
            $scope.ExamMonthYear = "-1";
            $scope.GetAcademicYears()
            $scope.GetSchemes()
            $scope.GetExamMonthYears()
            $scope.GetTimeTableData()
        }

        $scope.GetTimeTableData = function () {
            var GetTimeTableLists = AdminService.GetFilterTimeTable($scope.Scheme, $scope.AcademicYear, $scope.ExamMonthYear);
            GetTimeTableLists.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetTimeTableList = res.Table;


            },
                function (error) {
                    alert("error while loading Time Table");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
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

        $scope.GetExamMonthYears = function () {
            var GetExamMonthYears = AdminService.GetExamMonthYears();
            GetExamMonthYears.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetExamMonthYearsList = res.Table;

            },
                function (error) {
                    alert("error while loading Schemes");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


    })
})