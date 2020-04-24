import * as types from "./types";

import processService from "../../api/process";

const state = {
    formData: null
};

const getters = {
    [types.getFormData] (state) {
        return state.formData;
    }
};

const mutations = {
    [types.setFormData] (state, formData) {
        state.formData = formData;
    }
};

const actions = {
    async [types.loadFormData] ({commit}, processDefinitionKey) {
        const data = await processService.getFormData(processDefinitionKey);
        commit(types.setFormData, data);
    },
    async[types.startProcessWithForm] ({commit}, data) {
        const processInstanceId = await processService.startProcessWithForm(data.processDefinitionKey, data.formModel);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}