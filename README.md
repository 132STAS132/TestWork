### Prerequisites: 
- Node.js v10 and later

* Navigate to project via terminal

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

### Run on Chrome: 
```
$ npm install
$ npm install allure-commandline --save-dev
$ npm run testRun
```
 ### Oren test report:
```
 $ npm run openReport    
```
 
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
