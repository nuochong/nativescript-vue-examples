<template>
  <Page class="page" actionBarHidden="false">
    <ActionBarSecond :title="title" />
    <GridLayout>
      <ScrollView>
        <StackLayout class="p-10" width="100%">
          <ActivityIndicator color="#3489db" :busy=" isRecording " />
          <button row="0" col="0" class="btn btn-primary" text="开始记录" @tap=" startRecording " />
          <button class="btn btn-primary" text="暂停记录" @tap=" pauseRecording " />
          <button class="btn btn-primary" text="简历记录" @tap=" resumeRecording " />
          <Label :text=" '计的值: ' + audioMeter " textWrap="true" />
          <button class="btn btn-primary" text="停止记录" @tap=" stopRecording " />
          <button class="btn btn-primary" text="得到文件" @tap=" getFile " />
          <label :text=" recordedAudioFile " class="gray" textWrap="true" />

          <button class="btn btn-yellow" text="处理记录" @tap=" disposeRecorder " />
          <!-- <button class="btn btn-primary" text="播放录制" @tap=" playRecordedFile " />
          <button class="btn btn-primary" text="停止播放" @tap=" pauseAudio " /> -->
        </StackLayout>
      </ScrollView>
    </GridLayout>
  </Page>
</template>

<script>
import ActionBarSecond from '../public/action-bar-second';

import { AudioRecorder, AudioRecorderOptions } from '@nstudio/nativescript-audio-recorder';
import { Observable } from 'tns-core-modules/data/observable';
import { File, knownFolders } from 'tns-core-modules/file-system';
import { isAndroid } from 'tns-core-modules/platform';
import * as dialogs from 'tns-core-modules/ui/dialogs';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '录音',
      isRecording: '',
      recordedAudioFile: '',
      audioMeter: 0,

      _recorder: AudioRecorder,
      _meterInterval: 'any'
    };
  },
  created() {},
  mounted() {
    this._recorder = new AudioRecorder();
  },
  methods: {
    async startRecording() {
      if (!AudioRecorder.DEVICE_CAN_RECORD()) {
        dialogs.alert({
          message: 'This device cannot record audio.',
          okButtonText: 'Okay'
        });
        return;
      }

      const audioFolder = knownFolders.currentApp().getFolder('audio');
      console.log(JSON.stringify(audioFolder));

      let androidFormat;
      let androidEncoder;
      if (isAndroid) {
        androidFormat = android.media.MediaRecorder.OutputFormat.MPEG_4;
        androidEncoder = android.media.MediaRecorder.AudioEncoder.AAC;
      }

      const recorderOptions = {
        filename: `${audioFolder.path}/recording.${this.platformExtension()}`,

        format: androidFormat,

        encoder: androidEncoder,

        metering: true,

        infoCallback: infoObject => {
          console.log(JSON.stringify(infoObject));
        },

        errorCallback: errorObject => {
          console.log(JSON.stringify(errorObject));
        }
      };

      const result = await this._recorder.start(recorderOptions).catch(err => {
        dialogs.alert({
          message: `Start Error: ${err}`,
          okButtonText: 'Okay'
        });
      });

      if (result === true) {
        console.log(this._recorder.isRecording);
        this.isRecording = this._recorder.isRecording;
        if (recorderOptions.metering) {
          this._initMeter();
        }
      }
    },

    async pauseRecording() {
      const result = await this._recorder.pause().catch(err => {
        dialogs.alert({
          message: `Pause Error: ${err}`,
          okButtonText: 'Okay'
        });
      });
      console.log('pause result', result);
      this.isRecording = this._recorder.isRecording;
    },

    async resumeRecording() {
      const result = await this._recorder.resume().catch(err => {
        dialogs.alert({
          message: `Resume Error: ${err}`,
          okButtonText: 'Okay'
        });
      });
      console.log('resume result', result);
      this.isRecording = this._recorder.isRecording;
    },

    async stopRecording() {
      this._resetMeter();

      const stopResult = await this._recorder.stop().catch(err => {
        dialogs.alert({
          message: `Stop Error: ${err}`,
          okButtonText: 'Okay'
        });
        this._resetMeter();
      });
      if (stopResult) {
        console.log(this._recorder.isRecording);
        this.isRecording = this._recorder.isRecording;
      }
    },
    getFile() {
      try {
        const audioFolder = knownFolders.currentApp().getFolder('audio');
        const recordedFile = audioFolder.getFile(`recording.${this.platformExtension()}`);
        console.log(JSON.stringify(recordedFile));
        console.log('recording exists: ' + File.exists(recordedFile.path));
        this.recordedAudioFile = recordedFile.path;
      } catch (ex) {
        console.log(ex);
      }
    },

    async disposeRecorder() {
      const disposeResult = await this._recorder.dispose().catch(err => {
        dialogs.alert({
          message: `Dispose Error: ${err}`,
          okButtonText: 'Okay'
        });
      });
      console.log('disposeResult', disposeResult);
      this._recorder = new AudioRecorder();
    },

    platformExtension() {
      // 'mp3'
      return `${isAndroid ? 'm4a' : 'caf'}`;
    },

    _initMeter() {
      this._resetMeter();
      this._meterInterval = setInterval(() => {
        this.audioMeter = this._recorder.getMeters();
        console.log(this.audioMeter);
      }, 300);
    },

    _resetMeter() {
      if (this._meterInterval) {
        this.audioMeter = 0;
        clearInterval(this._meterInterval);
        this._meterInterval = undefined;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.btn-yellow {
    background-color: #fff000;
    color: #000;
}
</style>
