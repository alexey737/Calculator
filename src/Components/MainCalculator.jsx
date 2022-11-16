import React, {useEffect} from "react"
import SimpleCalculator from "./SimpleCalculator"
import EngineeringCalculator from "./EngineeringCalculator"

const MainCalculator = ({switchThemeClass, calculatorActive, inputField, setInputField, setResult}) => {

    useEffect(() => {
        let maxAllowableLength = 12
        const step = 3
        let fontSize = 50
        let paddingTop = 0

        if (inputField.length <= maxAllowableLength) {
            fontSize = 50
            paddingTop = 0
        } else {
            for (let i = maxAllowableLength; i < inputField.length; i++) {
                fontSize = fontSize > 25 ? fontSize - step : fontSize
                paddingTop = paddingTop < 25 ? paddingTop + step : paddingTop
            }
        }

        document.querySelector('.header__expression').style.fontSize = `${fontSize}px`
        document.querySelector('.header__expression').style.paddingTop = `${paddingTop}px`

    }, [inputField.length])

    const handlerChangeInput = event => {
        const currentTarget = event.currentTarget

        if (currentTarget.closest('.number')) {
            setInputField(inputField + currentTarget.ariaValueText)
        } else if (currentTarget.closest('.sign')) {
            const lastSymbol = inputField[inputField.length - 1]
            if (lastSymbol !== '(' && lastSymbol !== ')' && lastSymbol !== '!' && lastSymbol !== 'e' && lastSymbol !== 'π') {
                const newValue = Number.isNaN(+lastSymbol)
                    ? (inputField.slice(0, inputField.length - 1) + currentTarget.ariaValueText)
                    : inputField + currentTarget.ariaValueText
                setInputField(inputField !== '' ? newValue : inputField)
            } else {
                setInputField(inputField + currentTarget.ariaValueText)
            }
        } else if (currentTarget.closest('.sym')) {
            const lastSymbol = inputField[inputField.length - 1]
            const penultimateSymbol = inputField[inputField.length - 2];

            if (lastSymbol === '(' || lastSymbol === ')') {
                setInputField(inputField + currentTarget.ariaValueText)
            } else if (lastSymbol === 'π' || lastSymbol === 'e') {
                setInputField(inputField.slice(0, inputField.length - 1) + currentTarget.ariaValueText)
            } else if ((lastSymbol === 'n' && penultimateSymbol === 'i') || (lastSymbol === 's' && penultimateSymbol === 'o')) {
                setInputField(inputField.slice(0, inputField.length - 3) + currentTarget.ariaValueText)
            } else if ((lastSymbol === 'n' && penultimateSymbol === 'l') || (lastSymbol === 'g' && penultimateSymbol === 'l')) {
                setInputField(inputField.slice(0, inputField.length - 2) + currentTarget.ariaValueText)
            } else {
                setInputField(inputField + currentTarget.ariaValueText)
            }
        } else if (currentTarget.closest('.backspace-btn')) {
            if ((inputField[inputField.length - 1] === 'n' && inputField[inputField.length - 2] === 'i')
                || inputField[inputField.length - 1] === 's') {
                setInputField(inputField.slice(0, inputField.length - 3))
            } else if ((inputField[inputField.length - 1] === 'n' && inputField[inputField.length - 2] === 'l')
                || inputField[inputField.length - 1] === 'g') {
                setInputField(inputField.slice(0, inputField.length - 2))
            } else {
                setInputField(inputField.slice(0, inputField.length - 1))
            }
        } else if (currentTarget.closest('.reset-btn')) {
            setInputField('')
            setResult({value: 0, isActive: false})
        } else if (currentTarget.closest('.btn-equals')) {
            let tempValue = inputField

            tempValue = tempValue.includes('sin') ? tempValue.replace(/sin/g, 'Math.sin') : tempValue
            tempValue = tempValue.includes('cos') ? tempValue.replace(/cos/g, 'Math.cos') : tempValue
            tempValue = tempValue.includes('ln') ? tempValue.replace(/ln/g, 'Math.log') : tempValue
            tempValue = tempValue.includes('lg') ? tempValue.replace(/lg/g, 'Math.log10') : tempValue
            tempValue = tempValue.includes('e') ? tempValue.replace(/e/g, 'Math.E') : tempValue
            tempValue = tempValue.includes('π') ? tempValue.replace(/π/g, 'Math.PI') : tempValue
            tempValue = tempValue.includes('^') ? tempValue.replace(/\^/g, '**') : tempValue
            tempValue = tempValue.includes('√') ? tempValue.replace(/√/g, 'Math.sqrt') : tempValue

            if (tempValue.includes('!')) {
                let listNumIndices = []
                let listNumFactorials = []

                let index = 0;
                while (index < tempValue.length) {
                    if (tempValue[index] === '!') {
                        listNumIndices.push(index)
                    }
                    index++
                }

                let startIndex = 0
                let endIndex = 0
                let pattern = /[+*/%-]/gi
                listNumIndices.forEach((value, index, array) => {
                    for (let i = value; i >= 0; i--) {
                        if (tempValue[i] === '(' && (tempValue[i - 1] === undefined || tempValue[i - 1].match(pattern))) {
                            startIndex = i + 1
                            break
                        }
                    }

                    endIndex = value - 1

                    listNumFactorials.push(eval(tempValue.slice(startIndex, endIndex)))
                    startIndex = array[index + 1] - value + 1
                })

                listNumFactorials = listNumFactorials.map(item => {
                    let resultFactorial = 1
                    for (let i = 1; i <= item; i++) {
                        resultFactorial *= i
                    }
                    return resultFactorial
                })

                tempValue = tempValue.replace(/[(][0-9A-Za-z.*+-/%()]{1,}[)]!/gi, 'F')
                startIndex = 0
                endIndex = 0
                index = 0
                for (let i = 0; i < tempValue.length; i++) {
                    if (tempValue[i] === 'F') {
                        endIndex = i;
                        tempValue = tempValue.substring(startIndex, endIndex) + listNumFactorials[index++] + tempValue.substring(endIndex + 1);
                    }
                }
            }

            setResult({
                value: eval(tempValue).toString().length > 10 ? eval(tempValue).toFixed(2) : eval(tempValue),
                isActive: true
            })
            setInputField('')
        }
    }

    return (
        <main className="calculator__main main">
            <div className="main__container">
                <SimpleCalculator
                    switchThemeClass={switchThemeClass}
                    calculatorActive={calculatorActive}
                    handlerChangeInput={handlerChangeInput}
                />
                <EngineeringCalculator
                    switchThemeClass={switchThemeClass}
                    calculatorActive={calculatorActive}
                    handlerChangeInput={handlerChangeInput}
                />
            </div>
        </main>
    )
}

export default MainCalculator