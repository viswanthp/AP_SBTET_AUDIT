define(['app'], function (app) {
    app.controller("JournalController", function ($scope, $state, AdminService, $filter, $localStorage) {


        const $ctrl = this;
        $ctrl.$onInit = () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            $scope.PublishYear = '2';
            $scope.FilterJournal()
            $scope.GetYears()
         
        }

        $scope.GetYears = function () {
            var GetYears = AdminService.GetYears();
            GetYears.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetYearsList = res.Table;

            },
                function (error) {
                    alert("error while loading Years");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.FilterJournal = function () {

            if ($scope.PublishYear == "" || $scope.PublishYear == null || $scope.PublishYear == undefined) {
                alert("Please Select Publish Year");
                return;
            }
           
            $scope.NoData = false;
            $scope.Data = false;
            $scope.Loading = true;
            var FilterJournal = AdminService.FilterJournal($scope.PublishYear);
            FilterJournal.then(function (response) {
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
                    $scope.FilterJournalData = res.Table;

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
                    alert("error while loading Data");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        angular.module('filters-module', [])
            .filter('trustAsResourceUrl', ['$sce', function ($sce) {
                return function (val) {
                    return $sce.trustAsResourceUrl(val);
                };
            }])

        //$scope.OpenFile = function(file){
        //    alert(file)
        //    $scope.File = file;
           

        //}
    })
})