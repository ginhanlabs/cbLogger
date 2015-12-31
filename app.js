'use strict';
//,'ui.grid.selection','ngMessages'
var cbApp = angular.module('cbApp', ['ui.router', 'ui.bootstrap','smart-table','chart.js',])
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
    //, datepickerPopupConfig
    //.config(function (uibDatepickerConfig) {
  //    uibDatepickerConfig.showWeeks = false,
  //   datepickerConfig.startingDay = '0';
  //   datepickerPopupConfig.showButtonBar = false
  //  })
    .constant("MONTHS", {"months" : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']});
