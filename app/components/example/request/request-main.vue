<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="请求" @tap="btnRequest" />
        <Button class="btn btn-primary" text="Axios请求" @tap="btnIconPlug" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Request from './request';
import RequestAxios from './request-axios';

import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '请求'
    };
  },
  mounted() {},
  methods: {
    btnRequest: function() {
      this.navigateTo(this, Request);
      console.dir('请求');
    },
    btnIconPlug: function() {
      this.navigateTo(this, RequestAxios);
      console.dir('Axios请求');
    }
  }
};
</script>

<style scoped lang="scss">
</style>
