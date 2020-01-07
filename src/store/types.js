import * as application from "./application/types";
import * as userAccount from "./userAccount/types";
import * as todoTask from "./todoTask/types";
import * as doneTask from "./doneTask/types";
import * as processInstances from "./processInstaces/types";

const moduleTypes = {
  application,
  userAccount,
  todoTask,
  doneTask,
  processInstances
};

for (let module in moduleTypes) {
  const types = moduleTypes[module];

  const newTypes = {
    value: module //取模块名称
  };

  for (let key in types) {
    const type = types[key];
    newTypes[key] = module + "/" + type; //取带命名空间的types
  }

  moduleTypes[module] = newTypes;
}

console.log("mapTypes", moduleTypes);

export default moduleTypes;
