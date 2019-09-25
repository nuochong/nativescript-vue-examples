<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="home-panel p-20">
        <Label textWrap="true" text="Check for network connectivity before your app requests network resources." class="description-label" />
        <Button text="Check Connectivity" @tap="checkNetwork" class="btn btn-primary" />
        <StackLayout class="hr-light m-20"></StackLayout>
        <Button text="Start Monitoring" @tap="monitorNetworkStart" class="btn btn-primary" />
        <Label textWrap="true" class="description-label" v-model="networkStatus" />
        <Button text="Stop Monitoring" @tap="monitorNetworkStop" class="btn btn-primary" />
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
          alert('No network connection available!');
          break;
        case connectivity.connectionType.wifi:
          alert('You are on wifi!');
          break;
        case connectivity.connectionType.mobile:
          alert('You are on a mobile data network!');
          break;
      }
    },
    monitorNetworkStart() {
      this.networkStatus = 'Monitoring network connection changes.';
      connectivity.startMonitoring(newConnectionType => {
        switch (newConnectionType) {
          case connectivity.connectionType.none:
            this.networkStatus = 'No network connection available!';
            break;
          case connectivity.connectionType.wifi:
            this.networkStatus = 'You are now on wifi!';
            break;
          case connectivity.connectionType.mobile:
            this.networkStatus = 'You are now on a mobile data network!';
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