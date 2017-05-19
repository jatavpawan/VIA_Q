angular.module('branchcode.controllers', [])

.controller('branchcodeCtrl', function ($scope, $state, httpservices, $ionicLoading) {
    // $scope.reviewStar = 4;
    var obj = { req_url: URL + "GetBranchList/''", data: '' }
    $ionicLoading.show({
        templateUrl: 'templates/loading.html'

    });
    httpservices.getData(obj).then(function (res) {
       $ionicLoading.hide();
        $scope.branchName = res.data.GetBranchListResult;
    })
    $scope.searchBranch = function (name) {
        obj = { req_url: URL + "GetBranchList/" + name, data: '' }
        console.log(name);
        if (name == '') {
            obj = { req_url: URL + "GetBranchList/''" + name, data: '' }
        }
        httpservices.getData(obj).then(function (res) {
            $scope.branchName = res.data.GetBranchListResult;
        })
    }

})