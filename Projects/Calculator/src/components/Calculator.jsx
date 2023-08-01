import React, { useState } from "react";
import Output from "./Output";
import Input from "./Input";
import "./calculator.css";

function Calculator() {
  const [result, setResult] = useState("0");
  const [operand1, setOperand1] = useState(null);
  const [currentOperator, setCurrentOperator] = useState(null);
  const [Operand2, setOperand2] = useState(null);

  //this function manages decimal numbers
  const Decimal = () => {
    if (!result.includes(".")) {
      // !result.includes(".") checks whether the value in result does not contain a decimal point
      setResult(function (prevResult) {
        return prevResult + ".";
      });
    }
  };

  const calculateResult = () => {
    const inputValue = parseFloat(result);

    if (currentOperator === "+") {
      return operand1 + inputValue;
      // If the currentOperator is "+", the function returns the sum of operand1 and inputValue, which is the second operand. For example, if operand1 is 5 and inputValue is 3, the function returns 5 + 3, which is 8.
    } else if (currentOperator === "-") {
      return operand1 - inputValue;
    } else if (currentOperator === "*") {
      return operand1 * inputValue;
    } else if (currentOperator === "/") {
      if (inputValue === 0) {
        return 0;
      }
      return operand1 / inputValue;
    } else if (currentOperator === "%") {
      return (operand1 / 100) * inputValue;
    }

    return inputValue;
  };

  //this functions clear the output display
  const clearResult = () => {
    setResult("0");
    setOperand1(null);
    setCurrentOperator(null);
  };

  const toggleSign = () => {
    if (result !== "0") {
      setResult((prevResult) => String(parseFloat(prevResult) * -1));
      // * -1 multiplies the parsed floating-point number by -1, effectively toggling its sign from positive to negative
      // parseFloat(prevResult) converts the previous value of result (which is a string) to a floating-point number,
    }
  };

  //this function manage inputs
  const inputDigit = (digit) => {
    if (Operand2) {
      //Operand2: A flag indicating whether the calculator is waiting for the second operand or not.
      //if , inside if statement is true then it will move inside if statement otherwise it will move in else statement
      setResult(digit);
      setOperand2(false);
    } else {
      setResult((prevResult) =>
        prevResult === "0" ? digit : prevResult + digit
      );
    }
  };

  const formatResult = (value) => {
    return Number.isInteger(value)
      ? // Number.isInteger(value) checks whether the value is an integer (whole number). The Number.isInteger() method is a built-in JavaScript method that returns true if the argument is an integer, and false otherwise.
        value.toString()
      : // if the value is an integer, the function returns value.toString(). This means that if the value is a whole number, it is simply converted to a string using the toString() method and returned as is
        value.toFixed(2).replace(/\.?0+$/, "");
    // value.toFixed(2) is used to round the value to two decimal places. The toFixed() method is a built-in JavaScript method that rounds a number to the specified number of decimal places and returns a string representation of the rounded number.
    // .replace(/\.?0+$/, "") is used to remove trailing zeros from the decimal portion of the formatted number. This regular expression (/\.?0+$/) matches any trailing zeros (after the decimal point) and replaces them with an empty string, effectively removing them.
  };

  // calculateFinalResult is a function that calculates the final result when the user clicks the '=' button on the calculator. It is responsible for completing the ongoing calculation and displaying the final result
  const calculateFinalResult = () => {
    if (!currentOperator || Operand2) {
      return;
    }
    const inputValue = parseFloat(result);
    const finalResult = calculateResult();
    setResult(formatResult(finalResult));
    setOperand1(finalResult);
    setCurrentOperator(null);
    setOperand2(false);
  };

  // handleOperator is a function that handles the operations when the user selects an operator
  // selectedOperator is the operator (e.g., '+', '-', '*', or '/') that the user has chosen to perform the calculation.
  const handleOperator = (selectedOperator) => {
    if (selectedOperator === "%") {
      // Calculate percentage of the current result
      setResult((prevResult) => String(parseFloat(prevResult) / 100));
      return;
    }

    const inputValue = parseFloat(result);

    if (currentOperator && !Operand2) {
      // If both conditions are true (meaning the user has entered an operator and not yet entered the second operand)
      const finalResult = calculateResult();
      setResult(String(finalResult));
      setOperand1(finalResult);
    } else if (currentOperator && Operand2) {
      setCurrentOperator(selectedOperator);
      //this means that agar hamm koi bhi operator select karte let say first I have selected - then * then + so jho last mai select karenege vo operator lagh jaega
      return;
    }

    if (operand1 === null) {
      setOperand1(inputValue);
    } else {
      const finalResult = calculateResult();
      setResult(String(finalResult));
      setOperand1(finalResult);
    }

    setOperand2(true);
    setCurrentOperator(selectedOperator.toLowerCase());
  };

  return (
    <div className="custom-calculator">
      <Output result={result} />
      <Input
        clearResult={clearResult}
        toggleSign={toggleSign}
        handleOperator={handleOperator}
        inputDigit={inputDigit}
        Decimal={Decimal}
        calculateFinalResult={calculateFinalResult}
      />
    </div>
  );
}

export default Calculator;
