define(['app'], function (app) {
    app.controller("CollegeStaffListController", function ($scope, $localStorage, $state, AdminService, $filter,$timeout, Excel) {

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
            var authData = $localStorage.authorizationData;
            $scope.UserID = authData.UserID;
            $scope.UserTypeID = authData.UserTypeID;
            $scope.UserName = authData.UserName;
            $scope.edit = true;
            $scope.GetDesignations();
            $scope.GetCourses();
            $scope.CollegeStaffList()
        }

        $scope.GetCourses = function () {
          //  $scope.Loading = true;
            var GetCourses = AdminService.GetActiveCourses();
            GetCourses.then(function (response) {
                try {
                  //  $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                   // $scope.Loading = false;
                }
                $scope.GetCoursesList = res.Table;

            },
                function (error) {
                    //$scope.Loading = false;
                    alert("error while loading Courses");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }



        $scope.GetDesignations = function () {
           // $scope.Loading = true;
            var GetDesignations = AdminService.GetDesignations();
            GetDesignations.then(function (response) {
                try {
                    //$scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                   // $scope.Loading = false;
                }
                $scope.GetDesignationsList = res.Table;

            },
                function (error) {
                   // $scope.Loading = false;
                    alert("error while loading Courses");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


        $scope.CollegeStaffList = function () {
            $scope.Loading = true;
            var CollegeStaffList = AdminService.GetCollegeStaffDetails($scope.UserName);
            CollegeStaffList.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetCollegeStaffList = res.Table;
                $scope.Loading = false;
                console.log($scope.CollegeStaffList)

            },
                function (error) {
                    $scope.Loading = false;
                    alert("error while loading College Staff");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


        $scope.DeleteCollegeStaffDetailsById = function (CollegeStaffID) {


            var objs = {
                "CollegeStaffID": CollegeStaffID,

            }

            var admstaff = AdminService.DeleteAdminCollegeStaffDetails(objs);
            admstaff.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.CollegeStaffList()
                } else if (res.Table[0].ResponseCode == '400') {
                    alert(res.Table[0].ResponseDescription);

                }

                else {
                    alert("Unable to delete")
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }

        $scope.GetCollegeStaffDetailsById = function (CollegeId) {
            var GetCollegeStaffDetailsById = AdminService.GetCollegeStaffDetailsById(CollegeId);
            GetCollegeStaffDetailsById.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                $scope.AddDetails = '0';
                $scope.UpdateDetails = '1';
                $scope.AddData = true;

                $scope.CollegeStaffID = res.Table[0].CollegeStaffID
                $scope.EmployeeId = res.Table[0].EmployeeID
                $scope.CFMSId = res.Table[0].CFMSID
                $scope.Name = res.Table[0].StaffName
                $scope.Designation = res.Table[0].DesignationID
                $scope.Branch = res.Table[0].CourseID
                $scope.Email = res.Table[0].Email
                $scope.Mobile = res.Table[0].Mobile
                $scope.DeputedTo = res.Table[0].DeputedTo
                $scope.Remarks = res.Table[0].Remarks

            },
                function (error) {
                    alert("error while loading FDP Training");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.AddCollegeStaffDetails = function () {
            if ($scope.EmployeeId == null || $scope.EmployeeId == "" || $scope.EmployeeId == undefined) {
                alert("Please Select Employee Id");
                return;
            }
            if ($scope.CFMSId == null || $scope.CFMSId == "" || $scope.CFMSId == undefined) {
                alert("Please Enter CFMS Id");
                return;
            }
            if ($scope.Name == null || $scope.Name == "" || $scope.Name == undefined) {
                alert("Please Enter Staff Name");
                return;
            }
            if ($scope.Designation == null || $scope.Designation == "" || $scope.Designation == undefined) {
                alert("Please Enter Designation");
                return;
            }
            if ($scope.Branch == null || $scope.Branch == "" || $scope.Branch == undefined) {
                alert("Please Enter OfferedBy");
                return;
            }
            if ($scope.Email == null || $scope.Email == "" || $scope.Email == undefined) {
                alert("Please Enter OfferedBy");
                return;
            }

            if ($scope.Mobile == null || $scope.Mobile == "" || $scope.Mobile == undefined) {
                alert("Please Enter Planned From");
                return;
            }
            if ($scope.Remarks == null || $scope.Remarks == "" || $scope.Remarks == undefined) {
                alert("Please Enter Remarks");
                return;
            }

            var obj = {
                "EmployeeID": $scope.EmployeeId, "CFMSID": $scope.CFMSId, "StaffName": $scope.Name, "DesignationID": $scope.Designation,
                "CourseID": $scope.Branch, "Email": $scope.Email, "Mobile": $scope.Mobile,
                "DeputedTo": $scope.DeputedTo, "Remarks": $scope.Remarks, "UserName": $scope.UserName
            }
            $scope.Loading = true;
            var AddCollegeStaffDetails = AdminService.AddCollegeStaffDetails(obj);
            AddCollegeStaffDetails.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetCollegeStaffDetails($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetCollegeStaffDetails($scope.UserName)
                }

                else {
                    alert("Not Added")
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }

        $scope.UpdateCollegeStaffDetails = function () {
            if ($scope.EmployeeId == null || $scope.EmployeeId == "" || $scope.EmployeeId == undefined) {
                alert("Please Select Employee Id");
                return;
            }
            if ($scope.CFMSId == null || $scope.CFMSId == "" || $scope.CFMSId == undefined) {
                alert("Please Enter CFMS Id");
                return;
            }
            if ($scope.Name == null || $scope.Name == "" || $scope.Name == undefined) {
                alert("Please Enter Staff Name");
                return;
            }
            if ($scope.Designation == null || $scope.Designation == "" || $scope.Designation == undefined) {
                alert("Please Enter Designation");
                return;
            }
            if ($scope.Branch == null || $scope.Branch == "" || $scope.Branch == undefined) {
                alert("Please Enter Branch");
                return;
            }
            if ($scope.Email == null || $scope.Email == "" || $scope.Email == undefined) {
                alert("Please Enter Email");
                return;
            }

            if ($scope.Mobile == null || $scope.Mobile == "" || $scope.Mobile == undefined) {
                alert("Please Enter Planned From");
                return;
            }
            if ($scope.Remarks == null || $scope.Remarks == "" || $scope.Remarks == undefined) {
                alert("Please Enter Remarks");
                return;
            }

            var obj = {
                "CollegeStaffID": $scope.CollegeStaffID, "EmployeeID": $scope.EmployeeId, "CFMSID": $scope.CFMSId, "StaffName": $scope.Name, "DesignationID": $scope.Designation,
                "CourseID": $scope.Branch, "Email": $scope.Email, "Mobile": $scope.Mobile,
                "DeputedTo": $scope.DeputedTo, "Remarks": $scope.Remarks, "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var AddCollegeStaffDetails = AdminService.UpdateCollegeStaffDetails(obj);
            AddCollegeStaffDetails.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.AddDetails = '1';
                    $scope.UpdateDetails = '0';
                    $scope.ClearData()
                    $scope.GetCollegeStaffDetails($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetCollegeStaffDetails($scope.UserName)
                }

                else {
                    alert("Not Added")
                    $scope.ClearData()
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
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

        $scope.ClearData = function () {
            $scope.AcademicYear = "";
            $scope.EmployeeId = "";
            $scope.CFMSId = "";
            $scope.Name = "";
            $scope.Designation = "";
            $scope.Branch = "";
            $scope.Email = "";
            $scope.Mobile = "";
            $scope.DeputedTo = "";
            $scope.Remarks = "";
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