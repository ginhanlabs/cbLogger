'use strict'

cbApp.controller('homeController',['$scope', function($scope){
        $scope.totalIssuesByPublishers = 0;
        $scope.totalTitleIssues = 0;
        $scope.displayLimit = 3;

       

        $scope.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        $scope.series = ['Series A'];
        $scope.data = [
          [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56]
        ];

		
	
 }]);
