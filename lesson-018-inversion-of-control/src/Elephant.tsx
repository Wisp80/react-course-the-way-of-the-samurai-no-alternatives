import {useState} from 'react';

export function Elephant(props) {
    const [weight, setWeight] = useState(100);

    const handleFeedHealthyFood = function () {
        setWeight(weight + 20);

        if (weight > 200) {
            if (props.onCongrats) {
                props.onCongrats()
            }
        }
    };

    const handleFeedJunkFood = function () {
        setWeight(weight - 20);

        if (weight <= 20) {
            if (props.onGameOver) {
                props.onGameOver()
            }
        }
    };

    return (
        <div>
            <h1>Покорми слона</h1>
            <button onClick={handleFeedHealthyFood}>Кормить слона полезной едой 🥬🍉🍌</button>
            <br/>
            <button onClick={handleFeedJunkFood}>Кормить слона вредной едой 🍔🍬🍕</button>

            <div style={{
                fontSize: weight,
            }}>🐘
            </div>
        </div>
    );
}