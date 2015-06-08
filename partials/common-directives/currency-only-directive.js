(function(){
    angular.module("cbApp").directive("currencyOnly", function(){
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModel){
          var re = /\d+(\.\d{1,2})?/;

          ngModel.$parsers.unshift(function(value){
            if (!value.$isEmpty){
              // var transformedInput = value.replace(/[^0-9\.]/g, '');
              //
              // if (transformedInput!=value) {
                if (re.test(value)){
                  ngModel.$setValidity("currencyValidation", false);
                  return false;
                }
                else {
                  ngModel.$setValidity("currencyValidation", true);
                  return true;
                }
                ngModel.$setViewValue(value);
                ngModel.$render();
              };
            return '';
        //  };
          });
        }
      };
    });
})();
