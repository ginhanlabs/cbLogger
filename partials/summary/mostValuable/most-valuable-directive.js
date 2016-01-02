'use strict';
(function(){
  var MostValuableCtrl = [ '$http', function( $http){
    var vm = this;

    var promise = $http.get("../../../data/top3.json");
    promise.then(function(result){
	        vm.topIssues = result.data.topIssues;
	    },
      function(result){
          $scope.topIssues = [];
          //TODO error
      });
  }];

  angular.module("cbApp").directive("mostValuable", function(){
    return {
      restrict : "E",
      controller : MostValuableCtrl,
      controllerAs : 'mostValuableCtrl',
      templateUrl : "partials/summary/mostValuable/most-valuable.tpl.html"
    }
  });
})();
