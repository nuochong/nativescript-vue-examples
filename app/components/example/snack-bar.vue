<template>
  <Page class="page" ref="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="简单示例" @tap="btnSnackBar1" />
        <Button class="btn btn-primary" text="复杂示例" @tap="btnSnackBar2" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { SnackBar, SnackBarOptions } from '@nstudio/nativescript-snackbar';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '底部提示'
    };
  },
  mounted() {},
  methods: {
    btnSnackBar1: function() {
      const snackbars = new SnackBar();
      snackBars.simple('Snackbar', 'red', '#fff', 3, false).then(args => {
        this.set('jsonResult', JSON.stringify(args));
      });
    },
    /// Show an Action snack bars
    btnSnackBar2: function() {
      let someView = this.$refs.page.nativeView;
      const options = {
        actionText: 'actionText',
        actionTextColor: '#ff4081', // Optional, Android only
        snackText: 'snackText',
        textColor: '#346db2', // Optional, Android only
        hideDelay: 3500,
        backgroundColor: '#eaeaea', // Optional, Android only
        maxLines: 3, // Optional, Android Only
        isRTL: false, // Optional, Android Only
        view: someView // Optional, Android Only, default to topmost().currentPage
      };
      const snackbarss = new SnackBar();
      snackbarss.action(options).then(args => {
        if (args.command === 'Action') {
          this.set('jsonResult', JSON.stringify(args));
        } else {
          this.set('jsonResult', JSON.stringify(args));
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
