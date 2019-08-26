<template>
  <Page class="page">
    <ActionBar class="action-bar" title="VUEX及相机">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>

    <StackLayout class="hello-world">
      <Label class="body" textWrap="true" text="这是一个hello world组件，如果你挑战，请点击这个按钮" />
      <Label
        class="body"
        textWrap="true"
        text="This is a hello world component, tap the button if you dare"
      />

      <Button class="btn btn-primary" @tap="surprise = !surprise" :text="title" />
      <Image v-if="surprise" src="~/assets/images/NativeScript-Vue.png" />
      <Button class="btn btn-primary" @tap="test" text="相机!" />
      <Image :src="imgsrc" stretch="none" ref="img" />
    </StackLayout>
  </Page>
</template>

<script>
import * as camera from 'nativescript-camera';
//var imageModule = require("tns-core-modules/ui/image");
export default {
  data() {
    return {
      surprise: false,
      title: '点击我！【Tap me!】',
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
