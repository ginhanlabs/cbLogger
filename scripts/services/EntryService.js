'use strict';
(function(){
  angular.module('cbApp').service('EntryService', ['$http', '$log', function($http, $log){
    var self = this;

    self.entryList = [];

    self.add = function(data){
        self.entryList.push(data);
      };

    self.update = function(data){
      self.entryList = data;
    };

     self.getEntries = function(){
       return self.entryList;
     };

     self.saveEntries = function(data){
       self.entryList = data;
       // TODO save to dbase
     };

  }]);
})();
