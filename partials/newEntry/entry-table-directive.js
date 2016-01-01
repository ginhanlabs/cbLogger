(function(){
    angular.module('cbApp').directive('entryTable',  function(){
      var EntryTableController = ['$scope', '$filter', 'PublisherService', 'TitleService', 'EntryService', '$log', function($scope, $filter, PublisherService, TitleService, EntryService, $log){

        $scope.rowCollection = [];
        // {"publisher": "Marvel", "title" : "Spider-man", "issue": 100, "qty":1, "price":1.00, "mkt":2.00, "condition": "Mint", "box" :1,  "Notes" : ''}

        $scope.$on("refreshEntries", function(){
            $scope.rowCollection = EntryService.entryList;
        });

        $scope.deleteEntry = function(idx){
          $scope.rowCollection.splice(idx,1);
          EntryService.update($scope.rowCollection);
        }

        $scope.saveEntries = function(){
          EntryService.saveEntries($scope.rowCollection);
          $scope.rowCollection = [];
        };

    }];



      return {
          restrict : "E",
          controller: EntryTableController,
          templateUrl:'partials/newEntry/entry-table.tpl.html',
          link: function(scope, elem, attrs){

          }
        }
      });



})();
