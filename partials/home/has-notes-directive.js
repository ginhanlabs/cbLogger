(function(){
	// todo if have notes, then display icon with hover effect
	
	angular.module('cbApp').directive('hasNotes',   function(){
		return {
			restrict : "E",
			scope: {
				data: "="
			},
			link: function(scope, elem, attr){
				if (scope.data == "" || scope.data == null) {
					elem.text("sour");
				}
				else {
					elem.text("apple");
					elem.css("color", "red");
				}
			}
		};
	});
})();
