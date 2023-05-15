// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: process.env.NG_APP_API_KEY,
    authDomain: process.env.NG_APP_DOMAIN,
    projectId: process.env.NG_APP_PROJECT_ID,
    storageBucket: process.env.NG_APP_BUCKET_ID,
    messagingSenderId: process.env.NG_APP_MESSAGING_ID,
    appId: process.env.NG_APP_APP_ID
  },
  newsKey: "bcb912fb45a943778bee915b272b7e1a"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
