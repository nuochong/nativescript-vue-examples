<template>
  <Page class="page" @loaded="init">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world home-panel" ref="homepanel" :bgred="bgRed">
        <Button class="btn btn-primary" @tap="bgRed = !bgRed" text="toggle" />
        <Button class="btn btn-primary" @tap="console.log(bgRed)" text="get bgRed" />
        <Button class="btn btn-primary" @tap="forceUpdate" text="force update" />
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
      title: '通过属性名称改变背景',
      console,
      bgRed: false
    };
  },
  watch: {
    bgRed() {
      this.notify();
    }
  },
  mounted() {},
  methods: {
    init() {
      this.bgRed = true;
    },
    forceUpdate() {
      this.bgRed = !this.bgRed;
      console.log('点击了', this.bgRed);
    },
    notify() {
      const native = this.$refs.homepanel.nativeView;
      native.notify({ eventName: 'bgredChange', object: native });
    }
  }
};
</script>

<style scoped lang="scss">
.home-panel {
  background-color: blue;
}
.home-panel[bgred='true'] {
  background-color: red;
}
</style>
