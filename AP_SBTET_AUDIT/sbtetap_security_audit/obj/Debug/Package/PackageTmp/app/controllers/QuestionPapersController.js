define(['app'], function (app) {
    app.controller("QuestionPapersController", function ($scope, $state, AdminService, $filter, $localStorage) {

        const $ctrl = this;
        $ctrl.$onInit = () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            $scope.Scheme = '-1';
            $scope.Branch = '-1';
            $scope.ExamMonthYear = '-1';
            $scope.GetBranchs()
            $scope.GetSchemes()
            $scope.GetExamMonthYears()
            $scope.GetAllQuestionPapers()
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

        $scope.GetAllQuestionPapers = function () {
            var GetQuestionPapers = AdminService.GetFilterQuestionPaper($scope.Scheme, $scope.Branch, $scope.ExamMonthYear);
            GetQuestionPapers.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetQuestionPapersList = res.Table;


            },
                function (error) {
                    alert("error while loading Question Papers");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


    })
})