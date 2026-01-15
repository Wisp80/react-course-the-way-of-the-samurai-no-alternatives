type GlobalTaskListItemDto = {
    boardId: string
    priority: number
    title: string
    status: number
    addedAt: string
}

export type GlobalTaskListItemJsonApiData = {
    id: string
    attributes: GlobalTaskListItemDto
}

type Props = {
    task: GlobalTaskListItemJsonApiData
    onSelect: (taskId: string | null, boardId: string | null) => void
    isSelected: boolean
}

export function TaskItem({task, onSelect, isSelected}: Props) {
    const handleClick = () => onSelect?.(task.id, task.attributes.boardId)

    return (
        <div style={{
            border: isSelected ? '8px solid blue' : '8px solid black',
            marginBottom: '10px',
            width: '100%',
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

                 onClick={handleClick}>
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
                    <b>Дата создания
                        задачи</b>: {new Date(task.attributes.addedAt).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}