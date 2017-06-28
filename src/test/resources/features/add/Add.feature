Feature: Have a functionality that when it receives a Text that contain numbers split by delimiters as
  comas, dots or other things sum all of them and return the solution of them.

  Scenario: Pass a text that contains two numbers to the string calculator with a coma delimiter and sum them
    Given an input "1,2"
    When you sum all the numbers in the input
    Then the string calculator will return 3