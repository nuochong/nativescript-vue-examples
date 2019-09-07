<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <StackLayout class="hello-world">
      <GridLayout>
        <WebView :src="url2" />
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script>
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '简易浏览器',
      url1: 'https://m.baidu.com',
      url2: 'https://cn.bing.com'
    };
  },
  mounted() {},
  methods: {
    open1: function() {
      console.log('打开网页1');
    },
    open2: function() {
      console.log('打开网页2');
    }
  }
};
</script>

<style scoped lang="scss">
</style>
