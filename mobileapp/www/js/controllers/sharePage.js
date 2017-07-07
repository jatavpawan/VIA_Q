angular.module('sharePage.controllers', [])

.controller('sharePageCtrl', function ($scope, $state, $ionicModal, $timeout, $cordovaInAppBrowser) {
    // $scope.reviewStar = 4;
    var options = {
        location: 'yes',
        clearcache: 'yes',
        closebuttoncaption: 'Close'
    };
    var url;
    $ionicModal.fromTemplateUrl('templates/goToStore.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modalRes = modal;
    });
    $scope.closeModal = function () {
        $scope.modalRes.hide();
    }

    $scope.message = "La aplicación no está instalada en tu dispositivo. ¿Deseas instalarlo?";
    $scope.ShareTwitter = function () {
        //alert('this is twitter');

        window.plugins.socialsharing.shareViaTwitter('Message via Twitter', '', '', function (suc) { }, function (er) {
            $timeout(function () {
                $scope.modalRes.show();
            }, 0)
            if (ionic.Platform.isIOS() || ionic.Platform.isIPad()) {
                url = 'https://itunes.apple.com/app/id333903271'
            }
            else {
                url = 'https://play.google.com/store/apps/details?id=com.twitter.android'
            }
        });
        //window.plugins.socialsharing.shareViaTwitter('Message and link via Twitter', null /* img */, 'http://www.x-services.nl');
    }
    $scope.ShareFacebook = function () {
        // alert('this is FaceBook');

        window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, null /* url */, function () { console.log('share ok') }, function (errormsg) {
            $timeout(function () {
                $scope.modalRes.show();
            }, 0);
            if (ionic.Platform.isIOS() || ionic.Platform.isIPad()) {
                url = 'https://itunes.apple.com/app/id284882215'
            }
            else {
                url = 'https://play.google.com/store/apps/details?id=com.facebook.katana'
            }
        });
    }

    $scope.ShareInstagram = function () {
        // alert('This is Instagram');
        window.plugins.socialsharing.shareViaInstagram('Message via Instagram', 'https://www.google.nl/images/srpr/logo4w.png',
            function (suc) { console.log('share ok') }, function (errormsg) {
            $scope.modalRes.show();
            if (ionic.Platform.isIOS() || ionic.Platform.isIPad()) {
                url = 'https://itunes.apple.com/app/id389801252'
            }
            else {
                url = 'https://play.google.com/store/apps/details?id=com.instagram.android'
            }
        });
    }
    $scope.ShareLinkedIn = function () {
        if (ionic.Platform.isIOS() || ionic.Platform.isIPad()) {
            $scope.shareVia('com.appcoda.linkedin.oauth', 'https://www.google.nl/images/srpr/logo4w.png');
            url = 'https://itunes.apple.com/app/id288429040'
        }
        else {
            url = 'https://play.google.com/store/apps/details?id=com.linkedin.android'
            $scope.shareVia('com.linkedin.android', 'https://www.google.nl/images/srpr/logo4w.png')
        }
    }

    $scope.ShareGooglePlus = function () {
        if (ionic.Platform.isIOS() || ionic.Platform.isIPad()) {
            $scope.shareVia('', 'https://www.google.nl/images/srpr/logo4w.png')
            url = 'http://www.google.com'
        }
        else {
            url = 'https://play.google.com/store/apps/details?id=com.google.android.apps.plus'
            $scope.shareVia('com.google.android.apps.plus', 'https://www.google.nl/images/srpr/logo4w.png')
        }
    }
    $scope.shareVia = function (packageName, text) {
        window.plugins.socialsharing.shareVia(packageName, text, '', '', '', function () { console.log('share ok') }, function (msg) {
            $scope.modalRes.show();
        })
    }
    $scope.goToStore = function () {

        document.addEventListener("deviceready", function () {

            $cordovaInAppBrowser.open(url, '_system', options)
              .then(function (event) {
                  // success
              })
              .catch(function (event) {
                  // error
              });


            // $cordovaInAppBrowser.close();

        }, false);
    }
})