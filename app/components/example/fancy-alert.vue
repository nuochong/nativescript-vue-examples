<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="btnfancyalert" text="精美提示框" />
    </StackLayout>
  </Page>
</template>

<script>
import { TNSFancyAlert, TNSFancyAlertButton } from 'nativescript-fancyalert';
import ActionBarSecond from './public/action-bar-second';
export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '精美提示框'
    };
  },
  mounted() {},
  methods: {
    btnfancyalert: function() {
      TNSFancyAlert.showSuccess('Success!', 'Fancy alerts are nice.', 'Yes they are!');
    }
  }
};
</script>

<style scoped lang="scss">
</style>
