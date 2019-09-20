<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <TabView :selectedIndex="selectedIndex" tabsBackgroundColor="#3F51B5" selectedColor="#FF4081">
      <TabViewItem title="录音">
        <ScrollView>
          <StackLayout class="p-10" width="100%">
            <ActivityIndicator color="#3489db" :busy=" isRecording " />
            <button row="0" col="0" class="btn btn-primary" ios:borderRadius="4" text="开始记录" @tap=" startRecord " />
            <Label class="label-white" :text=" '计值: ' + audioMeter " textWrap="true" />
            <button class="btn btn-primary" ios:borderRadius="4" text="停止记录" @tap=" stopRecord " />
            <button class="btn accent-btn" ios:borderRadius="4" text="获取文件" @tap=" getFile " />
            <label :text=" recordedAudioFile " class="label-white gray" textWrap="true" />
            <button class="btn b t n" ios:borderRadius="4" text="播放录制的文件" @tap=" playRecordedFile " />
            <button class="btn btn-primary" ios:borderRadius="4" text="停止播放" @tap=" pauseAudio " />
          </StackLayout>
        </ScrollView>
      </TabViewItem>
      <TabViewItem title="播放">
        <ScrollView>
          <GridLayout rows="auto, auto, auto, auto, auto, auto, auto, auto, auto, auto, auto, auto, auto, auto" columns="*, *, *" class="p-10">
            <label row="0" colSpan="3" class="center text-primary h3" text="欢迎加入搏击俱乐部!" textWrap="true" />
            <button row="1" colSpan="3" class="btn btn-primary" ios:borderRadius="4" text="玩远程音频" @tap=" playRemoteFile " />
            <label row="2" colSpan="3" text="注意:由于处理和网络速度的原因，远程文件在播放之前可能会有延迟。" class="h3" textWrap="true" />
            <Label row="3" colSpan="3" text="" class="hr-dark" textWrap="true" />
            <button row="4" colSpan="3" class="btn btn-primary" ios:borderRadius="4" text="播放本地音频文件" @tap=" playLocalFile " />
            <label row="5" colSpan="3" class="blue h3 text-center" text="Angel - Theory of a Deadman" textWrap="true" />
            <Button row="6" col="0" class="btn btn-primary" ios:borderRadius="4" text="暂停" @tap=" pauseAudio " />
            <Button row="6" col="1" class="btn btn-primary" ios:borderRadius="4" text="继续" @tap=" resumePlayer " />
            <button row="6" col="2" class="btn btn-primary" ios:borderRadius="4" text="停止" @tap=" stopPlaying " />
            <Label row="7" colSpan="3" text="Android上的玩家速度只有API 23+" class="h4" textWrap="true" />
            <Button row="8" col="0" text="速度 1" class="btn accent-btn" ios:borderRadius="4" @tap=" playSpeed1 " />
            <Button row="8" col="1" text="速度 1.5" class="btn accent-btn" ios:borderRadius="4" @tap=" playSpeed15 " />
            <Button row="8" col="2" text="速度 2" class="btn accent-btn" ios:borderRadius="4" @tap=" playSpeed2 " />
            <Label row="9" col="0" :text=" '时间: ' + audioTrackDuration " textWrap="true" />
            <Label row="9" col="2" :text=" '剩余时间: ' + remainingDuration " textWrap="true" />
            <Label row="10" col="0" text="音量滑块: " textWrap="true" class="m-t-20" />
            <Slider row="10" col="1" colSpan="2" id="volumeSlider" ref="volumeSlider" minValue="0" maxValue="100" value="100" class="m-t-20" />
            <Label row="11" :text=" '播放器当前音量: ' + currentVolume " textWrap="true" />
            <Button row="12" col="0" text="静音" class="btn btn-primary" ios:borderRadius="4" @tap=" muteTap " />
            <Button row="12" col="1" text="恢复" class="btn btn-primary" ios:borderRadius="4" @tap=" unmuteTap " />
            <Button row="13" col="0" colSpan="2" text="转到8秒" class="btn btn-primary" ios:borderRadius="4" @tap=" skipTo8 " />
          </GridLayout>
        </ScrollView>
      </TabViewItem>
      <TabViewItem title="简单示例">
        <ScrollView>
          <StackLayout class="p-10" width="100%">
            <Button class="btn btn-primary" text="简单示例" @tap="playSample" />
          </StackLayout>
        </ScrollView>
      </TabViewItem>
    </TabView>

  </Page>
</template>

<script>
import ActionBarSecond from '../public/action-bar-second';

import { AudioPlayerOptions, AudioRecorderOptions, TNSPlayer, TNSRecorder } from 'nativescript-audio';
import * as app from 'tns-core-modules/application';
import { File, knownFolders } from 'tns-core-modules/file-system';
import { isAndroid } from 'tns-core-modules/platform';
import * as timer from 'tns-core-modules/timer';
import { Slider } from 'tns-core-modules/ui/slider';
import './async-await';
import { Prop } from './prop';
import { topmost } from 'tns-core-modules/ui/frame';

