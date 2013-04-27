
traveltours = {};


var travelToursModule = angular.module('TravelTours', ['ui.bootstrap', 'ngResource']);

//Set up the routes....
travelToursModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/home', {templateUrl: 'sites/traveltours/home/home.html', controller: traveltours.home.HomeController}).
        when('/travel', {templateUrl: 'sites/traveltours/travel/travel.html', controller: traveltours.travel.TravelController}).
        otherwise({redirectTo: '/home'});
}]);

