'use strict';

cbApp.filter("displayTitles", function(){
        return function(item,titlePublisherId, publisher){
            if (titlePublisherId == publisher.publisherId){
                return item;
           }
        }
    })

