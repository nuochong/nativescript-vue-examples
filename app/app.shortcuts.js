import Vue from 'nativescript-vue';
import Toast from './components/example/toast';
import World from './components/example/target/world';
import FancyAlert from './components/example/fancy-alert';
import { isIOS } from 'tns-core-modules/platform';

const AppShortcuts = require('nativescript-app-shortcuts').AppShortcuts;
const appShortcuts = new AppShortcuts();

const isSuppertAppShortcus = function() {
  appShortcuts.available().then(function(available) {
    if (available) {
      console.log('此设备支持app捷径:)');
    } else {
      console.log('此设备不支持app捷径:(');
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
        console.log('点击了静态功能1');
        setTimeout(() => {
          Vue.prototype.$navigateTo(Toast);
          //彩蛋，新增动态动能
          addDynamicShortcuts();
          //设置动态功能不能放在main.js中，否则会报getClass无法获取的错误。
          //'动态功能设置失败' [TypeError: Cannot read property 'getClass' of undefined]
        });
        break;
      case 'shortcut2':
        console.log('点击了静态功能2');
        setTimeout(() => {
          Vue.prototype.$navigateTo(World);
        });
        break;
      case 'shortcut3':
        console.log('点击了静态功能3');
        setTimeout(() => {
          Vue.prototype.$navigateTo(FancyAlert);
        });
        break;
      case 'shortcut4':
        console.log('点击了动态功能4');
        setTimeout(() => {
          Vue.prototype.$navigateTo(FancyAlert);
        });
        break;
      case 'shortcut5':
        console.log('点击了动态功能5');
        setTimeout(() => {
          Vue.prototype.$navigateTo(FancyAlert);
        });
        break;
    }
  });
};
const addDynamicShortcuts = function() {
  //ios最多支持四个捷径，安卓有些支持四个，有些支持五个，如果支持四个，有三个静态方式，再添加两个动态方式，那么最后一个静态方式会被覆盖。动态优先。
  appShortcuts
    .configureQuickActions([
      {
        type: 'shortcut4',
        title: '动态功能4',
        subtitle: '我是动态功能4中的subtitle', // 仅支持iOS
        iconType: isIOS ? UIApplicationShortcutIconType.CapturePhoto : null,
        iconTemplate: 'beer' // 如果iconType也设置好了，iOS会忽略它,不能添加后缀名，否则无法识别
        //这里安卓的图标要放在app`/App_Resources/Android/src/main/res/drawable`文件夹下，每个需要适配的分辨率都要放
      },
      {
        type: 'shortcut5',
        title: '动态功能5',
        subtitle: '我是动态功能5中的subtitle', // 仅支持iOS
        iconTemplate: 'eye'
      }
    ])
    .then(
      () => {
        // 使用alert会被转化为android原生弹出框
        console.log('添加了2个操作，关闭应用程序并对应用程序图标施加压力以进行检查！');
      },
      errorMessage => {
        console.log('动态功能设置失败', errorMessage);
      }
    );
};
const test = function() {
  console.log('测试模块化提示');
};

export default {
  isSuppertAppShortcus,
  addDynamicShortcuts,
  handleTask,
  test
};
