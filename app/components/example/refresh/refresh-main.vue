<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="第三方下拉刷新" @tap="refresh" />
        <Button class="btn btn-primary" text="自定义下拉刷❤" @tap="refreshNew" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Refresh from './refresh';
import RefreshNew from './refresh-new';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '下拉刷新'
    };
  },
  mounted() {},
  methods: {
    refreshNew: function() {
      this.navigateTo(this, RefreshNew);
    },
    refresh() {
      this.navigateTo(this, Refresh);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
