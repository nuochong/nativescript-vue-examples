<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="启动" @tap="btnStart" />
        <Button class="btn btn-primary -primary" text="停止" @tap="btnStop" />
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
  color: '#4B9ED6', // 指示灯和标签的颜色
  // 指示器周围的背景框
  // 如果为true，hideBezel将覆盖此设置
  backgroundColor: 'yellow',
  userInteractionEnabled: false, // 默认为true。 设置为false，以便触摸效果。
  hideBezel: true // 默认为false，可以隐藏周围的挡板
  // mode: Mode.AnnularDeterminate // 请参阅下面的选项
  // android: {
  //   view: someStackLayout.android, // 目标视图显示在（默认为整个窗口）顶部
  //   cancelable: true,
  //   cancelListener: function(dialog) {
  //     console.log('Loading cancelled');
  //   }
  // },
  // ios: {
  //   view: someButton.ios, // 目标视图显示在（默认为整个窗口）顶部
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
