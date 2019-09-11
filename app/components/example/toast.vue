<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" @tap="btnToast" text="提示" />
      </StackLayout>
    </ScrollView>
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
      const toast = new Toasty({ text: '提示信息' });
      toast.show();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
