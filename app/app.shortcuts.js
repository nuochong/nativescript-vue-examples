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

const test = function() {
  console.log('测试模块化提示');
};

export default {
  isSuppertAppShortcus,
  test
};
