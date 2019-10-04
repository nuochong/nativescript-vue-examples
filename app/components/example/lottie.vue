<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <LottieView height="130" src="Mobilo/N.json" :loop="true" :autoPlay="true" @loaded="lottieViewLoaded"></LottieView>
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
</style>
