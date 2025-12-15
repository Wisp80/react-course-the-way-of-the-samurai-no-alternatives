import {useState} from 'react';

export function Counter(props) {
    const [counter, setCounter] = useState(1);
    const callback = function () {
        setCounter(counter + 1);

        if (counter + 1 === 5) {
            if (props.onFinish) {
                props.onFinish()
            }
        }
    };

    return (
        <button onClick={callback}>+ {counter}</button>
    );
}