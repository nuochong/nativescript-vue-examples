import Vue from 'nativescript-vue';
import World from './components/example/target/world';
import Toast from './components/example/toast';
import FancyAlert from './components/example/fancy-alert';
import { isIOS } from 'tns-core-modules/platform';

const AppShortcuts = require('nativescript-app-shortcuts').AppShortcuts;
const appShortcuts = new AppShortcuts();

const isSuppertAppShortcus = function() {
  appShortcuts.available().then(function(available) {
    if (available) {
      console.log('****This device supports app shortcuts');
    } else {
      console.log('****No app shortcuts capability, ask the user to upgrade :)');
    }
  });
};

const handleTask = function() {
  // 实例化它并调用setQuickActionCallback
  appShortcuts.setQuickActionCallback(shortcutItem => {
    console.log(`应用程序是通过快捷方式'${shortcutItem.type}'启动的`);
    //这是您处理快捷方式的任何特定情况的地方
    // if (shortcutItem.type === 'shortcut1') {
    //   // 这是一个通过快捷方式进行“深度链接”的例子
    //   let frames = require('ui/frame');
    //   // 在Android上我们需要一点延迟
    //   setTimeout(() => {
    //     frames.topmost().navigate('beer-page');
    //   });
    // } else {
    //   // ... 其他快捷方式处理
    // }
    switch (shortcutItem.type) {
      case 'shortcut1':
        console.log('点击了功能1');
        // new Vue({
        //   render: h => h('frame', [h(Example)])
        // }).$start();
        //Vue.prototype.$navigateTo(Example);
        //let frames = require("ui/frame");
        setTimeout(() => {
          Vue.prototype.$navigateTo(Toast);
          //frames.topmost().navigate(h(Example));
        });
        break;
      case 'shortcut2':
        console.log('点击了功能2');
        setTimeout(() => {
          Vue.prototype.$navigateTo(World);
          //frames.topmost().navigate(h(Example));
        });
        break;
      case 'shortcut3':
        console.log('点击了功能3');
        setTimeout(() => {
          Vue.prototype.$navigateTo(FancyAlert);
          //frames.topmost().navigate(h(Example));
        });
        break;
    }
  });

  appShortcuts
    .configureQuickActions([
      {
        type: 'capturePhoto',
        title: 'Snag a pic',
        subtitle: 'You have 23 snags left', // iOS only
        iconType: isIOS ? UIApplicationShortcutIconType.CapturePhoto : null,
        iconTemplate: 'eye' // ignored by iOS, if iconType is set as well
      },
      {
        type: 'beer',
        title: 'Beer-tastic!',
        subtitle: 'Check in & share', // iOS only
        iconTemplate: 'beer'
      }
    ])
    .then(
      () => {
        alert('Added 2 actions, close the app and apply pressure to the app icon to check it out!');
      },
      errorMessage => {
        alert(errorMessage);
      }
    );
};
const test = function() {
  console.log('测试模块化提示');
};

export default {
  isSuppertAppShortcus,
  handleTask,
  test
};
