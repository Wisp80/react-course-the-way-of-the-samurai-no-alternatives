import {useEffect, useState} from "react";

function App() {
    return (
        <>
            <Counter/>
            <Age/>
        </>
    )
}

function useCounter(initialValue: number, ms: number) {
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
        setInterval(() => {
            setValue(initialValue);
        }, ms)
    }, [])

    return {value, increase: () => setValue(value + 1) }
}

function Counter() {
    const {value, increase} = useCounter(10, 2000)
    return <div onClick={() => increase()}>{value}</div>
}

function Age() {
    const {value, increase} = useCounter(2, 10000)

    return <div>age: {value}
        <button onClick={() => increase()}>+</button>
    </div>
}

export default App