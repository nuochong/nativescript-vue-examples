<template>
  <Page>
    <action-bar-second :title="'路由跳转-页面二'"></action-bar-second>
    <GridLayout colums="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
    </GridLayout>
  </Page>
</template>

<script>
import ActionBarSecond from '../Public/ActionBarSecond';
export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      msg: 'Hello World!'
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>
