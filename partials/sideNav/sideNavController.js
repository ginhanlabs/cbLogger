'use strict';
(function(){

  var sideNavController = function(PublisherService, TitleService){
    var vm = this;
    vm.publishers = PublisherService.pubList;
    vm.titles = TitleService.titleList;
  };

  sideNavController.$inject = ['PublisherService', 'TitleService'];
  angular.module('cbApp').controller('sideNavController', sideNavController);
})();
