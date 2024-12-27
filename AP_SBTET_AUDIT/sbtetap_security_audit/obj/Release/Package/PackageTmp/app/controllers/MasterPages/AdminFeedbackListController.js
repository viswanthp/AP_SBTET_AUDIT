define(['app'], function (app) {
    app.controller("AdminFeedbackListController", function ($scope, $localStorage, $state, AdminService, $filter) {

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

            $scope.GetFeedbackList()
        }



        $scope.GetFeedbackList = function () {
            var GetFeedbackList = AdminService.GetFeedbackList();
            GetFeedbackList.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetFeedbackList = res.Table;

                console.log($scope.GetFeedbackList)

            },
                function (error) {
                    alert("error while loading Feedback List");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

    })
})