import {TaskList} from "./TaskList.tsx";
import {TaskDetails} from "./TaskDetails.tsx";
import {useState} from "react";

export function MainPage() {
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
    const [boardId, setBoardId] = useState<string | null>(null)

    const handleTaskSelect = (taskId: string | null, boardId: string | null): void => {
        setSelectedTaskId(taskId);
        setBoardId(boardId);
    };

    return <div>
        <div style={{display: 'flex', gap: '30px'}}>
            <TaskList
                selectedTaskId={selectedTaskId}
                onTaskSelect={handleTaskSelect}/>
            <TaskDetails
                selectedTaskId={selectedTaskId}
                boardId={boardId}/>
        </div>
    </div>;
}