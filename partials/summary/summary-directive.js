'use strict';
(function(){
	angular.module('cbApp').directive('homeSummary', function(){
		return {
			restrict: 'A',
			templateUrl: 'partials/summary/summary.html',
			link: function(scope, elem, attrs){
				
				;
			},
			controller: function($scope){
				$scope.totalTitleIssues = 0;
		
				$scope.totalIssuesByPublishers = 0;
				
		        $scope.displayLimit = 3;
			}
		};
		
	});
})();