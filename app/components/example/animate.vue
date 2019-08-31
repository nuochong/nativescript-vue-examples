<template>
  <Page class="page" loaded="pageLoaded" ref="page">
    <ActionBarSecond :title="title" />

    <GridLayout colums="*" rows="*">
      <Label class="animateicon" :text="msg" col="0" row="0" />
      <Image class="animateicon" src="~/assets/images/NativeScript-Vue.png" />
    </GridLayout>
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
      title: '动画效果',
      msg: 'Hello World! '
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.animateicon {
  animation-name: bounceInOpacity;
  animation-duration: 1s;
  animation-delay: 0.5s;
}
@keyframes bounceInOpacity {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
</style>
