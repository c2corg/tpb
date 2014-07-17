'use strict';
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
        if (null != $rootScope.pauseTimer) {
            $scope.pauseTime = $rootScope.pauseTimer;
        }
        if (null != $rootScope.startTimer) {
            $scope.time = $rootScope.startTimer;
        }

        $scope.showEnregistrer = true;
        $scope.showStart = false;

        // Update du status dans le rootscope
        $rootScope.showEnregistrer = $scope.showEnregistrer;
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
myApp.controller('settingsCtrl', function settingsCtrl($scope, $http) {
    $scope.data = "dataSet";
    $scope.status = "statusSet";
    $scope.settings = {
        freqGPS: 10,
        GPSDistance: 10,
        battery: 10,
        username: 'illianor',
        password: 'toto'
    };
    
    $scope.debug = "debugButton";
    
    $http.defaults.useXDomain = true;
    
    $scope.onLogin = function(){
        
        $scope.debug = "functionLogin";
        $http({
            method: 'POST',
            url: 'http://camptocamp.org/login',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            ,
            data: {
                login_name: 'illianor',
                password: 'aaIWFCxG'
            }
        }).success(function(data, status, headers, config, scope){
            $scope.debug= "success";
            $scope.data = data;
            $scope.status = status;
            $scope.headers = headers;
        }).error(function(data, status, headers, config, scope){
            $scope.debug="error";
            $scope.data = data;
            $scope.status = status;
            $scope.headers = headers;
        });
    };
});


/*****     GEOLOCATION     *****/
myApp.controller('GeolocationCtrl', function($scope, $cordovaGeolocation) {
    // Trace vide
    $scope.trace = [
    ];
    // Initialisation d'un point
    $scope.point = {
        latitude: 0.000,
        longitude: 0.000,
        altitude: 0
    };
    //Ajout d'un point à la trace
    $scope.addPoint = function(point) {
        $scope.trace.push(point);
    };
    
    // Pas utilisé pour le moment
    $cordovaGeolocation.getCurrentPosition().then(function(position) {
        // Position here: position.coords.latitude, position.coords.longitude
    }, function(err) {
        // error
    });

    /**
     * Permet de suivre d'avoir la géolocalisation de l'utilisateur et de créer
     * une trace GPS
     */
    $cordovaGeolocation.watchPosition({maximumAge: 300, timeout: 5000, enableHighAccuracy: true}).then(function() {

    }, function(err) {
        $console.log('error');
    }, function(position) {
        $scope.lat = position.coords.latitude;
        $scope.lng = position.coords.longitude;
        $scope.alt = position.coords.altitude;
        $scope.all = position;
        $scope.point = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            altitude: position.coords.altitude
        };
        $scope.addPoint($scope.point);
        $scope.$apply();
    });

    /**
     * Retour différencié si 
     * @returns {String}
     */
    $scope.getLatLng = function() {
        if (!$scope.lat && !$scope.lng) {
            return 'No Position';
        }
        return $scope.lat.toFixed(3) + ', ' + $scope.lng.toFixed(3) + ', ' + $scope.alt;
    };

    $scope.toggleTrack = function() {
        $cordovaGeolocation.watchPosition().then(function(resp) {
        }, function(err) {
        }, function(position) {
            $scope.lat = position.coords.latitude;
            $scope.lng = position.coords.longitude;
            $scope.alt = position.coords.altitude;
            $scope.timestamp = position.timestamp;
        });
    };
//    $scope.addPoint = function($scope){
//        return $scope.trace.push($scope.getLatLng());
//    };
    

});

/**
 * Controlleur pour le login
 */
myApp.controller('loginCtrl', function loginCtrl($scope) {
    $controller('settingsCtrl', {$scope: $scope});
    $scope.debug = "bouton";
    $scope.onLogin = function(user){
        $http({
            method: 'POST',
            url: 'http://camptocamp.org/login',
            header:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                login_name: 'illianor',
                password: 'aaIWFCxG'
            }
        }).success(function(data, status, headers, config){
            $scope.data = data;
            $scope.status = status;
        }).error(function(data, status, headers, config){
            $scope.status = status;
        });
    };
});