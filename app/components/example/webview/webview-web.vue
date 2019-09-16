<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <!-- <ScrollView> -->
    <StackLayout class="hello-world">
      <GridLayout>
        <WebView :src="url1" />
      </GridLayout>
    </StackLayout>
    <!-- </ScrollView> -->
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
      url1: 'http://m.baidu.com',
      url2: 'https://cn.bing.com'
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
