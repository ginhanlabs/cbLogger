(function(){
	angular.module('cbApp').directive('homedirective',   function(){
		return {
			restrict : "E",
			templateUrl: "partials/home/home-template.html",
			link: function(scope, elem, attrs){
            },
            controller: function($scope){
            		this.updateEntries = function(bookInfo) {
					   $scope.bookEntriesGridOptions.data.push(bookInfo);
					  };
            }
		};
	});
})();
