<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">

        <PreviousNextView>
          <StackLayout>
            <StackLayout>
              <TextField class="text-field-white" hint="用户姓名" />
            </StackLayout>
            <StackLayout>
              <TextField class="text-field-white" hint="电子邮件" />
            </StackLayout>
            <StackLayout>
              <TextField class="text-field-white" hint="居住地址" />
            </StackLayout>
          </StackLayout>
        </PreviousNextView>

        <TextView class="text-field-whitewhite" hint="不工作的TextView提示" />
        <TextViewWithHint class="text-field-whitewhite" hint="工作的TextView提示🤪" />
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
