import React from "react"

const SimpleCalculator = ({switchThemeClass, calculatorActive, handlerChangeInput}) => {

        return (
                <div className={`main__simple-calculator simple-calculator${calculatorActive.simple ? ' active' : ''}`}>
                    <input onClick={handlerChangeInput} type="button" value="AC" className={`simple-calculator__button reset-btn${switchThemeClass}`}/>
                    <div onClick={handlerChangeInput} className={`simple-calculator__button backspace-btn${switchThemeClass}`}>
                        <i className="fas fa-backspace backspace"></i>
                    </div>

                    <input onClick={handlerChangeInput} type="button" aria-valuetext="%" value="%" className={`simple-calculator__button sign${switchThemeClass}`}/>
                    <input onClick={handlerChangeInput} type="button" aria-valuetext="/" value="&#247;" className={`simple-calculator__button sign${switchThemeClass}`} />

                    <input onClick={handlerChangeInput} type="button" aria-valuetext="7" value="7" className={`simple-calculator__button number${switchThemeClass}`} />
                    <input onClick={handlerChangeInput} type="button" aria-valuetext="8" value="8" className={`simple-calculator__button number${switchThemeClass}`} />
                    <input onClick={handlerChangeInput} type="button" aria-valuetext="9" value="9" className={`simple-calculator__button number${switchThemeClass}`} />
                    <input onClick={handlerChangeInput} type="button" aria-valuetext="*" value="&#215;" className={`simple-calculator__button sign${switchThemeClass}`} />
                    <input onClick={handlerChangeInput} type="button" aria-valuetext="4" value="4" className={`simple-calculator__button number${switchThemeClass}`} />
                    <input onClick={handlerChangeInput} type="button" aria-valuetext="5" value="5" className={`simple-calculator__button number${switchThemeClass}`} />
                    <input onClick={handlerChangeInput} type="button" aria-valuetext="6" value="6" className={`simple-calculator__button number${switchThemeClass}`} />

                    <input onClick={handlerChangeInput} type="button" aria-valuetext="-" value="–" className={`simple-calculator__button sign${switchThemeClass}`} />

                    <input onClick={handlerChangeInput} type="button" aria-valuetext="1" value="1" className={`simple-calculator__button number${switchThemeClass}`} />
                    <input onClick={handlerChangeInput} type="button" aria-valuetext="2" value="2" className={`simple-calculator__button number${switchThemeClass}`} />
                    <input onClick={handlerChangeInput} type="button" aria-valuetext="3" value="3" className={`simple-calculator__button number${switchThemeClass}`} />

                    <input onClick={handlerChangeInput} type="button" aria-valuetext="+" value="+" className={`simple-calculator__button sign${switchThemeClass}`} />

                    <input onClick={handlerChangeInput} type="button" aria-valuetext="0" value="0" className={`simple-calculator__button number btn-null${switchThemeClass}`} />
                    <input onClick={handlerChangeInput} type="button" value="." aria-valuetext="." className={`simple-calculator__button sign${switchThemeClass}`} />

                    <input onClick={handlerChangeInput} type="button" value="=" className={`simple-calculator__button btn-equals${switchThemeClass}`} />
                </div>
        )
}

export default SimpleCalculator
