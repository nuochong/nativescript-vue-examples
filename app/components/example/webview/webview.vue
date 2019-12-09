<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" @tap="btnBrowser" text="简易浏览器" />
        <Button class="btn btn-primary -primary" @tap="open1" text="显示网页" />
        <Button class="btn btn-primary -primary" @tap="open2" text="显示自定义html内容" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import WebviewBrowser from './webview-browser';
import WebviewWeb from './webview-web';
import WebviewHtml from './webview-html';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '网页'
    };
  },
  mounted() {},
  methods: {
    open1: function() {
      this.navigateTo(this, WebviewWeb);
    },
    open2: function() {
      this.navigateTo(this, WebviewHtml);
    },
    btnBrowser: function() {
      this.navigateTo(this, WebviewBrowser);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
