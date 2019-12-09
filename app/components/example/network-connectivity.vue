<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="home-panel p-20">
        <Label textWrap="true" text="Check for network connectivity before your app requests network resources." class="label-white description-label" />
        <Button text="Check Connectivity" @tap="checkNetwork" class="btn btn-primary -primary" />
        <StackLayout class="hr-light m-20"></StackLayout>
        <Button text="Start Monitoring" @tap="monitorNetworkStart" class="btn btn-primary -primary" />
        <Label textWrap="true" class="label-white description-label" v-model="networkStatus" />
        <Button text="Stop Monitoring" @tap="monitorNetworkStop" class="btn btn-primary -primary" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const connectivity = require('connectivity');
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '网络检测',
      networkStatus: ''
    };
  },
  methods: {
    checkNetwork() {
      const connectionType = connectivity.getConnectionType();
      switch (connectionType) {
        case connectivity.connectionType.none:
          alert('没有可用的网络连接！');
          break;
        case connectivity.connectionType.wifi:
          alert('您正在使用wifi！');
          break;
        case connectivity.connectionType.mobile:
          alert('您正在使用移动数据网络！');
          break;
      }
    },
    monitorNetworkStart() {
      this.networkStatus = '监视网络连接更改。';
      connectivity.startMonitoring(newConnectionType => {
        switch (newConnectionType) {
          case connectivity.connectionType.none:
            this.networkStatus = '没有可用的网络连接！';
            break;
          case connectivity.connectionType.wifi:
            this.networkStatus = '您现在正在使用wifi！';
            break;
          case connectivity.connectionType.mobile:
            this.networkStatus = '您现在在移动数据网络上！';
            break;
        }
      });
    },
    monitorNetworkStop() {
      connectivity.stopMonitoring();
      this.networkStatus = 'No longer monitoring network connection changes.';
    }
  }
};
</script>

<style scoped lang="scss">
</style>