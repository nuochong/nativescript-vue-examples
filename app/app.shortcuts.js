const AppShortcuts = require('nativescript-app-shortcuts').AppShortcuts;

const isSuppertAppShortcus = function() {
  const appShortcuts = new AppShortcuts();
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
  new AppShortcuts().setQuickActionCallback(shortcutItem => {
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
        break;
      case 'shortcut2':
        console.log('点击了功能2');
        break;
      case 'shortcut3':
        console.log('点击了功能3');
        break;
    }
  });
};
const test = function() {
  console.log('测试模块化提示');
};

export default {
  isSuppertAppShortcus,
  handleTask,
  test
};
