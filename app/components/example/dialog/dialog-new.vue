<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" @tap="dialog" text="提示框" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const dialogs = require('tns-core-modules/ui/dialogs');
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '提示框'
    };
  },
  mounted() {},
  methods: {
    dialog: function() {
      dialogs
        .alert({
          title: '收到通知',
          message: '消息内容',
          okButtonText: '确认'
        })
        .then(() => {
          console.log('提示框关闭');
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
