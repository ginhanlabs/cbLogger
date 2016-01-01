'use strict';
(function(){

	 var appController = function($scope, $http, PublisherService, TitleService){

		PublisherService.initPublishersList();
		TitleService.initTitleList();

    $http.get("data/top3.json").success(function(data){
	        $scope.topIssues = data.topIssues;
	    });
		};

		appController.$inject = ['$scope', '$http', 'PublisherService', 'TitleService'];
		angular.module('cbApp').controller('appController', appController);
})();
