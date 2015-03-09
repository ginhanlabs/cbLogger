'use strict';


var cbApp = angular.module('cbApp', [
        'ui.router',
        'ui.grid',
        'chart.js'
    ])
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
             })
    });

/* var cbAppFilters = angular.module("cbAppFilters",[]);*/
/*var cbFilters = angular.module("cbFilters" , []);*/

/*var cbAppFilter = angular.module('cbAppFilter', [])
    .filter("displayTitles", function(){
        return function(item,titlePublisherId, publisher){
            if (titlePublisherId == publisher.publisherId){
                return item;
            }
        }
    })
    .filter("total", function() {
        return function(items, field) {
            var total = 0, i = 0;
            for (i = 0; i < items.length; i++) total += items[i][field];
            return total;
        }
    })
    .filter("getNameFilter", function(){
        return function (input) {
            return input.name;
        };
    })*/
