<template>
    <ActionBar class="action-bar" :title="title">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>
</template>

<script>
export default {
  props:['title'],
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.hello-world {
  margin: 20;
}
</style>
