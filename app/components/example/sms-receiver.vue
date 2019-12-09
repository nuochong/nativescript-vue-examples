<template>
  <Page class="page" @loaded="init">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="监听短信" @tap="btnSmsReceiver" />
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
      // 注册Sms侦听器以获取SMS回调
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
          // 在这里处理短信
          console.log('在这里处理短信');
          // 注销Sms侦听器以避免无效操作
          SmsReceiver.getInstance().deregisterListeners();
        }.bind(this),
        function() {
          // onSMSReceiverTimeOut
          console.log('onSMSReceiverTimeOut');
        }.bind(this)
      );
      // 为单个消息启动短信接收器
      SmsReceiver.getInstance().startReceiver();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
