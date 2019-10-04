<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="检查应用" @tap="btnAppAvailability" />
        <RequestContent :content="content" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { availableSync } from 'nativescript-appavailability';
import { openUrl } from 'tns-core-modules/utils/utils';
import RequestContent from './request/request-content';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond,
    RequestContent
  },
  data() {
    return {
      title: '检查应用',
      content: ''
    };
  },
  mounted() {},
  methods: {
    btnAppAvailability: function() {
      if (availableSync('twitter://')) {
        openUrl('twitter://' + (isIOS ? '/user?screen_name=' : 'user?user_id=') + 'eddyverbruggen');
      } else {
        openUrl('https://twitter.com/eddyverbruggen');
        this.content = '未安装该应用';
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>
