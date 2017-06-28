package test.com.example.testspock.stringcalculator

import com.oramon.stringcalculator.impl.StringCalculatorImpl
import com.oramon.stringcalculator.interfaces.StringCalculator
import spock.lang.Specification

/**
 *
 * ClassName
 *
 * Created by Alfredo Gil Rubio
 *
 * Date: 26/06/17 11:27
 *
 */
class StringCalculatorSpec extends Specification {

    def "Should return the sum of two numbers contained in a input text, split by a coma delimiter"()
    {
        given: "two numbers in a input String"

        String inputText = "1,2"

        when: "we sum the two number of the input String"

        StringCalculator stringCalculator = new StringCalculatorImpl()
        int sumResult = stringCalculator.sum(inputText)

        then: "the result of the sum of the two numbers"
        sumResult == 3.0
    }
}