const audioSample = require('nativescript-audio');
const playerSample = new audioSample.TNSPlayer();

let _recorder;
export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '音频',
      selectedIndex: 0,
      isPlaying: false,
      isRecording: false,
      audioMeter: '0',
      recordedAudioFile: 'string',
      currentVolume: 0,
      audioTrackDuration: 0,
      remainingDuration: 0, // 用于显示音轨的剩余时间
      //_recorder,
      _player: TNSPlayer,
      _audioSessionId: 0,
      _lastRecordedAudioFile: 'string',
      _audioUrls: [
        {
          name: 'Fight Club',
          pic: '~/pics/canoe_girl.jpeg',
          url: 'http://www.noiseaddicts.com/samples_1w72b820/2514.mp3'
        },
        {
          name: 'To The Bat Cave!!!',
          pic: '~/pics/bears.jpeg',
          url: 'http://www.noiseaddicts.com/samples_1w72b820/17.mp3'
        },
        {
          name: 'Marlon Brando',
          pic: '~/pics/northern_lights.jpeg',
          url: 'http://www.noiseaddicts.com/samples_1w72b820/47.mp3'
        }
      ],
      _meterInterval: 'any',
      _slider: 'Slider'
    };
  },
  mounted() {
    console.log('fdfdfdfdfd', this._slider);
    this._player = new TNSPlayer();
    this._player.debug = true; // set true for tns_player logs

    this._recorder = new TNSRecorder();
    this._recorder.debug = true; // set true for tns_recorder logs

    this.currentVolume = 1;
    this._slider = this.$refs.volumeSlider.nativeView;
    //this._slider = topmost().currentPage.getViewById('volumeSlider');
    //this._slider = page.getViewById('volumeSlider') as Slider;

    // Set player volume
    if (this._slider) {
      this._slider.on('valueChange', data => {
        console.log('监控音量1', this._slider.value);
        this._player.volume = this._slider.value / 100;
        console.log('监控音量2', this._player.volume);
      });
    }
  },
  methods: {
    playSample() {
      console.log('点解了');
      const playerOptions = {
        audioFile: 'http://ting6.yymp3.net:86/new27/liyugang6/6.mp3',
        loop: false,
        completeCallback: function() {
          console.log('finished playing');
        },
        errorCallback: function(errorObject) {
          console.log(JSON.stringify(errorObject));
        },
        infoCallback: function(args) {
          console.log(JSON.stringify(args));
        }
      };

      playerSample
        .playFromUrl(playerOptions)
        .then(function(res) {
          console.log(res);
        })
        .catch(function(err) {
          console.log('something went wrong...', err);
        });
    },
    async startRecord() {
      try {
        if (!TNSRecorder.CAN_RECORD()) {
          alert('此设备不能录制音频。');
          return;
        }
        const audioFolder = knownFolders.currentApp().getFolder('audio');
        console.log(JSON.stringify(audioFolder));

        let androidFormat;
        let androidEncoder;
        if (isAndroid) {
          // m4a
          // static constants, using raw values here
          // androidFormat = android.media.MediaRecorder.OutputFormat.MPEG_4;
          androidFormat = 2;
          // androidEncoder = android.media.MediaRecorder.AudioEncoder.AAC;
          androidEncoder = 3;
        }

        const dateTime = this._createDateTimeStamp();

        this._lastRecordedAudioFile = `${audioFolder.path}/recording_${dateTime}.${this.platformExtension()}`;
        console.log('录制音频文件路径', this._lastRecordedAudioFile);

        const recorderOptions = {
          filename: this._lastRecordedAudioFile,

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

        await this._recorder.start(recorderOptions);
        this.isRecording = true;
        if (recorderOptions.metering) {
          this._initMeter();
        }
      } catch (err) {
        this.isRecording = false;
        this._resetMeter();
        alert(err);
      }
    },

    async stopRecord() {
      this._resetMeter();
      await this._recorder.stop().catch(ex => {
        console.log(ex);
        this.isRecording = false;
        this._resetMeter();
      });

      this.isRecording = false;
      alert('Recorder stopped.');
      this._resetMeter();
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
        this.audioMeter = '0';
        clearInterval(this._meterInterval);
        this._meterInterval = undefined;
      }
    },

    getFile() {
      try {
        const audioFolder = knownFolders.currentApp().getFolder('audio');
        // get the last recorded audio file
        const recordedFile = audioFolder.getFile(this._lastRecordedAudioFile);

        console.log(JSON.stringify(recordedFile));
        console.log('记录存在：' + File.exists(recordedFile.path));
        this.recordedAudioFile = recordedFile.path;
      } catch (ex) {
        console.log(ex);
      }
    },

    async playRecordedFile() {
      const audioFolder = knownFolders.currentApp().getFolder('audio');
      console.log('音频文件夹：', audioFolder);
      // 获取最后录制的音频文件
      const recordedFile = audioFolder.getFile(this._lastRecordedAudioFile);

      console.log('记录目录： ' + JSON.stringify(recordedFile));

      const playerOptions = {
        // audioFile: `~/audio/recording.${this.platformExtension()}`,
        audioFile: recordedFile.path,
        loop: false,
        completeCallback: async () => {
          alert('音频文件完成。');
          this.isPlaying = false;
          if (!playerOptions.loop) {
            await this._player.dispose();
            console.log('player disposed');
          }
        },

        errorCallback: errorObject => {
          console.log(JSON.stringify(errorObject));
          this.isPlaying = false;
        },

        infoCallback: infoObject => {
          console.log(JSON.stringify(infoObject));
          alert('回调信息');
        }
      };

      await this._player.playFromFile(playerOptions).catch(err => {
        console.log('错误的播放目录');
        this.isPlaying = false;
      });

      this.isPlaying = true;
    },

    /***** AUDIO PLAYER *****/

    async playAudio(filepath, fileType) {
      try {
        const playerOptions = {
          audioFile: filepath,
          loop: false,
          completeCallback: async () => {
            alert('音频文件完成。');
            await this._player.dispose();
            this.isPlaying = false;
            console.log('player disposed');
          },
          errorCallback: errorObject => {
            console.log(JSON.stringify(errorObject));
            this.isPlaying = false;
          },
          infoCallback: args => {
            alert('回掉信息: ' + args.info);
            console.log(JSON.stringify(args));
          }
        };

        this.isPlaying = true;
        //console.log('到这里了111', fileType);
        //只有tifleType为本地音频时才会显示时间，转到下边
        if (fileType === 'localFile') {
          await this._player.playFromFile(playerOptions).catch(error => {
            console.log(error);
            this.isPlaying = false;
          });

          this.isPlaying = true;

          this.audioTrackDuration = await this._player.getAudioTrackDuration();
          // 启动音频持续时间跟踪

          this._startDurationTracking(this.audioTrackDuration);
          this._startVolumeTracking();
        } else if (fileType === 'remoteFile') {
          await this._player.playFromUrl(playerOptions).catch(error => {
            console.log(error);
            this.isPlaying = false;
          });
          this.isPlaying = true;
        }
      } catch (ex) {
        console.log(ex);
      }
    },

    /**
     * PLAY REMOTE AUDIO FILE
     */
    playRemoteFile() {
      console.log('playRemoteFile');
      const filepath = 'http://www.noiseaddicts.com/samples_1w72b820/2514.mp3';

      this.playAudio(filepath, 'remoteFile');
    },

    resumePlayer() {
      console.log(JSON.stringify(this._player));
      this._player.resume();
    },

    /**
     * PLAY LOCAL AUDIO FILE from app folder
     */
    playLocalFile() {
      const filepath = '~/audio/angel.mp3';
      this.playAudio(filepath, 'localFile');
    },

    /**
     * PAUSE PLAYING
     */
    async pauseAudio() {
      try {
        await this._player.pause();
        this.isPlaying = false;
      } catch (error) {
        console.log(error);
        this.isPlaying = true;
      }
    },

    async stopPlaying() {
      await this._player.dispose();
      alert('媒体播放器处理。');
    },

    /**
     * RESUME PLAYING
     */
    resumePlaying() {
      console.log('开始');
      this._player.play();
    },

    muteTap() {
      this._player.volume = 0;
    },

    unmuteTap() {
      this._player.volume = 1;
    },

    skipTo8() {
      this._player.seekTo(8);
    },

    playSpeed1() {
      this._player.changePlayerSpeed(1);
    },

    playSpeed15() {
      this._player.changePlayerSpeed(1.5);
    },

    playSpeed2() {
      this._player.changePlayerSpeed(2);
    },

    platformExtension() {
      // 'mp3'
      return `${app.android ? 'm4a' : 'caf'}`;
    },

    async _startDurationTracking(duration) {
      console.log('追踪xxx', this._player.isAudioPlaying());
      console.log('追踪xxx', this._player);
      if (this._player && this._player.isAudioPlaying()) {
        console.log('追踪xxx');
        const timerId = timer.setInterval(() => {
          this.remainingDuration = duration - this._player.currentTime;
          // console.log(`this.remainingDuration = ${this.remainingDuration}`);
        }, 1000);
      }
    },

    _startVolumeTracking() {
      console.log('音量部分');
      if (this._player) {
        const timerId = timer.setInterval(() => {
          console.log('容积追踪', this._player.volume);
          this.currentVolume = this._player.volume;
        }, 2000);
      }
    },

    /**
     * Create date time stamp similar to Java Date()
     */
    _createDateTimeStamp() {
      let result = '';
      const date = new Date();
      result =
        date.getFullYear().toString() +
        (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()) +
        (date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString()) +
        '_' +
        date.getHours().toString() +
        date.getMinutes().toString() +
        date.getSeconds().toString();
      return result;
    }
  }
};
</script>

<style scoped lang="scss">
.message {
  color: #000;
  font-size: 40;
  horizontal-align: center;
  padding: 20;
}

.material-icons {
  font-family: MaterialIcons-Regular, Material Icons;
}

.center {
  horizontal-align: center;
}

.accent-btn {
  background-color: #ff4081;
}
</style>
