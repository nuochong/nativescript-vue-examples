<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="获取平台信息" @tap="btnPlatform" />
        <RequestContent :content="content" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const Observable = require("tns-core-modules/data/observable").Observable;
const platformModule = require("tns-core-modules/platform");
import RequestContent from './request/request-content';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond,
    RequestContent
  },
  data() {
    return {
      title: '获取平台信息',
      content: 'null'
    };
  },
  mounted() {},
  methods: {
    btnPlatform: function() {
      console.log('点击了按钮');
      const vm = new Observable();
      vm.set('deviceInformationmodel', platformModule.device.model);
      vm.set('deviceInformationdeviceType', platformModule.device.deviceType);
      vm.set('deviceInformationos', platformModule.device.os);
      vm.set('deviceInformationosVersion', platformModule.device.osVersion);
      vm.set('deviceInformationsdkVersion', platformModule.device.sdkVersion);
      vm.set('deviceInformationlanguage', platformModule.device.language);
      vm.set('deviceInformationmanufacturer', platformModule.device.manufacturer);
      vm.set('deviceInformationuuid', platformModule.device.uuid);
      vm.set('screenInformationheightDIPs', platformModule.screen.mainScreen.heightDIPs);
      vm.set('screenInformationheightPixels', platformModule.screen.mainScreen.heightPixels);
      vm.set('screenInformationscale', platformModule.screen.mainScreen.scale);
      vm.set('screenInformationwidthDIPs', platformModule.screen.mainScreen.widthDIPs);
      vm.set('screenInformationwidthPixels', platformModule.screen.mainScreen.widthPixels);

      vm.set('deviceInfoButton', 'Show device info');
      vm.set('screenInfoButton', 'Show screen info');
      vm.set('isItemVisible', false);
      vm.set('isItemVisibleScreenInfo', false);
      this.content = JSON.stringify(vm);
      console.log(this.content);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
