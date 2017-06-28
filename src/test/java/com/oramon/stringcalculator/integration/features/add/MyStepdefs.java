package com.oramon.stringcalculator.integration.features.add;

import com.oramon.stringcalculator.impl.StringCalculatorImpl;
import com.oramon.stringcalculator.interfaces.StringCalculator;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

/**
 * ClassName
 * <p>
 * Created by Alfredo Gil Rubio
 * <p>
 * Date: 28/06/17 12:00
 */
public class MyStepdefs {

    private String inputText;
    private int sum;

    @Given("^an input \"([^\"]*)\"$")
    public void anInput(String arg0) throws Throwable {
        inputText=arg0;
    }

    @When("^you sum all the numbers in the input$")
    public void youSumAllTheNumbersInTheInput() throws Throwable {
        StringCalculator stringCalculator = new StringCalculatorImpl();
        sum = stringCalculator.sum(inputText);
    }

    @Then("^the string calculator will return (\\d+)$")
    public void theStringCalculatorWillReturn(int arg0) throws Throwable {
        assertThat(sum, is(arg0));
    }
}
