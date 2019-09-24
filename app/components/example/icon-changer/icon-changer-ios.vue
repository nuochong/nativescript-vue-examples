<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
          <Button class="btn btn-primary" text="修改IOS图标" @tap="btnChange" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
var AppIconChangerPlugin = require('nativescript-app-icon-changer');
var appIconChanger = new AppIconChangerPlugin.AppIconChanger();
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '修改IOS图标',
    };
  },
  mounted() {},
  methods: {
    btnChange() {
      appIconChanger.changeIcon({
        iconName: 'icon-blue', // or null to reset to the default
        suppressUserNotification: true
      });
    },
  }
};
</script>

<style scoped lang="scss">
</style>
