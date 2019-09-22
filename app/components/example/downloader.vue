<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="p-20">
        <Label class="label-white">
          <FormattedString>
            <Span text="File Download Speed " />
            <Span :text="fileSpeed + 'bytes/s'" />
          </FormattedString>
        </Label>
        <Label class="label-white">
          <FormattedString>
            <Span text="Image Download Speed " />
            <Span :text="imageSpeed + 'bytes/s'" />
          </FormattedString>
        </Label>

        <Label class="label-white" text="File Progress" />
        <Label class="label-white" :text="fileProgress" />
        <Progress :value="fileProgress" />

        <Label class="label-white" text="Image Progress" />
        <Label class="label-white" :text="imageProgress" />
        <Progress :value="imageProgress" />

        <Image height="40%" :src=" image " />
        <Button class="btn btn-primary" text="生成下载" @tap=" generateDownloads " />
        <Button class="btn btn-primary" text="生成并开始下载" @tap=" generateAndStart " />
        <Button class="btn btn-primary" text="下载测试文件" @tap=" downloadFile " />
        <Button class="btn btn-primary" text="暂停测试文件" @tap=" pauseFile " />
        <Button class="btn btn-primary" text="恢复测试文件" @tap=" resumeFile " />
        <Button class="btn btn-primary" text="下载图片" @tap=" downloadImage " />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Observable } from 'tns-core-modules/data/observable';
import { Downloader, ProgressEventData, DownloadEventData, DownloadEventError } from 'nativescript-downloader';
import * as fs from 'tns-core-modules/file-system';
Downloader.init(); // <= Try calling this after the app launches to start the downloader service
//Downloader.setTimeout(120); //Increase timeout default 60s
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '下载',
      downloadManager: Downloader,
      fileDownloaderId: 'string',
      imageDownloaderId: 'string',
      fileSpeed: 0,
      imageSpeed: 0,
      image: fs.knownFolders.documents().path + 'beach.jpg'
    };
  },
  mounted() {},
  methods: {
    generateDownloads() {
      this.downloadManager = new Downloader();
      this.fileProgress = 0;
      this.imageProgress = 0;
      this.imageDownloaderId = this.downloadManager.createDownload({
        path: fs.knownFolders.documents().path,
        fileName: 'beach.jpg',
        url:
          'https://images.unsplash.com/photo-1530559423894-148fad85faf7?ixlib=rb-0.3.5&q=100&fm=jpg&crop=entropy&cs=srgb&dl=daria-kopylova-723534-unsplash.jpg&s=46720eb1ac5a8e23d6ee46e73b64246e'
      });
      console.log(`Image Id :${this.imageDownloaderId} `);

      this.fileDownloaderId = this.downloadManager.createDownload({
        url: 'http://ipv4.download.thinkbroadband.com/50MB.zip'
      });
      console.log(`File Id :${this.fileDownloaderId} `);
    },

    generateAndStart() {
      this.generateDownloads();
      this.downloadFile();
      this.downloadImage();
    },

    downloadFile() {
      this.downloadManager
        .start(this.fileDownloaderId, progressData => {
          this.fileProgress = progressData.value;
          this.fileSpeed = progressData.speed;
        })
        .then(completed => {
          console.log(`File : ${completed.path}`);
        })
        .catch(error => {
          console.log(error.message);
        });
    },

    pauseFile() {
      this.downloadManager.pause(this.fileDownloaderId);
    },

    resumeFile() {
      this.downloadManager.resume(this.fileDownloaderId);
    },

    downloadImage() {
      this.downloadManager
        .start(this.imageDownloaderId, progressData => {
          this.imageProgress = progressData.value;
          this.imageSpeed = progressData.speed;
        })
        .then(completed => {
          console.log(`Image : ${completed.path}`);
          this.set('image', completed.path);
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
