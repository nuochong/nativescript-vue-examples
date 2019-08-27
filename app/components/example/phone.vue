<template>
  <Page class="page">
    <ActionBar class="action-bar" title="拨打电话">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="phone" text="拨打电话" />
    </StackLayout>
  </Page>
</template>

<script>
const phone = require('nativescript-phone');
export default {
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
