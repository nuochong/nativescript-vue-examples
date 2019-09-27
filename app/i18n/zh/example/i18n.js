let i18n = {
  array: ['将翻译分为 ', '多行'],
  'hello.world': '你好世界!',
  html: '文字 宽度 <b>HTML</b> <wrong & Hi',
  new: {
    line: '我们换个新的 \n 行'
  },
  'special.characters': {
    n: '字符 \\n: \n END',
    r: '字符 \\r: \r END',
    t: '字符 \\t: \t END',
    backslash: '字符 \\: \\ END',
    'single.quote': "字符 ': ' END",
    'double.quote': '字符 ": " END'
  },
  'special.keys': {
    '\n': 'n',
    '\r': 'r',
    '\t': 't',
    '\\': '\\',
    "'": "'",
    '"': '"'
  },
  sprintf: '格式化我 %s : %s',
  'sprintf.numbered.placeholders': '格式化 $2: %2$s, $1: %1$s',
  tab: 'Tab \t 是工作的',
  test: {
    percent: '%',
    'escaped.percent': '%%',
    'escaped.percent.followed.by.s': '%%s',
    'escaped.percent.followed.by.placeholder': '%%%s'
  }
};

module.exports = i18n;
