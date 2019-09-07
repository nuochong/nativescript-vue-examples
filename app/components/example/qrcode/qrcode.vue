<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <StackLayout class="hello-world">
      <Label textWrap="true" text="这是一个扫描二维码的演示" />
      <Button class="btn btn-primary" text="扫描二维码" @tap="scan" />
      <Image src="~/assets/images/NativeScript-Vue.png" />
      <BarcodeScanner
        row="1"
        height="300"
        formats="QR_CODE"
        beepOnScan="true"
        reportDuplicates="true"
        preferFrontCamera="false"
        @scanResult="onScanResult"
        v-if="isIOS"
      ></BarcodeScanner>
    </StackLayout>
  </Page>
</template>

<script>
var BarcodeScanner = require('nativescript-barcodescanner').BarcodeScanner;
var barcodescanner = new BarcodeScanner();
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      readme: 'https://github.com/eddyverbruggen/nativescript-barcodescanner'
    };
  },
  mounted() {},
  methods: {
    scan: function() {
      console.log('开始扫码');
      barcodescanner
        .scan({
          formats: 'QR_CODE', // 如果你想把扫描限制在某些类型：PDF_417
          cancelLabel: 'EXIT. Also, try the volume buttons!', // 只有iOS，默认“关闭”
          cancelLabelBackgroundColor: '#333333', // 只有iOS，默认 '#000000' (black)
          message: 'Use the volume buttons for extra light', // 只有Android, 默认是 '在取景器矩形内放置条形码进行扫描。'
          showFlipCameraButton: true, // 默认 false
          preferFrontCamera: false, // 默认 false
          showTorchButton: true, // 默认 false
          beepOnScan: true, // 在扫描时播放或抑制“哔”声 (默认 true)
          torchOn: false, // 开着手电筒发射 (默认 false)
          closeCallback: function() {
            console.log('Scanner closed');
          }, // 当扫描器关闭时调用(成功或中止)
          resultDisplayDuration: 500, // 只有Android, 默认1500 (ms)，设置为0以禁用回显扫描文本
          orientation: 'portrait', // 只有Android, 可选锁定方向为“portrait”或“landscape”
          openSettingsIfPermissionWasPreviouslyDenied: true // 在iOS上，如果之前被拒绝访问，你可以将用户发送到设置应用程序
        })
        .then(
          function(result) {
            console.log('Scan format: ' + result.format);
            console.log('Scan text:   ' + result.text);
          },
          function(error) {
            console.log('No scan: ' + error);
          }
        );
    }
  }
};
</script>

<style scoped lang="scss">
</style>
