<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="显示隐藏导航栏" @tap="btnStatusBar" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import StatusBar from './status-bar';

import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '显示隐藏导航栏'
    };
  },
  mounted() {},
  methods: {
    btnStatusBar: function() {
      this.navigateTo(this, StatusBar);
    },
  }
};
</script>

<style scoped lang="scss">
</style>
