<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="图片选择器" @tap="btnImageFilePicker" />
        <Button class="btn btn-primary" text="视频选择器" @tap="btnVideoFilePicker" />
        <Button class="btn btn-primary" text="音频选择器" @tap="btnAudioFilePicker" />
        <Button class="btn btn-primary" text="自定义选择器" @tap="btnCustomFilePicker" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Mediafilepicker, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from 'nativescript-mediafilepicker';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '多种类文件选择器'
    };
  },
  mounted() {
    console.log('安卓运行该插件，会使用连接jccenter下载文件，一定要网络好才行，否则报错');
  },
  methods: {
    btnImageFilePicker: function() {
      let options = {
        android: {
          isCaptureMood: false, // if true then camera will open directly.
          isNeedCamera: true,
          maxNumberFiles: 10,
          isNeedFolderList: true
        },
        ios: {
          isCaptureMood: false, // if true then camera will open directly.
          maxNumberFiles: 10
        }
      };

      let mediafilepicker = new Mediafilepicker();
      mediafilepicker.openImagePicker(options);

      mediafilepicker.on('getFiles', function(res) {
        let results = res.object.get('results');
        console.dir(results);
      });

      mediafilepicker.on('error', function(res) {
        let msg = res.object.get('msg');
        console.log(msg);
      });

      mediafilepicker.on('cancel', function(res) {
        let msg = res.object.get('msg');
        console.log(msg);
      });
    },
    btnVideoFilePicker: function() {
      let allowedVideoQualities = [];

      if (app.ios) {
        allowedVideoQualities = [AVCaptureSessionPreset1920x1080, AVCaptureSessionPresetHigh]; // get more from here: https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset?language=objc
      }

      let options = {
        android: {
          isCaptureMood: false, // if true then camera will open directly.
          isNeedCamera: true,
          maxNumberFiles: 2,
          isNeedFolderList: true,
          maxDuration: 20
        },
        ios: {
          isCaptureMood: false, // if true then camera will open directly.
          videoMaximumDuration: 10,
          allowedVideoQualities: allowedVideoQualities
        }
      };

      let mediafilepicker = new Mediafilepicker();
      mediafilepicker.openVideoPicker(options);

      mediafilepicker.on('getFiles', function(res) {
        let results = res.object.get('results');
        console.dir(results);
      });

      mediafilepicker.on('error', function(res) {
        let msg = res.object.get('msg');
        console.log(msg);
      });

      mediafilepicker.on('cancel', function(res) {
        let msg = res.object.get('msg');
        console.log(msg);
      });
    },
    btnAudioFilePicker: function() {
      let options = {
        android: {
          isCaptureMood: false, // if true then voice recorder will open directly.
          isNeedRecorder: true,
          maxNumberFiles: 2,
          isNeedFolderList: true,
          maxSize: 102400 // Maximum size of recorded file in bytes. 5900 = ~ 1 second
        },
        ios: {
          isCaptureMood: false, // if true then voice recorder will open directly.
          maxNumberFiles: 5,
          audioMaximumDuration: 10
        }
      };

      let mediafilepicker = new Mediafilepicker();
      mediafilepicker.openAudioPicker(options);

      mediafilepicker.on('getFiles', function(res) {
        let results = res.object.get('results');
        console.dir(results);
      });

      mediafilepicker.on('error', function(res) {
        let msg = res.object.get('msg');
        console.log(msg);
      });

      mediafilepicker.on('cancel', function(res) {
        let msg = res.object.get('msg');
        console.log(msg);
      });
    },
    btnCustomFilePicker: function() {
      let extensions = [];

      if (app.ios) {
        extensions = [kUTTypePDF, kUTTypeText]; // you can get more types from here: https://developer.apple.com/documentation/mobilecoreservices/uttype
      } else {
        extensions = ['txt', 'pdf'];
      }

      let options = {
        android: {
          extensions: extensions,
          maxNumberFiles: 2
        },
        ios: {
          extensions: extensions,
          multipleSelection: true
        }
      };

      let mediafilepicker = new Mediafilepicker();
      mediafilepicker.openFilePicker(options);

      mediafilepicker.on('getFiles', function(res) {
        let results = res.object.get('results');
        console.dir(results);
      });

      mediafilepicker.on('error', function(res) {
        let msg = res.object.get('msg');
        console.log(msg);
      });

      mediafilepicker.on('cancel', function(res) {
        let msg = res.object.get('msg');
        console.log(msg);
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
