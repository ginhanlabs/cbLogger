(function(){
	angular.module('cbApp').directive('hasNotes',   function(){
		return {
			restrict : "A",
			scope: {
				data: "=",
			},
			controller: function($scope){
				$scope.happy = "happy";
			},
			link: function(scope, elem, attr){
			
				if (scope.data != undefined) {
					
					elem.attr("title", scope.data);
					elem.addClass("glyphicon glyphicon-file"); 
				}
				
			}
		};
	});
})();
