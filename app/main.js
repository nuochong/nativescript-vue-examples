import Vue from 'nativescript-vue';
import App from './components/App';
//import router from './router';
import store from './store';
//import VueDevtools from 'nativescript-vue-devtools'


const application = require('tns-core-modules/application');

// Vue.use(VueDevtools)
// if (TNS_ENV !== 'production') {
//     Vue.use(VueDevtools)
// }
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production';

const AppShortcuts = require('nativescript-app-shortcuts').AppShortcuts;
let appShortcuts = new AppShortcuts();
appShortcuts.available().then(function(available) {
  if (available) {
    console.log('****This device supports app shortcuts');
  } else {
    console.log('****No app shortcuts capability, ask the user to upgrade :)');
  }
});

// const LinearLayout = android.widget.LinearLayout;
// const LayoutParams = android.widget.LinearLayout.LayoutParams;
// const TextView = android.widget.TextView;
// const Button = android.widget.Button;
// const Gravity = android.view.Gravity;

// const MainActivity = android.app.Activity.extend(
//   "com.tns.NativeScriptActivity",
//   {
//     onCreate: function(savedInstanceState) {
//       this.super.onCreate(savedInstance);

//       // creating LinearLayout
//       let linLayout = new LinearLayout(this);
//       // specifying vertical orientation
//       linLayout.setOrientation(LinearLayout.VERTICAL);
//       // creating LayoutParams
//       let linLayoutParam = new LayoutParams(
//         LayoutParams.MATCH_PARENT,
//         LayoutParams.MATCH_PARENT
//       );
//       // set LinearLayout as a root element of the screen
//       setContentView(linLayout, linLayoutParam);

//       let lpView = new LayoutParams(
//         LayoutParams.WRAP_CONTENT,
//         LayoutParams.WRAP_CONTENT
//       );

//       let tv = new TextView(this);
//       tv.setText("TextView");
//       tv.setLayoutParams(lpView);
//       linLayout.addView(tv);

//       let btn = new Button(this);
//       btn.setText("Button");
//       linLayout.addView(btn, lpView);

//       let leftMarginParams = new LinearLayout.LayoutParams(
//         LayoutParams.WRAP_CONTENT,
//         LayoutParams.WRAP_CONTENT
//       );
//       leftMarginParams.leftMargin = 50;

//       let btn1 = new Button(this);
//       btn1.setText("Button1");
//       linLayout.addView(btn1, leftMarginParams);

//       let rightGravityParams = new LinearLayout.LayoutParams(
//         LayoutParams.WRAP_CONTENT,
//         LayoutParams.WRAP_CONTENT
//       );
//       rightGravityParams.gravity = Gravity.RIGHT;

//       let btn2 = new Button(this);
//       btn2.setText("Button2");
//       linLayout.addView(btn2, rightGravityParams);
//     }
//   }
// );

//在代码中创建一个页面
// const Page = require("tns-core-modules/ui/page").Page;
// const Label = require("tns-core-modules/ui/label").Label;
// const StackLayout = require("tns-core-modules/ui/layouts/stack-layout")
//   .StackLayout;

// function createPage() {
//   const stack = new StackLayout();
//   const label = new Label();
//   label.text = "Hello, worlddddd!";
//   stack.addChild(label);

//   const page = new Page();
//   // Each page can have a single root view set via the content property
//   page.content = stack;
//   return page;
// }
// exports.createPage = createPage;

//import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer);

var observable = require('tns-core-modules/data/observable');
//var page = this.$refs.page.nativeView;
var viewModel = new observable.Observable();
//var glyphs = new Array();
var glyphs = new observable.Observable();
var charCode = 0xeb61;
for (; charCode <= 0xeb69; charCode++) {
  // var glyph = new observable.Observable();

  // // glyph.set("icon", String.fromCharCode(charCode));
  // // glyph.set("code", charCode.toString(16));

  // glyph.set(charCode.toString(16), String.fromCharCode(charCode));
  // console.log("666666666666",glyph);
  // glyphs.push(glyph);
  viewModel.set(charCode.toString(16), String.fromCharCode(charCode));
}
var charCodes = 0xe900;
for (; charCodes <= 0xe902; charCodes++) {
  // var glyph = new observable.Observable();

  // // glyph.set("icon", String.fromCharCode(charCodes));
  // // glyph.set("code", charCodes.toString(16));
  // glyph.set(charCode.toString(16), String.fromCharCode(charCodes));
  // console.log("666666666666",glyph);
  // glyphs.push(glyph);

  viewModel.set(charCodes.toString(16), String.fromCharCode(charCodes));
}
//glyphs = glyphs;
//viewModel.set("glyphs", glyphs);

Vue.prototype.$icon = viewModel;

import MultiDrawer from 'nativescript-vue-multi-drawer';
Vue.use(MultiDrawer, {
  // override any option here
  // for example enable debug mode
  debug: true
});

import Dialog from './components/example/Dialog/tools';
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

// //下拉刷新
// Vue.registerElement(
//   'PullToRefresh',
//   () => require('nativescript-pulltorefresh').PullToRefresh
// );

new Vue({
  //router,
  store,
  render: h => h('frame', [h(App)])
}).$start();
