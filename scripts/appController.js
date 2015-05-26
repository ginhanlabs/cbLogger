'use strict';
(function(){
	angular.module('cbApp').controller('appController', ['$scope', '$http', function($scope,  $http){
		 $http.get("data/publisherData.json").success(function(data){
        	$scope.PublishersList = data.PublisherList;
	    });

	    $http.get("data/titlesData.json").success(function(data){
	        $scope.TitlesList = data.TitleList;
	    });

	    $http.get("data/top3.json").success(function(data){
	        $scope.topIssues = data.topIssues;
	    });




	}]);
})();
