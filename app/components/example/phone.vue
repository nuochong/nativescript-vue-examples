<template>
  <Page class="page">
    <me-actionbar :title="'拨打电话及发送短信'"></me-actionbar>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="phone" text="拨打电话" />
      <Button class="btn btn-primary" @tap="sms" text="发送短信" />
    </StackLayout>
  </Page>
</template>

<script>
const phone = require('nativescript-phone');
import meActionbar from './public/actionbar';
export default {
  components: {
    meActionbar
  },
  data() {
    return {
      title: ''
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

<style scoped>
.hello-world {
  margin: 20;
}

label {
  color: red;
}
</style>
