<template>
  <Page class="page">
    <ActionBar class="action-bar" title="模态对话框">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="modal" text="模态对话框" />
    </StackLayout>
  </Page>
</template>

<script>
import ModalComponent from './customModel/ModalComponent';
export default {
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
.hello-world {
  margin: 20;
}

label {
  color: red;
}
</style>
