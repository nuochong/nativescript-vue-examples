<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Fancyalert">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="btnfancyalert" text="Fancyalert" />
    </StackLayout>
  </Page>
</template>

<script>
import { TNSFancyAlert, TNSFancyAlertButton } from 'nativescript-fancyalert';
export default {
  data() {
    return {
      title: ''
    };
  },
  mounted() {},
  methods: {
    btnfancyalert: function() {
      console.log('xxx');
      TNSFancyAlert.showSuccess('Success!', 'Fancy alerts are nice.', 'Yes they are!');
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
