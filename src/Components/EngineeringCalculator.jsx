import React from "react"

const EngineeringCalculator = ({switchThemeClass, calculatorActive, handlerChangeInput}) => {
    return (
        <div className={`main__engineering-calculator engineering-calculator${calculatorActive.engineering ? ' active' : ''}`}>
            <div onClick={handlerChangeInput} aria-valuetext="^" className={`engineering-calculator__button sign${switchThemeClass}`}>
                <div className="pow">x<sup>y</sup></div>
            </div>
            <input onClick={handlerChangeInput} type="button" aria-valuetext="sin(" value="sin" className={`engineering-calculator__button sym${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" aria-valuetext="cos(" value="cos" className={`engineering-calculator__button sym${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" aria-valuetext="(" value="(" className={`engineering-calculator__button sym${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" aria-valuetext=")" value=")" className={`engineering-calculator__button sym${switchThemeClass}`} />

            <input onClick={handlerChangeInput} type="button" aria-valuetext="√(" value="√x" className={`engineering-calculator__button number sqrt${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" value="AC" className={`engineering-calculator__button reset-btn${switchThemeClass}`} />
            <div onClick={handlerChangeInput} className={`engineering-calculator__button backspace-btn${switchThemeClass}`}>
                <i className="fas fa-backspace backspace"></i>
            </div>
            <input onClick={handlerChangeInput} type="button" aria-valuetext="%" value="%" className={`engineering-calculator__button sign${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" aria-valuetext="/" value="&#247;" className={`engineering-calculator__button sign${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" aria-valuetext="!" value="x!" className={`engineering-calculator__button sym${switchThemeClass}`} />

            <input onClick={handlerChangeInput} type="button" aria-valuetext="7" value="7" className={`engineering-calculator__button number${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" aria-valuetext="8" value="8" className={`engineering-calculator__button number${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" aria-valuetext="9" value="9" className={`engineering-calculator__button number${switchThemeClass}`} />

            <input onClick={handlerChangeInput} type="button" aria-valuetext="*" value="&#215;" className={`engineering-calculator__button sign${switchThemeClass}`} />

            <input onClick={handlerChangeInput} type="button" aria-valuetext="ln(" value="ln" className={`engineering-calculator__button sym${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" aria-valuetext="4" value="4" className={`engineering-calculator__button number${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" aria-valuetext="5" value="5" className={`engineering-calculator__button number${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" aria-valuetext="6" value="6" className={`engineering-calculator__button number${switchThemeClass}`} />

            <input onClick={handlerChangeInput} type="button" aria-valuetext="-" value="–" className={`engineering-calculator__button sign${switchThemeClass}`} />

            <input onClick={handlerChangeInput} type="button" aria-valuetext="lg(" value="lg" className={`engineering-calculator__button sym${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" aria-valuetext="1" value="1" className={`engineering-calculator__button number${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" aria-valuetext="2" value="2" className={`engineering-calculator__button number${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" aria-valuetext="3" value="3" className={`engineering-calculator__button number${switchThemeClass}`} />

            <input onClick={handlerChangeInput} type="button" aria-valuetext="+" value="+" className={`engineering-calculator__button sign${switchThemeClass}`} />

            <input onClick={handlerChangeInput} type="button" aria-valuetext="π" value="π" className={`engineering-calculator__button sym${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" aria-valuetext="e" value="e" className={`engineering-calculator__button sym${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" aria-valuetext="0" value="0" className={`engineering-calculator__button number btn-null${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" value="." aria-valuetext="." className={`engineering-calculator__button number${switchThemeClass}`} />
            <input onClick={handlerChangeInput} type="button" value="=" className={`engineering-calculator__button btn-equals${switchThemeClass}`} />
        </div>
    )
}
export default EngineeringCalculator
