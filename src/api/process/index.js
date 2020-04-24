import http from "../../utils/net/http"

export default {
    getProcessDefinitions(page, size){
        return http.get('process-api/repository/process-definitions', {
            params: {
                start: (page - 1) * size,
                size,
            }
        });
    },
    getProcessInstances(userId, page, size){
        return http.get('process-api/history/historic-process-instances', {
            params: {
                start: (page - 1) * size,
                size,
                sort: "startTime",
                order: "desc",
            }
        });
    },
    getFormData(processDefinitionKey){
        return http.get("api/v1/process/getStartFormModel", {
            params: {
                processDefinitionKey
            }
        });
    },
    startProcessWithForm(processDefinitionKey, formModel) {
        return http.post("api/v1/process/startProcessWithForm", formModel, {
            params: {processDefinitionKey}
        });
    }
}