<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="隐藏" @tap="hide" />
        <Button class="btn btn-primary" text="显示" @tap="show" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const statusBar = require('nativescript-status-bar');
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '导航栏状态'
    };
  },
  mounted() {},
  methods: {
    show() {
      statusBar.show();
    },
    hide() {
      statusBar.hide();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
