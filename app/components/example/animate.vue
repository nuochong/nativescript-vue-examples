<template>
  <Page class="page" loaded="pageLoaded" ref="page" @loaded="startBackgroundAnimation">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="按钮动画" @tap="startBackgroundAnimation" ref="btnAnimate" scaleX="1.4" scaleY="1.4" />
        <Label class="label-white animateicon" :text="msg" col="0" row="0" />
        <Image class="animateicon" src="~/assets/images/NativeScript-Vue.png" />
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
      title: '动画效果',
      msg: '此处演示使用CSS动画效果'
    };
  },
  // created() {
  //   this.startBackgroundAnimation();
  ////如果使用created钩子则无法进入页面
  // },
  mounted() {
    this.startBackgroundAnimation();
    //将动画放在mounted中无法启动，只能通过在page中@loaded或者按钮点击事件触发。
  },
  methods: {
    startBackgroundAnimation: function() {
      this.$refs.btnAnimate.nativeView
        .animate({
          rotate: 360,
          scale: { x: 1.0, y: 1.0 },
          duration: 10000
        })
        .then(() => {
          console.log('动画执行完毕');
          //do something
        });
    }
  }
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
