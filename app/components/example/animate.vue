<template>
  <Page loaded="pageLoaded" ref="page">
    <action-bar-second :title="'动画效果'"></action-bar-second>
    <GridLayout colums="*" rows="*" id="dd">
      <Label class="animateicon" :text="msg" col="0" row="0" />
      <Image class="animateicon" src="~/assets/images/NativeScript-Vue.png" />
    </GridLayout>
  </Page>
</template>

<script>
import ActionBarSecond from './Public/ActionBarSecond';
export default {
  components: {
    ActionBarSecond
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

<style scoped>
</style>
