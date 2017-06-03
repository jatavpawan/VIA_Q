angular.module('sharePage.controllers', [])

.controller('sharePageCtrl', function ($scope, $state) {
    // $scope.reviewStar = 4;

    $scope.ShareTwitter = function () {
        alert('this is twitter');
        window.plugins.socialsharing.shareViaTwitter('Message via Twitter');
        //window.plugins.socialsharing.shareViaTwitter('Message and link via Twitter', null /* img */, 'http://www.x-services.nl');
    }
    $scope.ShareFacebook = function () {
        alert('this is FaceBook');
        window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, null /* url */, function () { console.log('share ok') }, function (errormsg) { alert(errormsg) })
    }

    $scope.ShareInstagram = function () {
        alert('This is Instagram');
        window.plugins.socialsharing.shareViaInstagram('Message via Instagram', 'https://www.google.nl/images/srpr/logo4w.png', function () { console.log('share ok') }, function (errormsg) { alert(errormsg) });
    }



})