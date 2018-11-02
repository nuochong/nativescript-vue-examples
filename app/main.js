import Vue from "nativescript-vue";
import App from "./components/App";
//import router from './router';
import store from "./store";
//import VueDevtools from 'nativescript-vue-devtools'

const application = require("tns-core-modules/application");

// Vue.use(VueDevtools)
// if (TNS_ENV !== 'production') {
//     Vue.use(VueDevtools)
// }
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === "production";

const AppShortcuts = require("nativescript-app-shortcuts").AppShortcuts;
let appShortcuts = new AppShortcuts();
appShortcuts.available().then(function(available) {
  if (available) {
    console.log("****This device supports app shortcuts");
  } else {
    console.log("****No app shortcuts capability, ask the user to upgrade :)");
  }
});


import {setActivityCallbacks, AndroidActivityCallbacks} from "ui/frame";
const View = android.view.View;
const Typeface =  android.graphics.Typeface;


const LinearLayout = android.widget.LinearLayout;
const LayoutParams = android.widget.LinearLayout.LayoutParams;
const TextView = android.widget.TextView;
const Button = android.widget.Button;
const Gravity = android.view.Gravity;

const MainActivity = android.app.Activity.extend("com.tns.NativeScriptActivity", {
  onCreate: function (savedInstanceState) {
    this.super.onCreate(savedInstance);

        // creating LinearLayout
        let linLayout = new LinearLayout(this);
        // specifying vertical orientation
        linLayout.setOrientation(LinearLayout.VERTICAL);
        // creating LayoutParams  
        let linLayoutParam = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT); 
        // set LinearLayout as a root element of the screen 
        setContentView(linLayout, linLayoutParam);

        let lpView = new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);

        let tv = new TextView(this);
        tv.setText("TextView");
        tv.setLayoutParams(lpView);
        linLayout.addView(tv);

        let btn = new Button(this);
        btn.setText("Button");
        linLayout.addView(btn, lpView);


        let leftMarginParams = new LinearLayout.LayoutParams(
                LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);
        leftMarginParams.leftMargin = 50;

        let btn1 = new Button(this);
        btn1.setText("Button1");
        linLayout.addView(btn1, leftMarginParams);


        let rightGravityParams = new LinearLayout.LayoutParams(
                LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);
        rightGravityParams.gravity = Gravity.RIGHT;

        let btn2 = new Button(this);
        btn2.setText("Button2");
        linLayout.addView(btn2, rightGravityParams);
}
});

//import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)
new Vue({
  //router,
  render: h => h("frame", [h(App)]),
  store
}).$start();
