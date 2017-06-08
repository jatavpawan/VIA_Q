angular.module('sharePage.controllers', [])

.controller('sharePageCtrl', function ($scope, $state) {
    // $scope.reviewStar = 4;

    $scope.ShareTwitter = function () {
        //alert('this is twitter');
        window.plugins.socialsharing.shareViaTwitter('Message via Twitter');
        //window.plugins.socialsharing.shareViaTwitter('Message and link via Twitter', null /* img */, 'http://www.x-services.nl');
    }
    //$scope.ShareFacebook = function () {
    //   // alert('this is FaceBook');
    //    window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, null /* url */, function () { console.log('share ok') }, function (errormsg) { alert(errormsg) })
    //}

    $scope.ShareInstagram = function () {
        // alert('This is Instagram');
        window.plugins.socialsharing.shareViaInstagram('Message via Instagram', 'https://www.google.nl/images/srpr/logo4w.png', function () { console.log('share ok') },
            function (errormsg) { alert("Please install Instagram App from play store on mobile, then try again."); });
    }

    $scope.ShareGooglePlus = function () {

        document.addEventListener('deviceready', function () {
            window.plugins.googleplus.login(
        {
            //  'scopes': '... ', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
            'webClientId': '760403013911-j8h18m9u3p91oirs50nv3rq6732aq5kf.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
            'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
        },
        function (obj) {
            alert(JSON.stringify(obj)); // do something useful instead of alerting
        },
        function (msg) {
            alert('error: ' + msg);
        }
    );

        }, false);


    }


    $scope.ShareFacebook = function () {
        facebookConnectPlugin.getLoginStatus(function onLoginStatus(status) {
            console.log("current status: ", status);
            facebookConnectPlugin.showDialog({
                method: "share",
                href: "http://promozite.com/checkfans",
                caption: "test Caption ",
                description: "test decription",
                picture: 'http://promozite.com/checkfans/res/images/main_logo.png'

            }, function (response) {
                //myApp.hidePreloader();
                //$$('.sharedDiv').hide();
            },
                 function (response) {
                     alert("Please install Facebook App from play store on mobile, then try again.");
                 })
        });

    }


    $scope.ShareLinkedIn = function () {
        //  alert('this is linkedIn...');
        //  generic callback functions to make this example simpler 


        // logging in with all scopes 
        // you should just ask for what you need 
        var scopes = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];

        // login before doing anything 
        // this is needed, unless if we just logged in recently 
        cordova.plugins.LinkedIn.login(scopes, true, function () {

            // get connections 
            cordova.plugins.LinkedIn.getRequest('people/~', function (r) { console.log('LinkedIn Response: ', r); }, function (e) { console.error('LinkedIn Error: ', e); });

            // share something on profile 
            // see more info at https://developer.linkedin.com/docs/share-on-linkedin 
            var payload = {
                comment: 'Hello world!',
                visibility: {
                    code: 'anyone'
                }
            };
            cordova.plugins.LinkedIn.postRequest('~/shares', payload, function (r) { console.log('LinkedIn Response: ', r); }, function (e) { console.error('LinkedIn Error: ', e); });

        }, function (e) { alert("Please install LinkedIn App from play store on mobile, then try again."); });


        // check for existing session 
        //cordova.plugin.LinkedIn.getActiveSession(function (session) {
        //    if (session) {
        //        console.log('We have an active session');
        //        console.log('Access token is: ', session.accessToken);
        //        console.log('Expires on: ', session.expiresOn);
        //    } else {
        //        console.log('There is no active session, we need to call the login method');
        //    }
        //});

    }







})