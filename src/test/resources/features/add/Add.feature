Feature: Have a functionality that when it receives a Text that contain numbers split by delimiters as
  comas, dots or other things sum all of them and return the solution of them.

  Scenario Outline: Pass a text that contains two numbers to the string calculator with a coma delimiter and sum them
    Given an input <inputText>
    When you sum all the numbers in the input
    Then the string calculator will return <result>
    Examples:
      | inputText | result |
      | "1,2"     | 3      |
      | "2,2"     | 4      |
      | "0,2"     | 2      |

  Scenario: Add only one number
    Given an input "1"
    When you sum all the numbers in the input
    Then the string calculator will return 1

  Scenario: Empty string in string calculator
    Given an input ""
    When you sum all the numbers in the input
    Then the string calculator will return 0

  Scenario: Input 0 string in string calculator
    Given an input "0"
    When you sum all the numbers in the input
    Then the string calculator will return 0

  Scenario: String calculator can handle an unknown amount of numbers
    Given an input "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20"
    When you sum all the numbers in the input
    Then the string calculator will return 210

  Scenario: String calculator can handle new lines between numbers (instead of commas)
    Given an input "1\n2,3"
    When you sum all the numbers in the input
    Then the string calculator will return 6

  Scenario: Support different delimiters
    Given an input "//;\n1;2"
    When you sum all the numbers in the input
    Then the string calculator will return 3

  Scenario: The string calculator should ignore numbers bigger than 1000 (e.g. adding 2+1001 = 2)
    Given an input "2,1001"
    When you sum all the numbers in the input
    Then the string calculator will return 2

  Scenario: String calculator delimiters can be of any length
    Given an input "//[***]\n1***2***3"
    When you sum all the numbers in the input
    Then the string calculator will return 6

  Scenario: The string calculator supports multiple delimiters
    Given an input "//[*][%]\n1*2%3"
    When you sum all the numbers in the input
    Then the string calculator will return 6

  Scenario:
    Given an input "-10,-10"
    When you sum all the numbers in the input
    Then an exception will be shown "no negatives allowed"