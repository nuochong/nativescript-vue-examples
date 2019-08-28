<template>
  <Page class="page">
    <action-bar-second :title="'提示'"></action-bar-second>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="btnToast" text="提示" />
    </StackLayout>
  </Page>
</template>

<script>
import * as Toast from 'nativescript-toast';
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
    btnToast: function() {
      const toast = Toast.makeText('你好世界', 'long');
      toast.show();
    }
  }
};
</script>

<style scoped>
</style>
