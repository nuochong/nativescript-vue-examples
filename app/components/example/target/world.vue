<template>
  <Page>
    <me-actionbar :title="'路由跳转-页面二'"></me-actionbar>
    <GridLayout colums="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
      <Button text="Button" @tap="onButton" />
    </GridLayout>
  </Page>
</template>

<script>
import app from '../../App';
import meActionbar from '../public/actionbar';
export default {
  components: {
    meActionbar
  },
  data() {
    return {
      msg: 'Hello World!'
    };
  },
  methods: {
    onButtonTap: function() {
      this.$navigateTo(app);
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
