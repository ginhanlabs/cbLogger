'use strict'

cbApp.controller('homeController',['$scope', function($scope){
       $scope.homeController = "home";
       $scope.totalIssuesByPublishers = 0;
        $scope.totalTitleIssues = 0;
        $scope.displayLimit = 3;
    $scope.form = {};
    $scope.master = {
            "publisher":  "",
            "title": "",
            "issue":  "",
            "qty" :  "",
            "price" :  "",
            "value":  "",
            "condition":  "",
            "box" :  "",
            "remove": "",
            "edit": ""
        };

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
            {field: 'Edit'}
        ];

    $scope.entryData =  [];

    $scope.bookEntriesGridOptions = {
        enableSorting: true,
        data: $scope.entryData,
        columnDefs: $scope.columns,
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;
        }
    };

    $scope.addEntry = function(){
       var newEntry = {
            "Publisher":  entryForm[0].value,
            "Title": entryForm[1].value, //entryForm[1].options[entryForm[0].value].text,
            "Issue":  entryForm[2].value,
            "Qty" :  entryForm[3].value,
            "Price" :  entryForm[4].value,
            "Value":  "",
            "Condition":  entryForm[5].value,
            "Box" :  entryForm[6].value,
            "Remove": "",
            "Edit": ""
       };
        $scope.entryData.push(newEntry);
       // $scope.form = angular.copy($scope.master);
        console.log($scope.form.box);
        $scope.form = {

            "box" :  ""
        };
        ;
        console.log($scope.form.box);
    }

 }])




