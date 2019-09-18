<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="第三方富文本编辑器" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { LocalNotifications } from 'nativescript-local-notifications';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '第三方富文本编辑器'
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
