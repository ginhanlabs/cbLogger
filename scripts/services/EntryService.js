'use strict';
(function(){
  angular.module('cbApp').service('EntryService', ['$http', '$log', function($http, $log){
    var self = this;

    self.entryList = [];

    self.add = function(data){
        self.entryList.push(data);
        $log.log(self.entryList);
     };

     self.getEntries = function(){
       return self.entryList;
     }

  }]);
})();
