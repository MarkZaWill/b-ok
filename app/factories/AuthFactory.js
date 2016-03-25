"use strict";

MarkApp.factory("authFactory", ($http, firebaseURL) => {
  let ref = new Firebase(firebaseURL);
  let currentUserData = null;

  return {
    /*
      Determine if the client is authenticated
     */
    isAuthenticated() {
      let authData = ref.getAuth();
        return (authData) ? true : false;
    },

    getUser() {
      console.log("currentUserData", currentUserData);
      return currentUserData;
    },
    /*
      Authenticate the client via Firebase
     */
    authenticate (credentials) {
      return new Promise((resolve, reject) => {
        ref.authWithPassword({
          "email": credentials.email,
          "password": credentials.password
        }, (error, authData) => {
          if (error) {
            reject(error);
          } else {
            console.log("authWithPassword method completed successfully", authData);
            currentUserData = authData;
            console.log("currentUserData", currentUserData.uid);
            resolve(authData);
          }
        });
      });
    },
    storeUser (authData) {
      let stringifiedUser = JSON.stringify({ uid: authData.uid });

      return new Promise((resolve, reject) => {
        $http
          .post(`https://be-ok.firebaseio.com/users.json`, stringifiedUser)
          .then(
            res => resolve(res),
            err => reject(err)
          );
      });
    }

  };
});




// add unique id to Firebase JSON, so that you can pull it for one user
// ?orderBy = uid&equalTo="${currentUserID}"