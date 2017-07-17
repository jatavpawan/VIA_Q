angular.module('screenNo4N.controllers', [])

.controller('screenNo4NCtrl', function ($scope, $state, httpservices,$stateParams) {
    // $scope.reviewStar = 4;
    //var obj = { req_url: URL + "GetBranchList/''", data:'' }
    //httpservices.getData(obj).then(function (res) {
    //    $scope.branchName = res.data.GetBranchListResult;

    //})
    
    $scope.data=JSON.parse($stateParams.data);
    console.log($scope.data)
    setTimeout(function () {
        $state.go('sharePage',{data:$scope.data.ticketNo});
    }, 20000)
    //$scope.searchBranch = function (name) {
    //    obj = { req_url: URL + "GetBranchList/" + name, data: '' }
    //    console.log(name);
    //    if (name == '') {
    //        obj = { req_url: URL + "GetBranchList/''" + name, data: '' }
    //    }
    //    httpservices.getData(obj).then(function (res) {
    //        $scope.branchName = res.data.GetBranchListResult;
    //    })
    //}

})