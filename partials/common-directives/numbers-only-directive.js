(function(){
  'use strict';
    var link = function(scope, elem, attrs, ngModel){

      ngModel.$parsers.push(function (inputValue) {
         if (inputValue == undefined) return ''
         var transformedInput = inputValue.replace(/[^0-9]/g, '');
         if (transformedInput!=inputValue) {
           ngModel.$setViewValue(transformedInput);
           ngModel.$render();
         };

      return transformedInput;

      // ngModel.$formatters.unshift(function(value){
      //
      // });
    });
    };

    var numbersOnly = function(){
      return {
        restrict: 'A',
        require: 'ngModel',
        link: link
      };
    };

    //numeric.$inject = ['$scope'];
    angular.module('cbApp').directive('numbersOnly', numbersOnly);

})()
