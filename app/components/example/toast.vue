<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="btnToast" text="提示" />
    </StackLayout>
  </Page>
</template>

<script>
import { Toasty } from 'nativescript-toasty';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '提示'
    };
  },
  mounted() {},
  methods: {
    btnToast: function() {
      const toast = new Toasty({ text: 'Toast message' });
      toast.show();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
