<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="启动" @tap="btnStart" />
        <Button class="btn btn-primary" text="停止" @tap="btnStop" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { LoadingIndicator, Mode, OptionsCommon } from '@nstudio/nativescript-loading-indicator';

const indicator = new LoadingIndicator();
const options = {
  message: 'Loading...',
  details: 'Additional detail note!',
  progress: 0.65,
  margin: 10,
  dimBackground: true,
  color: '#4B9ED6', // color of indicator and labels
  // background box around indicator
  // hideBezel will override this if true
  backgroundColor: 'yellow',
  userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
  hideBezel: true // default false, can hide the surrounding bezel
  // mode: Mode.AnnularDeterminate // see options below
  // android: {
  //   view: someStackLayout.android, // Target view to show on top of (Defaults to entire window)
  //   cancelable: true,
  //   cancelListener: function(dialog) {
  //     console.log('Loading cancelled');
  //   }
  // },
  // ios: {
  //   view: someButton.ios, // Target view to show on top of (Defaults to entire window)
  //   square: false
  // }
};
import ActionBarSecond from '../public/action-bar-second';

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
    btnStart: function() {
      indicator.show(options);
    },
    btnStop: function() {
      indicator.hide();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
