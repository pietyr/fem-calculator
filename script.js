let displayValue = "0";
let result = null;
let operation = "";

const display = document.querySelector(".output");
const updateDisplay = function () {
  display.innerHTML = displayValue;
};

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.innerHTML;
    if (displayValue === "0") {
      displayValue = buttonValue;
    } else {
      displayValue += buttonValue;
    }
    updateDisplay();
  });
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  displayValue = "0";
  updateDisplay();
});

const compute = function (firstValue, secondValue, operation) {
  if (operation === "+") {
    return parseInt(firstValue) + parseInt(secondValue);
  } else if (operation === "-") {
    return parseInt(firstValue) - parseInt(secondValue);
  } else if (operation === "*") {
    return parseInt(firstValue) * parseInt(secondValue);
  } else if (operation === "/") {
    return parseInt(firstValue) / parseInt(secondValue);
  }
};

const divisionButton = document.querySelector(".division");
divisionButton.addEventListener("click", () => {
  if (result == null) {
    result = parseInt(displayValue);
  } else {
    result = compute(result, parseInt(displayValue), operation);
  }
  displayValue = "0";
  operation = "/";
  updateDisplay();
});

const multiplyButton = document.querySelector(".multiplication");
multiplyButton.addEventListener("click", () => {
  if (result == null) {
    result = parseInt(displayValue);
  } else {
    result = compute(result, parseInt(displayValue), operation);
  }
  displayValue = "0";
  operation = "*";
  updateDisplay();
});

const subtractionButton = document.querySelector(".subtraction");
subtractionButton.addEventListener("click", () => {
  if (result == null) {
    result = parseInt(displayValue);
  } else {
    result = compute(result, parseInt(displayValue), operation);
  }
  displayValue = "0";
  operation = "-";
  updateDisplay();
});

const additionButton = document.querySelector(".addition");
additionButton.addEventListener("click", () => {
  console.log("Addition clicked");
  if (result == null) {
    result = parseInt(displayValue);
  } else {
    result = compute(result, parseInt(displayValue), operation);
  }
  displayValue = "0";
  operation = "+";
  updateDisplay();
});

const resultButton = document.querySelector(".result");
resultButton.addEventListener("click", () => {
  result = compute(result, parseInt(displayValue), operation);
  displayValue = String(result);
  updateDisplay();
  result = null;
});

const backspaceButton = document.querySelector(".backspace");
backspaceButton.addEventListener("click", () => {
  displayValue = displayValue.slice(0, displayValue.length - 1);
  updateDisplay();
});
