'use strict';
(function(){
  angular.module('cbApp').service('PublisherService', ['$http', '$log', function($http, $log){
    var publisherSrv = this;

    publisherSrv.pubList = [];

    publisherSrv.initPublishersList = function(){
        var promise = $http.get("../data/publisherData.json");
        promise.then(function(result) {
          publisherSrv.pubList = result.data.PublisherList;
        }, function() {
            $log('Failed: at getPublishers');
        });
     };

  }]);
})();
