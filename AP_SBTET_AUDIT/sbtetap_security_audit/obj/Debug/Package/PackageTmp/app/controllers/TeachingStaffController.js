define(['app'], function (app) {
    app.controller("TeachingStaffController", function ($scope, $localStorage, $state, AdminService, $timeout, Excel, $filter) {

        $scope.GoBack = function () {
            $state.go('Dashboard.SubDashboard')
        }

        const $ctrl = this;
        $ctrl.$onInit = () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            $scope.Loading = false;
            $scope.Data = false;
            $scope.NoData = true;
          //  $scope.CollegeStaffList()
            $scope.GetAllDistricts()
        }

        
        $scope.GetAllDistricts = function () {
            var GetAllDistricts = AdminService.GetAllDistricts();
            GetAllDistricts.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetDistricts = res.Table;

                console.log($scope.GetDistricts)

            },
                function (error) {
                    alert("error while loading Districts");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetCollegesByDistrictId = function () {
            var GetCollegesByDistrictId = AdminService.GetCollegesByDistrictId($scope.District);
            GetCollegesByDistrictId.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.Colleges = res.Table;

                console.log($scope.Colleges)

            },
                function (error) {
                    alert("error while loading Colleges");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetCollegeStaffFilter = function () {

            if ($scope.District == null || $scope.District == "" || $scope.District == undefined) {
                alert("Please select District")
                return
            }
            if ($scope.District != 1) {
                if ($scope.College == null || $scope.College == "" || $scope.College == undefined) {
                    alert("Please select College")
                    return
                }
            } else {
                $scope.College = 0;
            }
            $scope.Loading = true;
            $scope.Data = false;
            $scope.NoData = false;
            var CollegeStaffList = AdminService.GetCollegeStaffFilter($scope.District, $scope.College);
            CollegeStaffList.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                if (res.Table.length > 0) {
                    $scope.Loading = false;
                    $scope.Data = true;
                    $scope.NoData = false;
                    $scope.GetCollegeStaffList = res.Table;
                } else {
                    $scope.Loading = false;
                    $scope.Data = false;
                    $scope.NoData = true;
                }
              //  console.log($scope.CollegeStaffList)

            },
                function (error) {
                    alert("error while loading College Staff");
                    $scope.Loading = false;
                    $scope.Data = false;
                    $scope.NoData = true;
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
         //   $scope.Loading = false;
        }


        $scope.DownloadtoExcel = function (tableid) {
            var exportHref = Excel.tableToExcel(tableid, 'staffdata');
            $timeout(function () {
                var a = document.createElement('a');
                a.href = exportHref;
                $('#a').remove();
                a.download = "Teaching_Staff_Data.xls";
                document.body.appendChild(a);
                a.click();
                $('#a').remove();
            }, 100);
        }


    })
    app.factory('Excel', function ($window) {
        //alert("hello");
        var uri = 'data:application/vnd.ms-excel;base64,',
            template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
            base64 = function (s) { return $window.btoa(unescape(encodeURIComponent(s))); },
            format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) };
        return {
            tableToExcel: function (tableId, worksheetName) {
                var table = $(tableId),
                    ctx = { worksheet: worksheetName, table: table.html() },
                    href = uri + base64(format(template, ctx));
                return href;
            }
        };
    });
})