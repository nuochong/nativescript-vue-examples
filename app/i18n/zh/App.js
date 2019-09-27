let App = {
  example: '示例',
  project: '实例',
  Looking_forward_to_your_joining: '期待你的参与'
};
const accordionMain = require('./example/accordion/accordion-main');
const i18n = require('./example/i18n');
Object.assign(App, i18n, accordionMain);
module.exports = App;
