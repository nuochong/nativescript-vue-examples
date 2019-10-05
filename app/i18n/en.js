let normal = {
  // app_name: 'NSVue Examples',
  title_activity_kimera: 'NSVue Examples',
  // 这里是android长按菜单，也同样会被编译到ios，该错误需要处理
  shortcut_disabled_message1: 'function1-disabled',
  shortcut_long_label1: 'function1-long',
  shortcut_short_label1: 'function1-short',

  shortcut_disabled_message2: 'function2-disabled',
  shortcut_long_label2: 'function2-long',
  shortcut_short_label2: 'function2-short',

  shortcut_disabled_message3: 'function3-disabled',
  shortcut_long_label3: 'function3-long',
  shortcut_short_label3: 'function3-short',

  // 社交登录start
  facebook_app_id: '{{ YOUR_FACEBOOK_APP_ID }}',
  fb_login_protocol_scheme: 'fb{{ YOUR_FACEBOOK_APP_ID }}',
  // 社交登录end

  // 通用名称
  'app.name': 'NSVue Examples'
};

const App = require('./en/App');
Object.assign(normal, App);
module.exports = normal;
