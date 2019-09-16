<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="分享" @tap="btnShare" />
        <Button class="btn btn-primary" text="分享图片" @tap="btnShareImg" />
        <Button class="btn btn-primary" text="分享文本" @tap="btnShareText" />
        <Button class="btn btn-primary" text="分享链接" @tap="btnShareUrl" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { ShareFile } from 'nativescript-share-file';
import * as fs from 'tns-core-modules/file-system';
import ActionBarSecond from '../public/action-bar-second';

var SocialShare = require('nativescript-social-share');
var imageSourceModule = require('image-source');
export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '分享',
      shareFile: '',
      fileName: '',
      documents: '',
      path: '',
      file: ''
    };
  },
  methods: {
    btnShare: function() {
      this.fileName = 'text.txt';
      this.documents = fs.knownFolders.documents();
      this.path = fs.path.join(this.documents.path, this.fileName);
      this.file = fs.File.fromPath(this.path);
      this.shareFile = new ShareFile();
      this.shareFile.open({
        path: this.path,
        intentTitle: '打开文本文件:', // Android 可选项
        rect: {
          // iPad 可选项
          x: 110,
          y: 110,
          width: 0,
          height: 0
        },
        options: true, // IOS 可选项
        animated: true // IOS 可选项
      });
    },
    btnShareImg: function() {
      var image = imageSourceModule.fromFile('~/assets/images/NativeScript-Vue.png');
      SocialShare.shareImage(image, '您想如何分享这张图片?');
    },
    btnShareText: function() {
      SocialShare.shareText('我爱 NativeScript!', '您想如何分享这篇文章?');
    },
    btnShareUrl: function() {
      SocialShare.shareUrl('https://cn.biying.com/', '必应中国', '您想如何分享这个链接?');
    }
  }
};
</script>

<style scoped lang="scss">
</style>
