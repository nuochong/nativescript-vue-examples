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
          isCaptureMood: false, // 如果为真，则相机将直接打开。
          isNeedCamera: true,
          maxNumberFiles: 10,
          isNeedFolderList: true
        },
        ios: {
          isCaptureMood: false, // 如果为真，则相机将直接打开。
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
        allowedVideoQualities = [AVCaptureSessionPreset1920x1080, AVCaptureSessionPresetHigh];
        // 从这里获得更多: https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset?language=objc
      }

      let options = {
        android: {
          isCaptureMood: false, // 如果为真，则相机将直接打开。
          isNeedCamera: true,
          maxNumberFiles: 2,
          isNeedFolderList: true,
          maxDuration: 20
        },
        ios: {
          isCaptureMood: false, // 如果为真，则相机将直接打开。
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
          isCaptureMood: false, // 如果为真，则录音机将直接打开。
          isNeedRecorder: true,
          maxNumberFiles: 2,
          isNeedFolderList: true,
          maxSize: 102400 // 以字节为单位记录的文件的最大大小。5900 = ~ 1秒
        },
        ios: {
          isCaptureMood: false, // 如果为真，则录音机将直接打开。
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
        extensions = [kUTTypePDF, kUTTypeText]; // 你可以从这里得到更多的类型: https://developer.apple.com/documentation/mobilecoreservices/uttype
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
