<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Label class="message" text="点击下面的按钮..." textWrap="true"></Label>
        <Button @tap="showFeedbackMin" class="btn" text="显示反馈(最小)"></Button>
        <Button @tap="showFeedbackMax" class="btn" text="显示反馈(许多选项)"></Button>
        <Button @tap="showFeedbackError" class="btn" text="显示反馈(错误)"></Button>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Feedback, FeedbackType, FeedbackPosition } from 'nativescript-feedback';
import { Color } from 'tns-core-modules/color';
const feedback = new Feedback();
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '导航消息反馈'
    };
  },
  mounted() {},
  methods: {
    showFeedbackMin() {
      feedback.show({
        message: '这是最简单的，对吧?'
      });
    },
    showFeedbackMax() {
      feedback.show({
        title: '竖起大拇指!',
        titleColor: new Color('#222222'),
        position: FeedbackPosition.Bottom, // 仅支持 iOS
        type: FeedbackType.Custom, // 顺便说一下，这是默认类型
        message: '自定义颜色和图标。从App_Resources文件夹加载。',
        messageColor: new Color('#333333'),
        duration: 3000,
        backgroundColor: new Color('yellowgreen'),
        icon: 'customicon', // 在 App_Resources/platform 目录中
        android: {
          iconColor: new Color('#222222') // 可选的，如果你不需要，就把它删掉
        },
        onTap: () => console.log('showFeedbackMax 出现'),
        onShow: animating => console.log(animating ? 'showFeedbackMax 动画' : 'showFeedbackMax 解释'),
        onHide: () => console.log('showFeedbackMax 隐藏')
      });
    },
    showFeedbackError() {
      feedback.error({
        title: '拇指向下 👎',
        onTap: () => console.log('showFeedbackError 出现')
      });
    }
  }
};
</script>

<style scoped lang="scss">
.message {
  font-size: 14;
  margin: 16;
  color: #53ba82;
}
button.btn {
  font-size: 14;
  border-radius: 3;
  border-width: 2;
  border-color: #63d4a5;
  color: #63d4a5;
  padding: 12;
  margin: 16;
}
</style>
