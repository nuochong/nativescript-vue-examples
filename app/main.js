import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';
import App from './components/App';
import store from './store';
import CommonLocal from './assets/js/common.js';
import shortcuts from './app.shortcuts.js';
import icons from './app.icons.js';
import axios from './api/api';
import VueAxios from 'vue-axios';
//import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import MultiDrawer from 'nativescript-vue-multi-drawer';
import Dialog from './components/example/dialog/tools';
import FontIcon from './tools/nativescript-vue-fonticon';

//在production环境开启VueDevtools工具
TNS_ENV !== 'production' && Vue.use(VueDevtools);
//在--env.production环境时打印Vue日志。在构建时 *不会* 进行打包
Vue.config.silent = TNS_ENV === 'production';

Vue.use(CommonLocal);
Vue.use(VueAxios, axios);
Vue.use(MultiDrawer, {
  //重写覆盖这里的任何选项
  //例如，启用调试模式
  debug: true
});
Vue.use(Dialog, {
  debug: false
  // backdropColor: 'rgba(255, 0, 0, 0.7)',
  //其它配置参看插件源代码
});
Vue.use(FontIcon, {
  // 可选,组件图标名称。
  componentName: 'FIcon',
  //可选。将css映射输出到控制台。
  debug: false,
  paths: {
    fa: './fonts/font-awesome.css',
    icon: './fonts/iconfont.css'
  }
});

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer);
//注册下拉刷新
Vue.registerElement('PullToRefresh', () => require('@nstudio/nativescript-pulltorefresh').PullToRefresh);

//初始化icons
Vue.prototype.$icon = icons.initIcons();
//检测是否支持AppShortcus
shortcuts.isSuppertAppShortcus();

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start();
