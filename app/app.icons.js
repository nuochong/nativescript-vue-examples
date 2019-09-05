const observable = require('tns-core-modules/data/observable');

const initIcons = function() {
  let viewModel = new observable.Observable();
  let glyphs = new Array();
  //let glyphs = new observable.Observable();
  let charCode = 0xeb61;
  for (; charCode <= 0xeb69; charCode++) {
    let glyph = new observable.Observable();
    glyph.set('icon', String.fromCharCode(charCode));
    glyph.set('code', charCode.toString(16));
    glyph.set(charCode.toString(16), String.fromCharCode(charCode));
    //console.log('xxx', glyph);
    glyphs.push(glyph);
    //viewModel.set(charCode.toString(16), String.fromCharCode(charCode));
  }
  // let charCodes = 0xe900;
  // for (; charCodes <= 0xe902; charCodes++) {
  //   // let glyph = new observable.Observable();
  //   // glyph.set("icon", String.fromCharCode(charCodes));
  //   // glyph.set("code", charCodes.toString(16));
  //   // glyph.set(charCode.toString(16), String.fromCharCode(charCodes));
  //   // console.log("xxx",glyph);
  //   // glyphs.push(glyph);
  //   viewModel.set(charCodes.toString(16), String.fromCharCode(charCodes));
  // }
  viewModel.set('glyphs', glyphs);
  console.log('初始化ICONS');
  return viewModel;
};

export default {
  initIcons
};
