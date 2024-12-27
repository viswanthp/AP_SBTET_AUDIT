define(['app'], function (app) {
    app.controller("CollegeStaffListController", function ($scope, $localStorage, $state, AdminService, $filter) {

        $scope.GoBack = function () {
            $state.go('Dashboard.SubDashboard')
        }

        const $ctrl = this;
        $ctrl.$onInit = () => {
            var authData = $localStorage.authorizationData;
            $scope.UserID = authData.UserID;
            $scope.UserTypeID = authData.UserTypeID;
            $scope.UserName = authData.UserName;
            $scope.edit = true;

            $scope.CollegeStaffList()
        }



        $scope.CollegeStaffList = function () {
            var CollegeStaffList = AdminService.GetCollegeStaffDetails($scope.UserName);
            CollegeStaffList.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetCollegeStaffList = res.Table;

                console.log($scope.CollegeStaffList)

            },
                function (error) {
                    alert("error while loading College Staff");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

    })
})