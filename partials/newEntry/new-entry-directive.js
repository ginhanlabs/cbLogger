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

            controller: function($scope, $filter){
            	$scope.hasPublisher = true;
            	var entryNotes;

          $scope.today = function() {
				    var dt = new Date();
				     $scope.dt =  $filter('date')(dt,'MM/dd/yyyy');
				  };

				 $scope.today();

				 $scope.open = function($event) {
				    $event.preventDefault();
				    $event.stopPropagation();

				    $scope.opened = true;
				  };


				  $scope.format = 'MM/dd/yyyy';



                $scope.setPublisher = function(val){
                    $scope.selectedPublisher = val.publisherId;
                    if ($scope.selectedPublisher !== undefined) {
                    	$scope.hasPublisher = false;
                    }
                    else
                		$scope.hasPublisher = true;
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
                    "notes": null
                };


                $scope.addEntry = function(){
                   var ddlPub = $("#ddl-publisher")[0];
                   var ddlTitle = $("#ddl-title")[0];

                   var newEntry = {
                   	   "purchased": $("#txt-purchased").val(),
                       "publisher" : {id: ddlPub.value, name: ddlPub.options[ddlPub.selectedIndex].text},
                       "title": {id: ddlTitle.value, name: ddlTitle.options[ddlTitle.selectedIndex].text},
                       "issue":  $("#txt-issue").val(),
                       "qty" :  $("#txt-qty").val(),
                       "price" :  $("#txt-price").val(),
                       "mkt":  $("#txt-mkt").val(),
                       "condition":  $("#ddl-condition").val(),
                       "box" :  $("#txt-box").val(),
                       "notes" : entryNotes,

                   };
                    addEntry(newEntry);
          			angular.copy($scope.master,$scope.form);
          			$scope.hasPublisher = true;
          			entryNotes = null;

   				};

   				$scope.saveNotes = function(){
   					entryNotes = $("#ta-notes").val();
   					angular.element("#notesModal").modal('hide');
   				};
            }
        };
    });
})();
