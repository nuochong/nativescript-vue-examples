<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="获取平台信息" @tap="btnPlatform" />
        <Button class="btn btn-primary -primary" text="检测平台类型" @tap="checkPlatformType" />
        <RequestContent :content="content" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const Observable = require('tns-core-modules/data/observable').Observable;
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
      const platform = this.$platform;
      vm.set('deviceInformationmodel', platform.device.model);
      vm.set('deviceInformationdeviceType', platform.device.deviceType);
      vm.set('deviceInformationos', platform.device.os);
      vm.set('deviceInformationosVersion', platform.device.osVersion);
      vm.set('deviceInformationsdkVersion', platform.device.sdkVersion);
      vm.set('deviceInformationlanguage', platform.device.language);
      vm.set('deviceInformationmanufacturer', platform.device.manufacturer);
      vm.set('deviceInformationuuid', platform.device.uuid);
      vm.set('screenInformationheightDIPs', platform.screen.mainScreen.heightDIPs);
      vm.set('screenInformationheightPixels', platform.screen.mainScreen.heightPixels);
      vm.set('screenInformationscale', platform.screen.mainScreen.scale);
      vm.set('screenInformationwidthDIPs', platform.screen.mainScreen.widthDIPs);
      vm.set('screenInformationwidthPixels', platform.screen.mainScreen.widthPixels);

      vm.set('deviceInfoButton', 'Show device info');
      vm.set('screenInfoButton', 'Show screen info');
      vm.set('isItemVisible', false);
      vm.set('isItemVisibleScreenInfo', false);
      this.content = JSON.stringify(vm);
      console.log(this.content);
    },
    checkPlatformType: function(args) {
      if (this.$platform.isAndroid) {
        this.content = '您正在使用Android设备';
      } else if (this.$platform.isIOS) {
        this.content = '您使用的是IOS设备';
      }
      console.log(this.content);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
