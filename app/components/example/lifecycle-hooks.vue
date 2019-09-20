<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <RequestContent :content="content" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import RequestContent from './request/request-content';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    RequestContent,
    ActionBarSecond
  },
  data() {
    return {
      title: '生命周期',
      content: '所有周期都是在我出生之前就已经完成了，所以这里什么都没有！'
    };
  },
  // 页面加载。
  loaded(args) {
    let text = 'loaded from page\n';
    console.log(text);
  },
  // 页面卸载。
  unloaded(args) {
    let text = 'unloaded from page\n';
    console.log(text);
  },
  // 离开页面时(导航已结束)。
  navigatedFrom(args) {
    let text = 'navigatedFrom from page\n';
    console.log(text);
  },
  // 当进入一个页面时(导航已经结束)。
  navigatedTo(args) {
    let text = 'navigatedFrom from page\n';
    console.log(text);
  },
  // 离开页面时(导航已经开始)。
  navigatingFrom(args) {
    let text = 'navigatingFrom from page\n';
    console.log(text);
  },
  // 进入页面时(导航已经启动)
  navigatingTo(args) {
    let text = 'navigatingTo from page\n';
    console.log(text);
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
