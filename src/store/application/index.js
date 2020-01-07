import * as types from "./types";

const state = {
    sideBarVisible: true,
    themeColor: "primary",
    showSearch: false,
    paths: [],
    miniSideBar: false
}

const mutations = {
    [types.setPaths] (state, route) {
        state.paths = [];
        const mainPath = {text: "主页", disabled: false, href: "#/dashboard"};
        state.paths.push(mainPath);
        if("#"+route.fullPath !== mainPath.href){
            state.paths.push({text: route.name, disabled: false, href: "#"+route.fullPath})
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations
}