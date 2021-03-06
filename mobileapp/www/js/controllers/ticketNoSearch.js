﻿angular.module('ticketNoSearch.controllers', [])

    .controller('ticketNoSearchCtrl', function ($scope, $state, $ionicModal, $stateParams, httpservices, cordovadialogservice, $ionicLoading) {
        // $scope.reviewStar = 4;

        console.log($stateParams.branchName)
        var value = JSON.parse($stateParams.branchName);
        $scope.data = { ticketNo: '' };
        $scope.data.branchName = value.SitioDireccion;
        $scope.checkTicketDescription = function (data) {
            console.log($scope.data)
            console.log($stateParams.branchName)
            if (data.ticketNo == '') {

                cordovadialogservice.alert('Por favor, ingrese su número de ticket.', '   ', 'OK')

            }
            else {
                // console.log(ticketNo);
                // var objData = {
                //     "BranchID":JSON.parse( $stateParams.branchName),
                //    // "CreatedDate": new Date(),
                //     "GCMId": "String content",
                //     //"TicketAddedTime": 0,
                //    // "TicketID": 2147483647,
                //     "TicketNo": data.ticketNo,
                //     "Ticket_attended": 1
                // }
                // var obj = { req_url: URL + "GetEstimatedTicketTime/" + data.ticketNo + '/' + $stateParams.branchName, data: '' }
                var obj = { req_url: URL + "Iniciar/" + data.ticketNo, data: {} };
                //httpservices.getData(obj).then(function (res) {
                //    //  $scope.branchName = res.data.GetBranchListResult;
                //    console.log(res);
                //   // ticketCurrentStatus
                //})
                $ionicLoading.show({
                    templateUrl: 'templates/loading.html'

                });
                httpservices.getData(obj).then(function (res) {
                    $ionicLoading.hide();
                    //  $scope.branchName = res.data.GetBranchListResult;
                    console.log(res);
                    if (!res.data.Error) {
                        console.log(data.SitioDireccion)
                        if (res.data.Evento == 1)
                            $state.go('screenNo4N', { data: JSON.stringify({ ticketNo: res.data.ID, ticketText: data.ticketNo, branchName: $scope.data.branchName }) });
                        else if (res.data.Evento == 2)
                            $state.go('sharePage', { data: data.ticketNo });
                        else
                            $state.go('ticketCurrentStatus', { ticketData: JSON.stringify({ ticketNo: res.data.ID, ticketText: data.ticketNo, branchName: $scope.data.branchName }) });

                    } else {
                        // cordovadialogservice.alert(res.data.Error);
                        cordovadialogservice.alert("Lo sentimos, el ticket ingresado no es válido. Por favor, corrobore su código y vuelva a ingresarlo.", '  ', 'OK')

                        // ticketCurrentStatus
                    }
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