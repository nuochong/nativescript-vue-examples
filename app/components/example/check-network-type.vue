<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="检测网络类型" @tap="btnCheckNetworkType" />
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
          // 表示没有Internet连接。
          this.content = 'No connection';
          break;
        case connectivityModule.connectionType.wifi:
          // 表示WiFi连接。
          this.content = 'WiFi connection';
          break;
        case connectivityModule.connectionType.mobile:
          // 表示移动连接，即蜂窝网络或WAN。
          this.content = 'Mobile connection';
          break;
        case connectivityModule.connectionType.ethernet:
          // 表示以太网连接。
          this.content = 'Ethernet connection';
          break;
        case connectivityModule.connectionType.bluetooth:
          // 表示蓝牙连接。
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
