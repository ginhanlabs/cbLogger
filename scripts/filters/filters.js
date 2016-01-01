(function(){
    angular.module('cbApp')
        .filter("displayTitlesFilter", function(){
            return function(item,titlePublisherId, publisher){
                if (titlePublisherId == publisher.publisherId){
                    return item;
               }
            };
        })
        .filter("totalFilter", function() {
            return function(items, field) {
            var total = 0;
              if (items != undefined) {
	        	for (i = 0; i < items.length; i++)  total += items[i][field];
	           };
             return total;
            };
        })
        .filter("getNameFilter", function(){
            return function (input) {
                return input.name;
            };
        })
})();
