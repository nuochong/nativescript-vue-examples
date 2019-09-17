<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <!-- <ScrollView> -->
    <StackLayout class="hello-world">
      <GridLayout>
        <WebView src="<div style='text-align:center'><h1>自定义HTML内容</h1><button type='button' onclick='alert(`Hello World!`)'>按钮</button />" />
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
      title: '显示自定义html内容'
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
