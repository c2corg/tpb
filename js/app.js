var myApp = angular.module('myApp', ['onsen.directives', 'angular-chrono', 'ngCordova'])
        .run(function($rootScope){
            $rootScope.startTimer = null;
            $rootScope.pauseTimer = null;
            $rootScope.showStart = true;
            $rootScope.showEnregistrer = false;
});