traveltours.admin.country = {};

traveltours.admin.country.CreateController = function ($scope, $routeParams, $resource) {

    $scope.country;
    $scope.area;

    $scope.createCountry = function (countryParam, areaParam) {

        var countryProxy = $resource('rest/country/create');
        countryProxy.country = countryParam;

        var areas = new Array();
        areas.push(areaParam);
        countryProxy.areas = areas;

        countryProxy.$save(function () {
            $scope.go('/admin/country/list');
        });
    };
};

traveltours.admin.country.UpdateController = function ($scope, $routeParams, $resource) {

    var countryReadProxy = $resource('rest/country/read/:id');
    var loadedCountry = countryReadProxy.get({id: $routeParams.id}, function (data) {
        $scope.country = new traveltours.model.Country(data);
    });

    $scope.update = function(country) {

        var countryUpdateProxy = $resource('rest/country/update');
        countryUpdateProxy.country = country.country;
        countryUpdateProxy.areas = country.areas;
        countryToUpdate.$save(function() {
            $scope.go('/admin/country/show/' + country.id);
        });
    };
};


traveltours.admin.country.ShowController = function ($scope, $routeParams, $resource) {

    var countryProxy = $resource('rest/country/read/:id');
    var loadedCountry = countryProxy.get({id: $routeParams.id}, function (data) {
        var country = new traveltours.model.Country(data);
        $scope.country = country;
    });

    $scope.update = function(country) {
        console.log('updating country: ' + country.id);
        $scope.go('/admin/country/update/' + country.id);
    };
};

traveltours.admin.country.ListController = function ($scope, $routeParams, $resource) {

    var countries = $resource('rest/country/list');
    var countriesList = countries.query(function (data) {

        var countriesArray = new Array();

        angular.forEach(countriesList, function (country) {
            countriesArray.push(country);
        });

        $scope.countries = countriesList;

    });
};
