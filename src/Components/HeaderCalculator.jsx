import React, {useState} from "react"
import classNames from "classnames"

const HeaderCalculator = ({themeSwitch, setThemeSwitch, switchThemeClass, setCalculatorActive, inputField, setInputField, result}) => {
    const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false)

    const hamburgerClass = classNames({' active' : hamburgerMenuActive})
    const labelInputClass = classNames('header__label', switchThemeClass, {' active' : result.isActive})

    const handlerHamburgerMenuActive = () => setHamburgerMenuActive(!hamburgerMenuActive)
    const handlerThemeSwitch = () => setThemeSwitch(!themeSwitch)
    const handlerCalculatorSelection = event => {
        if (event.currentTarget.ariaValueText === 'simple') {
            setInputField('')
            setCalculatorActive({'simple' : true, 'engineering' : false})
            setHamburgerMenuActive(false)
        } else if (event.currentTarget.ariaValueText === 'engineering') {
            setInputField('')
            setCalculatorActive({'simple' : false, 'engineering' : true})
            setHamburgerMenuActive(false)
        }
    }

    return (
        <header className="calculator__header header">
            <div className="header__container">
                <div className="header__menu">
                    <div className="header__checkbox checkbox">
                        <input type="checkbox" id="switch" className="checkbox__switch" />
                        <label onClick={handlerThemeSwitch} htmlFor="switch" className="checkbox__label">
                            <i className="fa-solid fa-sun sun"></i>
                            <i className="fa-solid fa-moon moon"></i>
                        </label>
                    </div>
                    <div className="header__hamburger-menu">
                        <div className="header__hamburger hamburger">
                            <input type="checkbox" id="hamburger__checkbox" className="hamburger__checkbox" />
                            <label onClick={handlerHamburgerMenuActive} htmlFor="hamburger__checkbox" className={`hamburger__label${hamburgerClass}`}>
                                <span className="hamburger__line line1"></span>
                                <span className="hamburger__line line2"></span>
                                <span className="hamburger__line line3"></span>
                            </label>
                        </div>
                        <div className={`header__list header-list${switchThemeClass}${hamburgerClass}`}>
                            <div onClick={handlerCalculatorSelection} className={`header-list__button${switchThemeClass}`} aria-valuetext="simple">simple</div>
                            <div onClick={handlerCalculatorSelection} className={`header-list__button${switchThemeClass}`} aria-valuetext="engineering">engineering</div>
                        </div>
                    </div>
                </div>
                <form className="header__form">
                    <label className={labelInputClass} htmlFor="inputValue">{result.value}</label>
                    <input type="text" value={inputField} readOnly placeholder="0" id="inputValue" className={`header__expression${switchThemeClass}`} />
                </form>
            </div>
        </header>
    )
}

export default HeaderCalculator
