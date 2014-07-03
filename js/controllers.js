'use strict';
//
//myApp.controller('AboutCtrl', function ($scope){
//    
//});
//
//myApp.controller('showMenuStat', function ($scope){
//    $scope.goRoute=route;
//});
//
//myApp.controller('mainController', function($scope) {
//
//  $scope.goCats = false;
//  });
//  
//myApp.controller('settings', function ($scope){
//    
//});
//
//myApp.controller('sortie', function($scope){
//    
//});
//    
//myApp.controller('MorningCtrl', function($scope){
//   $scope.greeting = "Good Morning!"; 
//});



//var controllers = {};
//
//controllers.SearchList = function ($scope){
//
//    $scope.coworkers = [
//            {name: 'Joe Bob', city: 'Ukrainia'},
//            {name: 'Adam Blobnovski', city: 'Logan' },
//            {name: 'Carlos Sanchez', city: 'Deerbushle'},   
//            {name: 'Martin Kellerweller', city: 'Uptown'},
//            {name: 'John Doe',  city: 'New York City'}
//        ];
//};
//
//
//
//myApp.controller(controllers);




/**
 * Permet le controle du timer
 */


myApp.controller('timerCtrl', function MyCtrl($scope, chronoService, $rootScope) {

    $scope.showStart = $rootScope.showStart;
    $scope.showEnregistrer = $rootScope.showEnregistrer;
    $scope.pauseTime = null;
    
    $scope.start = function() {
        if(null != $rootScope.pauseTimer){
            $scope.pauseTime = $rootScope.pauseTimer;
        }
        if(null != $rootScope.startTimer){
            $scope.time = $rootScope.startTimer;
        }
        
        $scope.showEnregistrer = true;
        $scope.showStart = false;
        
        // Update du status dans le rootscope
        $rootScope.showEnregistrer =$scope.showEnregistrer;
        $rootScope.showStart = $scope.showStart;
        
        if (null != $scope.time) {
            $scope.time = $scope.time + (Date.now() - $scope.pauseTime);
        } else {
            $scope.time = Date.now();
        }
        
        chronoService.start();
        $rootScope.startTimer = $scope.time;
    };
    $scope.pause = function() {
        $scope.showStart = !$scope.showStart;
        $rootScope.showStart = $scope.showStart;
        $scope.pauseTime = Date.now();
        chronoService.stop();
        
        $rootScope.pauseTimer = $scope.pauseTime;
    };
    chronoService.addTimer('myTimer', {interval: 500});
});


/*****    SETTINGS    *****/

myApp.controller('settingsCtrl', function settingsCtrl($scope){
    $scope.settings = {
        freqGPS: 10,
        GPSDistance: 10,
        battery: 10,
        username: 'illianor',
        password: 'toto'
    }
});


/*****     GEOLOCATION     *****/
myApp.controller('ng-cordova', function($scope, $cordovaGeolocation) {
  $cordovaGeolocation.getCurrentPosition().then(function(position) {
      // Position here: position.coords.latitude, position.coords.longitude
    }, function(err) {
      // error
    });

  $cordovaGeolocation.watchPosition().then(function() {
      // Not currently used
    }, function(err) {
      // An error occured. Show a message to the user
    }, function(position) {
      // Active updates of the position here
  });
});