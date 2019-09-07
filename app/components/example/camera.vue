<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <StackLayout class="hello-world camera-container">
      <Button class="btn btn-primary" @tap="test" :text="拍照" />
      <Image class="camera-img" :src="img" stretch="none" />
    </StackLayout>
  </Page>
</template>

<script>
import * as camera from 'nativescript-camera';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '相机',
      iconsrc: 'res://icon',
      img: '~/assets/images/project/johndoe.jpg'
    };
  },
  mounted() {},
  methods: {
    test: function() {
      camera.requestPermissions();
      camera
        .takePicture()
        .then(imageAsset => {
          console.log('结果是一个映像资产实例:', imageAsset);
          this.img = imageAsset._android;
        })
        .catch(err => {
          console.log('拍照错误 -> ' + err.message);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.camera-container {
  background-color:beige;
}
.camera-img {
  horizontal-align: center;
}
</style>
