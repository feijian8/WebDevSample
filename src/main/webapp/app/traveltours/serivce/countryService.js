namespace('traveltours.service');

traveltours.service.CountryService = function ($resource, $routeParams) {

    var create,
        read,
        update,
        remove,
        list,
        currentCountry;

    var REST_BASE_URL = 'rest/country/';

    create = function (country, callback) {
        console.log("countryService.create");
        var CountryProxy = $resource(REST_BASE_URL + 'create');
        var proxy = new CountryProxy();
        proxy.country = country.country;
        proxy.areas = country.areas;

        proxy.$save(country, function(data) {
            var country = new traveltours.model.Country(data);
            currentCountry = country;
            callback(country);
        });
    };

    read = function(id, callback) {
        console.log("countryService.read");

        //If we already have the country loaded, just put it in the callback and return
        if(currentCountry && currentCountry.id === id) {
            callback(currentCountry);
            return;
        }

        var countryProxy = $resource(REST_BASE_URL + 'read/:id');
        var loadedCountry = countryProxy.get({id: $routeParams.id}, function (data) {
            var country = new traveltours.model.Country(data);
            currentCountry = country;
            callback(country);
        });
    };

    list = function(callback) {
        console.log("countryService.list");
        var countries = $resource(REST_BASE_URL + 'list');
        var countriesList = countries.query(function (data) {
            var countriesArray = [];
            angular.forEach(countriesList, function (country) {
                countriesArray.push(country);
            });
            callback(countriesList);
        });
    };

    update = function(country, callback) {
        var countryUpdateProxy = $resource(REST_BASE_URL + 'update');
        countryUpdateProxy.country = country.country;
        countryUpdateProxy.areas = country.areas;
        countryToUpdate.$save(function (data) {
            var country = new traveltours.model.Country(data);
            currentCountry = country;
            callback(country)
        });
    };

    return {
        create: create,
        read: read,
        update: update,
        remove: remove,
        list: list,
        currentCountry: currentCountry
    };

};