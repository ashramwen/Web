var app = angular.module('app', ['ngAnimate', 'ngCookies', 'ngRoute', 'ngSanitize', 'ui.bootstrap']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
        templateUrl: "view/ducat.html"
    }).when('/blacksmith', {
        templateUrl: "view/blacksmith.html"
    }).when('/dailyquest', {
        templateUrl: "view/dailyquest.html"
    }).when('/ducat', {
        redirectTo: '/'
    }).when('/note', {
        templateUrl: "view/note.html"
    }).otherwise({
        redirectTo: '/'
    });
}]);
