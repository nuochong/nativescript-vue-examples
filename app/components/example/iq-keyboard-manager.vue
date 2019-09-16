<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">

        <PreviousNextView>
          <StackLayout>
            <StackLayout>
              <TextField hint="Email"></TextField>
            </StackLayout>
            <StackLayout>
              <TextField hint="Password"></TextField>
            </StackLayout>
          </StackLayout>
        </PreviousNextView>

        <TextView hint="Not working TextView hint"></TextView>
        <TextViewWithHint hint="Working TextView hint 🤪"></TextViewWithHint>
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
