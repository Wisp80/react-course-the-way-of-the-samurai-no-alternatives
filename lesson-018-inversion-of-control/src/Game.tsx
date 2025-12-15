import {useState} from 'react';
import {Counter} from './Counter.tsx';
import {Elephant} from './Elephant.tsx';
import {Congrats} from './Congrats.tsx';
import {GameOver} from './GameOver.tsx';

export function Game() {
    const [activePage, setActivePage] = useState('counter');

    const handleFinish = () => {
        setActivePage('elephant')
    }

    const handleCongrats = () => {
        setActivePage('congrats')
    }

    const handleGameOver = () => {
        setActivePage('game-over')
    }

    const handleRestart = () => {
        setActivePage('counter')
    }

    if (activePage === 'counter') {return <Counter onFinish={handleFinish} />}
    if (activePage === 'elephant') {return <Elephant onCongrats={handleCongrats} onGameOver={handleGameOver}/>}
    if (activePage === 'congrats') {return <Congrats onRestart={handleRestart}/>}
    if (activePage === 'game-over') {return <GameOver onRestart={handleRestart}/>}
}