<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Label textWrap="true" text="这是一个hello world组件，如果你想尝试一下，请点击这个按钮" />
        <Button class="btn btn-primary" text="显示隐藏" @tap="surprise = !surprise" />
        <Image v-if="surprise" src="~/assets/images/NativeScript-Vue.png" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '显示隐藏',
      surprise: false
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
