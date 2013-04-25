if(traveltours == undefined) {
	traveltours = {};	
}

var travelToursModule = angular.module('TravelTours', ['ui.bootstrap', 'ngResource']);

//Set up the routes....
travelToursModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/home', {templateUrl: 'partials/traveltours/home/home.html', controller: traveltours.home.HomeController}).
        when('/travel', {templateUrl: 'partials/traveltours/travel/travel.html', controller: traveltours.travel.TravelController}).
        when('/admin', {templateUrl: 'partials/traveltours/admin/admin.html', controller: traveltours.admin.AdminController}).
        otherwise({redirectTo: '/home'});
}]);

