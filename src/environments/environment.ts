// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const localhostUrl = {
  localHost : 'http://localhost:8080'
};

export const paths = {
  home: '',
  subleggid: '/api/subleggid',
  signup: '/api/auth/signup',
  login: '/api/auth/login',
  refreshToken:'/api/auth/refresh/token',
  posts: '/api/posts'
};

export const urls = {
  home: localhostUrl.localHost + paths.home,
  subleggid : localhostUrl.localHost + paths.subleggid,
  signup : localhostUrl.localHost + paths.signup,
  login : localhostUrl.localHost + paths.login,
  refreshToken : localhostUrl.localHost + paths.refreshToken,
  posts : localhostUrl.localHost + paths.posts
};
