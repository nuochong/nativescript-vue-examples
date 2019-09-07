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
        formats="QR_CODE, EAN_13, UPC_A"
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
      readme:'https://github.com/eddyverbruggen/nativescript-barcodescanner'
    };
  },
  mounted() {},
  methods: {
    scan: function() {
      console.log('开始扫码');
      barcodescanner
        .scan({
          formats: 'QR_CODE,PDF_417', // Pass in of you want to restrict scanning to certain types
          cancelLabel: 'EXIT. Also, try the volume buttons!', // iOS only, default 'Close'
          cancelLabelBackgroundColor: '#333333', // iOS only, default '#000000' (black)
          message: 'Use the volume buttons for extra light', // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
          showFlipCameraButton: true, // default false
          preferFrontCamera: false, // default false
          showTorchButton: true, // default false
          beepOnScan: true, // Play or Suppress beep on scan (default true)
          torchOn: false, // launch with the flashlight on (default false)
          closeCallback: function() {
            console.log('Scanner closed');
          }, // invoked when the scanner was closed (success or abort)
          resultDisplayDuration: 500, // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
          orientation: 'landscape', // Android only, optionally lock the orientation to either "portrait" or "landscape"
          openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
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
