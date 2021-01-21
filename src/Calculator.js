import React, { useState } from "react";
import "./calculatorStyle.css";

const Calculator = () => {
  // State
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(0);

  // Add the value of the clicked symbol to 'expression'
  const display = (symbol) => {
    // Prevent the user from typig "." more than once
    if (symbol === "." && expression[expression.length - 1] === ".") {
      setExpression(expression.slice(0, -1));
    }
    setExpression((pre) => pre + symbol);
  };

  // To calculate the result from 'expression'
  const calculate = () => {
    setAnswer(eval(expression));
    setAnswer((pre) => pre + "=");
  };

  // To clear the display area
  const clear = () => {
    setExpression("");
    setAnswer(0);
  };

  return (
    <>
      <div className="container">
        <div id="display-box">
          <div id="display">{answer}</div>
          <input type="text" value={expression} placeholder="0" disabled />
        </div>
        <div onClick={clear} id="clear">
          AC
        </div>
        <div onClick={calculate} id="equals">
          =
        </div>
        <div onClick={() => display("7")} id="seven">
          7
        </div>
        <div onClick={() => display("8")} id="eight">
          8
        </div>
        <div onClick={() => display("9")} id="nine">
          9
        </div>
        <div onClick={() => display("+")} id="add">
          +
        </div>
        <div onClick={() => display("4")} id="four">
          4
        </div>
        <div onClick={() => display("5")} id="five">
          5
        </div>
        <div onClick={() => display("6")} id="six">
          6
        </div>
        <div onClick={() => display("-")} id="subtract">
          -
        </div>
        <div onClick={() => display("1")} id="one">
          1
        </div>
        <div onClick={() => display("2")} id="two">
          2
        </div>
        <div onClick={() => display("3")} id="three">
          3
        </div>
        <div onClick={() => display("*")} id="multiply">
          x
        </div>
        <div onClick={() => display("0")} id="zero">
          0
        </div>
        <div onClick={() => display(".")} id="decimal">
          .
        </div>
        <div onClick={() => display("/")} id="divide">
          /
        </div>
      </div>
      <div className="author">
        Created by:{" "}
        <a id="link" href="https://github.com/cefdev" target="_blank">
          Mounssif Koumila
        </a>
      </div>
    </>
  );
};

export default Calculator;
