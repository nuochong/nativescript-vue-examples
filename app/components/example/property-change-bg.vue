<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world home-panel" ref="homepanel" :bgred="bgRed">
        <Button @tap="bgRed = !bgRed">toggle</Button>
        <Button @tap="console.log(bgRed)">get bgRed</Button>
        <Button @tap="forceUpdate">force update</Button>
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
  mounted() {},
  methods: {
    forceUpdate() {
      const native = this.$refs.homepanel.nativeView;
      this.bgRed = !this.bgRed;
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
