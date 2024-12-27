define(['app'], function (app) {
    app.controller("CommingSoonController", function ($scope, $state, AdminService, $filter, $localStorage) {

        const $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.GetPublishData()
            $scope.Json = [{ "No": 1, "Amount": 500000, "Payable": 25000, "BidAmount": 120000, "AgentCommission": 2, "Divident": "", "Net": "", "TeamMembers": 20, "AdditionalAmount": 0,"TotalMonths":20 },
                { "No": 1, "Amount": 204000, "Payable": 12000, "BidAmount": 60000, "AgentCommission": 2, "Divident": "", "Net": "", "TeamMembers": 17, "AdditionalAmount": 4000, "TotalMonths": 17 },
                { "No": 1, "Amount": 102000, "Payable": 6000, "BidAmount": 30000, "AgentCommission": 2, "Divident": "", "Net": "", "TeamMembers": 17, "AdditionalAmount": 2000, "TotalMonths": 17},
                { "No": 1, "Amount": 102000, "Payable": 8500, "BidAmount": 30000, "AgentCommission": 2, "Divident": "", "Net": "", "TeamMembers": 12, "AdditionalAmount": 2000, "TotalMonths": 12},
                { "No": 1, "Amount": 51000, "Payable": 3000, "BidAmount": 15000, "AgentCommission": 2, "Divident": "", "Net": "", "TeamMembers": 17, "AdditionalAmount": 1000, "TotalMonths": 17 }]


            for (var i = 0; i < $scope.Json.length; i++) {
                var AgentCom = Math.round((($scope.Json[i].AgentCommission * ($scope.Json[i].Amount - $scope.Json[i].AdditionalAmount)) / 100));
                console.log("Agent Comission :"+AgentCom)
               // var AgentCom = 10000
                var RemainingBid = Math.round($scope.Json[i].BidAmount - AgentCom)
                console.log("Remaining Bid :" +RemainingBid)
                var TeamDistribution = Math.round(RemainingBid / $scope.Json[i].TeamMembers)
                console.log("Team Distribution :" +TeamDistribution)
                var NetPay = Math.round($scope.Json[i].Payable - TeamDistribution)
                console.log("Net Pay :" + NetPay)
                var TotalAmount = Math.round($scope.Json[i].TotalMonths * NetPay)
                console.log("Total Amount :" + TotalAmount)
                var RemainingDue = Math.round(TotalAmount - NetPay)
                console.log("Remaining Due :" + RemainingDue)
}
        }

        $scope.GetPublishData = function () {
            var getResults = AdminService.GetPublishData();// ReleaseResults
            getResults.then(function (response) {
                console.log(response)
                try {
                    var res = JSON.parse(response)
                    $scope.Publish = res.Table[0].publish
                    if ($scope.Publish == 1) {
                        //$timeout(function () {
                            $state.go('index')
                        //}, 5000);
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

    })
})