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
      title: '显示网页',
      url1: 'https://m.baidu.com',
      url2: 'https://cn.bing.com'
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
