// const tasks = null

const tasks = [
    {
        id: 1,
        title: "Купить продукты на неделю",
        isDone: false,
        addedAt: "1 сентября",
        priority: 2,
    },
    {
        id: 2,
        title: "Полить цветы",
        isDone: true,
        addedAt: "2 сентября",
        priority: 0,
    },
    {
        id: 3,
        title: "Сходить на тренировку",
        isDone: false,
        addedAt: "3 сентября",
        priority: 1,
    },
    {
        id: 4,
        title: "Срочно отправить рабочий отчет",
        isDone: false,
        addedAt: "4 сентября",
        priority: 4,
    },
    {
        id: 5,
        title: "Заплатить за коммунальные услуги",
        isDone: false,
        addedAt: "3 сентября",
        priority: 3,
    },
]

export function App() {
    if (tasks === null)
        return <h1>Загрузка...</h1>;

    if (tasks.length === 0)
        return <h1>Задачи отсутствуют</h1>;

    // const priority =

    return <div>
        {tasks.map((task, index) => {
            return (
                <div key={index} style={{
                    border: '8px solid black',
                    marginBottom: '10px',
                    width: '30%',
                    backgroundColor:
                        task.priority === 0 ? '#ffffff' :
                        task.priority === 1 ? '#ffd7b5' :
                        task.priority === 2 ? '#ffb38a' :
                        task.priority === 3 ? '#ff9248' :
                        task.priority === 4 ? '#ff6700' : 'white'
                }}>
                    <div style={{
                        marginLeft: '10px',
                        fontSize: '20px'
                    }}>
                        <p style={{
                            textDecoration: task.isDone ? 'line-through' : 'none'
                        }}
                        ><strong>Заголовок:</strong> {task.title} </p>

                        <div> Статус:
                            <input
                                type="checkbox"
                                defaultChecked={task.isDone}
                            />
                        </div>

                        <p><strong>Дата создания задачи:</strong> {task.addedAt} </p>
                    </div>
                </div>
            );
        })}
    </div>
}