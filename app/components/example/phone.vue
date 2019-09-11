<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" @tap="phone" text="拨打电话" />
        <Button class="btn btn-primary" @tap="sms" text="发送短信" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const phone = require('nativescript-phone');
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '拨打电话及发送短信'
    };
  },
  mounted() {},
  methods: {
    phone: function() {
      phone.requestCallPermission();
      phone.dial('212-555-1234', true);
    },
    sms: function() {
      phone
        .sms('212-555-1234', '我的消息【My Message】') //New Method for single number is phone.sms(["212-555-1234"],"My Message")
        .then(
          function(args) {
            /// args.reponse: "success", "cancelled", "failed"
            console.log(JSON.stringify(args));
          },
          function(err) {
            console.log('Error: ' + err);
          }
        );
    }
  }
};
</script>

<style scoped lang="scss">
</style>
