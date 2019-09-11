<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" @tap="open" :text="title" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import World from './target/world';
import ActionBarSecond from './public/action-bar-second';

const Custom = require('../../assets/js/transition/custom-transition');
const CustomTransition = new Custom.CustomTransition(500, 'spring');
// const Slide = require('../../assets/js/transition/slide-transition');
// const SlideTransition = new Slide.SlideTransition('right', 500, 'spring');
// const Parallax = require('../../assets/js/transition/parallax-transition.android');
// const ParallaxTransition = new Parallax.ParallaxTransition('left', 1500, 'spring');

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '自定义过渡效果'
    };
  },
  mounted() {},
  methods: {
    open: function() {
      this.$navigateTo(World, {
        animated: true,
        transition: {
          name: 'CustomTransition',
          duration: 1000,
          instance: CustomTransition,
          curve: 'spring'
        }
        // transition: {
        //   name: 'SlideTransition',
        //   duration: 1000,
        //   instance: SlideTransition,
        //   curve: 'spring'
        // },
        // transition: {
        //   name: 'ParallaxTransition',
        //   duration: 5000,
        //   instance: ParallaxTransition,
        //   curve: 'spring'
        // },
        // transitionAndroid: {
        //   name: 'CustomTransition',
        //   duration: 1000,
        //   instance:transition,
        //   curve: 'spring'
        // },
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
