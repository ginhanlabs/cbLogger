'use strict';

var cbApp = angular.module('cbApp', [
    'ngRoute',
    'ngResource'
])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'homeController'
            })
            .otherwise({
                redirectTo: '/'
            })
    }])


