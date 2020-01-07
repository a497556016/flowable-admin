import Application from "@/views/Layout/Application";
import Dashboard from "@/views/Dashboard";

import ProcessDefinition from "@/views/Process/Definition.vue";
import ProcessInstances from "@/views/Process/Instances.vue";
import TodoTask from "@/views/Task/Todo.vue";
import DoneTask from "@/views/Task/Done.vue";

import Login from "@/views/Login";

const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/",
    component: Application,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "主页",
        component: Dashboard,
        meta: {
          icon: "dashboard",
          cnName: "主页"
        }
      },
      {
        path: "process/definition",
        name: "流程定义",
        component: ProcessDefinition,
        meta: {
          icon: "person",
          cnName: "流程定义"
        }
      },
      {
        path: "process/instances",
        name: "流程实例",
        component: ProcessInstances
      },
      {
        path: "task/todo",
        name: "待办任务",
        component: TodoTask,
        meta: {
          icon: "person",
          cnName: "待办任务"
        }
      },
      {
        path: "task/done",
        name: "已办任务",
        component: DoneTask,
        meta: {
          icon: "person",
          cnName: "已办任务"
        }
      }
    ]
  }
];

export default routes;
