import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';
import App from './components/App';
import store from './store';
import CommonLocal from './assets/js/common.js';
import shortcuts from './app.shortcuts.js';
import icons from './app.icons.js';
Vue.use(CommonLocal);

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
//Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production';

//检测是否支持AppShortcus
shortcuts.isSuppertAppShortcus();
//初始化icons
Vue.prototype.$icon = icons.initIcons();

//import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer);

import MultiDrawer from 'nativescript-vue-multi-drawer';
Vue.use(MultiDrawer, {
  // override any option here
  // for example enable debug mode
  debug: true
});

import Dialog from './components/example/dialog/tools';
Vue.use(Dialog, {
  debug: false
  // backdropColor: 'rgba(255, 0, 0, 0.7)',
  //其它配置参看插件源代码
});

//注册下拉刷新
Vue.registerElement('PullToRefresh', () => require('@nstudio/nativescript-pulltorefresh').PullToRefresh);

// import FontIcon from 'nativescript-vue-fonticon';

// Vue.use(FontIcon, {
//   componentName: 'IconFont', // <-- Optional. Will be the name for component icon.
//   debug: true, // <-- Optional. Will output the css mapping to console.
//   paths: {
//     iconfont: './assets/icons/iconfont.css',
//   }
// })

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start();
