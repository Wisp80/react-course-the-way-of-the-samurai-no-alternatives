import {useState} from "react"

function useToggle(initialValue: boolean) {
    const [isOn, setIsOn] = useState(initialValue)

    const toggle = () => {
        setIsOn(!isOn)
    }

    const reset = () => {
        setIsOn(initialValue)
    }

    return {isOn, toggle, setIsOn, reset}
}

function useText(initialText: string) {
    const [text, setText] = useState(initialText)

    const clear = () => {
        setText('')
    }

    const toUpperCase = () => {
        setText(text.toUpperCase())
    }

    const toLowerCase = () => {
        setText(text.toLowerCase())
    }

    return {text, setText, clear, toUpperCase, toLowerCase}
}

//--------------------------------------------------------------------------------------------------------------------//

const TitleEditor = () => {
    const {text, setText, clear, toUpperCase, toLowerCase} = useText('Заголовок статьи')

    return <div>
        <h2>{text ? text : 'Пусто'}</h2>

        <button onClick={() => {toUpperCase()}}>ВЕРХНИЙ РЕГИСТР</button>
        <button onClick={() => {toLowerCase()}}>нижний регистр</button>
        <button onClick={() => {setText('Новый заголовок')}}>Изменить на 'Новый заголовок'"</button>
        <button onClick={() => {clear()}}>Очистить</button>
    </div>
}

const GreetingCard = () => {
    const {text, setText, clear, toUpperCase, toLowerCase} = useText('Привет!')

    return <div>
        <h2>💬 {text ? text : '...'}</h2>

        <button onClick={() => {toUpperCase()}}>ГРОМКО</button>
        <button onClick={() => {toLowerCase()}}>тихо</button>
        <button onClick={() => {setText('Добро пожаловать!')}}>Сказать 'Добро пожаловать!'</button>
        <button onClick={() => {clear()}}>Молчать</button>
    </div>
}

const LightSwitch = () => {
    const {isOn, toggle} = useToggle(false)

    return (
        <div>
            <h2>{isOn ? "💡 Свет включен" : "🌙 Свет выключен"}</h2>
            <button onClick={toggle}>Переключить свет</button>
        </div>
    )
}

const VisibilityToggle = () => {
    const {isOn, toggle, setIsOn} = useToggle(false)

    return <div>
        <h2>Cекретное сообщение</h2>
        <h1 style={{
            visibility: isOn ? 'visible' : 'hidden',
        }}>🎉 Это секретное сообщение!</h1>
        <button onClick={() => {
            setIsOn(true)
        }}>Показать
        </button>
        <button onClick={() => {
            setIsOn(false)
        }}>Скрыть
        </button>
    </div>
}

const NotificationSwitch = () => {
    const {isOn, toggle, setIsOn, reset} = useToggle(true)

    return <div>
        <h2>Настройки уведомлений</h2>

        <h2>{isOn ? '🔔 Уведомления включены' : '🔕 Уведомления выключены'}</h2>

        <button onClick={() => {
            toggle()
        }}>Переключить
        </button>
        <button onClick={() => {
            setIsOn(true)
        }}>Включить
        </button>
        <button onClick={() => {
            reset()
        }}>Сбросить по умолчанию
        </button>
    </div>
}

export const TextPage = () => {
    return (
        <div>
            <TitleEditor />
            <GreetingCard />
        </div>
    )
}

export const TogglePage = () => {
    return (
        <div>
            <LightSwitch/>
            <VisibilityToggle/>
            <NotificationSwitch/>
        </div>
    )
}