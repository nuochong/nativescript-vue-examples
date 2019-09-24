<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="登录" @tap="btnStart" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '微信登录',
      see: 'https://market.nativescript.org/plugins/nativescript-wechat-login'
    };
  },
  mounted() {
    console.log('微信登录安卓正常，在ios上有问题');
  },
  methods: {
    btnStart: function() {}
  }
};
</script>

<style scoped lang="scss">
</style>
