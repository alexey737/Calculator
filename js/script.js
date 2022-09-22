/*-----VARIABLES-----------------------*/
const body = document.body;                                                                                 // body
const calculator = document.querySelector('.calculator');                                           // calculator field
const hamburger = document.querySelector('.hamburger__label');                                      // hamburger menu
const hamburgerMenuList = document.querySelector('.header__list');                                  // hamburger menu list
const listButtons = document.querySelectorAll('.header-list__button');                              // hamburger menu list buttons
const simpleCalculator = document.querySelector('.main__simple-calculator');                        // simple calculator
const engineeringCalculator = document.querySelector('.main__engineering-calculator');              // engineering calculator
const simpleCalculatorButtons = document.querySelectorAll('.simple-calculator__button');            // buttons of the simple calculator
const engineeringCalculatorButtons = document.querySelectorAll('.engineering-calculator__button');  // buttons of the engineering calculator
const inputField = document.querySelector('.header__expression');                                   // input field
const label = document.querySelector('.header__label');                                             // input field label
const signList = document.querySelectorAll('.sign');                                                // sign buttons

/*-----SWITCH THEME----------------*/
const switchTheme = () => {
    calculator.classList.toggle('switch-theme');
    for (const button of simpleCalculatorButtons) {
        button.classList.toggle('switch-theme');
    }
    for (const button of engineeringCalculatorButtons) {
        button.classList.toggle('switch-theme');
    }
    for (const button of listButtons) {
        button.classList.toggle('switch-theme');
    }
    hamburgerMenuList.classList.toggle('switch-theme');
    inputField.classList.toggle('switch-theme');
    label.classList.toggle('switch-theme');
    body.classList.toggle('switch-theme');
}

/*-----HAMBURGER-------------------*/
const hamburgerMenu = () => {
    hamburger.classList.toggle('active');
    hamburgerMenuList.classList.toggle('active');
}
const calculatorSelection = (targetItem) => {
    if (targetItem.ariaValueText === 'simple') {
        inputField.value = '';
        simpleCalculator.classList.add('active');
        engineeringCalculator.classList.remove('active');
        hamburger.classList.remove('active');
        hamburgerMenuList.classList.remove('active');
    } else if (targetItem.ariaValueText === 'engineering') {
        inputField.value = '';
        simpleCalculator.classList.remove('active');
        engineeringCalculator.classList.add('active');
        hamburger.classList.remove('active');
        hamburgerMenuList.classList.remove('active');
    }
}

