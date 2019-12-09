<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="显示隐藏导航栏" @tap="btnStatusBar" />
        <Button class="btn btn-primary -primary" text="导航栏颜色" @tap="btnStatusBarColor" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import StatusBar from './status-bar';
import StatusBarColor from './status-bar-color';

import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '导航栏'
    };
  },
  mounted() {},
  methods: {
    btnStatusBar: function() {
      this.navigateTo(this, StatusBar);
    },
    btnStatusBarColor: function() {
      this.navigateTo(this, StatusBarColor);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
