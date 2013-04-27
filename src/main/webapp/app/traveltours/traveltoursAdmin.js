traveltours = {};
traveltours.admin = {};

var travelToursAdminModule = angular.module('TravelToursAdmin', ['ui.bootstrap', 'ngResource']);


traveltours.admin.BaseController = function ($scope, $routeParams, $resource, $location) {

    $scope.go = function(path) {
        $location.url(path);
    };
};

//Set up the routes....
travelToursAdminModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/admin/country/create', {templateUrl: 'sites/traveltours/admin/country/create.html', controller: traveltours.admin.country.CreateController}).
        when('/admin/country/show/:id', {templateUrl: 'sites/traveltours/admin/country/show.html', controller: traveltours.admin.country.ShowController}).
        when('/admin/country/update/:id', {templateUrl: 'sites/traveltours/admin/country/update.html', controller: traveltours.admin.country.UpdateController}).
        when('/admin/country/list', {templateUrl: 'sites/traveltours/admin/country/list.html', controller: traveltours.admin.country.ListController}).
        otherwise({redirectTo: '/home'});
}]);

