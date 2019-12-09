<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="简易弹出菜单" ref="btn" @tap="btnPopup" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Menu } from '../../tools/nativescript-menu';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '简易弹出菜单'
    };
  },
  methods: {
    btnPopup: function() {
      Menu.popup({
        view: this.$refs.btn.nativeView,
        actions: ['苹果', '香蕉', '橘子']
      })
        .then(action => {
          alert({
            title: '选择的菜单内容是',
            message: action.id + ' - ' + action.title,
            okButtonText: '确认'
          });
        })
        .catch(console.log);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
