(function(){
    angular.module('cbApp').directive('newEntryDirective',   function(){
    	var addEntry;
        return {
            restrict : "E",
            scope: {
                titleslist: "=",
                publisherlist: "="
            },
            require: "^homedirective",
            templateUrl:'partials/newEntry/new-entry-template.html',
            link: function(scope, elem, attrs, homedirectiveCtrl){
            	
            	  addEntry = function(newEntry){
            	  	homedirectiveCtrl.updateEntries(newEntry);
            	  };
            },

            controller: function($scope){
                $scope.setPublisher = function(val){
                    $scope.selectedPublisher = val.publisherId;
                };
				
			  $scope.master = {
                    "publisher":  undefined,
                    "title": "",
                    "issue":  "",
                    "qty" :  "",
                    "price" :  "",
                    "mkt":  "",
                    "condition":  "",
                    "box" :  "",
                    "notes": ""
                };

               
                $scope.addEntry = function(){
                                 
                   var newEntry = {
                       "publisher" : {id:entryForm[0].value, name: entryForm[0].options[entryForm[0].selectedIndex].text},
                       "title": {id: entryForm[1].value, name: entryForm[1].options[entryForm[1].selectedIndex].text},
                       "issue":  entryForm[2].value,
                       "qty" :  entryForm[3].value,
                       "price" :  entryForm[4].value,
                       "mkt":  entryForm[5].value,
                       "condition":  entryForm[6].value,
                       "box" :  entryForm[7].value,
                       "notes" : entryForm[8].value
                   };
                    addEntry(newEntry);
          		 //$scope.$emit("updateGridData", newEntry);
                           angular.copy($scope.master,$scope.form);
                      
   
                   };
               

            }
        };
    });
})();
