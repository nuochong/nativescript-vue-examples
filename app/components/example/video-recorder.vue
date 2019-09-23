<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="视频录制" @tap="btnVideoRecord" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { VideoRecorder, Options as VideoRecorderOptions } from 'nativescript-videorecorder';
const options = {
  hd: true,
  saveToGallery: true
};
const videorecorder = new VideoRecorder(options);
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '视频录制'
    };
  },
  mounted() {
    console.log('IOS暂时无法使用');
  },
  methods: {
    btnVideoRecord: function() {
      videorecorder
        .record()
        .then(data => {
          console.log(data.file);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
