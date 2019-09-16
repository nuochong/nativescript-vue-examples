<template>
  <StackLayout class="container">
    <StackLayout class="wrap">
      <Label class="h2 text-center model-label" text="这是一个模态对话框页面" />
      <Button class="btn btn-outline" text="关闭模态对话框" @tap="$modal.close()" />
    </StackLayout>
  </StackLayout>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.wrap {
  padding: 15;
  background-color: white;
}
.model-label {
  color: black;
  font-size: 20;
}
.btn {
  font-size: 18;
}
</style>