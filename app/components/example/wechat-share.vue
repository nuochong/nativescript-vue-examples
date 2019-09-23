<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="分享文字" @tap="btnWechatShareText" />
        <Button class="btn btn-primary" text="分享链接" @tap="btnWechatShareLink" />
        <Button class="btn btn-primary" text="分享本地图片" @tap="btnWechatShareLocalImg" />
        <Button class="btn btn-primary" text="分享在线图片" @tap="btnWechatShareOnlineImg" />
        <Button class="btn btn-primary" text="分享音乐" @tap="btnWechatShareMusic" />
        <Button class="btn btn-primary" text="分享视频" @tap="btnWechatShareVideo" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
// import * as fs from 'file-system';
// const appPath = fs.knownFolders.currentApp();
// const applePath = fs.path.join(appPath.path, 'img', 'apple.jpg');
// import { WechatSharePlugin, WechatSharingScene, WechatSharingType } from 'nativescript-wechat-share-plugin';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '微信分享'
    };
  },
  mounted() {
    console.log('android正常，如果安装，IOS报错，导致安卓也无法使用')
  },
  methods: {
    btnWechatShareText: function() {
      let wechatSharePlugin = new WechatSharePlugin(/*YOUR_WECHAT_APP_ID*/);
      let sharingOptions = {
        scene: WechatSharingScene.TIMELINE,
        text: 'this is a test text.'
      };
      wechatSharePlugin.share(sharingOptions);
    },
    btnWechatShareLink: function() {
      let wechatSharePlugin = new WechatSharePlugin(/*YOUR_WECHAT_APP_ID*/);

      let sharingOptions = {
        scene: WechatSharingScene.TIMELINE,
        messages: {
          media: {
            type: WechatSharingType.TYPE_SHARING_WEBPAGE,
            webpageUrl: 'https://open.weixin.qq.com/'
          }
        }
      };
      wechatSharePlugin.share(sharingOptions);
    },
    btnWechatShareLocalImg: function() {
      let wechatSharePlugin = new WechatSharePlugin(/*YOUR_WECHAT_APP_ID*/);

      let sharingOptions = {
        scene: WechatSharingScene.TIMELINE,
        messages: {
          title: 'test title',
          description: 'test description',
          media: {
            type: WechatSharingType.TYPE_SHARING_IMAGE,
            image: applePath
          }
        }
      };
      wechatSharePlugin.share(sharingOptions);
    },
    btnWechatShareOnlineImg: function() {
      let wechatSharePlugin = new WechatSharePlugin(/*YOUR_WECHAT_APP_ID*/);

      let sharingOptions = {
        scene: WechatSharingScene.TIMELINE,
        messages: {
          title: 'shareOnlineImageToWechat title',
          description: 'shareOnlineImageToWechat description',
          media: {
            type: WechatSharingType.TYPE_SHARING_IMAGE,
            image:
              'http://mmbiz.qpic.cn/mmbiz/PiajxSqBRaEIVJ6bW5EhIpIVZuxavukF9zUCzuoAKicofAtxibTBZOzsgP73GtO7jkkH2MQke21fOFC6Pnm0JvC6Q/0?wx_fmt=png/'
          }
        }
      };
      wechatSharePlugin.share(sharingOptions);
    },
    btnWechatShareMusic: function() {
      let wechatSharePlugin = new WechatSharePlugin(/*YOUR_WECHAT_APP_ID*/);

      let sharingOptions = {
        scene: WechatSharingScene.TIMELINE,
        messages: {
          title: 'shareMusicToWechat title',
          description: 'shareMusicToWechat description',
          media: {
            type: WechatSharingType.TYPE_SHARING_MUSIC,
            image: 'http://staff2.ustc.edu.cn/~wdw/softdown/index.asp/0042515_05.ANDY.mp3'
          }
        }
      };
      wechatSharePlugin.share(sharingOptions);
    },
    btnWechatShareVideo: function() {
      let wechatSharePlugin = new WechatSharePlugin(/*YOUR_WECHAT_APP_ID*/);

      let sharingOptions = {
        scene: WechatSharingScene.TIMELINE,
        messages: {
          title: 'shareVideoToWechat title',
          description: 'shareVideoToWechat description',
          media: {
            type: WechatSharingType.TYPE_SHARING_VIDEO,
            image: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
          }
        }
      };
      wechatSharePlugin.share(sharingOptions);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
