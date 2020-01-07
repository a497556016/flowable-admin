import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import routes from "./routes";
import store from "../store";
import moduleTypes from "../store/types";

const router = new VueRouter({
  routes,
  linkExactActiveClass: "nav-item active"
});

router.beforeResolve((to, from, next) => {
  console.log("resolve router");
  next();
});

router.beforeEach((to, from, next) => {
  // ...
  console.log(`切换路由从`, from, `到`, to);
  store.commit(moduleTypes.application.setPaths, to);
  if (!to.path.startsWith("/login")) {
    const userInfo = store.getters[moduleTypes.userAccount.getUserInfo];
    if (!userInfo || !userInfo.username || !userInfo.accessToken) {
      next({ path: "/login" });
    }
  }
  next();
});

export default router;
