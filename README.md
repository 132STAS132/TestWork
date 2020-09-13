### Prerequisites: 
- Node.js v10 and later

* Navigate to project via terminal

* Execute `yarn` command in terminal to install all required libraries for executing test scenarios

* Execute following commands to install allure cli that needed for generating test results: 
```
$ brew tap qameta/allure
$ brew update
$ brew install allure
```
---
### Run on BS mobile: 
```
$ npm install
$ npm install -g allure-commandline
$ npm install -g appium
```
* Change the `LANGUAGE_BS` and `LOCATE_BS` in `.env` file to the necessary
##### on iOS:
```
npm run testRunWorker1:mobile:ios
```
##### on Android:
```
npm run testRunWorker1:mobile:android
```
---

* Rename `.env_sample` to `.env` 
* Fill `.env` with appropriate values

* Set up Gmail API using the following link - https://developers.google.com/gmail/api/quickstart/nodejs#prerequisites
* Download generated `credentials.json` file
* Download `gmail/quickstart` folder using the following link https://github.com/gsuitedevs/node-samples/blob/master/gmail/quickstart/index.js
* Add `credentials.json` to root of `gmail/quickstart` folder
* Execute npm install to install all required libraries
* Execute `node .` to generate `token.json` that will allow you to use gmail api. 
* Follow to provided instruction in console
* Copy `credentials.json` and generate `token.json` files to `helpers/configs` folder  
If you want to change your permissions for gmail api, please follow next steps: 
* Open `index.js` file in `gmail/quickstart` folder
* Find `SCOPES` constant variable 
* Set value for `SCOPES` variable to one from provided scope
Available gmail api scopes are located on the following resource https://developers.google.com/gmail/api/auth/scopes

 
* `core` folder contains files with core wdio wrapper. 
* `fixtures` folder contains files with test data that should be declared before executing test scenarios.
* `pages` folder contains files with selectors and actions for these selectors.
* `spec` folder contains files with test scenarios.
* `allure-results` folder contains test results which will be used for generating report.
* `allure-report` folder contains generated report.
* `node_modules` folder contains all required libraries that were installed using `package.json`.
* `package.json` file contains all required libraries for success execute of test scenarios.
* `tsconfig.json` file contains all required parameters for success build of test suite.
* `wdio.conf.js` file contains all argumets for success run of test suite. 



* PR Review:
- branch name should be name using following rules: `requirementId-ACNumber` example: `LV.AR.PAT.6-1`
- Commit message should contain all covered AC example 
```
LV.AR.PAT.6 - Minor Patient Login Information for Parent/Guardian
AC#6.a - A field error displays when: the user selects "Next" without entering the required information 
AC#6.b - A field error displays when: the user enters a malformed email address
```
- If PR contains comments, this should be addressed and once resolved this should be marked as done # testWork
