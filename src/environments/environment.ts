// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //Todo:
  apiBaseURL: 'http://localhost:8080/swap',
  firebaseConfig: {
    apiKey: "AIzaSyB6LBJ1t4sQfQbl4WKJFKgbj13dBT7cS70",
    authDomain: "fir-test-dashboard.firebaseapp.com",
    databaseURL: "https://firebase-test-dashboard-default-rtdb.firebaseio.com",
    projectId: "firebase-test-dashboard",
    storageBucket: "firebase-test-dashboard.appspot.com",
    messagingSenderId: "525283910881",
    appId: "1:525283910881:web:708917ce56f8cf640cc3a0"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
