angular.module('ticketNoSearch.controllers', [])

.controller('ticketNoSearchCtrl', function ($scope, $state, $ionicModal) {
    // $scope.reviewStar = 4;
    $ionicModal.fromTemplateUrl('templates/searchmodal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
})