<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="图片选择器" @tap="whateverYouLike" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '图片选择器'
    };
  },
  mounted() {},
  methods: {
    whateverYouLike() {
      if (this.$application.android) {
        let openTelegramImagePicker = require('nativescript-telegram-image-picker').openTelegramImagePicker
        //import { openTelegramImagePicker, TelegramPickerResponse } from 'nativescript-telegram-image-picker';
        // Open the Telegram Gallery Image Picker Activity
        openTelegramImagePicker(5).then(resp => {
          // looping over the selected pictures in the response
          for (var i = 0; i < resp.photos.length; i++) {
            console.log(resp.photos[i]);
          }
        });
      }else{
        alert('仅支持安卓')
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>
