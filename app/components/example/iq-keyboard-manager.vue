<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">

        <PreviousNextView>
          <StackLayout>
            <StackLayout>
              <TextField hint="用户姓名"></TextField>
            </StackLayout>
            <StackLayout>
              <TextField hint="电子邮件"></TextField>
            </StackLayout>
            <StackLayout>
              <TextField hint="居住地址"></TextField>
            </StackLayout>
          </StackLayout>
        </PreviousNextView>

        <TextView hint="不工作的TextView提示"></TextView>
        <TextViewWithHint hint="工作的TextView提示🤪"></TextViewWithHint>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: 'IQKeyboardManager'
    };
  },
  mounted() {},
  methods: {
    btn: function() {
      console.log('点击了按钮');
    }
  }
};
</script>

<style scoped lang="scss">
</style>
