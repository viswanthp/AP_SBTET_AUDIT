define(['app'], function (app) {
    app.controller("CollegeWiseBranchesController", function ($scope, $localStorage, $state, AdminService, $uibModal, $filter) {


        $scope.GoBack = function () {
            $state.go('Dashboard.SubDashboard')
        }

        const $ctrl = this;
        $ctrl.$onInit = () => {

            var authData = $localStorage.authorizationData;
            $scope.UserID = authData.UserID;
            $scope.UserTypeID = authData.UserTypeID;
            $scope.UserName = authData.UserName;
            $scope.GetColleges()

           
            $scope.NBAValues = [{ "Id": true, "Value": "Yes" }, { "Id": false, "Value": "No" }]
        }

        $scope.GetColleges = function (username) {
            var GetColleges = AdminService.GetColleges(username);
            GetColleges.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetCollegesList = res.Table;

            },
                function (error) {
                    alert("error while loading Colleges ");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }


            var getcours = AdminService.GetCourses();
        getcours.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.CoursesList = res.Table;

            },
                function (error) {
                    alert("error while loading Colleges ");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        

        $scope.getCollegeData = function (Data) {
            //var Data = JSON.parse(data);
            $scope.CollegeID = Data.Id;
            $scope.CollegeName = Data.CollegeName;
            $scope.CollegeCode = Data.CollegeCode;

        }
        

       
        $scope.GetCollegeCourseById = function (CollegeID, CourseID) {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/EditCollegeWiseBranchesPopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });


            $scope.closeModal = function () {
                $scope.modalInstance.close();
            }
            $scope.GetCoursesById(CollegeID, CourseID)
        }

        $scope.GetCoursesById = function (CollegeID, CourseID) {
            var GetCoursesById = AdminService.GetCoursesById(CollegeID, CourseID);
            GetCoursesById.then(function (resp) {
                try {
                    var res = JSON.parse(resp);
                }
                catch (err) { }

                if (res.Table.length > 0) {
                    $scope.EditData = res.Table[0];

                    $scope.EditCourseID = $scope.EditData.CourseID
                    $scope.EditNBA = $scope.EditData.NBA;

                    //if ($scope.EditNBA==true) {
                    //    $scope.EditNBA='YES'
                    //}
                    //else if ($scope.EditNBA == false) {
                    //    $scope.EditNBA = 'NO'

                    //}
                }
                else {
                    $scope.EditData = [];
                }

            },
                function (error) {
                    alert("data is not loaded");
                    var err = JSON.parse(error);
                });
        }


        $scope.AddCourses = function () {

            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/Popups/AddCoursePopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                backdrop: 'static',
            });

            $scope.closeModal = function () {
                $scope.modalInstance.close();
            }
        }

        $scope.getCollegeWiseCourses = function () {
            var GetCourses = AdminService.GetCollegeWiseCourses($scope.CollegeCode);
            GetCourses.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.CollegeWiseCourses = res.Table;

            },
                function (error) {
                    alert("error while loading Courses ");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

      

      





      



        $scope.addCollegewiseCourses = function (Course, Intake, NBA) {
            if (Course == null || Course == "" || Course == undefined) {
                alert("Please Select Course Code");
                return;
            }

            if (Intake == null || Intake == "" || Intake == undefined) {
                alert("Please Enter Intake");
                return;
            }

            if (NBA == null || NBA == "" || NBA == undefined) {
                alert("Please Select NBA");
                return;
            }

            //var obj = {
            //    "DataType": 1,
            //    "CollegeWiseCourseID": '',
            //    "CollegeID": $scope.CollegeID,
            //    "CourseID": Course,
            //    "Intake": Intake,
            //    "NBA": NBA,
            //    "Active": 1,
            //    "UserName": $scope.UserName
            //}
            var DataType=1
            $scope.Loading = true;
            var addcourses = AdminService.AddCollegewiseCourses(DataType, '', $scope.CollegeID, Course, Intake, NBA, 1, $scope.UserName);
            addcourses.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    ;
                    $scope.modalInstance.close();
                    $scope.getCollegeWiseCourses()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    ;
                    $scope.modalInstance.close();
                    $scope.getCollegeWiseCourses()
                }

                else {
                    alert("Not Added")
                    
                }
            },

                function (error) {

                    $scope.Loading = false;
                    var err = JSON.parse(error);
                    alert(err)
                })
        }


      

        $scope.UpdateCourse = function (data) {
          
            var DataType = 2;
            $scope.Loading = true;
            var update = AdminService.UpdateCollegewiseCourses(DataType, $scope.EditData.CollegeWiseCourseID, $scope.EditData.CollegeID, $scope.EditData.CourseID, $scope.EditData.Intake, $scope.EditData.NBA, $scope.EditData.Active, $scope.UserName);
            update.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                  
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.closeModal()
                    $scope.getCollegeWiseCourses()
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.getCollegeWiseCourses()
                   
                }

                else {
                    alert("Not Added")
                    
                    
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