let main = {
  i18n: 'Globalization',
  accordion: 'Accordion'
};
const accordionMain = require('./accordion/accordion-main');
const i18n = require('./i18n');
Object.assign(main, i18n, accordionMain);
module.exports = main;
