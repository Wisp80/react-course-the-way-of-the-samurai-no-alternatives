import {TaskList} from "./TaskList.tsx";
import {TaskDetails} from "./TaskDetails.tsx";
import {useState} from "react";

export function MainPage() {
    const [selectedTaskId, setSelectedTaskId] = useState(null)
    const [boardId, setBoardId] = useState()

    const handleTaskSelect = (taskId, boardId) => {
        setSelectedTaskId(taskId);
        setBoardId(boardId);
    };

    return <div>
        <div style={{display: 'flex', gap: '30px'}}>
            <TaskList
                selectedTaskId={selectedTaskId}
                onTaskSelect={handleTaskSelect}
                boardId={boardId}/>
            <TaskDetails
                selectedTaskId={selectedTaskId}
                boardId={boardId}/>
        </div>
    </div>;
}