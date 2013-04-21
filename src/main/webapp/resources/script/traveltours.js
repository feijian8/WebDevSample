var travelTours = angular.module('TravelTours', ['ui.bootstrap']);

travelTours.controller('AlertDemoCtrl', function AlertDemoCtrl($scope) {
    $scope.alerts = [
        { type: 'error', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({
            msg: 'Another alert!',
            type: 'error'

        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

});

travelTours.controller("CarouselDemoCtrl", function CarouselDemoCtrl($scope) {
    $scope.myInterval = 5000;
    $scope.slides = [
        {image: 'resources/images/greece_first.jpg',text: 'Greece - Rhodos'},
        {image: 'resources/images/greece_second.jpg',text: 'Greece - Molivos'},
        {image: 'resources/images/greece_third.jpg',text: 'Greece - Lesbos'}
    ];
});