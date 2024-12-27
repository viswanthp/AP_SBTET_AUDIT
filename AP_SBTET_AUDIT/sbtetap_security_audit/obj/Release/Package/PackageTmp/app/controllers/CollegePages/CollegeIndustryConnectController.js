define(['app'], function (app) {
    app.controller("CollegeIndustryConnectControlles", function ($scope, $localStorage, $state, AdminService, $filter) {


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
            //  $scope.GetCollegeTypes()

            $scope.GetIndustryConnectByUserName($scope.UserName)
            $scope.AddDetails = '1';
            $scope.UpdateDetails = '0';
        }

      



        $scope.GetIndustryConnectById = function (CollegeId) {
            var GetIndustryConnectById = AdminService.GetIndustryConnectById(CollegeId);
            GetIndustryConnectById.then(function (response) {
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
                $scope.IndustryConnectID = res.Table[0].IndustryConnectID
                $scope.IndustryName = res.Table[0].IndustryName
                $scope.ServicesOffered = res.Table[0].ServicesOffered
               // $scope.UserName = res.Table[0].UserName
               

            },
                function (error) {
                    alert("error while loading Journals");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetIndustryConnectByUserName = function (username) {
            var GetIndustryConnectByUserName = AdminService.GetIndustryConnectByUser(username);
            GetIndustryConnectByUserName.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetIndustryConnectList = res.Table;

            },
                function (error) {
                    alert("error while loading Industry Connect");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }



        $scope.AddIndustryConnect = function () {
            if ($scope.IndustryName == null || $scope.IndustryName == "" || $scope.IndustryName == undefined) {
                alert("Please Enter Industry Name");
                return;
            }
            if ($scope.ServicesOffered == null || $scope.ServicesOffered == "" || $scope.ServicesOffered == undefined) {
                alert("Please Enter ServcesOffered");
                return;
            }


            var obj = {

                "IndustryName": $scope.IndustryName,
                "ServicesOffered": $scope.ServicesOffered,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddIndustryConnect(obj);
            adddistcoorcentre.then(function (response) {
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
                    $scope.GetIndustryConnectByUserName($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
                    $scope.GetIndustryConnectByUserName($scope.UserName)
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
            $scope.IndustryConnectID = "";
            $scope.IndustryName = "";
            $scope.ServicesOffered = "";
          //  $scope.UserName = "";
          
        }

        $scope.UpdateIndustryConnect = function (CollegeLabID) {
            if ($scope.IndustryName == null || $scope.IndustryName == "" || $scope.IndustryName == undefined) {
                alert("Please Enter Industry Name");
                return;
            }
            if ($scope.ServicesOffered == null || $scope.ServicesOffered == "" || $scope.ServicesOffered == undefined) {
                alert("Please Enter ServcesOffered");
                return;
            }
          


            var obj = {
                "IndustryConnectID": $scope.IndustryConnectID,
                "IndustryName": $scope.IndustryName,
                "ServicesOffered": $scope.ServicesOffered,
                "UserName": $scope.UserName
            }
            console.log(obj)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdateIndustryConnect(obj);
            adddistcoorcentre.then(function (response) {
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
                    $scope.GetIndustryConnectByUserName($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.GetIndustryConnectByUserName($scope.UserName)
                    $scope.ClearData()
                }

                else {
                    alert("Not Added")
                    $scope.GetIndustryConnectByUserName($scope.UserName)
                    $scope.ClearData()
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