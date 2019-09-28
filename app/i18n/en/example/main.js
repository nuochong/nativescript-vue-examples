let main = {
  i18n: 'I18n',
  accordion: 'Accordion'
};
const accordionMain = require('./example/accordion/accordion-main');
const i18n = require('./example/i18n');
Object.assign(main, i18n, accordionMain);
module.exports = main;
