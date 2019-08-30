<template>
  <Page class="page">
    <ActionBarSecond :title="'相机'"></ActionBarSecond>

    <StackLayout class="hello-world camera-container">
      <Button class="btn btn-primary" @tap="test" text="相机" />
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
      imgsrc: 'res://icon',
      img: '~/assets/icons/johndoe.jpg'
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
