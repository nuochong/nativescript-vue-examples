<template>
  <Page class="page" loaded="pageLoaded" ref="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="遮罩层" @tap="onMask" />
        <Button class="btn btn-primary" text="提示框" @tap="btnDialogNew" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Mask from './mask';
import DialogNew from './dialog-new';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '对话框'
    };
  },
  mounted() {},
  methods: {
    onMask: function() {
      this.navigateTo(this, Mask);
    },
    btnDialogNew() {
      this.navigateTo(this, DialogNew);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
