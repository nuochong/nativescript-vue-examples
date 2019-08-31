<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="modal" text="模态对话框" />
    </StackLayout>
  </Page>
</template>

<script>
import ModalComponent from './custom-model/modal-component';
import ActionBarSecond from './public/action-bar-second';
export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '模态对话框'
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

<style scoped lang="scss">
</style>
