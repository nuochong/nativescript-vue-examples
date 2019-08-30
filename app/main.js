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
  // override any option here
  // for example enable debug mode
  debug: false,
  backdropColor: 'rgba(255, 0, 0, 0.7)',
  bottom: {
    width: null,
    height: '50%',
    backgroundColor: 'rgba(255, 255, 0, 0.7)',
    canSwipeOpen: true,
    swipeOpenTriggerWidth: null,
    swipeOpenTriggerHeight: 30,
    swipeOpenTriggerMinDrag: 50,
    swipeCloseTriggerMinDrag: 50,
    swipeOpenTriggerProperties: {},
    animation: {
      openDuration: 200,
      closeDuration: 200
    },
    translationOffsetMultiplier: 1,
    axis: 'Y'
  }
});

//注册下拉刷新
Vue.registerElement('PullToRefresh', () => require('@nstudio/nativescript-pulltorefresh').PullToRefresh);

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start();
