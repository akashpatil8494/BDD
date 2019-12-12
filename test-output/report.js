$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Maven/AdminLTE_BDD/src/main/java/feature/AddUsers.feature");
formatter.feature({
  "line": 1,
  "name": "AdminLTE AddUsers Features",
  "description": "",
  "id": "adminlte-addusers-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User Data Scenario",
  "description": "",
  "id": "adminlte-addusers-features;user-data-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Add User is on Log in Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Add User Enters \"kiran@gmail.com\" and \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Add Click on Signin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Add Dashboard Title is AdminLTE Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add Click on Users",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add Users Title is AdminLTE User",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Add Click On Add User Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Add Users Title is AdminLTE Add User",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Add User Details \"\u003cUsername\u003e\" and \"\u003cMobile\u003e\" and \"\u003cEmail\u003e\" and \"\u003cGender\u003e\" and \"\u003cState\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Add Click on Submit",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "adminlte-addusers-features;user-data-scenario;",
  "rows": [
    {
      "cells": [
        "Username",
        "Mobile",
        "Email",
        "Gender",
        "State",
        "Password"
      ],
      "line": 16,
      "id": "adminlte-addusers-features;user-data-scenario;;1"
    },
    {
      "cells": [
        "Nilesh",
        "8805712512",
        "nilesh@123",
        "Male",
        "HP",
        "10101"
      ],
      "line": 17,
      "id": "adminlte-addusers-features;user-data-scenario;;2"
    },
    {
      "cells": [
        "Kishor",
        "5555555555",
        "kishor@123",
        "Male",
        "Maharashtra",
        "20202"
      ],
      "line": 18,
      "id": "adminlte-addusers-features;user-data-scenario;;3"
    },
    {
      "cells": [
        "Priyanka",
        "8888888888",
        "priyanka@123",
        "Female",
        "HP",
        "30303"
      ],
      "line": 19,
      "id": "adminlte-addusers-features;user-data-scenario;;4"
    },
    {
      "cells": [
        "Sachin",
        "9999999999",
        "nilesh@123",
        "Male",
        "Delhi",
        "40404"
      ],
      "line": 20,
      "id": "adminlte-addusers-features;user-data-scenario;;5"
    },
    {
      "cells": [
        "Anuja",
        "3333333333",
        "nilesh@123",
        "Female",
        "Punjab",
        "50505"
      ],
      "line": 21,
      "id": "adminlte-addusers-features;user-data-scenario;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 219400,
  "status": "passed"
});
formatter.before({
  "duration": 12224236400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User Data Scenario",
  "description": "",
  "id": "adminlte-addusers-features;user-data-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Add User is on Log in Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Add User Enters \"kiran@gmail.com\" and \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Add Click on Signin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Add Dashboard Title is AdminLTE Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add Click on Users",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add Users Title is AdminLTE User",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Add Click On Add User Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Add Users Title is AdminLTE Add User",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Add User Details \"Nilesh\" and \"8805712512\" and \"nilesh@123\" and \"Male\" and \"HP\" and \"10101\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Add Click on Submit",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserStepDefinition.add_User_is_on_Log_in_Page()"
});
formatter.result({
  "duration": 12676603200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 17
    },
    {
      "val": "123456",
      "offset": 39
    }
  ],
  "location": "AddUserStepDefinition.add_User_Enters_and(String,String)"
});
formatter.result({
  "duration": 351528700,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Signin()"
});
formatter.result({
  "duration": 4936614200,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Dashboard_Title_is_AdminLTE_Dashboard()"
});
formatter.result({
  "duration": 28375800,
  "error_message": "java.lang.AssertionError: expected [AdminLTE 2 | Dashboardddddd] but found [AdminLTE 2 | Dashboard]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertEquals(Assert.java:123)\r\n\tat org.testng.Assert.assertEquals(Assert.java:176)\r\n\tat org.testng.Assert.assertEquals(Assert.java:186)\r\n\tat stepDefinition.AddUserStepDefinition.add_Dashboard_Title_is_AdminLTE_Dashboard(AddUserStepDefinition.java:73)\r\n\tat ✽.When Add Dashboard Title is AdminLTE Dashboard(E:/Maven/AdminLTE_BDD/src/main/java/feature/AddUsers.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Users()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_User()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_On_Add_User_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_Add_User()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nilesh",
      "offset": 18
    },
    {
      "val": "8805712512",
      "offset": 31
    },
    {
      "val": "nilesh@123",
      "offset": 48
    },
    {
      "val": "Male",
      "offset": 65
    },
    {
      "val": "HP",
      "offset": 76
    },
    {
      "val": "10101",
      "offset": 85
    }
  ],
  "location": "AddUserStepDefinition.add_User_Details_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 149200,
  "status": "passed"
});
formatter.after({
  "duration": 582396700,
  "status": "passed"
});
formatter.before({
  "duration": 652000,
  "status": "passed"
});
formatter.before({
  "duration": 10738630300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User Data Scenario",
  "description": "",
  "id": "adminlte-addusers-features;user-data-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Add User is on Log in Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Add User Enters \"kiran@gmail.com\" and \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Add Click on Signin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Add Dashboard Title is AdminLTE Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add Click on Users",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add Users Title is AdminLTE User",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Add Click On Add User Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Add Users Title is AdminLTE Add User",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Add User Details \"Kishor\" and \"5555555555\" and \"kishor@123\" and \"Male\" and \"Maharashtra\" and \"20202\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Add Click on Submit",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserStepDefinition.add_User_is_on_Log_in_Page()"
});
formatter.result({
  "duration": 12068048100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 17
    },
    {
      "val": "123456",
      "offset": 39
    }
  ],
  "location": "AddUserStepDefinition.add_User_Enters_and(String,String)"
});
formatter.result({
  "duration": 446846400,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Signin()"
});
formatter.result({
  "duration": 3345157400,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Dashboard_Title_is_AdminLTE_Dashboard()"
});
formatter.result({
  "duration": 13578900,
  "error_message": "java.lang.AssertionError: expected [AdminLTE 2 | Dashboardddddd] but found [AdminLTE 2 | Dashboard]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertEquals(Assert.java:123)\r\n\tat org.testng.Assert.assertEquals(Assert.java:176)\r\n\tat org.testng.Assert.assertEquals(Assert.java:186)\r\n\tat stepDefinition.AddUserStepDefinition.add_Dashboard_Title_is_AdminLTE_Dashboard(AddUserStepDefinition.java:73)\r\n\tat ✽.When Add Dashboard Title is AdminLTE Dashboard(E:/Maven/AdminLTE_BDD/src/main/java/feature/AddUsers.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Users()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_User()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_On_Add_User_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_Add_User()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Kishor",
      "offset": 18
    },
    {
      "val": "5555555555",
      "offset": 31
    },
    {
      "val": "kishor@123",
      "offset": 48
    },
    {
      "val": "Male",
      "offset": 65
    },
    {
      "val": "Maharashtra",
      "offset": 76
    },
    {
      "val": "20202",
      "offset": 94
    }
  ],
  "location": "AddUserStepDefinition.add_User_Details_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 106900,
  "status": "passed"
});
formatter.after({
  "duration": 630157400,
  "status": "passed"
});
formatter.before({
  "duration": 74100,
  "status": "passed"
});
formatter.before({
  "duration": 11669113800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User Data Scenario",
  "description": "",
  "id": "adminlte-addusers-features;user-data-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Add User is on Log in Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Add User Enters \"kiran@gmail.com\" and \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Add Click on Signin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Add Dashboard Title is AdminLTE Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add Click on Users",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add Users Title is AdminLTE User",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Add Click On Add User Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Add Users Title is AdminLTE Add User",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Add User Details \"Priyanka\" and \"8888888888\" and \"priyanka@123\" and \"Female\" and \"HP\" and \"30303\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Add Click on Submit",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserStepDefinition.add_User_is_on_Log_in_Page()"
});
formatter.result({
  "duration": 11579811400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 17
    },
    {
      "val": "123456",
      "offset": 39
    }
  ],
  "location": "AddUserStepDefinition.add_User_Enters_and(String,String)"
});
formatter.result({
  "duration": 407656300,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Signin()"
});
formatter.result({
  "duration": 6897557700,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Dashboard_Title_is_AdminLTE_Dashboard()"
});
formatter.result({
  "duration": 19255800,
  "error_message": "java.lang.AssertionError: expected [AdminLTE 2 | Dashboardddddd] but found [AdminLTE 2 | Dashboard]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertEquals(Assert.java:123)\r\n\tat org.testng.Assert.assertEquals(Assert.java:176)\r\n\tat org.testng.Assert.assertEquals(Assert.java:186)\r\n\tat stepDefinition.AddUserStepDefinition.add_Dashboard_Title_is_AdminLTE_Dashboard(AddUserStepDefinition.java:73)\r\n\tat ✽.When Add Dashboard Title is AdminLTE Dashboard(E:/Maven/AdminLTE_BDD/src/main/java/feature/AddUsers.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Users()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_User()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_On_Add_User_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_Add_User()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Priyanka",
      "offset": 18
    },
    {
      "val": "8888888888",
      "offset": 33
    },
    {
      "val": "priyanka@123",
      "offset": 50
    },
    {
      "val": "Female",
      "offset": 69
    },
    {
      "val": "HP",
      "offset": 82
    },
    {
      "val": "30303",
      "offset": 91
    }
  ],
  "location": "AddUserStepDefinition.add_User_Details_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 107200,
  "status": "passed"
});
formatter.after({
  "duration": 507926400,
  "status": "passed"
});
formatter.before({
  "duration": 66400,
  "status": "passed"
});
formatter.before({
  "duration": 13987714900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User Data Scenario",
  "description": "",
  "id": "adminlte-addusers-features;user-data-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Add User is on Log in Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Add User Enters \"kiran@gmail.com\" and \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Add Click on Signin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Add Dashboard Title is AdminLTE Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add Click on Users",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add Users Title is AdminLTE User",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Add Click On Add User Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Add Users Title is AdminLTE Add User",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Add User Details \"Sachin\" and \"9999999999\" and \"nilesh@123\" and \"Male\" and \"Delhi\" and \"40404\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Add Click on Submit",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserStepDefinition.add_User_is_on_Log_in_Page()"
});
formatter.result({
  "duration": 12737070800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 17
    },
    {
      "val": "123456",
      "offset": 39
    }
  ],
  "location": "AddUserStepDefinition.add_User_Enters_and(String,String)"
});
formatter.result({
  "duration": 430890500,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Signin()"
});
formatter.result({
  "duration": 5499413800,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Dashboard_Title_is_AdminLTE_Dashboard()"
});
formatter.result({
  "duration": 22923000,
  "error_message": "java.lang.AssertionError: expected [AdminLTE 2 | Dashboardddddd] but found [AdminLTE 2 | Dashboard]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertEquals(Assert.java:123)\r\n\tat org.testng.Assert.assertEquals(Assert.java:176)\r\n\tat org.testng.Assert.assertEquals(Assert.java:186)\r\n\tat stepDefinition.AddUserStepDefinition.add_Dashboard_Title_is_AdminLTE_Dashboard(AddUserStepDefinition.java:73)\r\n\tat ✽.When Add Dashboard Title is AdminLTE Dashboard(E:/Maven/AdminLTE_BDD/src/main/java/feature/AddUsers.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Users()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_User()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_On_Add_User_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_Add_User()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sachin",
      "offset": 18
    },
    {
      "val": "9999999999",
      "offset": 31
    },
    {
      "val": "nilesh@123",
      "offset": 48
    },
    {
      "val": "Male",
      "offset": 65
    },
    {
      "val": "Delhi",
      "offset": 76
    },
    {
      "val": "40404",
      "offset": 88
    }
  ],
  "location": "AddUserStepDefinition.add_User_Details_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 114500,
  "status": "passed"
});
formatter.after({
  "duration": 577112900,
  "status": "passed"
});
formatter.before({
  "duration": 106600,
  "status": "passed"
});
formatter.before({
  "duration": 12639499400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User Data Scenario",
  "description": "",
  "id": "adminlte-addusers-features;user-data-scenario;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Add User is on Log in Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Add User Enters \"kiran@gmail.com\" and \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Add Click on Signin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Add Dashboard Title is AdminLTE Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add Click on Users",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add Users Title is AdminLTE User",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Add Click On Add User Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Add Users Title is AdminLTE Add User",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Add User Details \"Anuja\" and \"3333333333\" and \"nilesh@123\" and \"Female\" and \"Punjab\" and \"50505\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Add Click on Submit",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserStepDefinition.add_User_is_on_Log_in_Page()"
});
formatter.result({
  "duration": 14056779600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 17
    },
    {
      "val": "123456",
      "offset": 39
    }
  ],
  "location": "AddUserStepDefinition.add_User_Enters_and(String,String)"
});
formatter.result({
  "duration": 262886300,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Signin()"
});
formatter.result({
  "duration": 21035443500,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Dashboard_Title_is_AdminLTE_Dashboard()"
});
formatter.result({
  "duration": 13244600,
  "error_message": "java.lang.AssertionError: expected [AdminLTE 2 | Dashboardddddd] but found [AdminLTE 2 | Dashboard]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertEquals(Assert.java:123)\r\n\tat org.testng.Assert.assertEquals(Assert.java:176)\r\n\tat org.testng.Assert.assertEquals(Assert.java:186)\r\n\tat stepDefinition.AddUserStepDefinition.add_Dashboard_Title_is_AdminLTE_Dashboard(AddUserStepDefinition.java:73)\r\n\tat ✽.When Add Dashboard Title is AdminLTE Dashboard(E:/Maven/AdminLTE_BDD/src/main/java/feature/AddUsers.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Users()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_User()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_On_Add_User_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_Add_User()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Anuja",
      "offset": 18
    },
    {
      "val": "3333333333",
      "offset": 30
    },
    {
      "val": "nilesh@123",
      "offset": 47
    },
    {
      "val": "Female",
      "offset": 64
    },
    {
      "val": "Punjab",
      "offset": 77
    },
    {
      "val": "50505",
      "offset": 90
    }
  ],
  "location": "AddUserStepDefinition.add_User_Details_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 89800,
  "status": "passed"
});
formatter.after({
  "duration": 659379200,
  "status": "passed"
});
});