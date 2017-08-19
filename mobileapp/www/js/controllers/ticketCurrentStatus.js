angular.module('ticketCurrentStatus.controllers', [])

.controller('ticketCurrentStatusCtrl', function ($scope, $state, $stateParams, httpservices, $ionicLoading) {
    $scope.data = JSON.parse($stateParams.ticketData);
    //$scope.data.seconds='10'
    // $scope.reviewStar = 4;

    var x;
    var obj = { req_url: URL + "Ticket/" + $scope.data.ticketNo , data: '' }
    httpservices.getData(obj).then(function (res) {
        //  $scope.branchName = res.data.GetBranchListResult;
        console.log(res);
        $scope.data.Ticket_attended=res.data.Emision;
        $scope.data.Posicion=res.data.Posicion;
        $scope.data.TicketId=$scope.data.ticketNo;
        var a = res.data.Espera
        if (!a) {
            a = "00:00:00";
        }
       // var time = a.split(':');
       // console.log(time);
       // var minute = parseInt(time[1]) * 1000 * 60;
       // var second = parseInt(time[2]) * 1000;
        var milisecond = res.data.Espera*1000;
        console.log(milisecond)
        var ms = new Date().getTime();
        var date = ms + milisecond; console.log(date);
   x=   setInterval(function () {
            var currentTime = new Date().getTime();
            var distance = date - currentTime;
          
            if (distance < 1) {
                clearInterval(x);
                var obj = { req_url: URL + "Tickets_exausted", data: { TicketID: $scope.data.TicketId, Ticket_attended :1} }
                console.log($scope.data)
                 $state.go('screenNo4N',{data:JSON.stringify($scope.data)});
                // httpservices.setData(obj).then(function (res) {
                //     $state.go('screenNo4N');
                // })
               
            } else {
                $scope.$apply(function () {
                    $scope.data.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    $scope.data.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    $scope.data.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                });
            }
            //  $scope.date = seconds
            console.log($scope.data.hours);
            console.log($scope.data.minutes);
            console.log($scope.data.seconds);
        }, 1000)
       // ticketCurrentStatus
    })
    $scope.exitPage = function () {
        // var obj = { req_url: URL + "Tickets_exausted", data: { TicketID: $scope.data.TicketId, Ticket_attended: 1 } }
        // $ionicLoading.show({
        //     templateUrl: 'templates/loading.html'

        // });
        // httpservices.setData(obj).then(function (res) {
        //     $ionicLoading.hide();
        //     clearInterval(x);
        //     $state.go('sharePage');
          cordovadialogservice.alert("Gracias por utilizar VIA Q.","Alert","OK").then(function(){
             $state.go('sharePage',{data:$scope.data.ticketNo});
          })
                
        // })

    }
  //  http://gservicesapp.com/Service.svc/GetEstimatedTicketTime/{TICKETNO}/{BRANCHID}
})