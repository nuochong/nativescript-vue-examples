<template>
  <ActionBar class="action-bar" :title="title">
    <ActionItem @tap="onTapEdit" v-show="!isEditing" ios.systemIcon="2" ios.position="right" android.systemIcon="ic_menu_edit" />
    <ActionItem @tap="onTapSave" v-show="isEditing" ios.systemIcon="3" ios.position="right" android.systemIcon="ic_menu_save" />
    <ActionItem @tap="onTapCancel" v-show="isEditing" ios.systemIcon="1" android.systemIcon="ic_menu_close_clear_cancel" />
  </ActionBar>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      isEditing: false
    };
  },
  mounted() {},
  methods: {
    onTapEdit: function() {
      console.log('安卓导航栏编辑按钮被点击了');
    },
    onTapSave: function() {
      console.log('安卓导航栏保存按钮被点击了');
    },
    onTapCancel: function() {
      console.log('安卓导航栏放弃按钮被点击了');
    }
  }
};
</script>

<style scoped lang="scss">
/* ActionBar {
  background-color: #53ba82;
  color: #ffffff;
} */
</style>