/*-----CALCULATOR------------------*/
const inputDigit = (targetItem) => {
    inputField.value += targetItem.closest('.number').ariaValueText;
}
const inputSign = (targetItem) => {
    let expression = inputField.value;
    let lastSymbol = expression[expression.length - 1];
    let check = 0;

    for (const sign of signList) {
        check = lastSymbol !== sign.ariaValueText ? ++check : check;
    }

    if (check === signList.length) {
        inputField.value += targetItem.ariaValueText;
    } else {
        expression = inputField.value.slice(0, expression.length - 1);
        expression += targetItem.ariaValueText;
        inputField.value = expression;
    }
}
const inputSym = (targetItem) => {
    let expression = inputField.value;
    let lastSymbol = expression[expression.length - 1];
    let penultimateSymbol = expression[expression.length - 2];

    if (targetItem.ariaValueText === '(' || targetItem.ariaValueText === ')') {
        inputField.value += targetItem.ariaValueText;
    } else if (lastSymbol === 'π' || lastSymbol === 'e') {
        expression = inputField.value.slice(0, expression.length - 1);
        expression += targetItem.ariaValueText;
        inputField.value = expression;
    } else if ((lastSymbol === 'n' && penultimateSymbol === 'i') || (lastSymbol === 's' && penultimateSymbol === 'o')) {
        expression = inputField.value.slice(0, expression.length - 3);
        expression += targetItem.ariaValueText;
        inputField.value = expression;
    } else if ((lastSymbol === 'n' && penultimateSymbol === 'l') || (lastSymbol === 'g' && penultimateSymbol === 'l')) {
        expression = inputField.value.slice(0, expression.length - 2);
        expression += targetItem.ariaValueText;
        inputField.value = expression;
    } else {
        inputField.value += targetItem.ariaValueText;
    }
}
const deleteElement = () => {
    let expression = inputField.value;

    if (expression[expression.length - 1] === 'n' && expression[expression.length - 2] === 'i' || expression[expression.length - 1] === 's') {
        inputField.value = expression.slice(0, expression.length - 3);
    } else if (expression[expression.length - 1] === 'n' && expression[expression.length - 2] === 'l' || expression[expression.length - 1] === 'g') {
        inputField.value = expression.slice(0, expression.length - 2);
    }
    else {
        inputField.value = expression.slice(0, expression.length - 1);
    }
}
const clearExpression = () => {
    label.classList.remove('active');
    inputField.value = '';
    label.textContent = '0';
}
const equalsExpression = () => {
    let expression = inputField.value;

    if (inputField.value === '') {
        expression = '0';
    } else {
        let searchValue;
        let replaceValue;

        if (expression.includes('sin')) {
            searchValue = /sin/g;
            replaceValue = 'Math.sin';
            expression = expression.replace(searchValue, replaceValue);
        }
        if (expression.includes('cos')) {
            searchValue = /cos/g;
            replaceValue = 'Math.cos';
            expression = expression.replace(searchValue, replaceValue);
        }
        if (expression.includes('ln')) {
            searchValue = /ln/g;
            replaceValue = 'Math.log';
            expression = expression.replace(searchValue, replaceValue);
        }
        if (expression.includes('lg')) {
            searchValue = /lg/g;
            replaceValue = 'Math.log10';
            expression = expression.replace(searchValue, replaceValue);
        }
        if (expression.includes('e')) {
            searchValue = /e/g;
            replaceValue = 'Math.E';
            expression = expression.replace(searchValue, replaceValue);
        }
        if (expression.includes('π')) {
            searchValue = /π/g;
            replaceValue = 'Math.PI';
            expression = expression.replace(searchValue, replaceValue);
        }
        if (expression.includes('^')) {
            searchValue = /\^/g;
            replaceValue = '**';
            expression = expression.replace(searchValue, replaceValue);
        }
        if (expression.includes('√')) {
            searchValue = /√/g;
            replaceValue = 'Math.sqrt';
            expression = expression.replace(searchValue, replaceValue);
        }
        if (expression.includes('!')) {
            let listIndex = [];
            let listNumFactorial = [];

            let index = 0;
            while (index < expression.length) {
                expression[index] === '!' ? listIndex.push(index) : listIndex;
                index++;
            }

            let startIndex = 0;
            let endIndex = -1;
            let pattern = /[+*/%-]/gi;
            listIndex.forEach((value, index, array) => {
                for (let i = value; i >= 0; i--) {
                    console.log(expression[i - 1]);
                    if (expression[i - 1] === undefined && expression[i] === '(') {
                        startIndex = i + 1;
                        break;
                    }
                    else if ((expression[i] === '(' && expression[i - 1].match(pattern))) {
                        startIndex = i + 1;
                        break;
                    }
                }

                endIndex = value - 1;

                listNumFactorial.push(eval(expression.slice(startIndex, endIndex)));
                startIndex = array[index + 1] - value + 1;
            });

            listNumFactorial = listNumFactorial.map((item) => {
                let resultFactorial = 1;
                for (let i = 1; i <= item; i++) {
                    resultFactorial *= i;
                }
                return resultFactorial;
            });

            searchValue = /[(][0-9A-Za-z.*+-/%()]{1,}[)]!/gi;
            replaceValue = 'F';
            expression = expression.replace(searchValue, replaceValue);
            console.log(expression)
            startIndex = 0;
            endIndex = 0;
            index = 0;
            for (let i = 0; i < expression.length; i++) {
                if (expression[i] === 'F') {
                    endIndex = i;
                    expression = expression.substring(startIndex, endIndex) + listNumFactorial[index++] + expression.substring(endIndex + 1);
                }
            }
        }
    }

    expression = eval(expression);
    label.textContent = expression.toString().length > 10 ? expression.toFixed(4) : expression;
    inputField.value = expression;

    label.classList.add('active');
    inputField.value = '';
    inputField.style.fontSize = '50px';
    inputField.style.paddingTop = '0px';
}

/*-----CALCULATOR EVENT LISTENER------*/
calculator.addEventListener('click', (event) => {
    const targetItem = event.target;

    if (inputField.value.length >= 11 &&inputField.value.length < 14) {
        inputField.style.fontSize = '40px';
        inputField.style.paddingTop = '10px';
    }
    if (inputField.value.length >= 14 && inputField.value.length < 19) {
        inputField.style.fontSize = '30px';
        inputField.style.paddingTop = '20px';
    }
    if (inputField.value.length >= 19 && inputField.value.length < 23) {
        inputField.style.fontSize = '25px';
        inputField.style.paddingTop = '25px';
    }
    if (inputField.value.length >= 23) {
        inputField.style.fontSize = '20px';
        inputField.style.paddingTop = '30px';
    }

    if (targetItem.closest('.number')) {
        inputDigit(targetItem);
    } else if (targetItem.closest('.reset-btn')) {
        clearExpression();
    } else if (targetItem.closest('.backspace-btn')) {
        deleteElement();
    } else if (targetItem.closest('.sign')) {
        inputSign(targetItem);
    } else if (targetItem.closest('.sym')) {
        inputSym(targetItem);
    } else if (targetItem.closest('.btn-equals')) {
        equalsExpression();
    } else if (targetItem.closest('.header-list__button')) {
        calculatorSelection(targetItem);
    } else if (targetItem.closest('.hamburger__label')) {
        hamburgerMenu();
    } else if (targetItem.closest('.checkbox__label')) {
        switchTheme();
    }
});
