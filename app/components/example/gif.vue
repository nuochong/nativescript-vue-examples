<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Gif src="~/assets/gifs/bill.gif" height="100" ref="gif1" />
        <Gif src="http://img.soogif.com/l0N5XEZ3ERT3wFOOzlmqRdnE9livVY6G.gif" height="200" ref="gif2" />
        <Button class="btn btn-primary" text="启动" @tap="btnStart" />
        <Button class="btn btn-primary" text="停止" @tap="btnStop" />
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
      title: '动态图片',
    };
  },
  mounted() {},
  methods: {
    btnStart: function() {
      this.$refs.gif1.nativeView.start();
    },
    btnStop: function() {
      this.$refs.gif1.nativeView.stop();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
