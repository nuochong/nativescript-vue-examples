<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button text="改变视频" class="btn btn-rounded-sm btn-primary" @tap=" changeVideoSource " />
        <GridLayout rows="auto, auto" columns="auto, *" margin="10">
          <Label row="0" col="0" class="label-white" text="当前时间: " textWrap="true" />
          <Label row="0" col="1" :text=" currentTime " class="message" textWrap="true" />
          <Label row="1" col="0" text="视频时间: " textWrap="true" />
          <Label row="1" col="1" class="label-white message" :text=" videoDuration " textWrap="true" />
        </GridLayout>
        <GridLayout rows="*" columns="*, *" backgroundColor="#000000">
          <Video id="nativeVideoPlayer" ref="nativeVideoPlayer" controls="true" :loadingComplete=" videoCompleted " :finished=" videoFinished " loop="false" autoplay="true"
            height="280" :src=" videoSrc " row="0" colSpan="2" />
          <Label text="Label On Top of Video View" row="0" colSpan="2" color="#fff" horizontalAlignment="center" />
        </GridLayout>
        <GridLayout rows="*" columns="*, *" orientation="horizontal">
          <Button col="0" text="暂停" class="btn btn-rounded-sm btn-primary" width="35%" @tap=" pauseVideo " />
          <Button col="1" text="播放" class="btn btn-rounded-sm btn-primary" width="35%" @tap=" playVideo " />
        </GridLayout>
        <android>
          <Button text="停止" class="btn btn-rounded-sm btn-primary" @tap=" stopVideo " />
        </android>
        <GridLayout rows="*" columns="*, *" orientation="horizontal">
          <Button col="0" text="静音" class="btn btn-rounded-sm btn-primary" width="33%" @tap=" muteVideo " />
          <Button col="1" text="开启" class="btn btn-rounded-sm btn-primary" width="33%" @tap=" unmuteVideo " />
        </GridLayout>
        <Button text="转到30秒" class="btn btn-rounded-sm btn-primary" tap=" goToTime " />
        <Button text="动画" class="btn btn-rounded-sm btn-primary" @tap=" animate " />
        <Button text="可编程视频播放器" class="btn btn-rounded-sm btn-primary" @tap=" createVideoPlayer " />
        <Label class="label-white" text="这个按钮^^^将通过代码创建一个新的视频播放器，向下滚动查看。" textWrap="true" />
        <StackLayout id="emptyStack"></StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Video } from 'nativescript-videoplayer';
import { Observable } from 'tns-core-modules/data/observable';
import { isAndroid } from 'tns-core-modules/platform';
import { setInterval } from 'tns-core-modules/timer';
import { topmost } from 'tns-core-modules/ui/frame';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Page } from 'tns-core-modules/ui/page';
import { Prop } from './prop';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '视频2',
      videoSrc: 'string',
      currentTime: 'any',
      videoDuration: 'any',
      _videoPlayer: Video,
      completed: false
    };
  },
  mounted() {
    this.completed = false;
    this._videoPlayer = this.$refs.nativeVideoPlayer.nativeView;
    // this._videoPlayer = topmost().currentPage.getViewById('nativeVideoPlayer');
    this._videoPlayer.debug = true;
    // 视频事件监听器设置
    this._videoPlayer.on(Video.finishedEvent, args => {
      console.log('Video.finishedEvent executed');
    });
    this._videoPlayer.on(Video.errorEvent, args => {
      console.log('Video.errorEvent executed');
    });
    this._videoPlayer.on(Video.playbackReadyEvent, args => {
      console.log('Video.playbackReadyEvent executed');
    });
    this._videoPlayer.on(Video.playbackStartEvent, args => {
      console.log('Video.playbackStartEvent executed');
    });
    this._videoPlayer.on(Video.seekToTimeCompleteEvent, args => {
      console.log('Video.seekToTimeCompleteEvent executed');
    });

    this._videoPlayer.on(Video.pausedEvent, args => {
      console.log('Video.pausedEvent');
    });

    this._videoPlayer.on(Video.mutedEvent, args => {
      console.log('Video.mutedEvent');
    });

    this._videoPlayer.on(Video.unmutedEvent, args => {
      console.log('Video.unmutedEvent');
    });

    this.currentTime = '';
    this.videoDuration = '';
    //this.videoSrc = '~/assets/videos/small.mp4';
    this.videoSrc = 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
    this.trackVideoCurrentPosition();
  },
  methods: {
    /**
     * 视频完成回调
     */
    videoFinished(args) {
      this.completed = true;
    },

    /**
     * 暂停视频
     */
    pauseVideo() {
      this._videoPlayer.pause();
    },

    /**
     * 播放视频
     */
    playVideo() {
      this._videoPlayer.play();
      this.completed = false;
    },
    /**
     * 停止视频播放器
     */
    stopVideo() {
      if (isAndroid) {
        this._videoPlayer.stop();
      }
    },

    /**
     * 获取视频时长
     */
    getVideoDuration() {
      let videoDuration = this._videoPlayer.getDuration();
      console.log('Video Duration: ' + videoDuration);
      this.set('videoDuration', videoDuration);
    },

    /**
     * 转到30秒
     */
    goToTime() {
      try {
        this._videoPlayer.seekToTime(30000);
      } catch (err) {
        console.log(err);
      }
    },

    createVideoPlayer() {
      const video = new Video();
      video.height = 200;
      video.width = 175;
      video.src = 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
      video.controls = false;
      video.autoplay = true;
      const stack = topmost().getViewById('emptyStack');
      stack.addChild(video);
    },

    muteVideo() {
      this._videoPlayer.mute(true);
    },

    unmuteVideo() {
      this._videoPlayer.mute(false);
    },

    /**
     * 获取视频当前时间
     */
    getVideoCurrentTime() {
      try {
        let currentTime = this._videoPlayer.getCurrentTime();
        console.log('Current Time: ' + currentTime);
      } catch (err) {
        console.log(err);
      }
    },

    /**
     * 更改video src属性
     */
    changeVideoSource() {
      if (this.videoSrc === '~/assets/videos/small.mp4') {
        this._videoPlayer.src = 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
      } else {
        this._videoPlayer.src = '~/assets/videos/small.mp4';
      }
    },

    trackVideoCurrentPosition() {
      let trackInterval = setInterval(() => {
        let x, y;
        if (this.completed) {
          x = '';
          y = '';
        } else {
          x = this._videoPlayer.getCurrentTime();
          y = this._videoPlayer.getDuration();
        }
        this.currentTime = x;
        this.videoDuration = y;
      }, 200);
      return trackInterval;
    }
  }
};
</script>

<style scoped lang="scss">
.title {
  font-size: 16;
  horizontal-align: center;
  margin: 20;
}
button {
  horizontal-align: center;
}
.message {
  font-size: 20;
  color: #284848;
  horizontal-align: center;
  margin-right: 5;
}
</style>
