namespace('traveltours');

traveltours.BaseController = function ($scope, $routeParams, $resource, $location) {

    $scope.go = function(path) {
        $location.url(path);
    };

    $scope.alerts = [];
    $scope.alertsViewed = false;

    $scope.addSuccessMessage = function(msg) {
        var alert = { type: 'success', msg: msg };
        $scope.alerts.push(alert);
        $scope.alertsViewed = false;
    };

    $scope.addErrorMessage = function(msg) {
        var alert = { type: 'error', msg: msg };
        $scope.alerts.push(alert);
        $scope.alertsViewed = false;
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.selected = '';

    $scope.setNavigationSelected = function(navPoint) {
        console.log("setNavigationSelected: " + navPoint);
        $scope.selected = navPoint;
    };

    //Reset the alerts...
    $scope.$on('$routeChangeSuccess', function (scope, next, current) {
        if($scope.alertsViewed === true) {
            $scope.alerts = [];
        } else {
            $scope.alertsViewed = true;
        }
    });

};