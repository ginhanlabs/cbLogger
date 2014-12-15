(function(){
    'use strict';
    angular.module("cbApp.directives", [])
        .directive("ddlTitles", function(){
            return {
                restrict : "E",
                replace: true,
                templateUrl : "templates/newEntryTemplate.html",
               scope: {
                   /* publisherSelected:"=",*/
                    id:"@"
                },
                link : function(scope, elem, attrs){

                }
            }
        })

})();
