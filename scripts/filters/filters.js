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
        .filter("titleName", ['TitleService', function(TitleService) {
            return function(item){
              for(var i=0; i < TitleService.titleList.length; i++){
                if (TitleService.titleList[i].titleId === item){
                  return ": " + TitleService.titleList[i].title;
                }
              }
            }
         }])
})();
