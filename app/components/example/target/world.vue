<template>
  <Page class="page">
    <ActionBarSecond :title="'路由跳转-页面二'" />
    <GridLayout colums="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
    </GridLayout>
  </Page>
</template>

<script>
import ActionBarSecond from '../public/action-bar-second';
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

<style scoped lang="scss">
</style>
