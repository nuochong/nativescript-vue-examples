<template>
  <Page class="page">
    <me-actionbar :title="'显示隐藏'"></me-actionbar>
    <StackLayout class="hello-world">
      <Label class="body" textWrap="true" text="这是一个hello world组件，如果你挑战，请点击这个按钮" />
      <Label
        class="body"
        textWrap="true"
        text="This is a hello world component, tap the button if you dare"
      />
      <Button class="btn btn-primary" text="显示隐藏" @tap="surprise = !surprise" />

      <Image v-if="surprise" src="~/assets/images/NativeScript-Vue.png" />
    </StackLayout>
  </Page>
</template>

<script>
import { LocalNotifications } from 'nativescript-local-notifications';
import meActionbar from './public/actionbar';
export default {
  components: {
    meActionbar
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

<style scoped>
</style>
