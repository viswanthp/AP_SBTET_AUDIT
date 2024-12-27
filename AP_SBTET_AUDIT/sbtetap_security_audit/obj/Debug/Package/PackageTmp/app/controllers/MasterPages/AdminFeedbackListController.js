define(['app'], function (app) {
    app.controller("AdminFeedbackListController", function ($scope, $localStorage, $state, AdminService, $filter) {

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


        $scope.DeleteFeedBackListByID = function (FeedBackID) {


            var objs = {
                "FeedBackID": FeedBackID,

            }

            var feedback = AdminService.DeleteAdminFeedBackList(objs);
            feedback.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.ClearData()
                }
                if (res.Table[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetFeedbackList()
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