if(window.traveltours.travel === undefined) {
	traveltours.travel = {};	
}

traveltours.travel.TravelController = function($scope, $routeParams, $resource) {

    $scope.country = "Greece";
    $scope.area = "Naxos";
    $scope.price = 0;

    $scope.createTravel = function(country, area, price) {

        console.log("country: " + country);

        var Travel = $resource('rest/travel/create');

        var travelToSave = new Travel();
        travelToSave.country = country;
        travelToSave.area = area;
        travelToSave.price = price;

        travelToSave.$save();

    }

};
