namespace('traveltours.model');

traveltours.model.Country = function(data) {

    var country,
        areas = [],
        id;

    if(data) {
        country = data.country;
        areas = data.areas;
        id = data.id;
    }

    return {
        country: country,
        areas: areas,
        id: id
    };

};
