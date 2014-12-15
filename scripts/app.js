'use strict';

var cbApp = angular.module('cbApp', [
        'ui.router',
        'cbApp.directives'
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



