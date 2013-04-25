if(window.traveltours === undefined) {
	traveltours = {};	
}

var travelToursAdminModule = angular.module('TravelToursAdmin', ['ui.bootstrap', 'ngResource']);

//Set up the routes....
travelToursAdminModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.        
        when('/admin', {templateUrl: 'partials/traveltours/admin/admin.html', controller: traveltours.admin.AdminController}).
        otherwise({redirectTo: '/home'});
}]);

