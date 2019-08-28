<template>
  <Page class="page">
    <action-bar-second :title="'模态对话框'"></action-bar-second>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="modal" text="模态对话框" />
    </StackLayout>
  </Page>
</template>

<script>
import ModalComponent from './CustomModel/ModalComponent';
import ActionBarSecond from './Public/ActionBarSecond';
export default {
  components: {
    ActionBarSecond
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
</style>
