import {useEffect, useState} from "react";
import {getTasks, type GlobalTaskListItemJsonApiData, type GlobalTaskListResponse} from "../dal/api.ts";

export function useTasks() {
    const [tasks, setTasks] = useState<Array<GlobalTaskListItemJsonApiData> | null>(null);

    useEffect(() => {
        getTasks().then((json: GlobalTaskListResponse) => setTasks(json.data));
    }, []);

    return {tasks}
}