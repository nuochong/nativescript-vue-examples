<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="复制到剪贴板" @tap="btnSet" />
        <Button class="btn btn-primary -primary" text="从剪贴板读取" @tap="btnGet" />
        <RequestContent :content="content" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const clipboard = require('nativescript-clipboard');
import RequestContent from './request/request-content';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond,
    RequestContent
  },
  data() {
    return {
      title: '剪贴板',
      content: 'null'
    };
  },
  mounted() {},
  methods: {
    btnSet: function() {
      console.log('点击了按钮');
      clipboard.setText('一些与剪贴板相关的东西。').then(() => {
        console.log('好的，复制到剪贴板。');
        this.$toast('复制成功');
      });
      console.log(this.content);
    },
    btnGet: function() {
      console.log('点击了按钮');
      clipboard.getText().then(res => {
        console.log('从剪贴板读取的内容: ' + res);
        this.content = res;
      });
      console.log(this.content);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
