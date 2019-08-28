<template>
  <Page class="page">
    <action-bar-second :title="'相机'"></action-bar-second>

    <StackLayout class="hello-world camera-container">
      <Button class="btn btn-primary" @tap="test" text="相机" />
      <Image class="camera-img" :src="imgsrc" stretch="none" ref="img" />
    </StackLayout>
  </Page>
</template>

<script>
import * as camera from 'nativescript-camera';
//var imageModule = require("tns-core-modules/ui/image");
import ActionBarSecond from './Public/ActionBarSecond';
export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      imgsrc: 'res://icon'
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
          //var image = new imageModule.Image();
          //image.src = imageAsset;
          console.log('xxx', imageAsset);
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

<style scoped>
.camera-container {
  background-color: blue;
  text-align: center;
}
.camera-img {
  margin: 0 auto;
  horizontal-align: center;
}
</style>
