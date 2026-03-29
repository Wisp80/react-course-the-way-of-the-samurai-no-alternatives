import {useEffect, useState} from 'react';
import {getTask, type TaskDetailsData} from "../dal/api.ts";

type Props = {
    selectedTaskId: string | null
    boardId: string | null
}

export const TaskDetails = ({selectedTaskId, boardId}: Props) => {
    const [selectedTask, setSelectedTask] = useState<TaskDetailsData | null>(null);

    useEffect(() => {
        if (!boardId && !selectedTaskId) {
            setSelectedTask(null);
            return;
        }
        getTask(boardId, selectedTaskId).then(json => setSelectedTask(json.data));
    }, [boardId, selectedTaskId])

    return <div
        style={{
            border: '8px solid black',
            height: '497px',
            width: '20%'
        }}>
        <div style={{
            marginLeft: '15px',
        }}>
            <h2>Task details</h2>
            <div>{
                selectedTaskId && (!selectedTask || selectedTask.id !== selectedTaskId)
                    ? 'loading...'
                    : selectedTask === null
                        ? 'Task is not selected'
                        : <div>
                            <p>title - {selectedTask.attributes.title ?? 'no title'}</p>
                            <p>boardTitle - {selectedTask.attributes.boardTitle ?? 'no boardTitle'}</p>
                            <p>description - {selectedTask.attributes.description ?? 'no description'}</p>
                        </div>
            }</div>
        </div>
    </div>
}