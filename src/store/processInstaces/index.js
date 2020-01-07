import * as types from "./types";
import moduleTypes from "../types";

import processApi from "../../api/process";

const state = {
    dataTable: {
        options: {},
        loading: false,
        data: [],
        total: 0
    }
};

const mutations = {
    [types.setTableData] (state, data) {
        state.dataTable.data = data.data;
        state.dataTable.total = data.total;
    },
    [types.setTableLoading] (state, loading) {
        state.dataTable.loading = loading;
    }
};

const actions = {
    async [types.loadData] ({state, commit, rootGetters}, options) {
        commit(types.setTableLoading, true);
        const userInfo = rootGetters[moduleTypes.userAccount.getUserInfo];
        const data = await processApi.getProcessInstances(userInfo.username, options.page, options.itemsPerPage);
        commit(types.setTableData, data);
        commit(types.setTableLoading, false);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}