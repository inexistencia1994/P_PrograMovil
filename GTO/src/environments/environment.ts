// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
   
  firebaseConfig : {
    apiKey: "AIzaSyAJ3Kw8Tli5jmxFi_Nb7K4VMl21tGhYOVU",
    authDomain: "bibliomovil-91326.firebaseapp.com",
    projectId: "bibliomovil-91326",
    storageBucket: "bibliomovil-91326.appspot.com",
    messagingSenderId: "400460088850",
    appId: "1:400460088850:web:0e5b25e5838b4837a9bacb",
    measurementId: "G-4XZXVQL8TZ"
  }
  
};

//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
