<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="震动（仅IOS）" @tap="btnTapticEngine" />
        <Button class="btn btn-primary -primary" text="震动" @tap="btnVibrate" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Vibrate from './vibrate';
import TapticEngine from './taptic-engine';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '震动'
    };
  },
  mounted() {},
  methods: {
    btnTapticEngine: function() {
      this.navigateTo(this, TapticEngine);
    },
    btnVibrate: function() {
      this.navigateTo(this, Vibrate);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
