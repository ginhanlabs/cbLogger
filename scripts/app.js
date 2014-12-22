'use strict';

var cbApp = angular.module('cbApp', [
        'ui.router',
        'ui.grid'
    ])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/");
         $stateProvider
            .state('/', {
                url:'/',
                templateUrl:"partials/home.html",
                controller: "homeController"
            })
    });



