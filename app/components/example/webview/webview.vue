<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="open1" text="打开网页1" />
      <Button class="btn btn-primary" @tap="open2" text="打开网页1" />
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
      title:'网页',
      url1: 'http://m.baidu.com',
      url2: 'http://m.baidu.com'
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
