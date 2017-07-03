package com.oramon.stringcalculator.integration.features.add;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

/**
 * ClassName
 * <p>
 * Created by Alfredo Gil Rubio
 * <p>
 * Date: 28/06/17 9:40
 */
@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = "src/test/resources", format = { "pretty","html: cucumber-html-reports",
        "json: cucumber-html-reports/cucumber.json" })
public class StringCalculatorBDDTest {
}
