<template>
  <Page class="page">
    <ActionBarSecond :title="'获取设备信息'" />

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="getinfo" text="获取设备信息" />
    </StackLayout>
  </Page>
</template>

<script>
const platformModule = require('tns-core-modules/platform');
import ActionBarSecond from './public/action-bar-second';
export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: ''
    };
  },
  mounted() {},
  methods: {
    getinfo: function() {
      // console.log(platformModule.device.model);
      console.log('######');
      console.log(platformModule.device.model);
      console.log('######');
      // vm.set("deviceInformationmodel", platformModule.device.model);
      // vm.set("deviceInformationdeviceType", platformModule.device.deviceType);
      // vm.set("deviceInformationos", platformModule.device.os);
      // vm.set("deviceInformationosVersion", platformModule.device.osVersion);
      // vm.set("deviceInformationsdkVersion", platformModule.device.sdkVersion);
      // vm.set("deviceInformationlanguage", platformModule.device.language);
      // vm.set("deviceInformationmanufacturer", platformModule.device.manufacturer);
      // vm.set("deviceInformationuuid", platformModule.device.uuid);
      // vm.set("screenInformationheightDIPs", platformModule.screen.mainScreen.heightDIPs);
      // vm.set("screenInformationheightPixels", platformModule.screen.mainScreen.heightPixels);
      // vm.set("screenInformationscale", platformModule.screen.mainScreen.scale);
      // vm.set("screenInformationwidthDIPs", platformModule.screen.mainScreen.widthDIPs);
      // vm.set("screenInformationwidthPixels", platformModule.screen.mainScreen.widthPixels);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
