import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';
import App from './components/App';
import Store from './store';
import CommonLocal from './assets/js/common.js';
import shortcuts from './app.shortcuts.js';
import icons from './app.icons.js';
import axios from './api/api';
import VueAxios from 'vue-axios';
// import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
// import MultiDrawer from 'nativescript-vue-multi-drawer';
import MultiDrawer from './components/example/multi-drawer/tools';
import FontIcon from './tools/nativescript-vue-fonticon';
import { setStatusBarColors, setStatusBarFontColors, setBarFontColor } from './tools/status-bar-util';
import { Toasty } from 'nativescript-toasty';
import DateTimePicker from 'nativescript-datetimepicker/vue';

const application = require('tns-core-modules/application');
const platform = require('tns-core-modules/platform');

// 在production环境开启VueDevtools工具
TNS_ENV !== 'production' && Vue.use(VueDevtools);
// 在--env.production环境时打印Vue日志。在构建时 *不会* 进行打包
Vue.config.silent = TNS_ENV === 'production';

Vue.use(CommonLocal);
Vue.use(VueAxios, axios);
Vue.use(MultiDrawer, {
  // 重写覆盖这里的任何选项
  // 例如，启用调试模式
  debug: true
  // backdropColor: 'rgba(255, 0, 0, 0.7)',
  // 其它配置参看插件源代码
});
Vue.use(FontIcon, {
  // 可选,组件图标名称。
  componentName: 'FIcon',
  // 可选。将css映射输出到控制台。
  debug: false,
  paths: {
    fa: './fonts/font-awesome.css',
    icon: './fonts/iconfont.css'
    //ic: './fonts/icommon.css',
  }
});
Vue.use(DateTimePicker);

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer);
// 注册下拉刷新
Vue.registerElement('PullToRefresh', () => require('@nstudio/nativescript-pulltorefresh').PullToRefresh);
// 注册扫码
Vue.registerElement('BarcodeScanner', () => require('nativescript-barcodescanner').BarcodeScannerView);
// 注册iqkeyboardmanager
Vue.registerElement('PreviousNextView', () => require('nativescript-iqkeyboardmanager').PreviousNextView);
Vue.registerElement('TextViewWithHint', () => require('nativescript-iqkeyboardmanager').TextViewWithHint);
// 注册轮播图
// Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
// Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);
Vue.registerElement('Carousel', () => require('./tools/nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('./tools/nativescript-carousel').CarouselItem);
// 注册动画插件
Vue.registerElement('LottieView', () => require('nativescript-lottie').LottieView);
// 注册单选按钮
Vue.registerElement('CheckBox', () => require('@nstudio/nativescript-checkbox').CheckBox, {
  model: {
    prop: 'checked',
    event: 'checkedChange'
  }
});

// 初始化icons
Vue.prototype.$icon = icons.initIcons();
Vue.prototype.$setStatusBarFontColors = setStatusBarFontColors;
Vue.prototype.$setBarFontColor = setBarFontColor;
Vue.prototype.$application = application;
Vue.prototype.$platform = platform;
Vue.prototype.$toast = content => {
  const toast = new Toasty({ text: content });
  toast.show();
};
// setStatusBarColors();
// 检测是否支持AppShortcus
shortcuts.isSuppertAppShortcus();
shortcuts.handleTask();

// import SplashScreenMain from './components/example/splash-screen/splash-screen-main';
// //import * as imageModule from 'nativescript-image';
// if (application.android) {
//   application.on("launch", args => {
//       console.log("onLaunch");
//       Vue.prototype.$navigateTo(SplashScreenMain);
//       //imageModule.initialize();
//       application.android.on("activityStarted", ({activity}) => {
//           console.log("onStarted");
//           // var window = activity.getWindow();
//           // if (window) {
//           //     window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(0xFF151F2F));
//           //     // Prevent the soft keyboard from hiding EditText's while typing.
//           //     window.setSoftInputMode(32); //android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN;
//           // }
//       });
//   });
// }

// if (application.ios) {
//   application.on("launch", args => {
//       setTimeout(() => {
//           UIApplication.sharedApplication.keyWindow.backgroundColor = UIColor.blackColor;
//       }, 1);
//   });
// }

// import router from './router/router';
// Vue.prototype.$router = router;
// Vue.prototype.$goto = function(to, options) {
//   this.$navigateTo(this.$router[to], options);
// };

new Vue({
  Store,
  render: h => h('frame', [h(App)])
}).$start();
