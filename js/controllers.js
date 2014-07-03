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
myApp.controller('timerCtrl', function MyCtrl($scope, chronoService) {
        $scope.showStart = true;
        $scope.showEnregistrer = false;
        $scope.pauseTime = null;
        
        $scope.start = function (){
            $scope.showEnregistrer = true;
            $scope.showStart = false;
            if (null != $scope.time){
                $scope.time = $scope.time + (Date.now()-$scope.pauseTime);
            }else{
                $scope.time = Date.now();
            }
            chronoService.start();
        };
        $scope.pause = function(){
            $scope.showStart = !$scope.showStart;
            $scope.pauseTime = Date.now();
            chronoService.stop();
        };
        chronoService.addTimer('myTimer', { interval: 500 });
});