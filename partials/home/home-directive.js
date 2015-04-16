(function(){
	angular.module('cbApp').directive('homedirective',   function(){
		return {
			restrict : "E",
			templateUrl: "partials/home/home-template.html",
			link: function(scope, elem, attrs){
            },
            controller: function($scope){
            	var notesTemplate = "";
            	
            $scope.transformValue = function(n){
            	console.log(n);
            	return "hi";
            };
            
            
    	//{name: 'notes', displayName: 'Notes', cellTemplate: '<div id="notesLink_{{$index}}" class="">' + row.entity([col.field]) + '</div>'},
            		this.updateEntries = function(bookInfo) {
					   $scope.bookEntriesGridOptions.data.push(bookInfo);
					  };
					  
					$scope.columns = [
                    {field: 'publisher', cellFilter :'getNameFilter'},
                    {field: 'title', cellFilter: 'getNameFilter'} ,
                    {field: 'issue'},
                    {field: 'qty'},
                    {field: 'price'},
                    {field: 'mkt'},
                    {field: 'condition'},
                    {field: 'box'},
                    {field: 'notes', displayName:'Notes', cellTemplate: 'partials/home/notes-template.html'},
                
                    {name: 'remove', displayName: 'Remove', cellTemplate: '<button id="removeBtn_{{$index}}" type="button" class="btn-small" ng-click="grid.appScope.deleteEntry(row.entity)">Remove</button> '}
                ];
        
				$scope.bookEntriesGridOptions = {
							enableSorting: true,
							data: [],
							 enableRowSelection: true,
    						enableSelectAll: true,
							columnDefs: $scope.columns,
							onRegisterApi: function(gridApi) {
								$scope.gridApi = gridApi;
							},
							
				};
				
			
				 $scope.deleteEntry = function(row) {
	            	var index = $scope.bookEntriesGridOptions.data.indexOf(row.entity);
	            	$scope.bookEntriesGridOptions.data.splice(index, 1);
	        	};
        
				
            }
		};
	});
})();
