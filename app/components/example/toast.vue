<template>
  <Page class="page">
    <me-actionbar :title="'提示'"></me-actionbar>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="btnToast" text="提示" />
    </StackLayout>
  </Page>
</template>

<script>
import * as Toast from 'nativescript-toast';
import meActionbar from './public/actionbar';
export default {
  components: {
    meActionbar
  },
  data() {
    return {
      title: ''
    };
  },
  mounted() {},
  methods: {
    btnToast: function() {
      const toast = Toast.makeText('你好世界', 'long');
      toast.show();
    }
  }
};
</script>

<style scoped>
label {
  color: red;
}
</style>
