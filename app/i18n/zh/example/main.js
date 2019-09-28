let main = {
  i18n: '国际化',
  accordion: '手风琴'
};
const accordionMain = require('./example/accordion/accordion-main');
const i18n = require('./example/i18n');
Object.assign(main, i18n, accordionMain);
module.exports = main;
