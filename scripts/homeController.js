'use strict'

cbApp.controller('homeController',['$scope',  function($scope){
        $scope.homeController = "home";
        $scope.totalIssuesByPublishers = 0;
        $scope.totalTitleIssues = 0;
        $scope.displayLimit = 3;

        $scope.columns = [
            {field: 'publisher', cellFilter :'getNameFilter'},
            {field: 'title', cellFilter: 'getNameFilter'} ,
            {field: 'issue'},
            {field: 'qty'},
            {field: 'price'},
            {field: 'value'},
            {field: 'condition'},
            {field: 'box'},
            {field: 'notes'},
            {name: 'remove', displayName: 'Remove', cellTemplate: '<button id="removeBtn_{{$index}}" type="button" class="btn-small" ng-click="getExternalScopes().remove(row.entity)">Remove</button> '}
        ];


        $scope.bookEntriesGridOptions = {
            enableSorting: true,
            data: [],
            columnDefs: $scope.columns,
            onRegisterApi: function(gridApi) {
                $scope.gridApi = gridApi;
            }
        };

        $scope.bookEntriesGridScopes = {
            remove: function(row){
                var bookData = $scope.bookEntriesGridOptions.data;
                for (var i=0; i < bookData.length; i++){
                    if (row.$$hashKey === bookData[i].$$hashKey) {
                        bookData.splice(i,1);
                    }
                }
            }
        }

        $scope.$on("updateGridData", function(event,bookInfo){
           $scope.bookEntriesGridOptions.data.push(bookInfo);
        })

 }])
    /* todo modularize the filters */
    .filter("displayTitlesFilter", function(){
        return function(item,titlePublisherId, publisher){
            if (titlePublisherId == publisher.publisherId){
                return item;
            }
        }
    })
    .filter("totalFilter", function() {
        return function(items, field) {
            var total = 0, i = 0;
            for (i = 0; i < items.length; i++) total += items[i][field];
            return total;
        }
    })
    .filter("getNameFilter", function(){
        return function (input) {
            return input.name;
        };
    })




