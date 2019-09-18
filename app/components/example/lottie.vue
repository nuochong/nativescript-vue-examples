<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <LottieView height="130" src="Mobilo/N.json" :loop="true" :autoPlay="true" @loaded="lottieViewLoaded"></LottieView>
        <Button class="btn btn-primary btn-green" @tap="changebtn" ref="btn" text="改变按钮" />
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
      title: '动图',
      _lottieView: null
    };
  },
  mounted() {},
  methods: {
    lottieViewLoaded(args) {
      this._lottieView = args.object;
    }
  }
};
</script>

<style scoped lang="scss">
.btn-green {
  background-color: blue;
  color: green;
  font-size: 20px;
}
</style>
