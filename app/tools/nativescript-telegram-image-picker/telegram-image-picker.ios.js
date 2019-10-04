'use strict';
var app = require('tns-core-modules/application');
var platform_1 = require('tns-core-modules/platform');
//var GalleryActivity = com.tangxiaolv.telegramgallery.GalleryActivity;
function openTelegramImagePicker(photoLimit) {
  console.log('ios不支持');
  return Error('IOS 不支持');
}
exports.openTelegramImagePicker = openTelegramImagePicker;
