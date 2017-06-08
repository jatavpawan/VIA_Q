// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var URL = 'http://gservicesapp.com/Service.svc/'
angular.module('VIQ', ['ionic', 'ticketNoSearch.controllers', 'ticketCurrentStatus.controllers',
    'screenNo4N.controllers', 'branchcode.controllers', 'cordovadialogservice.module',
    'ngCordova', 'httpservices.module', 'sharePage.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.backButton.previousTitleText(false);
    $stateProvider.state('startPage', {
        url: '/startPage',
        templateUrl: 'templates/startPage.html',
       
    }).state('branchcode', {
        url: '/branchcode',
        templateUrl: 'templates/branchcode.html',
        controller: 'branchcodeCtrl',
    })

   .state('ticketNoSearch', {
       url: '/ticketNoSearch/:branchName',
       templateUrl: 'templates/ticketNoSearch.html',
       controller: 'ticketNoSearchCtrl',
   })

   .state('ticketCurrentStatus', {
       url: '/ticketCurrentStatus/:ticketData',
       templateUrl: 'templates/ticketCurrentStatus.html',
       controller: 'ticketCurrentStatusCtrl'
   }).state('screenNo4N', {
       url: '/screenNo4N',
       templateUrl: 'templates/screenNo4N.html',
       controller: 'screenNo4NCtrl'
   })
     .state('sharePage', {
         url: '/sharePage',
         templateUrl: 'templates/sharePage.html',
         controller: 'sharePageCtrl'
     })
    $urlRouterProvider.otherwise('/sharePage');
});
