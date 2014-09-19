'use strict';
cbApp.controller('appController',['$scope', '$http', function($scope,  $http){
    $scope.totalIssuesByPublishers = 0;

    $http.get("data/publisherData.json").success(function(data){
        $scope.PublishersList = data.PublisherList;
    })
    $http.get("data/titlesData.json").success(function(data){
        $scope.TitlesList = data.TitleList;
    })
    $scope.happy = "ddd";
    $scope.appController = "appController";
}])
