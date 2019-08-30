<template>
  <Page class="page">
    <ActionBarSecond :title="'显示隐藏'"></ActionBarSecond>

    <StackLayout class="hello-world">
      <Label textWrap="true" text="这是一个hello world组件，如果你挑战，请点击这个按钮" />
      <Label textWrap="true" text="This is a hello world component, tap the button if you dare" />
      <Button class="btn btn-primary" text="显示隐藏" @tap="surprise = !surprise" />
      <Image v-if="surprise" src="~/assets/images/NativeScript-Vue.png" />
    </StackLayout>
  </Page>
</template>

<script>
import { LocalNotifications } from 'nativescript-local-notifications';
import ActionBarSecond from './public/action-bar-second';
export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      surprise: false
    };
  },
  mounted() {},
  methods: {
    display: function() {}
  }
};
</script>

<style scoped lang="scss">
</style>
