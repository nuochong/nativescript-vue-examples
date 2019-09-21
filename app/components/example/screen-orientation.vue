<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="示例" @tap="pageLoaded" />
        <Button class="btn btn-primary" text="实例" @tap="onNavigatingFrom" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
var orientationModule = require('nativescript-screen-orientation');
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
        console.log('landscape orientation set');
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
