$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "As a user of Google Keep app, I want to login to the application",
  "description": "",
  "id": "as-a-user-of-google-keep-app,-i-want-to-login-to-the-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17056060018,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginTest.i_navigate_to_the_Landing_page()"
});
formatter.result({
  "duration": 5385122570,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "",
  "description": "",
  "id": "as-a-user-of-google-keep-app,-i-want-to-login-to-the-application;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I enter login successfully",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "loginTest.i_enter_login_successfully()"
});
formatter.result({
  "duration": 502835737,
  "status": "passed"
});
formatter.match({
  "location": "loginTest.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 311040,
  "status": "passed"
});
formatter.match({
  "location": "loginTest.i_should_login_successfully()"
});
formatter.result({
  "duration": 12083079962,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027gb\u0027]/div[2]/div[1]\"}\n  (Session info: chrome\u003d70.0.3538.110)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LOUNGE-PC\u0027, ip: \u0027192.168.147.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\Musti\\AppData\\Local\\Temp\\scoped_dir4176_15868}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d70.0.3538.110, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: ea5587abd34d008b0a75f540f3698488\n*** Element info: {Using\u003dxpath, value\u003d.//*[@id\u003d\u0027gb\u0027]/div[2]/div[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat com.CucumberPrac.loginPage.verifyLoginPage(loginPage.java:106)\r\n\tat com.CucumberPrac.Step_definition.loginTest.i_should_login_successfully(loginTest.java:55)\r\n\tat ✽.Then I should login successfully(Features/login.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 50363,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Check user could login with invalid username credentials",
  "description": "",
  "id": "as-a-user-of-google-keep-app,-i-want-to-login-to-the-application;check-user-could-login-with-invalid-username-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see \"\u003ctext\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "as-a-user-of-google-keep-app,-i-want-to-login-to-the-application;check-user-could-login-with-invalid-username-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "text"
      ],
      "line": 20,
      "id": "as-a-user-of-google-keep-app,-i-want-to-login-to-the-application;check-user-could-login-with-invalid-username-credentials;;1"
    }
  ],
  "keyword": "Examples"
});
});