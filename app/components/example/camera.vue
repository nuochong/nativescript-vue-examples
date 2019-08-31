<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <StackLayout class="hello-world camera-container">
      <Button class="btn btn-primary" @tap="test" :text="title" />
      <Image class="camera-img" :src="img" stretch="none" ref="img" />
    </StackLayout>
  </Page>
</template>

<script>
import * as camera from 'nativescript-camera';
//let imageModule = require("tns-core-modules/ui/image");
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '相机',
      imgsrc: 'res://icon',
      img: '~/assets/images/project/johndoe.jpg'
    };
  },
  mounted() {},
  methods: {
    test: function() {
      let _this = this;
      camera.requestPermissions();
      camera
        .takePicture()
        .then(function(imageAsset) {
          console.log('Result is an image asset instance');
          //let image = new imageModule.Image();
          //image.src = imageAsset;
          _this.imgsrc = imageAsset._android;
          //this.$refs.
          //this.$refs.img.src = imageAsset;
        })
        .catch(function(err) {
          console.log('Error -> ' + err.message);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.camera-container {
  background-color: blue;
}
.camera-img {
  horizontal-align: center;
}
</style>
