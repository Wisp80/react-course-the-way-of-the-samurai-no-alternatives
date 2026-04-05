import {useCounter} from "../business-logic/bll.ts";


const ButtonsForCounterComponents = (inc: () => void, dec: () => void, reset: () => void, changeStep: () => void) => {
    return <div>
        <button onClick={inc}>Увеличить</button>
        <button onClick={dec}>Уменьшить</button>
        <button onClick={reset}>Сбросить</button>
        <button onClick={() => {
            changeStep()
            alert('Шаг изменен на 5')
        }}>Установить шаг 5
        </button>
    </div>
}

export const Counter = () => {
    const {count, inc, dec, reset, changeStep} = useCounter(0)

    return <div>
        <h2>{count}</h2>
        {ButtonsForCounterComponents(inc, dec, reset, changeStep)}
    </div>
}

const CounterWithAutoReset = () => {
    const {count, inc, dec, reset, changeStep} = useCounter(0, 1, 3)

    return <div>
        <h2>{count}</h2>
        <h3>⏰ Автосброс через 3 сек</h3>

        {ButtonsForCounterComponents(inc, dec, reset, changeStep)}
    </div>
}

const CounterWithoutAutoReset = () => {
    const {count, inc, dec, reset, changeStep} = useCounter(5, 5, 0)

    return <div>
        <h2>{count}</h2>
        <h3>🔒 Без автосброса</h3>

        {ButtonsForCounterComponents(inc, dec, reset, changeStep)}
    </div>
}

export const CounterPage = () => {
    return <div>
        <CounterWithAutoReset/>
        <CounterWithoutAutoReset/>
    </div>
}