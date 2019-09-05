<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <!-- <GridLayout colums="*" rows="*"> -->
    <StackLayout class="hello-world">
      <Button class="btn btn-primary" text="跳转" @tap="onButton" />
    </StackLayout>
    <!-- </GridLayout> -->
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
    return {
      title: '路由跳转'
    };
  },
  methods: {
    onButton: function() {
      this.navigateTo(this, world);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
