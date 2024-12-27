define(['app'], function (app) {
    app.controller("AcademicYearController", function ($scope, $state, AdminService, $filter, $localStorage) {


        const $ctrl = this;
        $ctrl.$onInit = () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            $scope.AcademicYear = 2;
            $scope.GetAcademicCalenders()
            $scope.GetAcademicYears()
            $scope.GetAcademicCalendersById()
        }

        $scope.GetAcademicYears = function () {
            var GetAcademicYears = AdminService.GetAcademicYears();
            GetAcademicYears.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                $scope.GetAcademicYearsList = res.Table;

            },
                function (error) {
                    alert("error while loading Years");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.GetAcademicCalenders = function () {

            $scope.NoData = false;
            $scope.Data = false;
            $scope.Loading = true;
            var GetDistricts = AdminService.GetAcademicCalenders();
            GetDistricts.then(function (response) {
                try {

                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.Loading = false;
                }
                if (res.Table.length > 0) {
                    $scope.Loading = false;
                    $scope.NoData = false;
                    $scope.Data = true;
                    $scope.GetAcademicCalenderList = res.Table;
                    //$scope.CollegeListData = res.Table1;
                } else {
                    //alert("No Data Found")
                    $scope.Loading = false;
                    $scope.NoData = true;
                    $scope.Data = false;
                }




            },
                function (error) {
                    $scope.Loading = false;
                    $scope.NoData = true;
                    $scope.Data = false;
                    alert("error while loading Colleges");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        
        $scope.GetAcademicCalendersById = function () {
            var GetAcademicCalendersById = AdminService.GetAcademicCalendersById($scope.AcademicYear);
            GetAcademicCalendersById.then(function (response) {
                try {
                    var res = JSON.parse(response);
                }
                catch (err) { }
                var data = res
                console.log(data)
                $scope.DiplomaAC = data.Table
                $scope.DPharmacyAC = data.Table1
                $scope.HolidaysAC = data.Table2
                $scope.IndTrainingAC = data.Table3
                $scope.CalendarNotesAC = data.Table4
                $scope.UnitTestsAC = data.Table5
                $scope.ActivitiesAC = data.Table6

            },
                function (error) {
                    alert("error while loading Years");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.printCalender = function () {

            $scope.printHead = true;
            var divName = "idtoDivPrint";
            var $markstable = document.createElement("div");
            $markstable.innerHTML = '';
            $markstable.className = "table";
            var divToPrint = document.getElementById(divName);
            var temp = document.body.innerHTML;
            //    $("#markslist").hide();
            var domClone = divToPrint.cloneNode(true);
            var $printSection = document.getElementById("printSection");
            if ($printSection) {
                var $printSection = document.createElement("div");
                $printSection.id = "printSection";


                document.body.appendChild($printSection);

                var $ele1 = document.createElement("div");
                $ele1.className = "row";

                var $ele2 = document.createElement("div");
                $ele2.className = "col-lg-2 col-md-12";

                var $ele3 = document.createElement("div");
                $ele3.className = "col-lg-10 col-md-12";


                $ele1.appendChild($ele3);

                $printSection.appendChild($ele1);

                $printSection.appendChild($ele1);
                $printSection.appendChild($markstable);

            }
            var tempTitle = "Academic_Calender";
            var dateobj = new Date();
            //var B = dateobj.getDate();
            // var date = dateobj.getDate() + dateobj.getHours+":"+dateobj.getMinutes;
            //document.write(B);
            document.title = "Academic_Calender";
            window.print();
            document.title = tempTitle;

        }

    })
})