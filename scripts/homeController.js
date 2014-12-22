'use strict'

cbApp.controller('homeController',['$scope', function($scope){
       $scope.homeController = "home";
       $scope.totalIssuesByPublishers = 0;
        $scope.totalTitleIssues = 0;
        $scope.displayLimit = 3;

        $scope.columns = [
            { field: 'Publisher' },
            { field: 'Title' },
            {field: 'Issue'},
            {field: 'Qty'},
            {field: 'Price'},
            {field: 'Value'},
            {field: 'Condition'},
            {field: 'Box'},
            {field: 'Remove'},
            {field: 'Add'}
        ];

    $scope.entryData =  [      {
        "Publisher": "Marvel",
        "Title": "ASM",
        "Issue": 133,
        "Qty" : 1,
        "Price" : 2.99,
        "Value": 2.99,
        "Condition": "nm",
        "Box" : 1,
        "Remove": "",
        "Add": ""
        },
        {
            "Publisher": "Marvel",
            "Title": "Amazing Spider-man",
            "IssueNum" : "122",
            "Qty" : "1",
            "Price" : "2.02",
            "Value" : "2.00",
            "Condition" : "NM",
            "Box": "",
            "Remove" :"",
            "Add" : ""

        }
    ];

        $scope.bookEntriesGridOptions = {
            enableSorting: true,
            data: $scope.entryData,
            columnDefs: $scope.columns,
            onRegisterApi: function(gridApi) {
                $scope.gridApi = gridApi;
            }
        };



 }])




