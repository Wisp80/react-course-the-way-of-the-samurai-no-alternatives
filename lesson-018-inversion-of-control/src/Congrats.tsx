export function Congrats(props) {
    const handleRestart = function () {
        if (props.onRestart) {
            props.onRestart()
        }
    }

    return (
        <div>
            <p>🎉 Поздравляю! Твой слон наелся здоровой пищи и с улыбкой побежал играть с другими слонами🎉</p>

            <button onClick={handleRestart}>Давай сыграем еще раз и покормим другого слона</button>

            <div style={{ fontSize: "200px" }}>😊</div>
        </div>
    );
}