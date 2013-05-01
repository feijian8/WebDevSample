namespace('traveltours.service');

traveltours.service.CountryService = function ($resource, $routeParams) {

    var REST_CREATE_URL = traveltours.REST_BASE_URL + 'country/create';
    var REST_READ_URL = traveltours.REST_BASE_URL + 'country/read/:id'
    var REST_LIST_URL = traveltours.REST_BASE_URL + 'country/list';
    var REST_UPDATE_URL = traveltours.REST_BASE_URL + 'country/update';

    var create,
        read,
        update,
        remove,
        list,
        currentCountry;

    create = function (country, callback) {
        console.log("countryService.create");
        var CountryProxy = $resource(REST_CREATE_URL);
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

        var countryProxy = $resource(REST_READ_URL);
        var loadedCountry = countryProxy.get({id: $routeParams.id}, function (data) {
            var country = new traveltours.model.Country(data);
            currentCountry = country;
            callback(country);
        });
    };

    list = function(callback) {
        console.log("countryService.list");
        var countries = $resource(REST_LIST_URL);
        var countriesList = countries.query(function (data) {
            var countriesArray = [];
            angular.forEach(countriesList, function (country) {
                countriesArray.push(country);
            });
            callback(countriesList);
        });
    };

    update = function(country, callback) {
        var CountryUpdateProxy = $resource(REST_UPDATE_URL);
        var proxy = new CountryUpdateProxy();
        proxy.id = country.id;
        proxy.country = country.country;
        proxy.areas = country.areas;
        proxy.$save(function (data) {
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