<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="权限" @tap="btnPermission" />
        <Button class="btn btn-primary" text="设置" @tap="btnSetBadger" />
        <Button class="btn btn-primary" text="更改" @tap="btnAgainSetBadger" />
        <Button class="btn btn-primary" text="取消" @tap="btnCancle" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { requestPremissions, setBadge, removeBadge } from 'nativescript-plugin-badge';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '图标徽章'
    };
  },
  mounted() {},
  methods: {
    btnPermission: function() {
      requestPremissions();
    },
    btnSetBadger: function() {
      setBadge(5);
    },
    btnAgainSetBadger: function() {
      setBadge(8);
    },
    btnCancle: function() {
      removeBadge();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
