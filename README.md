# angular-webpack-lazyloading-boilerplate
This repo is a boilerplate for using angular with webpack and lazyloading `angular-router` sub modules in chunks (asynchronous routing) and live reloading. I use it both as a boiler plate and POC of new angular versions.

## Features:
* Angular 2 / 4
* Webpack
* Typescript
* Routing
* Asynchronous routing
* Live reloading during development
* Lazy loading route modules with `angular2-router-loader`
* Build task for production. Minified and optimized chunks for lazy loading modules in production POC.

## Changelog
* 19 October 2017: Upgraded to Angular 4.4.6
* 2 October 2017: Upgraded to Angular 4.4.4
* 17 September 2017: Upgraded to Angular 4.4.1
* 15 August 2017: Upgraded to Angular 4.3.5
* 15 August 2017: Upgraded to Angular 4.3.3
* 22 July 2017: Upgraded to Angular 4.3.1
* 12 June 2017: Upgraded to Angular 4.2.1
* 9 June 2017: Updated build configuration to not include source maps. Updated readme description and keywords to better reflect the project
* 7 June 2017: Upgrade to angular 4.1.3 and minor tweaks
* 24 March 2017: Upgrade to angular 4
* 22 March 2017: Upgrade to angular 2.4
* 24 November 2016: Initial commit, Angular 2.2

## Prerequisits
* node.js
* npm 

## Installation
```
# Clone this repo
git clone https://github.com/amattias/angular-webpack-lazyloading-boilerplate.git

# Open folder

# Install dependencies
npm install

# Run in development mode
npm run dev
# go to http://localhost:8080

# Build for production
npm run build

# Test your production build, uses http-server which is incleded as a dev-dependency
npm run buildtest
# go to http://localhost:8081
```

## Contact
* Twitter: [@a_mattias](https://twitter.com/a_mattias).
* Email: firstname.t.lastname@gmail.com
* Home page: [https://www.amattias.se](https://www.amattias.se)