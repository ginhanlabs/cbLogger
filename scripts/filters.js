/*
(function(){

angular.module("cbAppFilter", [])
    .filter("displayTitles", function(){
        return function(item,titlePublisherId, publisher){
            if (titlePublisherId == publisher.publisherId){
                return item;
           }
        }
    })
    .filter("total", function() {
        return function(items, field) {
            var total = 0, i = 0;
            for (i = 0; i < items.length; i++) total += items[i][field];
            return total;
        }
    })
    .filter("getNameFilter", function(){
        return function (input) {
            return input.name;
        };
    })
});


*/
