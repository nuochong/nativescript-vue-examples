let normal = {
  // app_name: 'NSVue 示例',
  title_activity_kimera: 'NSVue 示例',
  // 这里是android长按菜单，也同样会被编译到ios，该错误需要处理
  shortcut_disabled_message1: '功能1-disabled',
  shortcut_long_label1: '功能1-long',
  shortcut_short_label1: '功能1-short',

  shortcut_disabled_message2: '功能2-disabled',
  shortcut_long_label2: '功能2-long',
  shortcut_short_label2: '功能2-short',

  shortcut_disabled_message3: '功能3-disabled',
  shortcut_long_label3: '功能3-long',
  shortcut_short_label3: '功能3-short',

  // 社交登录start
  facebook_app_id: '{{ YOUR_FACEBOOK_APP_ID }}',
  fb_login_protocol_scheme: 'fb{{ YOUR_FACEBOOK_APP_ID }}',
  // 社交登录end

  // 通用名称
  'app.name': 'NSVue 示例'
};
const App = require('./zh/App');
Object.assign(normal, App);
module.exports = normal;
