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
    [types.setDoneTaskData] (state, data) {
        state.dataTable.data = data.data;
        state.dataTable.total = data.total;
    },
    [types.setTableLoading] (state, loading) {
        state.dataTable.loading = loading;
    }
};

const actions = {
    async [types.loadDoneTasks] ({state, commit, rootGetters}, options) {
        commit(types.setTableLoading, true);
        const userInfo = rootGetters[moduleTypes.userAccount.getUserInfo];
        const data = await taskApi.getDoneTasks(userInfo.username, options.page, options.itemsPerPage);
        commit(types.setDoneTaskData, data);
        commit(types.setTableLoading, false);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}