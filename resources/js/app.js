require("./bootstrap");

import CreateKey from "./components/CreateKeyComponent";

window.$ = require("jquery");

require("datatables.net-dt");
require("datatables.net-fixedheader-dt");
require("./custom-datatable.js");

import Latinize from "latinize";
window.latinize = Latinize;

//Components
import Vue from "vue";
Vue.component(
    "create-key",
    require("./components/CreateKeyComponent.vue").default
);
Vue.component(
    "edit-key",
    require("./components/EditKeyComponent.vue").default
);

const app = new Vue({
    el: "#app",
});
