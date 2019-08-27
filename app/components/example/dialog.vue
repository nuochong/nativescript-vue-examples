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
        title: 'Notification received',
        message: 'message',
        okButtonText: 'Excellent!'
      });
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
