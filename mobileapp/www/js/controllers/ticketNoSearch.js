angular.module('ticketNoSearch.controllers', [])

.controller('ticketNoSearchCtrl', function ($scope, $state, $ionicModal, $stateParams, httpservices, cordovadialogservice, $ionicLoading) {
    // $scope.reviewStar = 4;
   
    console.log($stateParams.branchName)
    $scope.data = { ticketNo :''};
    $scope.checkTicketDescription = function (data) {
        console.log(data.ticketNo)
        if (data.ticketNo == '') {
           
            cordovadialogservice.alert('Ingrese el número del boleto para continuar', 'Alert', 'OK')
           
        }
        else {
            // console.log(ticketNo);
            var objData = {
                "BranchID":JSON.parse( $stateParams.branchName),
               // "CreatedDate": new Date(),
                "GCMId": "String content",
                //"TicketAddedTime": 0,
               // "TicketID": 2147483647,
                "TicketNo": data.ticketNo,
                "Ticket_attended": 1
            }
            // var obj = { req_url: URL + "GetEstimatedTicketTime/" + data.ticketNo + '/' + $stateParams.branchName, data: '' }
            var obj = { req_url: URL + "SubmitTickets", data: objData }
        //httpservices.getData(obj).then(function (res) {
        //    //  $scope.branchName = res.data.GetBranchListResult;
        //    console.log(res);
        //   // ticketCurrentStatus
            //})
            $ionicLoading.show({
                templateUrl: 'templates/loading.html'

            });
            httpservices.setData(obj).then(function (res) {
                $ionicLoading.hide();
                    //  $scope.branchName = res.data.GetBranchListResult;
                console.log(res);
                $state.go('ticketCurrentStatus', { ticketData: JSON.stringify({ ticketNo: data.ticketNo, branchId: $stateParams.branchName }) })
                   // ticketCurrentStatus
                })
        }
    }



    //$ionicModal.fromTemplateUrl('templates/searchmodal.html', {
    //    scope: $scope,
    //    animation: 'slide-in-up'
    //}).then(function (modal) {
    //    $scope.modal = modal;
    //});
    //$scope.openModal = function () {
    //    $scope.modal.show();
    //};
    //$scope.closeModal = function () {
    //    $scope.modal.hide();
    //};
})