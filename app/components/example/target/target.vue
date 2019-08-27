<template>
  <Page>
    <me-actionbar :title="'路由跳转'"></me-actionbar>
    <GridLayout colums="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
      <Button text="Button" @tap="onButton" />
    </GridLayout>
  </Page>
</template>

<script>
import app from '../../App';
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
.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
