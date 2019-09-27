let accordionMain = {};
const accordion = require('./accordion');
const multi = require('./multi');
Object.assign(accordionMain, accordion, multi);
module.exports = accordionMain;
