package test.com.example.testspock.stringcalculator

import com.oramon.stringcalculator.impl.StringCalculatorImpl
import com.oramon.stringcalculator.interfaces.ListProcessor
import com.oramon.stringcalculator.interfaces.Splitter
import com.oramon.stringcalculator.interfaces.StringCalculator
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.MockitoAnnotations
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

    @Mock
    private Splitter splitter

    @Mock
    private ListProcessor listProcessor

    @InjectMocks
    private StringCalculator SUT

    def setup() {
        SUT = new StringCalculatorImpl()
        MockitoAnnotations.initMocks(this)
    }

    def "Should return the sum of two numbers contained in a input text, split by a coma delimiter"() {
        given: "two numbers in a input String"
        String inputText = "1,2"

        ArrayList<Integer> integers=new ArrayList<>()
        integers.add(1)
        integers.add(2)

        org.mockito.Mockito.when(splitter.getNumbersSplitByDelimiter("1,2")).thenReturn(integers)
        org.mockito.Mockito.when(listProcessor.sumAllTheNumber(integers)).thenReturn(3)

        when: "we sum the two number of the input String"
        int sumResult = SUT.sum(inputText)

        then: "the result of the sum of the two numbers"
        sumResult == 3
    }
}
