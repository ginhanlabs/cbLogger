'use strict'

cbApp.controller('homeController',['$scope', function($scope){
       $scope.homeController = "home";
       $scope.totalIssuesByPublishers = 0;
        $scope.totalTitleIssues = 0;
        $scope.displayLimit = 3;

        $scope.$on("totalPublishers", function(evt, numOfItems){
            $scope.totalIssuesByPublishers = numOfItems;
        })

        $scope.$on("totalIssuesPerTitle", function(evt, numOfItems){
            $scope.totalTitleIssues = numOfItems;
        })
 }])
    .directive("tallyBook",  function(){
       var numOfItems = 0;
       var eId = '';
        return {
            restrict:"A",
            scope: {
                count :"=num",
                emitterId:"="
            },
            link: function(scope, elem, attrs){
                if (eId != scope.emitterId){
                    eId = scope.emitterId;
                    numOfItems = scope.count;
                }
                else {
                    numOfItems += scope.count;
                    scope.$emit(scope.emitterId, numOfItems );
                }
            }
        }
    })




