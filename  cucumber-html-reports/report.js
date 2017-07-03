$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/add/Add.feature");
formatter.feature({
  "line": 1,
  "name": "Have a functionality that when it receives a Text that contain numbers split by delimiters as",
  "description": "comas, dots or other things sum all of them and return the solution of them.",
  "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Pass a text that contains two numbers to the string calculator with a coma delimiter and sum them",
  "description": "",
  "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;pass-a-text-that-contains-two-numbers-to-the-string-calculator-with-a-coma-delimiter-and-sum-them",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "an input \u003cinputText\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "you sum all the numbers in the input",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the string calculator will return \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;pass-a-text-that-contains-two-numbers-to-the-string-calculator-with-a-coma-delimiter-and-sum-them;",
  "rows": [
    {
      "cells": [
        "inputText",
        "result"
      ],
      "line": 9,
      "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;pass-a-text-that-contains-two-numbers-to-the-string-calculator-with-a-coma-delimiter-and-sum-them;;1"
    },
    {
      "cells": [
        "\"1,2\"",
        "3"
      ],
      "line": 10,
      "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;pass-a-text-that-contains-two-numbers-to-the-string-calculator-with-a-coma-delimiter-and-sum-them;;2"
    },
    {
      "cells": [
        "\"2,2\"",
        "4"
      ],
      "line": 11,
      "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;pass-a-text-that-contains-two-numbers-to-the-string-calculator-with-a-coma-delimiter-and-sum-them;;3"
    },
    {
      "cells": [
        "\"0,2\"",
        "2"
      ],
      "line": 12,
      "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;pass-a-text-that-contains-two-numbers-to-the-string-calculator-with-a-coma-delimiter-and-sum-them;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Pass a text that contains two numbers to the string calculator with a coma delimiter and sum them",
  "description": "",
  "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;pass-a-text-that-contains-two-numbers-to-the-string-calculator-with-a-coma-delimiter-and-sum-them;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "an input \"1,2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "you sum all the numbers in the input",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the string calculator will return 3",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1,2",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.anInput(String)"
});
formatter.result({
  "duration": 106217503,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.youSumAllTheNumbersInTheInput()"
});
formatter.result({
  "duration": 337433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.theStringCalculatorWillReturn(int)"
});
formatter.result({
  "duration": 3491839,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Pass a text that contains two numbers to the string calculator with a coma delimiter and sum them",
  "description": "",
  "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;pass-a-text-that-contains-two-numbers-to-the-string-calculator-with-a-coma-delimiter-and-sum-them;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "an input \"2,2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "you sum all the numbers in the input",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the string calculator will return 4",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2,2",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.anInput(String)"
});
formatter.result({
  "duration": 1382562,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.youSumAllTheNumbersInTheInput()"
});
formatter.result({
  "duration": 22618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.theStringCalculatorWillReturn(int)"
});
formatter.result({
  "duration": 2125064,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c4\u003e\n     but: was \u003c3\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat com.oramon.stringcalculator.integration.features.add.MyStepdefs.theStringCalculatorWillReturn(MyStepdefs.java:37)\n\tat ✽.Then the string calculator will return 4(features/add/Add.feature:7)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "Pass a text that contains two numbers to the string calculator with a coma delimiter and sum them",
  "description": "",
  "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;pass-a-text-that-contains-two-numbers-to-the-string-calculator-with-a-coma-delimiter-and-sum-them;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "an input \"0,2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "you sum all the numbers in the input",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the string calculator will return 2",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0,2",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.anInput(String)"
});
formatter.result({
  "duration": 1331886,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.youSumAllTheNumbersInTheInput()"
});
formatter.result({
  "duration": 29935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.theStringCalculatorWillReturn(int)"
});
formatter.result({
  "duration": 388496,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c2\u003e\n     but: was \u003c3\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat com.oramon.stringcalculator.integration.features.add.MyStepdefs.theStringCalculatorWillReturn(MyStepdefs.java:37)\n\tat ✽.Then the string calculator will return 2(features/add/Add.feature:7)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "Add only one number",
  "description": "",
  "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;add-only-one-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "an input \"1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "you sum all the numbers in the input",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the string calculator will return 1",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.anInput(String)"
});
formatter.result({
  "duration": 1359986,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.youSumAllTheNumbersInTheInput()"
});
formatter.result({
  "duration": 54217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.theStringCalculatorWillReturn(int)"
});
formatter.result({
  "duration": 340253,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c1\u003e\n     but: was \u003c3\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat com.oramon.stringcalculator.integration.features.add.MyStepdefs.theStringCalculatorWillReturn(MyStepdefs.java:37)\n\tat ✽.Then the string calculator will return 1(features/add/Add.feature:17)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "Empty string in string calculator",
  "description": "",
  "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;empty-string-in-string-calculator",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "an input \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "you sum all the numbers in the input",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the string calculator will return 0",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.anInput(String)"
});
formatter.result({
  "duration": 1211645,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.youSumAllTheNumbersInTheInput()"
});
formatter.result({
  "duration": 21360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.theStringCalculatorWillReturn(int)"
});
formatter.result({
  "duration": 296738,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c0\u003e\n     but: was \u003c3\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat com.oramon.stringcalculator.integration.features.add.MyStepdefs.theStringCalculatorWillReturn(MyStepdefs.java:37)\n\tat ✽.Then the string calculator will return 0(features/add/Add.feature:22)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 24,
  "name": "Input 0 string in string calculator",
  "description": "",
  "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;input-0-string-in-string-calculator",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "an input \"0\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "you sum all the numbers in the input",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the string calculator will return 0",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.anInput(String)"
});
formatter.result({
  "duration": 1465099,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.youSumAllTheNumbersInTheInput()"
});
formatter.result({
  "duration": 25622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.theStringCalculatorWillReturn(int)"
});
formatter.result({
  "duration": 285335,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c0\u003e\n     but: was \u003c3\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat com.oramon.stringcalculator.integration.features.add.MyStepdefs.theStringCalculatorWillReturn(MyStepdefs.java:37)\n\tat ✽.Then the string calculator will return 0(features/add/Add.feature:27)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 29,
  "name": "String calculator can handle an unknown amount of numbers",
  "description": "",
  "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;string-calculator-can-handle-an-unknown-amount-of-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "an input \"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "you sum all the numbers in the input",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the string calculator will return 210",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.anInput(String)"
});
formatter.result({
  "duration": 1223426,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.youSumAllTheNumbersInTheInput()"
});
formatter.result({
  "duration": 26377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "210",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.theStringCalculatorWillReturn(int)"
});
formatter.result({
  "duration": 321597,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c210\u003e\n     but: was \u003c3\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat com.oramon.stringcalculator.integration.features.add.MyStepdefs.theStringCalculatorWillReturn(MyStepdefs.java:37)\n\tat ✽.Then the string calculator will return 210(features/add/Add.feature:32)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 34,
  "name": "String calculator can handle new lines between numbers (instead of commas)",
  "description": "",
  "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;string-calculator-can-handle-new-lines-between-numbers-(instead-of-commas)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "an input \"1\\n2,3\"",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "you sum all the numbers in the input",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "the string calculator will return 6",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1\\n2,3",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.anInput(String)"
});
formatter.result({
  "duration": 1170098,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.youSumAllTheNumbersInTheInput()"
});
formatter.result({
  "duration": 26312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.theStringCalculatorWillReturn(int)"
});
formatter.result({
  "duration": 328797,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c6\u003e\n     but: was \u003c3\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat com.oramon.stringcalculator.integration.features.add.MyStepdefs.theStringCalculatorWillReturn(MyStepdefs.java:37)\n\tat ✽.Then the string calculator will return 6(features/add/Add.feature:37)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 39,
  "name": "Support different delimiters",
  "description": "",
  "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;support-different-delimiters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "an input \"//;\\n1;2\"",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "you sum all the numbers in the input",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "the string calculator will return 3",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "//;\\n1;2",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.anInput(String)"
});
formatter.result({
  "duration": 1253811,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.youSumAllTheNumbersInTheInput()"
});
formatter.result({
  "duration": 38205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.theStringCalculatorWillReturn(int)"
});
formatter.result({
  "duration": 117184,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "The string calculator should ignore numbers bigger than 1000 (e.g. adding 2+1001 \u003d 2)",
  "description": "",
  "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;the-string-calculator-should-ignore-numbers-bigger-than-1000-(e.g.-adding-2+1001-\u003d-2)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "an input \"2,1001\"",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "you sum all the numbers in the input",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the string calculator will return 2",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2,1001",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.anInput(String)"
});
formatter.result({
  "duration": 1200166,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.youSumAllTheNumbersInTheInput()"
});
formatter.result({
  "duration": 22716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.theStringCalculatorWillReturn(int)"
});
formatter.result({
  "duration": 307985,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c2\u003e\n     but: was \u003c3\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat com.oramon.stringcalculator.integration.features.add.MyStepdefs.theStringCalculatorWillReturn(MyStepdefs.java:37)\n\tat ✽.Then the string calculator will return 2(features/add/Add.feature:47)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 49,
  "name": "String calculator delimiters can be of any length",
  "description": "",
  "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;string-calculator-delimiters-can-be-of-any-length",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "an input \"//[***]\\n1***2***3\"",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "you sum all the numbers in the input",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "the string calculator will return 6",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "//[***]\\n1***2***3",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.anInput(String)"
});
formatter.result({
  "duration": 1148385,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.youSumAllTheNumbersInTheInput()"
});
formatter.result({
  "duration": 26917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.theStringCalculatorWillReturn(int)"
});
formatter.result({
  "duration": 301770,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c6\u003e\n     but: was \u003c3\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat com.oramon.stringcalculator.integration.features.add.MyStepdefs.theStringCalculatorWillReturn(MyStepdefs.java:37)\n\tat ✽.Then the string calculator will return 6(features/add/Add.feature:52)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 54,
  "name": "The string calculator supports multiple delimiters",
  "description": "",
  "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;the-string-calculator-supports-multiple-delimiters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "an input \"//[*][%]\\n1*2%3\"",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "you sum all the numbers in the input",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "the string calculator will return 6",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "//[*][%]\\n1*2%3",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.anInput(String)"
});
formatter.result({
  "duration": 1056565,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.youSumAllTheNumbersInTheInput()"
});
formatter.result({
  "duration": 24902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.theStringCalculatorWillReturn(int)"
});
formatter.result({
  "duration": 338613,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c6\u003e\n     but: was \u003c3\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat com.oramon.stringcalculator.integration.features.add.MyStepdefs.theStringCalculatorWillReturn(MyStepdefs.java:37)\n\tat ✽.Then the string calculator will return 6(features/add/Add.feature:57)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 59,
  "name": "",
  "description": "",
  "id": "have-a-functionality-that-when-it-receives-a-text-that-contain-numbers-split-by-delimiters-as;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "an input \"-10,-10\"",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "you sum all the numbers in the input",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "an exception will be shown \"no negatives allowed\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "-10,-10",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.anInput(String)"
});
formatter.result({
  "duration": 1451534,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.youSumAllTheNumbersInTheInput()"
});
formatter.result({
  "duration": 28356,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});