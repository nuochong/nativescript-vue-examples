<template>
  <StackLayout class="p-20 wrap" backgroundColor="white">
    <Label class="h2 text-center" text="这是一个模态对话框页面" />
    <Label class="h2 text-center" text="这是一个模态对话框页面" />
    <Button class="btn btn-outline" text="关闭模态对话框" @tap="$modal.close()" />
    <Button class="btn btn-outline" text="关闭模态对话框" @tap="$modal.close()" />
  </StackLayout>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    };
  }
};
</script>

<style scoped lang="scss">
.wrap {
  padding-top: 100px;
}
.btn {
  font-size: 18;
}
</style>