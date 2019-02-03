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
@tag
Feature: PaymentGateWayFeature
  I want to use this template for my feature file

  @tag1
  Scenario: Get the Card Number
    Given get the Driver Details
    And Go to the Payment GW Link 
    When go to the link to generate card number
    When Get the details 
    Then store the details
   
 @tag2
  Scenario Outline: Get the quantity
    Given Get the driver details and go to the quantity webpage
    When  select the quantity
    Then click the submit button 
 @tag3
  Scenario Outline: Processing the Payment
    Given Click the submit button 
    Then close the browser 

