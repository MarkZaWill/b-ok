"use strict";

MarkApp.controller("copingSkills",
[
  "$scope",
  "$routeParams",
  "$location",
  "$http",
  "FireFactory",

  	function ($scope, $routeParams, $location, $http, FireFactory) {
  		
    // Default properties for bound variables
    $scope.copingSkills = [];
    $scope.selectedCopingSkills = {};

    // Invoke the promise that reads from Firebase
    FireFactory().then(

      // Handle resolve() from the promise
      copeGroup => {
        Object.keys(copeGroup).forEach(key => {
          copeGroup[key].id = key;
          $scope.copingSkills.push(copeGroup[key]);
        });

        $scope.selectedCopingSkills = $scope.copingSkills.filter(copingSkills => copingSkills.id === $routeParams.copingSkillsId)[0];
      },

      // Handle reject() from the promise
      err => console.log(err)
    );

    /*
      This function is bound to an ng-click directive
      on the button in the view
    */
    $scope.deletecopingSkills = () => $http
        .delete(`https://be-ok.firebaseio.com/copingSkills/${$routeParams.copingSkillsId}.json`)
        .then(() => $location.url("/"));
  }
 

  	])