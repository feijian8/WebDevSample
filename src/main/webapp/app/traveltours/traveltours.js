namespace('traveltours');

var travelToursModule = angular.module('TravelTours', ['ui.bootstrap', 'ngResource']);

//Base REST URL for the entire data layer
traveltours.REST_BASE_URL = 'rest/';

//Set up routes for the customer site
travelToursModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/home', {templateUrl: 'sites/traveltours/home/home.html', controller: traveltours.home.HomeController}).
        when('/travel', {templateUrl: 'sites/traveltours/travel/travel.html', controller: traveltours.travel.TravelController}).
        otherwise({redirectTo: '/home'});
}]);


//Set up routes for the admin module
var travelToursAdminModule = angular.module('TravelToursAdmin', ['ui.bootstrap', 'ngResource']);

//Set up the routes....
travelToursAdminModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/admin/country/create', {templateUrl: 'sites/traveltours/admin/country/create.html', controller: traveltours.admin.country.CreateController}).
        when('/admin/country/show/:id', {templateUrl: 'sites/traveltours/admin/country/show.html', controller: traveltours.admin.country.ShowController}).
        when('/admin/country/update/:id', {templateUrl: 'sites/traveltours/admin/country/update.html', controller: traveltours.admin.country.UpdateController}).
        when('/admin/country/list', {templateUrl: 'sites/traveltours/admin/country/list.html', controller: traveltours.admin.country.ListController}).
        otherwise({redirectTo: '/home'});
}]);