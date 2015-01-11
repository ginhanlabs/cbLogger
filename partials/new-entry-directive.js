(function(){
    angular.module('cbApp').directive('newEntryDirective',   function(){
        return {
            restrict : "E",
            scope: {
                titleslist: "=",
                publisherlist: "="
            },
            templateUrl:'partials/new-entry-template.html',
            link: function(scope, elem, attrs){
            },

            controller: function($scope){
                $scope.setPublisher = function(val){
                    $scope.selectedPublisher = val.publisherId;
                }

              //  $scope.form = {};
                 $scope.master = {
                    "publisher":  undefined,
                    "title": "",
                    "issue":  "",
                    "qty" :  "",
                    "price" :  "",
                    "value":  "",
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
                        "value":  entryForm[5].value,
                        "condition":  entryForm[6].value,
                        "box" :  entryForm[7].value,
                        "notes" : entryForm[8].value
                    };

                    $scope.$emit("updateGridData", newEntry);
                    angular.copy($scope.master,$scope.form);

                }

            }
        }
    })
})();


