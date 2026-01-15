import {type GlobalTaskListItemJsonApiData, TaskItem} from "./TaskItem.tsx";
import {useEffect, useState} from 'react';

export const trellyAPIkey = '34ba8abb-f37c-46d9-9a4f-8f6b36b1b225'

type Props = {
    selectedTaskId: string | null
    onTaskSelect: (taskId: string | null, boardId: string | null) => void
}

export const TaskList = ({selectedTaskId, onTaskSelect}: Props) => {
    const [tasks, setTasks] = useState<Array<GlobalTaskListItemJsonApiData> | null>(null);

    const handleClick = function (taskId: string | null, boardId: string | null) {
        onTaskSelect?.(taskId, boardId);
    };

    const handleReset = function () {
        onTaskSelect?.(null, null);
    };

    useEffect(() => {
        fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
            headers: {
                'api-key': trellyAPIkey
            }
        }).then(res => res.json())
            .then(json => setTasks(json.data));
    }, []);

    if (tasks === null)
        return <h1>Загрузка...</h1>;

    if (tasks.length === 0)
        return <h1>Задачи отсутствуют</h1>;

    return <div>
        <button onClick={handleReset}>reset</button>
        <hr/>
        {tasks.map((task) => {
            return (
                <TaskItem
                    key={task.id}
                    task={task}
                    onSelect={handleClick}
                    isSelected={task.id === selectedTaskId}
                />
            )

        })}
    </div>;
};