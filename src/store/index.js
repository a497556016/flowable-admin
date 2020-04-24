import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import application from "./application";
import userAccount from "./userAccount";
import todoTask from "./todoTask";
import doneTask from "./doneTask";
import processInstances from "./processInstaces";
import form from "./form";

export default new Vuex.Store({
  modules: {
    application,
    userAccount,
    todoTask,
    doneTask,
    processInstances,
    form
  }
});
