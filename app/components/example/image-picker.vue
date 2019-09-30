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
//const openTelegramImagePicker = require('nativescript-telegram-image-picker').openTelegramImagePicker;
import { openTelegramImagePicker, TelegramPickerResponse } from '../../tools/nativescript-telegram-image-picker';
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
        // 打开Telegram Gallery图片采集活动
        openTelegramImagePicker(5).then(resp => {
          // 在响应中循环选择的图片
          for (let i = 0; i < resp.photos.length; i++) {
            console.log(resp.photos[i]);
          }
        });
      } else {
        alert('仅支持安卓');
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>
