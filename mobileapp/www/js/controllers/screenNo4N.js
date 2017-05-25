angular.module('screenNo4N.controllers', [])

.controller('screenNo4NCtrl', function ($scope, $state, httpservices) {
    // $scope.reviewStar = 4;
    //var obj = { req_url: URL + "GetBranchList/''", data:'' }
    //httpservices.getData(obj).then(function (res) {
    //    $scope.branchName = res.data.GetBranchListResult;
    //})
    setTimeout(function () {
        $state.go('sharePage');
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