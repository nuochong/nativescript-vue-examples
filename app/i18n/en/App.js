let App = {
  example: 'Example',
  project: 'Project',
  Looking_forward_to_your_joining: 'Looking Forward To Your Participation'
};

const i18n = require('./example/i18n');
Object.assign(App, i18n);
module.exports = App;
