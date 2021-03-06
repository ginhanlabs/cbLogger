(function(){
    angular.module('cbApp').directive('newEntry',  function(){
      var NewEntryController = ['$scope', '$filter', 'PublisherService', 'TitleService', 'EntryService', '$routeParams', '$log',
          function($scope, $filter, PublisherService, TitleService, EntryService, $routeParams, $log){
      //  var addEntry;
        $scope.format = 'MM/dd/yyyy';
        $scope.isValid = true;
        $scope.publisherlist = PublisherService.pubList;
        $scope.titleslist = TitleService.titleList;

        if ($routeParams.titleId) {
            $log.log($routeParams.titleId);
            $scope.titleId = parseInt($routeParams.titleId);
        };


        $scope.hasPublisher = true;
        var entryNotes;
        $scope.submitted = false;

        $scope.today = function() {
          var dt = new Date();
          $scope.dt =  $filter('date')(dt,'MM/dd/yyyy');
        };

        $scope.open = function($event) {
          $event.preventDefault();
            $event.stopPropagation();
           $scope.opened = true;
         };

      $scope.setPublisher = function(val){
        $scope.selectedPublisher = val.publisherId;
        if ($scope.selectedPublisher !== undefined) {
        $scope.hasPublisher = false;
      }
      else
        $scope.hasPublisher = true;
      };

      $scope.master = {
        "publisher":  undefined,
        "ddltitle": "",
        "issue":  "",
        "qty" :  "",
        "price" :  "",
        "mkt":  "",
        "condition":  "",
        "box" :  "",
        "notes": null
      };



      $scope.addEntry = function() {

        $scope.submitted = true;

        var newEntry
        $scope.isValid = $scope.entryForm.$valid;
        if ( $scope.isValid) {
          var ddlPub = $("#ddl_publisher")[0];
          var ddlTitle = $("#ddl_title")[0];

          newEntry = {
            "purchased": $("#txt_purchased").val(),
            "publisher" : {id: ddlPub.value, name: ddlPub.options[ddlPub.selectedIndex].text},
            "title": {id: ddlTitle.value, name: ddlTitle.options[ddlTitle.selectedIndex].text},
            "issue":  $("#txt_issue").val(),
            "qty" :  $("#txt_qty").val(),
            "price" :  $("#txt_price").val(),
            "mkt":  $("#txt_mkt").val(),
            "condition":  $("#ddl_condition").val(),
            "box" :  $("#txt_box").val(),
            "notes" : entryNotes,

          };

          EntryService.add(newEntry);
          $scope.$emit("refreshEntries")
          angular.copy($scope.master,$scope.form);
          $scope.hasPublisher = true;
          entryNotes = null;
          $scope.submitted = false;
          //  return true;
        }
        else {
          return false;
        }
      };

      $scope.saveNotes = function(){
        entryNotes = $scope.form.notes;
        angular.element("#notesModal").modal('hide');
      };

      // $scope.closeEntryErrors = function(){
      //   $("#alertEntryContainer").alert('close');
      // }

    }];



      return {
          restrict : "E",
          scope: {
              titleslist: "=",
              publisherlist: "="
          },
          controller: NewEntryController,
          templateUrl:'partials/newEntry/new-entry-template.html',

        }
      });

})();
