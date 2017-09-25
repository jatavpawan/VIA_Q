//Generic service for calling API
angular.module('detectGestures.module', []) .directive('detectGestures', function($ionicGesture) {
    return {
      restrict :  'A',
  
      link : function(scope, elem, attrs) {
        var gestureType = attrs.gestureType;
  
        switch(gestureType) {
          case 'swipe':
            $ionicGesture.on('swipe', scope.reportEvent, elem);
            break;
          case 'swiperight':
            $ionicGesture.on('swiperight', function(event)  { window.history.go(-1)}, elem);
            break;
          case 'swipeleft':
            $ionicGesture.on('swipeleft', function(event)  { window.history.go(-1)}, elem);
            break;
          case 'doubletap':
            $ionicGesture.on('doubletap', scope.reportEvent, elem);
            break;
          case 'tap':
            $ionicGesture.on('tap', scope.reportEvent, elem);
            break;
          case 'scroll':
            $ionicGesture.on('scroll', scope.reportEvent, elem);
            break;
        }
  
      }
    }
  })
