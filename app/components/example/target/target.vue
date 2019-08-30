<template>
  <Page class="page">
    <ActionBarSecond :title="'路由跳转'"></ActionBarSecond>
    <GridLayout colums="*" rows="*">
      <!-- <StackLayout class="hello-world"> -->
      <Button class="btn btn-primary" text="跳转" @tap="onButton" />
      <!-- </StackLayout> -->
    </GridLayout>
  </Page>
</template>

<script>
import world from './world';
import ActionBarSecond from '../public/action-bar-second';
export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {};
  },
  methods: {
    onButton: function() {
      this.$navigateTo(world);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
