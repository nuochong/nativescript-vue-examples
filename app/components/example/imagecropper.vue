<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <!-- 在这里添加页面内容 -->
        <Button textWrap="true" class="btn btn-primary -primary" v-on:tap="do_capture">获取并编辑图像</Button>
        <Image v-bind:src="image_src" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const ImageCropper = require('nativescript-imagecropper').ImageCropper;
const camera = require('nativescript-camera');
const imageSource = require('image-source');
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '图像编辑',
      image_src: ''
    };
  },
  mounted() {
    setTimeout(() => {
      camera.requestPermissions();
    });
  },
  methods: {
    do_capture: function() {
      var self = this;
      camera
        .takePicture({ width: 300, height: 300, keepAspectRatio: true })
        .then(imageAsset => {
          let source = new imageSource.ImageSource();
          source.fromAsset(imageAsset).then(picture => {
            var imageCropper = new ImageCropper();
            imageCropper
              .show(picture)
              .then(function(args) {
                self.image_src = args.image;
              })
              .catch(function(e) {
                console.log(e);
              });
          });
        })
        .catch(err => {
          console.log('Error -> ' + err.message);
        });
    }
  }
};
</script>

<style scoped lang="scss"></style>
