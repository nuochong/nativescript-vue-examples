<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="判断蓝牙状态" @tap="btnIsBluetoothEnabled" />
        <Button class="btn btn-primary" text="扫描蓝牙" @tap="btnScanning" />
        <Button class="btn btn-primary" text="蓝牙权限" @tap="btnPermission" />
        <RequestContent :content="content" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Bluetooth } from 'nativescript-bluetooth';
const bluetooth = new Bluetooth();
import RequestContent from './request/request-content';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond,
    RequestContent
  },
  data() {
    return {
      title: '蓝牙',
      content: 'null'
    };
  },
  mounted() {},
  methods: {
    btnIsBluetoothEnabled: function() {
      bluetooth.isBluetoothEnabled().then(function(enabled) {
        console.log('是否启用蓝牙? ' + enabled);
        alert('是否启用蓝牙？' + enabled);
      });
    },
    btnPermission: function() {
      bluetooth.hasCoarseLocationPermission().then(function(granted) {
        // 如果这是“false”，您现在可能想调用“requestselocationpermission”
        console.log('是否拥有本地权限? ' + granted);
      });
    },
    btnScanning: function() {
      bluetooth
        .startScanning({
          serviceUUIDs: [],
          seconds: 4,
          onDiscovered: function(peripheral) {
            this.content = 'Periperhal found with UUID: ' + peripheral.UUID;
            console.log(this.content);
          },
          skipPermissionCheck: false
        })
        .then(
          function() {
            this.content = 'scanning complete';
            console.log(this.content);
          },
          function(err) {
            this.content = 'error while scanning: ' + err;
            console.log(this.content);
          }
        );
    }
  }
};
</script>

<style scoped lang="scss">
</style>
