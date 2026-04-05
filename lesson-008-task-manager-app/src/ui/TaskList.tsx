import {TaskItem} from "./TaskItem.tsx";
import {useTasks} from "../bll/useTasks.ts";

type Props = {
    selectedTaskId: string | null
    onTaskSelect: (taskId: string | null, boardId: string | null) => void
}

export const TaskList = ({selectedTaskId, onTaskSelect}: Props) => {
    const {tasks} = useTasks()

    const handleClick = function (taskId: string | null, boardId: string | null) {
        onTaskSelect?.(taskId, boardId);
    };

    const handleReset = function () {
        onTaskSelect?.(null, null);
    };

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