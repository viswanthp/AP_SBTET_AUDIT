define(['app'], function (app) {
    app.controller("CollegeLabsController", function ($scope, $localStorage, $state, AdminService, $filter) {


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
      
            $scope.GetLabs()
           // alert($scope.UserName)
            $scope.GetCollegeLabsByUserName($scope.UserName)
            $scope.AddDetails = '1';
            $scope.UpdateDetails = '0';
        }
        
        $scope.GetCollegeLabsByUserName = function (UserName) {
            var GetLabs = AdminService.GetCollegeLabsByUserName(UserName);
            GetLabs.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetCollegeLabsList = res.Table;
                $scope.CollegeId = res.Table[0].CollegeID;
            },
                function (error) {
                    alert("error while loading College Labs");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        

        $scope.GetCollegeLabsById = function (CollegeId) {
            var GetCollegeLabsById = AdminService.GetCollegeLabsById(CollegeId);
            GetCollegeLabsById.then(function (response) {
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
               // $scope.GetCollegeLabsList = res.Table;
                $scope.Lab = res.Table[0].LabID
                $scope.CollegeLabID = res.Table[0].CollegeLabID
                $scope.LabName =res.Table[0].LabName
                $scope.MajorEquipments =res.Table[0].MajorEquipment
                $scope.LabCost = res.Table[0].LabTotalCost
                $scope.Remarks = res.Table[0].Remarks
                
             

            },
                function (error) {
                    alert("error while loading College Labs");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetLabs = function () {
            var GetLabs = AdminService.GetLabs();
            GetLabs.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetLabsList = res.Table;

            },
                function (error) {
                    alert("error while loading Labs");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

   

        $scope.AddLab = function () {
            if ($scope.Lab == null || $scope.Lab == "" || $scope.Lab == undefined) {
                alert("Please Select Lab");
                return;
            }

            if ($scope.MajorEquipments == null || $scope.MajorEquipments == "" || $scope.MajorEquipments == undefined) {
                alert("Please Enter Major Equipments");
                return;
            }
            if ($scope.Remarks == null || $scope.Remarks == "" || $scope.Remarks == undefined) {
                alert("Please Enter College Address");
                return;
            }
            if ($scope.LabCost == null || $scope.LabCost == "" || $scope.LabCost == undefined) {
                alert("Please Enter Lab Cost");
                return;
            }

            var objs = {
                "CollegeID": $scope.CollegeId,
                "LabID": $scope.Lab,
                "MajorEquipment": $scope.MajorEquipments,
                "Remarks": $scope.Remarks,
                "LabTotalCost": $scope.LabCost,
                "UserName": $scope.UserName
            }
            console.log(objs)
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.AddCollegeLab(objs);
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
                    $scope.AddDetails = '1';
                    $scope.UpdateDetails = '0';
                    $scope.ClearData()
                    $scope.GetCollegeLabsByUserName($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.ClearData()
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
           $scope.CollegeCode = "";
           $scope.Lab = "";
           $scope.District = "";
           $scope.MajorEquipments = "";
           $scope.Remarks = "";
           $scope.LabCost = "";
        }

        $scope.UpdateCollegeLab = function (CollegeLabID) {
            if ($scope.Lab == null || $scope.Lab == "" || $scope.Lab == undefined) {
                alert("Please Select Lab");
                return;
            }
            if ($scope.MajorEquipments == null || $scope.MajorEquipments == "" || $scope.MajorEquipments == undefined) {
                alert("Please Enter Major Equipments");
                return;
            }
            if ($scope.Remarks == null || $scope.Remarks == "" || $scope.Remarks == undefined) {
                alert("Please Enter College Address");
                return;
            }
            if ($scope.LabCost == null || $scope.LabCost == "" || $scope.LabCost == undefined) {
                alert("Please Enter Lab Cost");
                return;
            }

            var obj = {
                "CollegeLabID": $scope.CollegeLabID,
                "CollegeID": $scope.CollegeId,
                "LabID": $scope.Lab,
                "MajorEquipment": $scope.MajorEquipments,
                "Remarks": $scope.Remarks,
                "LabTotalCost": $scope.LabCost,
                "UserName": $scope.UserName
            }
            $scope.Loading = true;
            var adddistcoorcentre = AdminService.UpdateCollegeLab(obj);
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
                    $scope.AddDetails = '1';
                    $scope.UpdateDetails = '0';
                    $scope.ClearData()
                    $scope.GetCollegeLabsByUserName($scope.UserName)
                } else if (res.Table[0].ResponseCode == '400') {
                    $scope.Loading = false;
                    alert(res.Table[0].ResponseDescription);
                    $scope.AddDetails = '1';
                    $scope.UpdateDetails = '0';
                    $scope.GetCollegeLabsByUserName($scope.UserName)
                    $scope.ClearData()
                }

                else {
                    alert("Not Added")
                    $scope.GetCollegeLabsByUserName($scope.UserName)
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