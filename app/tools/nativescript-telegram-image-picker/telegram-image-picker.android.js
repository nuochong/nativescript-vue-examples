'use strict';
var app = require("application");
var platform_1 = require("platform");
var GalleryActivity = com.tangxiaolv.telegramgallery.GalleryActivity;
function openTelegramImagePicker(photoLimit) {
    if (photoLimit === void 0) { photoLimit = 1; }
    return new Promise(function (resolve, reject) {
        if (platform_1.isIOS) {
            resolve('Plugin does not support iOS.');
        }
        var activity = app.android.startActivity || app.android.foregroundActivity;
        var singlePhoto;
        if (photoLimit && photoLimit > 1) {
            singlePhoto = false;
        }
        singlePhoto = photoLimit > 1 ? false : true;
        try {
            GalleryActivity.openActivity(activity, singlePhoto, photoLimit, 1224);
            app.android.on(app.AndroidApplication.activityResultEvent, (function (args) {
                if (args.requestCode === 1224 && args.intent) {
                    var data = args.intent;
                    var photoList = data.getSerializableExtra(GalleryActivity.PHOTOS);
                    var videoList = data.getSerializableExtra(GalleryActivity.VIDEOS);
                    var photos = void 0;
                    var videos = void 0;
                    if (photoList !== null) {
                        photos = photoList.toArray();
                    }
                    if (videoList !== null) {
                        videos = videoList.toArray();
                    }
                    var resp = {
                        photos: photos,
                        videos: videos
                    };
                    resolve(resp);
                }
            }));
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.openTelegramImagePicker = openTelegramImagePicker;
