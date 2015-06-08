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
	})
	.directive("checkLength", function(){
		return {
			restrict: 'A',
			require: 'ngModel', // require the ngModel controller so you can plug into validation
	link: function (scope, element, attrs, ctrl)
	{
					//ctrl will be the ngModel instance

					function validate(value) {
						console.log(value);
							if (value > 4){
								return false;
							}
							else return true;
							//return value == 'test' || value == null;
					}
					// validate when value is going from DOM to model
					ctrl.$parsers.unshift(function(value) {
							var valid = validate(value);

							ctrl.$setValidity('uniqueaddress', valid);

							return valid ? value : undefined;
					});

					// validate when value is going from model to DOM
					ctrl.$formatters.unshift(function(value) {

							ctrl.$setValidity('uniqueaddress', validate(value));
							return value;
					});
			}
	};
	  });

})();
