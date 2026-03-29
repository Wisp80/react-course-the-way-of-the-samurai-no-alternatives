// import type {GlobalTaskListItemJsonApiData} from "../ui/TaskItem.tsx";

const trellyAPIkey = '34ba8abb-f37c-46d9-9a4f-8f6b36b1b225'

type GetTaskOutput = {
    data: TaskDetailsData
}

export type TaskDetailsData = {
    id: string
    type: string
    attributes: {
        id: string
        title: string
        boardId: string
        boardTitle: string
        description: string
    }
}

export type GlobalTaskListResponse = {
    data: GlobalTaskListItemJsonApiDataArray
}

export type GlobalTaskListItemJsonApiDataArray = Array<GlobalTaskListItemJsonApiData>

export type GlobalTaskListItemJsonApiData = {
    id: string
    type: string
    attributes: {
        id: string
        title: string
        boardId: string
        priority: number
        status: number
        addedAt: string
    }
}

export const getTask = (boardId: string | null, selectedTaskId: string | null) => {
    const promise: Promise<GetTaskOutput> = fetch('https://trelly.it-incubator.app/api/1.0/boards/' + boardId + '/tasks/' + selectedTaskId, {
        headers: {
            'api-key': trellyAPIkey
        }
    }).then(res => res.json())

    return promise;
}

export const getTasks = () => {
    const promise: Promise<GlobalTaskListResponse> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
        headers: {
            'api-key': trellyAPIkey,
        }
    }).then(res => res.json())

    return promise;
}