let App = {
  example: 'Example',
  project: 'Project',
  Looking_forward_to_your_joining: 'Looking Forward To Your Participation'
};
const accordionMain = require('./example/accordion/accordion-main');
const i18n = require('./example/i18n');
Object.assign(App, i18n, accordionMain);
module.exports = App;
