<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="横向" @tap="pageLoaded" />
        <Button class="btn btn-primary -primary" text="回正" @tap="onNavigatingFrom" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
let orientationModule = require('nativescript-screen-orientation');
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '动态图片'
    };
  },
  mounted() {},
  methods: {
    pageLoaded() {
      orientationModule.setCurrentOrientation('landscape', function() {
        console.log('横向设置');
      });
    },
    onNavigatingFrom() {
      orientationModule.orientationCleanup();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
