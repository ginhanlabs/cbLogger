'use strict'

cbApp.controller('homeController',['$scope', "MONTHS", function($scope, MONTHS){
       // $scope.totalIssuesByPublishers = 0;


        $scope.labels = MONTHS.months;
        $scope.series = ['Series A'];
        $scope.data = [
          [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56]
        ];

 }]);
