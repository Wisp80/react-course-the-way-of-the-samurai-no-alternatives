import {useEffect, useState} from "react";

export const useCounter = (startValue: number = 0, startStep: number = 1, autoResetTime: number = 0) => {
    const [count, setCount] = useState(startValue)
    const [step, setStep] = useState(startStep)

    useEffect(() => {
        if (autoResetTime > 0) {
            setInterval(() => {
                setCount(0)
            }, autoResetTime * 1000)
        } else if (autoResetTime === 0 || autoResetTime === null) {
            return
        }
    }, [])

    const inc = () => {
        setCount(count + step)
    }

    const dec = () => {
        setCount(count - step)
    }

    const reset = () => {
        setCount(startValue)
    }

    const changeStep = () => {
        setStep(5)
    }

    return {count, inc, dec, reset, changeStep}
}