import {useTaskDetails} from "../bll/useTaskDetails.ts";

type Props = {
    selectedTaskId: string | null
    boardId: string | null
}

export const TaskDetails = ({selectedTaskId, boardId}: Props) => {
    const {taskDetails} = useTaskDetails(selectedTaskId, boardId);

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
                selectedTaskId && (!taskDetails || taskDetails.id !== selectedTaskId)
                    ? 'loading...'
                    : taskDetails === null
                        ? 'Task is not selected'
                        : <div>
                            <p>title - {taskDetails.attributes.title ?? 'no title'}</p>
                            <p>boardTitle - {taskDetails.attributes.boardTitle ?? 'no boardTitle'}</p>
                            <p>description - {taskDetails.attributes.description ?? 'no description'}</p>
                        </div>
            }</div>
        </div>
    </div>
}