(function(){
    angular.module('cbApp').directive('entryTable',  function(){
      var EntryTableController = ['$scope', '$filter', 'PublisherService', 'TitleService', function($scope, $filter, PublisherService, TitleService){
        // $scope.columns = [
        //           {field: 'publisher', cellFilter :'getNameFilter'},
        //           {field: 'title', cellFilter: 'getNameFilter'} ,
        //           {field: 'issue'},
        //           {field: 'qty'},
        //           {field: 'price'},
        //           {field: 'mkt'},
        //           {field: 'condition'},
        //           {field: 'box'},
        //           {field: 'notes', displayName:'Notes', cellTemplate: 'partials/common-directives/notes-template.html'},
        //         {name: 'remove', displayName: 'Remove', cellTemplate: '<button id="removeBtn_{{$index}}" type="button" class="btn-small" ng-click="grid.appScope.deleteEntry(row.entity)">Remove</button> '}
        //         ];

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
