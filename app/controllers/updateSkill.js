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

    // Function bound to the Add Skill button in the view template
    $scope.addSkill = () => {

      let user = authFactory.getUser();
      let updateSkill = {
        title: `{{$scope.selectedSkills.title}}`,
        skill: $scope.updateSkill.skill,
        uid: user.uid
      };
      console.log("updateSkill", updateSkill);

      // POST the skill to Firebase
      $http.post(`${firebaseURL}/copingSkills.json`,

        // Stringify to send to API
      JSON.stringify(newSkill)

      // Return Promise
      ).then(
        () => $location.url("/mood/"),      // Handle resolve
        (response) => console.log(response)  // Handle reject
      );
    };
  }
]);
