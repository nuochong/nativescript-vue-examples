<template>
  <Page class="page" @loaded="init">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="监听短信" @tap="btnSmsReceiver" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { SmsReceiver } from 'nativescript-sms-receiver';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '短信接收器'
    };
  },
  mounted() {},
  methods: {
    init() {
      SmsReceiver.getInstance();
    },
    btnSmsReceiver() {
      // SmsReceiver.getInstance();
      // register Sms Listener to get SMS callbacks
      SmsReceiver.getInstance().registerListeners(
        function() {
          // onSMSReceiverStarted
          console.log('onSMSReceiverStarted');
        }.bind(this),
        function(exception) {
          // onSMSReceiverFailed
          console.log('onSMSReceiverFailed');
        }.bind(this),
        function(message) {
          console.log('接收到短信：', message);
          // onSMSReceived
          console.log('onSMSReceived');
          // handle sms here
          console.log('handle sms here');
          // deregister Sms Listener to avoid invalid operations
          SmsReceiver.getInstance().deregisterListeners();
        }.bind(this),
        function() {
          // onSMSReceiverTimeOut
          console.log('onSMSReceiverTimeOut');
        }.bind(this)
      );

      // start sms receiver for single message
      SmsReceiver.getInstance().startReceiver();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
