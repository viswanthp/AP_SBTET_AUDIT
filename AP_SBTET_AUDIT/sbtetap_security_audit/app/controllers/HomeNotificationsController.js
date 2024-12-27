define(['app'], function (app) {
    app.controller("HomeNotificationsController", function ($scope, $state, AdminService, $filter) {

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        $scope.sort = {
            sortingOrder: 'EventID',
            reverse: false
        };
        $scope.Loading = true;
        $scope.gap = 5;

        $scope.filteredItems = [];
        $scope.groupedItems = [];
        $scope.itemsPerPage = 10;
        $scope.pagedItems = [];
        $scope.currentPage = 0;

        var GetNotificationList = AdminService.GetNotifications();
        GetNotificationList.then(function (response) {
            try {
                var res = JSON.parse(response);
            }
            catch (err) { }
            if (res.Table.length > 0) {
                $scope.Loading = false;
                $scope.items = res.Table;
                $scope.search()
            }
        },
            function (error) {
                $scope.Loading = false;
                alert("error while loading States");
                var err = JSON.parse(error);

            });

     
        var searchMatch = function (haystack, needle) {
            if (!needle) {
                return true;
            }
            return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
        };

        // init the filtered items
        $scope.search = function () {
            $scope.filteredItems = $filter('filter')($scope.items, function (item) {
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

        $scope.SetAllPage = function () {
            for (var i = 0; i < $scope.filteredItems.length; i++) {
                $scope.pagedItems[Math.floor(i / $scope.items.length - 1)].push($scope.filteredItems[i]);
            }
        }

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
                ' <a ng-click="sort_by(order)" style="color: #fff;">' +
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


