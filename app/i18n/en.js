module.exports = {
  // 安卓app名称
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
  'app.name': 'NSVue Examples',
  example: 'Example',
  project: 'Project',
  Looking_forward_to_your_joining: 'Looking Forward To Your Participation',
  array: ['split the translation into ', 'multiples lines'],
  'hello.world': 'Hello World !',
  html: 'Text with <b>HTML</b> <wrong & Hi',
  new: {
    line: "Let's try with a new \n line"
  },
  'special.characters': {
    n: 'char \\n: \n END',
    r: 'char \\r: \r END',
    t: 'char \\t: \t END',
    backslash: 'char \\: \\ END',
    'single.quote': "char ': ' END",
    'double.quote': 'char ": " END'
  },
  'special.keys': {
    '\n': 'n',
    '\r': 'r',
    '\t': 't',
    '\\': '\\',
    "'": "'",
    '"': '"'
  },
  sprintf: 'format me %s : %s',
  'sprintf.numbered.placeholders': 'format $2: %2$s, $1: %1$s',
  tab: 'Tab \t is working',
  test: {
    percent: '%',
    'escaped.percent': '%%',
    'escaped.percent.followed.by.s': '%%s',
    'escaped.percent.followed.by.placeholder': '%%%s'
  }
};
