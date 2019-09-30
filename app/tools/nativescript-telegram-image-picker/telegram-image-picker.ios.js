'use strict';
var app = require('application');
var platform_1 = require('platform');
//var GalleryActivity = com.tangxiaolv.telegramgallery.GalleryActivity;
function openTelegramImagePicker(photoLimit) {
  console.log('ios不支持');
  return Error('IOS 不支持');
}
exports.openTelegramImagePicker = openTelegramImagePicker;
