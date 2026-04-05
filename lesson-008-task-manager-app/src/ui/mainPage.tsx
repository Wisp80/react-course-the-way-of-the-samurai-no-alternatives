import {TaskList} from "./TaskList.tsx";
import {TaskDetails} from "./TaskDetails.tsx";
import {useTaskSelection} from "../bll/useTaskSelection.ts";

export function MainPage() {
    const {selectedTaskId, boardId, setSelectedTaskId, setBoardId} = useTaskSelection()

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