import type {GlobalTaskListItemJsonApiData} from "../dal/api.ts";
import clsx from "clsx";
import styles from "./TaskItem.module.css"

type Props = {
    task: GlobalTaskListItemJsonApiData
    onSelect: (taskId: string | null, boardId: string | null) => void
    isSelected: boolean
}

export function TaskItem({task, onSelect, isSelected}: Props) {
    const handleClick = () => onSelect?.(task.id, task.attributes.boardId)

    const taskClassName = clsx({
        [styles.taskItem]: true,
        [styles.selectedItem]: isSelected,
        [styles.priority0]: task.attributes.priority === 0,
        [styles.priority1]: task.attributes.priority === 1,
        [styles.priority2]: task.attributes.priority === 2,
        [styles.priority3]: task.attributes.priority === 3,
        [styles.priority4]: task.attributes.priority === 4,
    })

    const titleClassName = clsx({
        [styles.title]: true
    })

    return (
        <div className={taskClassName}>
            <div className={titleClassName} onClick={handleClick}>
                <p style={{textDecoration: task.attributes.status === 2 ? 'line-through' : 'none'}}>
                    <strong>Заголовок:</strong> {task.attributes.title}
                </p>

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
}