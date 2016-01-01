'use strict';
(function(){
  var sideNavController = ['$scope', 'PublisherService', 'TitleService', function($scope, PublisherService, TitleService){
      //var vm = this;
      //vm.publishers = PublisherService.pubList;
      //vm.titles = TitleService.titleList;

      $scope.publisherlist = PublisherService.pubList;
      $scope.titleslist = TitleService.titleList;
    }];

  angular.module('cbApp').directive('sideNav', function(){
      return {
        restrict: "E",
        controller: sideNavController,
        templateUrl: 'partials/sideNav/sideNav.html?n=0',
        link: function(scope, elem, attr){

        }
      }
  });
})();
