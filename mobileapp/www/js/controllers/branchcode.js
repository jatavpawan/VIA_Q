angular.module('branchcode.controllers', [])

.controller('branchcodeCtrl', function ($scope, $state, httpservices, $ionicLoading) {
    // $scope.reviewStar = 4;
    var obj = { req_url: URL + "Entidad/100", data: '' }
    $ionicLoading.show({
        templateUrl: 'templates/loading.html'

    });
    httpservices.getData(obj).then(function (res) {
       $ionicLoading.hide();
       console.log(res)
        $scope.branchName = res.data;
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
    $scope.goToTicketSearch=function(value){
         obj = { req_url: URL + "Sitio/" + value.SitioID, data: {} }
         httpservices.getData(obj).then(function (res) {
       $ionicLoading.hide();
       console.log(res)
        $state.go("ticketNoSearch",{branchName:JSON.stringify(value)})
        $scope.branchName = res.data;
    })
       
    }

})