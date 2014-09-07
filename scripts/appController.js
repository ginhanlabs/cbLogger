'use strict';
cbApp.controller('appController',['$scope', '$http', function($scope,  $http){
    $http.get("data/publisherData.json").success(function(data){
        $scope.PublishersList = data.PublisherList;
    })
    $http.get("data/titlesData.json").success(function(data){
        $scope.TitlesList = data.TitleList;
    })
    $scope.happy = "ddd";
    $scope.appController = "appController";
}])
