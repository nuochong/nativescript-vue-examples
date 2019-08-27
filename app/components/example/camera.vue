<template>
  <Page class="page">
    <me-actionbar :title="'相机'"></me-actionbar>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="test" text="相机" />
      <Image :src="imgsrc" stretch="none" ref="img" />
    </StackLayout>
  </Page>
</template>

<script>
import * as camera from 'nativescript-camera';
//var imageModule = require("tns-core-modules/ui/image");
import meActionbar from './public/actionbar';
export default {
  components: {
    meActionbar
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
.hello-world {
  margin: 20;
}

label {
  color: red;
}
</style>
