<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="请求" @tap="btnRequest" />
        <Button class="btn btn-primary" text="Axios请求" @tap="btnIconPlug" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Blur } from '../../../tools/nativescript-blur';
import * as app from 'tns-core-modules/application';
let blur = new Blur(true); // 传递true以启用android上的有限使用（目前）；
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '模糊'
    };
  },
  mounted() {
    console.log('模糊安卓不可用，苹果正常。');
  },
  methods: {
    // 选择日期
    makeKittyBlurry() {
      //let kittyView = page.getViewById('kitty');
      let kittyView = this.$refs.kitty.nativeView;
      blur
        .on(kittyView, 'kitty', 'light')
        .then(imageSource => {
          if (app.android) {
            // 仅限 android
            let image = this.$refs.kitty.nativeView;
            //let image = this.page.getViewById('kitty');
            image.imageSource = imageSource; // 替换图像源
            // 插件为您提供的图片来源
          }
          console.log('Kitty has become blurry.');
        })
        .catch(e => {
          console.dir(e);
        });
    },

    clearUpKitty() {
      blur.off('kitty').then(src => {
        if (app.android) {
          // 仅限 android
          let image = this.$refs.kitty.nativeView;
          //let image = this.page.getViewById('kitty');
          // 在这里，我们从URL加载，因为我们在XML中重新分配URL，如果您已经在XML中分配了应用程序资源，则需要在此处.fromResource（）。 了解更多信息
          // https://docs.nativescript.org/cookbook/image-source
          ImageSource.fromUrl(src).then(imageSource => {
            image.imageSource = imageSource;
          });
        }
        console.log('Kitty has cleared up.');
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
