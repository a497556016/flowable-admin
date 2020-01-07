import * as types from "./types";
import storage from "../../utils/storage";
import userAccount from "../../api/userAccount";

const USER_INFO_KEY = "UserInfo";

const state = {
  userInfo: null
};

const getters = {
  [types.getUserInfo](state) {
    if (!state.userInfo) {
      state.userInfo = storage.getObject(USER_INFO_KEY);
    }
    return state.userInfo;
  }
};

const mutations = {
  [types.setUserInfo](state, userInfo) {
    console.log(userInfo);
    state.userInfo = userInfo;
    storage.put(USER_INFO_KEY, state.userInfo);
  }
};

const actions = {
  async [types.setFullUserInfo]({ state, commit }, userInfo) {
    commit(types.setUserInfo, userInfo);
    const user = await userAccount.getUserByUsername(userInfo.username);
    userInfo.displayName = user.displayName;
    userInfo.email = user.email;
    commit(types.setUserInfo, userInfo);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
