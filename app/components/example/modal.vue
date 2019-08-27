<template>
  <Page class="page">
    <me-actionbar :title="'模态对话框'"></me-actionbar>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="modal" text="模态对话框" />
    </StackLayout>
  </Page>
</template>

<script>
import ModalComponent from './customModel/ModalComponent';
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
    modal: function() {
      this.$showModal(ModalComponent);
    }
  }
};
</script>

<style scoped>
label {
  color: red;
}
</style>
