import * as types from "./types";
import moduleTypes from "../types";

import taskApi from "../../api/task";

const state = {
    dataTable: {
        options: {},
        loading: false,
        data: [],
        total: 0
    }
};

const mutations = {
    [types.setTodoTaskData] (state, data) {
        state.dataTable.data = data.data;
        state.dataTable.total = data.total;
    },
    [types.setTableLoading] (state, loading) {
        state.dataTable.loading = loading;
    }
};

const actions = {
    async [types.loadTodoTasks] ({state, commit, rootGetters}, options) {
        commit(types.setTableLoading, true);
        const userInfo = rootGetters[moduleTypes.userAccount.getUserInfo];
        const data = await taskApi.getTodoTasks(userInfo.username, options.page, options.itemsPerPage);
        commit(types.setTodoTaskData, data);
        commit(types.setTableLoading, false);
    },
    async [types.claimTask] ({rootGetters, dispatch}, taskId) {
        const userInfo = rootGetters[moduleTypes.userAccount.getUserInfo];
        const data = await taskApi.claimTask(taskId, userInfo.username);
        dispatch(types.loadTodoTasks);
        return data;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}