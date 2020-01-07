import Alert from "./Alert";
import Confirm from "./Confirm";
import Vuetify from "vuetify";
import vuetify from "../../plugins/vuetify";

export default {
    components: {},
    createComponent(Vue, obj, vuetify){
        const Component =  Vue.extend(obj);
        const component = new Component({
            vuetify
        }).$mount();
        document.querySelector("body").appendChild(component.$el);
        return component;
    },
    install(Vue, vuetify) {
        const me = this;

        if(!this.components.confirm) {
            this.components.confirm = this.createComponent(Vue, Confirm, vuetify);
        }
        if(!this.components.alert) {
            this.components.alert = this.createComponent(Vue, Alert, vuetify);
        }

        Object.defineProperty(Vue.prototype, "$confirm", {
            get() {
                return me.components.confirm.show
            }
        })
    }
}