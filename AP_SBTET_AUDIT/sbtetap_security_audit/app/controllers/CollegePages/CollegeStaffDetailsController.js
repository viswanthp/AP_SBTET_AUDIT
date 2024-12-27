define(['app'], function (app) {
    app.controller("CollegeStaffDetailsController", function ($scope, $state, AdminService, $filter, $localStorage) {


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
            $scope.AddDetails = '1';
            $scope.UpdateDetails = '0';
            $scope.GetCollegeStaffDetails();
            $scope.GetDesignations();
            $scope.GetCourses();
        }



        $scope.GetCollegeStaffDetails = function () {
         
            var GetCollegeStaffDetails = AdminService.GetCollegeStaffDetails($scope.UserName);
            GetCollegeStaffDetails.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetCollegeStaffDetailsList = res.Table;

            },
                function (error) {
                    alert("error while loading Staff Details");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetCourses = function () {
            $scope.Loading = true;
            var GetCourses = AdminService.GetActiveCourses();
            GetCourses.then(function (response) {
                try {
                    $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.Loading = false;
                }
                $scope.GetCoursesList = res.Table;

            },
                function (error) {
                    $scope.Loading = false;
                    alert("error while loading Courses");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


        
        $scope.GetDesignations = function () {
            $scope.Loading = true;
            var GetDesignations = AdminService.GetDesignations();
            GetDesignations.then(function (response) {
                try {
                    $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.Loading = false;
                }
                $scope.GetDesignationsList = res.Table;

            },
                function (error) {
                    $scope.Loading = false;
                    alert("error while loading Courses");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
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
                "DeputedTo": $scope.DeputedTo, "Remarks": $scope.Remarks,"UserName": $scope.UserName
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

        $scope.DeleteStaff = function (CollegeStaffID, StaffName) {
            let text = "Are You Sure You want Delete " + StaffName;
            if (confirm(text) == true) {
                text = "Yes";
                $scope.DeleteCollegeStaff(CollegeStaffID)
            } else {
                text = "No";
            }
            //document.getElementById("demo").innerHTML = text;
        }


        $scope.DeleteCollegeStaff = function (CollegeStaffID) {


            var objs = {
                "CollegeStaffID": CollegeStaffID,

            }

            var DeleteCollegeStaff = AdminService.DeleteCollegeStaff(objs);
            DeleteCollegeStaff.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetCollegeStaffDetails($scope.UserName)
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

        $scope.DeleteCollegeStaffDetailsById = function (CollegeStaffID) {


            var objs = {
                "CollegeStaffID": CollegeStaffID,

            }

            var deletecollegestaffdetails = AdminService.DeleteCollegeStaffDetails(objs);
            deletecollegestaffdetails.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetCollegeStaffDetails($scope.UserName)
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

    })
})