traveltours.admin.country = {};

traveltours.admin.country.CreateController = function ($scope, $routeParams, $resource) {

    $scope.country;
    $scope.area;

    $scope.createCountry = function(countryParam, areaParam) {

        var Country = $resource('rest/country/create');

        var countryToSave = new Country();
        countryToSave.country = countryParam;

        var areas = new Array();
        areas.push(areaParam);

        countryToSave.areas = areas;

        countryToSave.$save();

    };

};
