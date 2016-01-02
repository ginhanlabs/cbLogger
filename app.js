'use strict';

var cbApp = angular.module('cbApp', ['ngRoute','ui.bootstrap','smart-table','chart.js'])
    .config(['$routeProvider', function($routeProvider){

        $routeProvider
        .when('/home', {
            templateUrl: "/partials/home/home.html",
            controller: 'HomeCtrl'
        })
        .when('/details/:titleId', {
          templateUrl: "/partials/detailsView/details.tpl.html"
        })
        .otherwise({
          redirectTo: "/home"
       })
    }])
    //, datepickerPopupConfig
    //.config(function (uibDatepickerConfig) {
  //    uibDatepickerConfig.showWeeks = false,
  //   datepickerConfig.startingDay = '0';
  //   datepickerPopupConfig.showButtonBar = false
  //  })
    .constant("MONTHS", {"months" : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']});
