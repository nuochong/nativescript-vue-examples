<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="打开应用" @tap="btnOpenApp" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const openApp = require('nativescript-open-app').openApp;
//const utils = require('utils/utils');
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '打开应用',
      installed: false
    };
  },
  mounted() {},
  methods: {
    btnOpenApp: function() {
      if (this.$application.ios) {
        this.installed = openApp('sms://10086', false);
        if (!this.installed) {
          this.$toast('打开失败');
          // 浏览器跳转
          // utils.openUrl('https://m.biying.cn');
        } else {
          this.$toast('打开成功');
        }
      } else {
        // com.google.android.music
        // com.google.android.apps.maps
        this.installed = openApp('com.google.android.apps.photos');
        if (!this.installed) {
          this.$toast('打开失败');
          // 浏览器跳转
          // utils.openUrl('https://m.biying.cn');
        } else {
          this.$toast('打开成功');
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>
