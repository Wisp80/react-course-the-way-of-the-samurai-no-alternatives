import {useEffect, useState} from 'react';
import './App.css';

function App() {
    // useEffect(() => {
    //     console.log("effect") // 'effect' каждое новое обновление компонента App()
    // })

    // useEffect(() => {
    //     console.log("effect") // 'effect' только в первом вызове App()
    // }, [])

    // const counter = 1;
    // useEffect(() => {
    //     console.log("effect", counter) // 'effect' каждое новое обновление переменной counter
    // }, [counter])

    const [text, setText] = useState('');
    useEffect(() => {
       document.title = !text ? "Введите текст..." : text;
    }, [text]);

    return (
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </>
    );
}

export default App;
