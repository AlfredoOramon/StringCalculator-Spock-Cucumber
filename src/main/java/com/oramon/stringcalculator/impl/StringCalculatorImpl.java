package com.oramon.stringcalculator.impl;

import com.oramon.stringcalculator.interfaces.ListProcessor;
import com.oramon.stringcalculator.interfaces.Splitter;
import com.oramon.stringcalculator.interfaces.StringCalculator;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * ClassName
 * <p>
 * Created by Alfredo Gil Rubio
 * <p>
 * Date: 27/06/17 16:16
 */
public class StringCalculatorImpl implements StringCalculator{

    @Autowired
    Splitter splitter;

    @Autowired
    ListProcessor processor;

    @Override
    public final int sum(String inputText) {
        List<Integer> numbers = splitter.getNumbersSplitByDelimiter(inputText);
        int result = processor.sumAllTheNumber(numbers);
        return result;
    }
}
