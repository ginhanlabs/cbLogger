'use strict';
(function(){

	 var appController = function($scope, $http, PublisherService, TitleService){

		PublisherService.initPublishersList();
		TitleService.initTitleList();

// $scope.PublishersList = PublisherService.PublishersList;
// console.log($scope.PublishersList);
// 	    $http.get("data/titlesData.json").success(function(data){
// 	        $scope.TitlesList = data.TitleList;
// 	    });
//
    $http.get("data/top3.json").success(function(data){
	        $scope.topIssues = data.topIssues;
	    });
		};

		appController.$inject = ['$scope', '$http', 'PublisherService', 'TitleService'];
		angular.module('cbApp').controller('appController', appController);
})();
