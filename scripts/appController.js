'use strict';
(function(){

	 var appController = function( PublisherService, TitleService){

		PublisherService.initPublishersList();
		TitleService.initTitleList();
		};

		appController.$inject = ['PublisherService', 'TitleService'];
		angular.module('cbApp').controller('appController', appController);
})();
