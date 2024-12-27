define(['app'], function (app) {
    app.controller("PublishWebsiteController", function ($scope, $localStorage, $state, AdminService, $timeout) {

        const $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.GetPublishData()
        }

        //var authData = $localStorage.authorizationData;
        //if (authData == undefined) {
        //    $state.go('index.WebsiteLogin');
        //} else {
        //    $scope.SessionId = $localStorage.SessionId;
        //    $scope.UserName = authData.UserName;
        //}

        //   $scope.ReleaseResults = function () {
      //   alert("SBTET Website Launched Successfully")
        //setTimeout(
        //    //
        //    $state.go('index')
        //    , 7000);
       
     //  setTimeout($state.go('index'), 10000);
        //setTimeout(() => {
        //     alert("Hi")
        //   // $state.go('index')
        //}, 8000);
        // }
        $scope.LaunchWebsite = function () {
            var getResults = AdminService.LaunchWebsite(1);// ReleaseResults
            getResults.then(function (response) {
                console.log(response)
                try {
                    var res = JSON.parse(response)
                    $scope.Publish = res.Table[0].publish
                }
                catch (err) { }
                if (res.Table[0].ResponseCode == '200') {
                    //alert(res.Table[0].ResponseDescription)
                    $scope.GetPublishData()
                } else if (res.Table[0].ResponseCode == '400') {
                    //   $state.go('index')
                    // alert(res.Table[0].ResponseDescription);
                    //  $state.go('index.GetRankCard')

                }
            },
                function (error) {
                    alert("error while loading Data")
                    //var err = JSON.parse(error);
                });

        }
        $scope.GetPublishData = function () {
            var getResults = AdminService.GetPublishData();// ReleaseResults
            getResults.then(function (response) {
                console.log(response)
                try {
                    var res = JSON.parse(response)
                    $scope.Publish = res.Table[0].publish
                    if ($scope.Publish == 1) {
                        $timeout(function () {
                            $state.go('index')
                        }, 5000);
                    }
                }
                catch (err) { }
                if (res.Table[0].ResponseCode == '200') {


                } else if (res.Table[0].ResponseCode == '400') {
                    //   $state.go('index')
                    // alert(res.Table[0].ResponseDescription);
                    //  $state.go('index.GetRankCard')

                }
            },
                function (error) {
                    alert("error while loading Data")
                    //var err = JSON.parse(error);
                });
        }
        //setTimeout(() => {
        //    $state.go('index.GetRankCard')
        //}, 7000);
        // }
      

    })
})