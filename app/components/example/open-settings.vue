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
      title: '打开WIFI设置'
    };
  },
  mounted() {},
  methods: {
    btnOpenWifi1: function() {
      // 打开通用设置
      wifiSettings.openGeneralSettingsOnDevice();
    },
    btnOpenWifi2: function() {
      // 打开wifi设置
      wifiSettings.openWifiSettingsOnDevice();
    },
    btnOpenWifi3: function() {
      // 打开蓝牙设置
      wifiSettings.openBluetoothSettingsOnDevice();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
