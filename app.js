'use strict';
//,'ui.grid.selection','ngMessages'
var cbApp = angular.module('cbApp', ['ui.router', 'ui.bootstrap','ui.grid','chart.js',])
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
    })
    .config(function (datepickerConfig, datepickerPopupConfig) {
    datepickerConfig.showWeeks = false,
    datepickerConfig.startingDay = '0';
    datepickerPopupConfig.showButtonBar = false
   })
    .constant("MONTHS", {"months" : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']});
