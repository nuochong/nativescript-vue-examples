<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <StackLayout class="hello-world">
      <Label textWrap="true" text="这是一个扫描二维码的演示" />
      <Button class="btn btn-primary" text="扫描二维码" @tap="scan" />
      <Image src="~/assets/images/NativeScript-Vue.png" />
    </StackLayout>
  </Page>
</template>

<script>
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    scan: function() {
      console.log('开始扫码');
    }
  }
};
</script>

<style scoped lang="scss">
</style>
