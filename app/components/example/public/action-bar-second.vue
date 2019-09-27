<template>
  <ActionBar class="action-bar" :title="title">
    <NavigationButton text="返回" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
  </ActionBar>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
// .hello-world {
//   margin: 20;
// }
</style>
