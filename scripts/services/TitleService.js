'use strict';
(function(){
  angular.module('cbApp').service('TitleService', ['$http', '$log', function($http, $log){
    var TitleSrv = this;

    TitleSrv.titleList = [];

    TitleSrv.initTitleList = function(){
        var promise = $http.get("../data/titlesData.json");
        promise.then(function(result) {
          TitleSrv.titleList = result.data.TitleList;
        }, function() {
          $log('Failed: at getTitlesList');
        });
     };

  }]);
})();
