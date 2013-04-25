traveltours.home = {};


traveltours.home.HomeController = function ($scope, $routeParams) {
    $scope.myInterval = 5000;
    $scope.slides = [
        {image: 'resources/images/greece_first.jpg', text: 'Greece - Rhodos'},
        {image: 'resources/images/greece_second.jpg', text: 'Greece - Molivos'},
        {image: 'resources/images/greece_third.jpg', text: 'Greece - Lesbos'}
    ];
};

