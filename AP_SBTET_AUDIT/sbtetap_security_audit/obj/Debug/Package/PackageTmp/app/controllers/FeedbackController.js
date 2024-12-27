define(['app'], function (app) {
    app.controller("FeedbackController", function ($scope, $crypto, AdminService, SystemUserService, AppSettings, $http, $localStorage, $state) {

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        $scope.FeedbackTypes = [{ "Name": "Student" }, { "Name": "Parent" }, { "Name": "Staff" }, { "Name": "Others" }]

        $scope.SubmitFeedback = function () {

            if ($scope.Type == "" || $scope.Type == null || $scope.Type == undefined) {
                alert("Please Select Type");
                return;
            }
            if ($scope.Name == "" || $scope.Name == null || $scope.Name == undefined) {
                alert("Please Enter Name");
                return;
            }
            if ($scope.Mobile == "" || $scope.Mobile == null || $scope.Mobile == undefined) {
                alert("Please Enter Mobile Number");
                return;
            }
            if ($scope.Email == "" || $scope.Email == null || $scope.Email == undefined) {
                alert("Please Enter Email");
                return;
            }
            if ($scope.Feedback == "" || $scope.Feedback == null || $scope.Feedback == undefined) {
                alert("Please Enter Feedback");
                return;
            }
            var obj = {
                "FeedBackDescription": $scope.Feedback,
                "FromType": $scope.Type,
                "Name": $scope.Name,
                "MobileNumber": $scope.Mobile,
                "Email": $scope.Email
            }

            var SubmitFeedback = AdminService.SubmitFeedback(obj);
            SubmitFeedback.then(function (response) {
                try {

                    var res = JSON.parse(response);
                    if (res[0].ResponceCode == '400') {
                        alert(res[0].ResponceDescription)
                        return;
                    }
                }
                catch (err) {
                    $scope.Loading = false;
                }
               
                if (res.Table.length > 0) {
                    if (res.Table[0].ResponseCode == '200') {
                        alert(res.Table[0].ResponseDescription)
                        $scope.Loading = false;
                        $scope.NoData = false;
                        $scope.Data = true;
                        $scope.Feedback = "";
                        $scope.Type = "";
                        $scope.Name = "";
                        $scope.Mobile = "";
                        $scope.Email = "";
                        //  $scope.HostelData = res.Table2;
                    } else if (res.Table[0].ResponseCode == '400') {
                        alert(res.Table[0].ResponseDescription)
                        $scope.Loading = false;
                        $scope.NoData = true;
                        $scope.Data = false;
                    } else {

                        alert("Something Went Wrong")
                        $scope.Loading = false;
                        $scope.NoData = true;
                        $scope.Data = false;
                    }
                } 




            },
                function (error) {
                    $scope.Loading = false;
                    $scope.NoData = true;
                    $scope.Data = false;
                    alert("error while loading Feedback");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }
    })
})