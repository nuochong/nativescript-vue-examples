<template>
  <Page class="page">
    <ActionBar class="action-bar" title="对话框">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="dialog" text="对话框" />
    </StackLayout>
  </Page>
</template>

<script>
const dialogs = require('tns-core-modules/ui/dialogs');
export default {
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
