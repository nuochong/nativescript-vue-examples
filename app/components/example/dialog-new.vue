<template>
  <Page class="page">
    <action-bar-second :title="'对话框'"></action-bar-second>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="dialog" text="对话框" />
    </StackLayout>
  </Page>
</template>

<script>
const dialogs = require('tns-core-modules/ui/dialogs');
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
</style>
