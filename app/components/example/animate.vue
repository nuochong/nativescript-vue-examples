<template>
  <Page loaded="pageLoaded" ref="page">
    <ActionBar class="action-bar" title="Hello">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>
    <GridLayout colums="*" rows="*" id="dd">
      <Label class="animateicon" text="xxx" col="0" row="0" />
      <Image class="animateicon" src="~/assets/images/NativeScript-Vue.png" />
    </GridLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World! '
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style>
</style>
