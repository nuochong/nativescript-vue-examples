<template>
  <Page loaded="pageLoaded" ref="page">
    <ActionBarSecond :title="'动画效果'"></ActionBarSecond>
    
    <GridLayout colums="*" rows="*" id="dd">
      <Label class="animateicon" :text="msg" col="0" row="0" />
      <Image class="animateicon" src="~/assets/images/NativeScript-Vue.png" />
    </GridLayout>
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
      msg: 'Hello World! '
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>
