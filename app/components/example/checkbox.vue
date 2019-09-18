<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <check-box :checked="isChecked" @checkedChange="isChecked = $event.value" v-model="isChecked" />
        <Button class="btn btn-primary" @tap="changebtn" ref="btn" text="改变单选按钮状态" />
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
      title: '单选按钮',
      isChecked: false
    };
  },
  mounted() {},
  methods: {
    changebtn: function() {
      this.isChecked = !this.isChecked;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
