import Vue from 'nativescript-vue'
import App from './components/App'
//import router from './router';
import store from './store';
//import VueDevtools from 'nativescript-vue-devtools'

const application = require('tns-core-modules/application');

// Vue.use(VueDevtools)
// if (TNS_ENV !== 'production') {
//     Vue.use(VueDevtools)
// }
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

const AppShortcuts = require("nativescript-app-shortcuts").AppShortcuts;
let appShortcuts = new AppShortcuts();
appShortcuts.available()
    .then(
        function(available) {
            if (available) {
                console.log("****This device supports app shortcuts");
            } else {
                console.log("****No app shortcuts capability, ask the user to upgrade :)");
            }
        }
    );

new Vue({
    //router,
    render: h => h('frame', [h(App)]),
    store,
}).$start()