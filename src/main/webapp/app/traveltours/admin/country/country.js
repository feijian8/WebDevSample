namespace('traveltours.admin.country');

traveltours.admin.country.CreateController = function ($scope, $routeParams, $resource, countryService) {

    var country = new traveltours.model.Country();
    $scope.country = country;
    $scope.newArea = '';

    $scope.addArea = function() {
        //push an empty area into country.areas
        $scope.country.areas.push($scope.newArea);
        $scope.newArea = '';
    };

    $scope.removeArea = function(area) {
        var areas = $scope.country.areas;
        removeElement(areas, area);
    };

    $scope.createCountry = function () {
        var countryToCreate = $scope.country;
        countryService.create(country, function (countryToCreate) {
            $scope.go('/admin/country/list');
        });
    };
};

traveltours.admin.country.UpdateController = function ($scope, $routeParams, $resource, countryService) {

    $scope.addedArea;

    var country = countryService.read($routeParams.id, function (country) {
        $scope.country = country;
    });

    $scope.addArea = function (area) {
        $scope.country.areas.push(area);
        $scope.addedArea = undefined;
    };

    $scope.update = function (country) {
        console.log("updating country with id: " + country.id);
        countryService.update(country, function (country) {
            $scope.go('/admin/country/show/' + country.id);
        });
    };
};


traveltours.admin.country.ShowController = function ($scope, $routeParams, $resource, countryService) {

    var country = countryService.read($routeParams.id, function (country) {
        $scope.country = country;
    });

    //Function that switches to the update view
    $scope.update = function (country) {
        $scope.go('/admin/country/update/' + country.id);
    };
};

traveltours.admin.country.ListController = function ($scope, $routeParams, $resource, countryService) {

    countryService.list(function (countriesList) {
        $scope.countries = countriesList;
    });
};

//Register the countryService...
travelToursAdminModule.factory('countryService', ['$resource', '$routeParams',
    function ($resource, $routeParams) {
        return traveltours.service.CountryService($resource, $routeParams);
    }
]);
