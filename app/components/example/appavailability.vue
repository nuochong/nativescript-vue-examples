<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="检查应用" @tap="btnAppAvailability" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { availableSync } from 'nativescript-appavailability';
import { openUrl } from 'tns-core-modules/utils/utils';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '检查应用'
    };
  },
  mounted() {},
  methods: {
    AppAvailability: function() {
      if (availableSync('twitter://')) {
        openUrl('twitter://' + (isIOS ? '/user?screen_name=' : 'user?user_id=') + 'eddyverbruggen');
      } else {
        openUrl('https://twitter.com/eddyverbruggen');
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>
