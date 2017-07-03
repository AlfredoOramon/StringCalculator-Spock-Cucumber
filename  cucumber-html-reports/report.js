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
  "duration": 111069001,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.youSumAllTheNumbersInTheInput()"
});
formatter.result({
  "duration": 864706,
  "error_message": "java.lang.NullPointerException\n\tat com.oramon.stringcalculator.impl.StringCalculatorImpl.sum(StringCalculatorImpl.java:27)\n\tat com.oramon.stringcalculator.integration.features.add.MyStepdefs.youSumAllTheNumbersInTheInput(MyStepdefs.java:32)\n\tat ✽.When you sum all the numbers in the input(features/add/Add.feature:6)\n",
  "status": "failed"
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
  "status": "skipped"
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
  "duration": 1406916,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.youSumAllTheNumbersInTheInput()"
});
formatter.result({
  "duration": 282200,
  "error_message": "java.lang.NullPointerException\n\tat com.oramon.stringcalculator.impl.StringCalculatorImpl.sum(StringCalculatorImpl.java:27)\n\tat com.oramon.stringcalculator.integration.features.add.MyStepdefs.youSumAllTheNumbersInTheInput(MyStepdefs.java:32)\n\tat ✽.When you sum all the numbers in the input(features/add/Add.feature:6)\n",
  "status": "failed"
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
  "status": "skipped"
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
  "duration": 1408761,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.youSumAllTheNumbersInTheInput()"
});
formatter.result({
  "duration": 291906,
  "error_message": "java.lang.NullPointerException\n\tat com.oramon.stringcalculator.impl.StringCalculatorImpl.sum(StringCalculatorImpl.java:27)\n\tat com.oramon.stringcalculator.integration.features.add.MyStepdefs.youSumAllTheNumbersInTheInput(MyStepdefs.java:32)\n\tat ✽.When you sum all the numbers in the input(features/add/Add.feature:6)\n",
  "status": "failed"
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
  "status": "skipped"
});
});