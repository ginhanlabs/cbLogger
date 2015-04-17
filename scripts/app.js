'use strict';

var cbApp = angular.module('cbApp', ['ui.grid','ui.grid.selection','ui.router','chart.js'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/");
         $stateProvider
            .state('/', {
                url:'/',
                templateUrl:"partials/home/home.html",
                controller: "homeController"
            })
             .state('editBookPubTitle',{
                 url:'/editBookPubTitle',
                 templateUrl:"partials/editBookPubTitle.html",
                 controller:"editBookPubTitleController"
             });
    });
    // .constant("MONTHS", {"months" : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']});
