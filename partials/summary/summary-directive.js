'use strict';
(function(){
	angular.module('cbApp').directive('summary', function(){

		var SummaryCtrl = ["$scope", "PublisherService", "TitleService", function($scope, PublisherService, TitleService){

			this.totalTitleIssues = 0;
			this.totalIssuesByPublishers = 0;
			this.displayLimit = 3;

			this.publisherList = PublisherService.pubList;
			this.titleList = TitleService.titleList;

		}];

		return {
			restrict: 'A',
			controller: SummaryCtrl,
		 	controllerAs: 'summaryCtrl',
		//	bindToController: true,
			templateUrl: 'partials/summary/summary.html'
		};

	});
})();
