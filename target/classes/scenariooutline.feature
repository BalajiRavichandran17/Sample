#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Title of your feature
 
 
  @tag1
  Scenario Outline: Title of your scenario outline 
  Given get the driver detils from user outline  
    And navigate to the repective web site and click the add customer link outline 
    When The user enter the details from the datatable outline  "<fname>","<lname>","<email>","<address>","<mobileno>"
    And the user click the submit button outline 
    Then the user get the customer id succcessfully outline 

    Examples: 
    |fname|lname|email|address|mobileno|
    |balaji|Ravichandran|crbalaji172@gmail.com|Trichy|9095702844|
    |Kishor|Ravichandran|kishorkumar17@gmail.com|Salemrasanayakpalayam|8526242416|