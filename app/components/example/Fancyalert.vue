<template>
  <Page class="page">
    <action-bar-second :title="'精美提示框'"></action-bar-second>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="btnfancyalert" text="精美提示框" />
    </StackLayout>
  </Page>
</template>

<script>
import { TNSFancyAlert, TNSFancyAlertButton } from 'nativescript-fancyalert';
import ActionBarSecond from './Public/ActionBarSecond';
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
    btnfancyalert: function() {
      console.log('xxx');
      TNSFancyAlert.showSuccess('Success!', 'Fancy alerts are nice.', 'Yes they are!');
    }
  }
};
</script>

<style scoped>
</style>
