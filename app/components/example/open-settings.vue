<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="启动" @tap="btnOpenWifi1" />
        <Button class="btn btn-primary" text="停止" @tap="btnOpenWifi2" />
        <Button class="btn btn-primary" text="停止" @tap="btnOpenWifi3" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const wifiSettings = require('nativescript-app-settings');
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '打开wifi设置'
    };
  },
  mounted() {},
  methods: {
    btnOpenWifi1: function() {
      // open general settings
      wifiSettings.openGeneralSettingsOnDevice();
    },
    btnOpenWifi2: function() {
      // open wifi settings
      wifiSettings.openWifiSettingsOnDevice();
    },
    btnOpenWifi3: function() {
      // open bluetooth settings
      wifiSettings.openBluetoothSettingsOnDevice();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
