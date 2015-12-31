'use strict'

cbApp.controller('homeController',['$scope', "MONTHS", function($scope, MONTHS){
       // $scope.totalIssuesByPublishers = 0;


        $scope.labels = MONTHS.months;
        $scope.series = ['Series A'];
        $scope.data = [
          [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56]
        ];
        //   	this.updateEntries = function(bookInfo) {
      // 				  //  $scope.bookEntriesGridOptions.data.push(bookInfo);


        //   $scope.bookEntriesGridOptions = {
        //         enableSorting: true,
        //     data: [],
        //      enableRowSelection: true,
        //     columnDefs: $scope.columns,
        //     onRegisterApi: function(gridApi) {
        //       $scope.gridApi = gridApi;
        //     }
        //   };

        
        //
        // $scope.bookEntriesGridOptions = {
        //     enableSorting: true,
        //     date: [],
        //     enableRowSelection: true,
        //     columnDefs: $scope.columns,
        //   };
        //    $scope.deleteEntry = function(row) {
        //           var index = $scope.bookEntriesGridOptions.data.indexOf(row.entity);
        //           $scope.bookEntriesGridOptions.data.splice(index, 1);
        //       };
        //     }

 }]);
