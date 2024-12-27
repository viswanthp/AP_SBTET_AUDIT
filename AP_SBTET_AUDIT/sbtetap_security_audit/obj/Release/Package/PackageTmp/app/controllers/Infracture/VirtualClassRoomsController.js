define(['app'], function (app) {
    app.controller("VirtualClassRoomsController", function ($scope, $state, AdminService, $filter, $localStorage) {


        const $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.sort = {
                sortingOrder: 'EventID',
                reverse: false
            };
            $scope.gap = 5;

            $scope.filteredItems = [];
            $scope.groupedItems = [];
            $scope.itemsPerPage = 10;
            $scope.pagedItems = [];
            $scope.currentPage = 0;
            
            //$scope.GetVirtualClassRooms()
            $scope.GetRegions()
            $scope.Region = '2'
            $scope.GetDistricts($scope.Region)
            $scope.CollegeTypes()

            $scope.District = '24'
            $scope.CollegeType = '2'
            $scope.FilterVirtualClassRooms()
        }

        $scope.GetRegions = function () {
            //  $scope.Loading = true;
            var GetRegions = AdminService.GetRegions();
            GetRegions.then(function (response) {
                try {
                    //    $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    //   $scope.Loading = false;
                }
                $scope.Regions = res.Table;
                //  $scope.Region = '2'
                //GetCollegeList()

            },
                function (error) {
                    //  $scope.Loading = false;
                    alert("error while loading Regions");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


        $scope.GetDistricts = function () {
            //$scope.Loading = true;
            var GetDistricts = AdminService.GetDistrictsByRegionId($scope.Region);
            GetDistricts.then(function (response) {
                try {
                    //    $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    // $scope.Loading = false;
                }
                $scope.Districts = res.Table;
                //     $scope.District = '9'


            },
                function (error) {
                    //  $scope.Loading = false;
                    alert("error while loading Districts");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }



        $scope.CollegeTypes = function () {
            //  $scope.Loading = true;
            var CollegeTypes = AdminService.CollegeTypes();
            CollegeTypes.then(function (response) {
                try {
                    //  $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    //  $scope.Loading = false;
                }
                $scope.CollegeTypes = res.Table;
                //$scope.CollegeType = '1'
            },
                function (error) {
                    //  $scope.Loading = false;
                    alert("error while loading College Types");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


        $scope.FilterVirtualClassRooms = function () {

            $scope.NoData = false;
            $scope.Data = false;
            $scope.Loading = true;
            var FilterVirtualClassRooms = AdminService.FilterVirtualClassRooms($scope.Region, $scope.District, $scope.CollegeType);
            FilterVirtualClassRooms.then(function (response) {
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
                    $scope.search()
                    //$scope.CollegeListData = res.Table1;
                } else {
                    $scope.CollegeList = []
                    alert("No Data Found for selected Inputs")
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

        //$scope.GetVirtualClassRooms = function () {

        //    $scope.NoData = false;
        //    $scope.Data = false;
        //    $scope.Loading = true;
        //    var GetDistricts = AdminService.GetVirtualClassRooms();
        //    GetDistricts.then(function (response) {
        //        try {

        //            var res = JSON.parse(response);
        //        }
        //        catch (err) {
        //            $scope.Loading = false;
        //        }
        //        if (res.Table.length > 0) {
        //            $scope.Loading = false;
        //            $scope.NoData = false;
        //            $scope.Data = true;
        //            $scope.CollegeList = res.Table;
        //            $scope.search()
        //            //$scope.CollegeListData = res.Table1;
        //        } else {
        //            //alert("No Data Found")
        //            $scope.Loading = false;
        //            $scope.NoData = true;
        //            $scope.Data = false;
        //        }




        //    },
        //        function (error) {
        //            $scope.Loading = false;
        //            $scope.NoData = true;
        //            $scope.Data = false;
        //            alert("error while loading Colleges");
        //            var err = JSON.parse(error);
        //            var err = JSON.parse(error);

        //        });
        //}
        var searchMatch = function (haystack, needle) {
            if (!needle) {
                return true;
            }
            return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
        };

        // init the filtered items

        $scope.search = function () {
            $scope.filteredItems = $filter('filter')($scope.CollegeList, function (item) {
                for (var attr in item) {
                    if (searchMatch(item[attr], $scope.query))
                        return true;
                }
                return false;
            });
            // take care of the sorting order
            if ($scope.sort.sortingOrder !== '') {
                $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
            }
            $scope.currentPage = 0;
            // now group by pages
            $scope.groupToPages();
        };


        // calculate page in place
        $scope.groupToPages = function () {
            $scope.pagedItems = [];

            for (var i = 0; i < $scope.filteredItems.length; i++) {
                if (i % $scope.itemsPerPage === 0) {
                    $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.filteredItems[i]];
                } else {
                    $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
                }
            }
            console.log($scope.pagedItems)
        };

        $scope.range = function (size, start, end) {
            var ret = [];
            console.log(size, start, end);
            if (size > 1) {
                if (size < end) {
                    end = size;
                    start = size - (size);
                }
                for (var i = start; i < end; i++) {
                    ret.push(i);
                }
                console.log(ret);
                return ret;
            } else {
                return ret;
            }
        };

        $scope.prevPage = function () {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };

        $scope.nextPage = function () {
            if ($scope.currentPage < $scope.pagedItems.length - 1) {
                $scope.currentPage++;
            }
        };

        $scope.setPage = function () {
            $scope.currentPage = this.n;
        };

        // functions have been describe process the data for display
        //   $scope.search();



    });


    app.$inject = ['$scope', '$filter'];

    app.directive("customSort", function () {
        return {
            restrict: 'A',
            transclude: true,
            scope: {
                order: '=',
                sort: '='
            },
            template:
                ' <a ng-click="sort_by(order)" style="color: #555555;">' +
                '    <span ng-transclude></span>' +
                '    <i ng-class="selectedCls(order)"></i>' +
                '</a>',
            link: function (scope) {

                // change sorting order
                scope.sort_by = function (newSortingOrder) {
                    var sort = scope.sort;

                    if (sort.sortingOrder == newSortingOrder) {
                        sort.reverse = !sort.reverse;
                    }

                    sort.sortingOrder = newSortingOrder;
                };


                scope.selectedCls = function (column) {
                    if (column == scope.sort.sortingOrder) {
                        return ('icon-chevron-' + ((scope.sort.reverse) ? 'down' : 'up'));
                    }
                    else {
                        return 'icon-sort'
                    }
                };
            }// end link
        }
    })
})