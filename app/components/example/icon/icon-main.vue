<template>
  <Page class="page" loaded="pageLoaded" ref="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout>
        <Button class="btn btn-primary" text="自定义图标" @tap="btnIconCustom" />
        <Button class="btn btn-primary" text="自定义图标" @tap="btnIconPlug" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import IconCustomer from './icon-customer';
import IconPlug from './icon-plug';

import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '图标'
    };
  },
  mounted() {},
  methods: {
    btnIconCustom: function() {
      this.navigateTo(this, IconCustomer);
      console.dir('自定义图标');
    },
    btnIconPlug: function() {
      this.navigateTo(this, IconPlug);
      console.dir('图标');
    }
  }
};
</script>

<style scoped lang="scss">
</style>
