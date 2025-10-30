import {useEffect, useState} from 'react';

export function App() {
    const [tasks, setTasks] = useState(null)

    useEffect(() => {
        fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
            headers: {
                'api-key': '34ba8abb-f37c-46d9-9a4f-8f6b36b1b225'
            }
        }).then(res => res.json())
            .then(json => setTasks(json.data))
    }, [])

    const [highlightedTaskId, setHighlightedTaskId] = useState(null);

    if (tasks === null)
        return <h1>Загрузка...</h1>;

    if (tasks.length === 0)
        return <h1>Задачи отсутствуют</h1>;

    return <div>
        <button onClick={() => {
            setHighlightedTaskId(null);
        }}>Сбросить выделение
        </button>

        {tasks.map((task, index) => {
            return (
                <div key={index} style={{
                    border: task.id === highlightedTaskId ? '8px solid blue' : '8px solid black',
                    marginBottom: '10px',
                    width: '30%',
                    backgroundColor:
                        task.attributes.priority === 0 ? '#ffffff' :
                            task.attributes.priority === 1 ? '#ffd7b5' :
                                task.attributes.priority === 2 ? '#ffb38a' :
                                    task.attributes.priority === 3 ? '#ff9248' :
                                        task.attributes.priority === 4 ? '#ff6700' : 'white'
                }}>

                    <div style={{
                        marginLeft: '10px',
                        fontSize: '20px'
                    }}

                         onClick={() => {
                             setHighlightedTaskId(task.id);
                         }}>
                        <p style={{
                            textDecoration: task.attributes.status === 2 ? 'line-through' : 'none'
                        }}
                        ><strong>Заголовок:</strong> {task.attributes.title} </p>

                        <div> Статус:
                            <input
                                type="checkbox"
                                defaultChecked={task.attributes.status === 2}
                            />
                        </div>

                        <p>
                            <b>Дата создания задачи</b>: {new Date(task.attributes.addedAt).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            );
        })}
</div>
}