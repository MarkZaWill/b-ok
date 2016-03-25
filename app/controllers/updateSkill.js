"use strict";

MarkApp.controller("updateSkill",
[
  "$scope",
  "$location",
  "$http",
  "firebaseURL",
  "authFactory",
  

  function ($scope, $location, $http, firebaseURL, authFactory) {
    console.log("$scope.selectedSkills", $scope.selectedSkills);
    // Default property values for keys bound to input fields
    $scope.updateSkill = {
      title: `{{$scope.selectedSkills.title}}`,
      skill: ""
    };

    // Function bound to the Add Song button in the view template
    $scope.addSkill = () => {

      let user = authFactory.getUser();
      let updateSkill = {
        title: `{{$scope.selectedSkills.title}}`,
        skill: $scope.updateSkill.skill,
        uid: user.uid
      };
      console.log("updateSkill", updateSkill);

      // POST the song to Firebase
      $http.post(`${firebaseURL}/copingSkills.json`,

        // Remember to stringify objects/arrays before
        // sending them to an API
        JSON.stringify(newSkill)

      // The $http.post() method returns a promise, so you can use then()
      ).then(
        () => $location.url("/mood/"),      // Handle resolve
        (response) => console.log(response)  // Handle reject
      );
    };
  }
]);