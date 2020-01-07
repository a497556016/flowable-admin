import http from "../../utils/net/http";

export default {
    getTodoTasks(userId, page, size){
        return http.get("process-api/runtime/tasks", {
            params: {
                start: (page - 1) * size,
                size,
                sort: "createTime",
                order: "desc",
                candidateOrAssigned: userId
            }
        });
    },
    getDoneTasks(userId, page, size){
        return http.get("process-api/history/historic-task-instances", {
            params: {
                start: (page - 1) * size,
                size,
                sort: "endTime",
                order: "desc",
                taskAssignee: userId
            }
        })
    },
    claimTask(taskId, assignee) {
        return http.post(`process-api/runtime/tasks/${taskId}`, {
            "action" : "claim",
            "assignee" : assignee
        });
    }
}