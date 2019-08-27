<template>
  <Page class="page">
    <me-actionbar :title="'对话框'"></me-actionbar>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="dialog" text="对话框" />
    </StackLayout>
  </Page>
</template>

<script>
const dialogs = require('tns-core-modules/ui/dialogs');
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
    dialog: function() {
      dialogs.alert({
        title: '收到通知',
        message: '消息内容',
        okButtonText: '放弃'
      });
    }
  }
};
</script>

<style scoped>
label {
  color: red;
}
</style>
