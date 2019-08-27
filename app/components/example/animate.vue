<template>
  <Page loaded="pageLoaded" ref="page">
    <me-actionbar :title="'动画效果'"></me-actionbar>
    <GridLayout colums="*" rows="*" id="dd">
      <Label class="animateicon" text="xxx" col="0" row="0" />
      <Image class="animateicon" src="~/assets/images/NativeScript-Vue.png" />
    </GridLayout>
  </Page>
</template>

<script>
import meActionbar from './public/actionbar';
export default {
  components: {
    meActionbar
  },
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
