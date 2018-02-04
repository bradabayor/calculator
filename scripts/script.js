/* VARIABLES */

let displayValue = new Array;

let display = document.getElementById("display");
let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("operator");
let clear = document.getElementById("clear");
let plusMinus = document.getElementById("plusminus");
let decimal = document.getElementById("decimal");
let equals = document.getElementById("equals");

let firstEntry;
let secondEntry;
let operator;

const MULTIPLY = '\u00D7';
const DIVIDE = '\u00F7';

/* EVENT LISTENERS */

for (var i = 0; i < operators.length; i++) {
	operators[i].addEventListener("click", function() {
		firstEntry = Number(display.innerHTML);
		operator = this.innerHTML;
		displayValue = [];
		updateDisplay();
	}, false);
}

for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", function() {
		displayValue.push(this.innerHTML);
		updateDisplay();
	}, false);
}

clear.addEventListener("click", function() {
	displayValue = [];
	firstEntry = 0;
	secondEntry = 0;
	operator = '';
	updateDisplay();
});

plusMinus.addEventListener("click", function() {
	if (displayValue[0] == "-") {
		displayValue.shift();
		updateDisplay();
	} else if (displayValue[0] != "-") {
		displayValue.unshift("-");
		updateDisplay();
	}
	});

decimal.addEventListener("click", function() {
	displayValue.push(this.innerHTML);
	updateDisplay();
});

equals.addEventListener("click", function() {
	secondEntry = Number(display.innerHTML);
	displayValue = [];
	updateDisplay();
	operate(operator, firstEntry, secondEntry);
})

/* DISPLAY FUNCTIONS */

function updateDisplay() {
	var displayString = displayValue.join('');
	display.innerHTML = displayString;
}

/* OPERATORS */

function operate(operator, a, b) {
	
	switch (true) {
		case (operator === "+"):
			displayValue.push(add(a, b));
			updateDisplay();
			break;
		case (operator === "-"):
			displayValue.push(subtract(a, b));
			updateDisplay();
			break;
		case (operator === MULTIPLY):
			displayValue.push(multiply(a, b));
			updateDisplay();
			break;
		case (operator === DIVIDE):
			displayValue.push(divide(a, b));
			updateDisplay();
			break;
	}
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}