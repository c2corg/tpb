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



var controllers = {};

controllers.SearchList = function ($scope){

    $scope.coworkers = [
            {name: 'Joe Bob', city: 'Ukrainia'},
            {name: 'Adam Blobnovski', city: 'Logan' },
            {name: 'Carlos Sanchez', city: 'Deerbushle'},   
            {name: 'Martin Kellerweller', city: 'Uptown'},
            {name: 'John Doe',  city: 'New York City'}
        ];
};



myApp.controller(controllers);

/**
 * Contrôleur du login
 */
function validerUser($scope, User){
    var login = 'illianor';
    var password = '';
};

//function watchSuccess(position) {
//    var element = document.getElementById('geolocation');
//    element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
//            'Longitude: ' + position.coords.longitude + '<br />' +
//            'Altitude: ' + position.coords.altitude + '<br />' +
//            'Accuracy: ' + position.coords.accuracy + '<br />' +
//            'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
//            'Heading: ' + position.coords.heading + '<br />' +
//            'Speed: ' + position.coords.speed + '<br />' +
//            'Timestamp: ' + position.timestamp + '<br />' +
//            '<hr />' + element.innerHTML;
//}