<template>
  <Page class="page">
    <me-actionbar :title="'精美提示框'"></me-actionbar>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="btnfancyalert" text="精美提示框" />
    </StackLayout>
  </Page>
</template>

<script>
import { TNSFancyAlert, TNSFancyAlertButton } from 'nativescript-fancyalert';
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
