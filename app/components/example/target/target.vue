<template>
  <Page>
    <me-actionbar :title="'路由跳转'"></me-actionbar>
    <GridLayout colums="*" rows="*">
      <!-- <StackLayout class="hello-world"> -->
      <Button class="btn btn-primary" text="跳转" @tap="onButton" />
      <!-- </StackLayout> -->
    </GridLayout>
  </Page>
</template>

<script>
import world from './world';
import meActionbar from '../public/actionbar';
export default {
  components: {
    meActionbar
  },
  data() {
    return {
      msg: 'Hello World! '
    };
  },
  methods: {
    onButton: function() {
      console.log('000');
      this.$navigateTo(world);
    }
  }
};
</script>

<style scoped>
</style>
