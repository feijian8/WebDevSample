namespace('traveltours.admin.country');

traveltours.admin.country.CreateController = function ($scope, $routeParams, $resource, countryService) {

    var country = new traveltours.model.Country();
    $scope.country = country;

    $scope.area;

    $scope.createCountry = function (country, area) {
        console.log("Create: " + country);
        //temporary...
        country.areas.push(area);
        countryService.create(country, function(country) {
            $scope.go('/admin/country/list');
        });

    };
};

traveltours.admin.country.UpdateController = function ($scope, $routeParams, $resource, countryService) {

    var country = countryService.read($routeParams.id, function(country) {
       $scope.country = country;
    });

    $scope.update = function (country) {
        countryService.update(function (country) {
            $scope.go('/admin/country/show/' + country.id);
        });
    };
};


traveltours.admin.country.ShowController = function ($scope, $routeParams, $resource, countryService) {

    var country = countryService.read($routeParams.id, function(country) {
        $scope.country = country;
    });

    //Function that switches to the update view
    $scope.update = function (country) {
        $scope.go('/admin/country/update/' + country.id);
    };
};

traveltours.admin.country.ListController = function ($scope, $routeParams, $resource, countryService) {

    countryService.list(function(countriesList) {
        $scope.countries = countriesList;
    });
};

//Register the countryService...
travelToursAdminModule.factory('countryService', ['$resource', '$routeParams',
    function ($resource, $routeParams) {
        return traveltours.service.CountryService($resource, $routeParams);
    }
]);
