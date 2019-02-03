$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/resource/java/addCustomer.feature");
formatter.feature({
  "name": "Telecom",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user go in to the guru telecom homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerDetails.the_user_go_in_to_the_guru_telecom_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates into the AddCustomerDetails",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerDetails.the_user_navigates_into_the_AddCustomerDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter the values",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerDetails.the_user_enter_the_values()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerDetails.the_user_enter_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The customer Id generted successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerDetails.the_customer_Id_generted_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});