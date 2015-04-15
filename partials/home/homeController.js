'use strict'

cbApp.controller('homeController',['$scope', function($scope){
        $scope.homeController = "home";
        $scope.totalIssuesByPublishers = 0;
        $scope.totalTitleIssues = 0;
        $scope.displayLimit = 3;

       

        $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ];

		
		$scope.columns = [
                    {field: 'publisher', cellFilter :'getNameFilter'},
                    {field: 'title', cellFilter: 'getNameFilter'} ,
                    {field: 'issue'},
                    {field: 'qty'},
                    {field: 'price'},
                    {field: 'mkt'},
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
			};
	
 }]);
