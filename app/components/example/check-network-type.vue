<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="检测网络类型" @tap="btnCheckNetworkType" />
        <RequestContent :content="content" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const connectivityModule = require('tns-core-modules/connectivity');
import RequestContent from './request/request-content';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond,
    RequestContent
  },
  data() {
    return {
      title: '检测网络类型',
      content: 'null'
    };
  },
  mounted() {},
  methods: {
    btnCheckNetworkType: function() {
      console.log('点击了按钮：');
      const myConnectionType = connectivityModule.getConnectionType();
      switch (myConnectionType) {
        case connectivityModule.connectionType.none:
          // Denotes no Internet connection.
          this.content = 'No connection';
          break;
        case connectivityModule.connectionType.wifi:
          // Denotes a WiFi connection.
          this.content = 'WiFi connection';
          break;
        case connectivityModule.connectionType.mobile:
          // Denotes a mobile connection, i.e. cellular network or WAN.
          this.content = 'Mobile connection';
          break;
        case connectivityModule.connectionType.ethernet:
          // Denotes a ethernet connection.
          this.content = 'Ethernet connection';
          break;
        case connectivityModule.connectionType.bluetooth:
          // Denotes a bluetooth connection.
          this.content = 'Bluetooth connection';
          break;
        default:
          break;
      }
      console.log(this.content);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
