$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/resource/java/addCustomertwodoimensionallist.feature");
formatter.feature({
  "name": "demo telecom cucumber",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "add customer details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "get the driver detils from user",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerTwoDimensionalList.get_the_driver_detils_from_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to the repective web site and click the add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerTwoDimensionalList.navigate_to_the_repective_web_site_and_click_the_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter the details from the datatable",
  "rows": [
    {
      "cells": [
        "balaji",
        "Ravichandran",
        "crbalaji172@gmail.com",
        "Trichy",
        "9095702844"
      ]
    },
    {
      "cells": [
        "Kishor",
        "Ravichandran",
        "kishorkumar17@gmail.com",
        "Salemrasanayakpalayam",
        "8526242416"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerTwoDimensionalList.the_user_enter_the_details_from_the_datatable(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerTwoDimensionalList.the_user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user get the customer id succcessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerTwoDimensionalList.the_user_get_the_customer_id_succcessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "add customer details map",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "get the driver detils from user map",
  "keyword": "Given "
});
formatter.match({
  "location": "addCustomerDetailsTwoDimensionalMap.get_the_driver_detils_from_user_map()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to the repective web site and click the add customer link map",
  "keyword": "And "
});
formatter.match({
  "location": "addCustomerDetailsTwoDimensionalMap.navigate_to_the_repective_web_site_and_click_the_add_customer_link_map()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter the details from the datatable map",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "address",
        "mobileno"
      ]
    },
    {
      "cells": [
        "balaji",
        "Ravichandran",
        "crbalaji172@gmail.com",
        "Trichy",
        "9095702844"
      ]
    },
    {
      "cells": [
        "Kishor",
        "Ravichandran",
        "kishorkumar17@gmail.com",
        "Salemrasanayakpalayam",
        "8526242416"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "addCustomerDetailsTwoDimensionalMap.the_user_enter_the_details_from_the_datatable_map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click the submit button map",
  "keyword": "And "
});
formatter.match({
  "location": "addCustomerDetailsTwoDimensionalMap.the_user_click_the_submit_button_map()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user get the customer id succcessfully map",
  "keyword": "Then "
});
formatter.match({
  "location": "addCustomerDetailsTwoDimensionalMap.the_user_get_the_customer_id_succcessfully_map()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//b[text()\u003d\u0027Please Note Down Your CustomerID\u0027]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BALAJI\u0027, ip: \u0027192.168.43.156\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609538 (b655c5a60b0b54..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:55907}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: b2a1d6a967e895f120b35797fa8c405c\n*** Element info: {Using\u003dxpath, value\u003d//b[text()\u003d\u0027Please Note Down Your CustomerID\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat addcustomer.addCustomerDetailsTwoDimensionalMap.the_user_get_the_customer_id_succcessfully_map(addCustomerDetailsTwoDimensionalMap.java:58)\r\n\tat ✽.the user get the customer id succcessfully map(src/resource/java/addCustomertwodoimensionallist.feature:43)\r\n",
  "status": "failed"
});
});