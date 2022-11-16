import React, {useEffect, useState} from "react"
import HeaderCalculator from "./HeaderCalculator"
import MainCalculator from "./MainCalculator"
import classNames from "classnames"

const Calculator = () => {
    const [inputField, setInputField] = useState('')
    const [result, setResult] = useState({value: 0, isActive: false})
    const [themeSwitch, setThemeSwitch] = useState(false)
    const [calculatorActive, setCalculatorActive] = useState({'simple' : true, 'engineering' : false})

    const switchThemeClass = classNames({' switch-theme' : themeSwitch})

    useEffect(() => {
        document.body.classList.toggle('switch-theme')
    }, [themeSwitch]);

    return (
        <div className={`calculator${switchThemeClass}`}>
            <HeaderCalculator
                themeSwitch={themeSwitch}
                setThemeSwitch={setThemeSwitch}
                switchThemeClass={switchThemeClass}
                setCalculatorActive={setCalculatorActive}
                inputField={inputField}
                setInputField={setInputField}
                result={result}
            />
            <MainCalculator
                switchThemeClass={switchThemeClass}
                calculatorActive={calculatorActive}
                inputField={inputField}
                setInputField={setInputField}
                setResult={setResult}
            />
        </div>
    )
}

export default Calculator