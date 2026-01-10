import {useEffect, useState} from 'react';

export const TaskDetails = ({selectedTaskId, boardId}) => {
    const trellyAPIkey = '34ba8abb-f37c-46d9-9a4f-8f6b36b1b225'

    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        if (!boardId && !selectedTaskId) {
            setSelectedTask(null);
            return;
        }

        fetch('https://trelly.it-incubator.app/api/1.0/boards/' + boardId + '/tasks/' + selectedTaskId, {
            headers: {
                'api-key': trellyAPIkey
            }
        }).then(res => res.json())
            .then(json => setSelectedTask(json.data));
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