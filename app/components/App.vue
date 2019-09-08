<template>
  <Page class="page">
    <ActionBarFirst :title="title" />
    <ScrollView>
      <!-- <GridLayout  colums="*" rows="*"> -->
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="示例" @tap="example" />
        <Button class="btn btn-primary" text="实例" @tap="project" />
      </StackLayout>
      <!-- </GridLayout> -->
    </ScrollView>
  </Page>
</template>

<script>
import Example from './example/main';
import Project from './project/main';
import ActionBarFirst from './example/public/action-bar-first';
import shortcuts from '../app.shortcuts.js';

const Custom = require('../assets/js/transition/custom-transition');
const CustomTransition = new Custom.CustomTransition(500, 'spring');
// const Slide = require('../assets/js/transition/slide-transition');
// const SlideTransition = new Slide.SlideTransition('right', 500, 'spring');
// const Parallax = require('../assets/js/transition/parallax-transition.android');
// const ParallaxTransition = new Parallax.ParallaxTransition('left', 1500, 'spring');

export default {
  components: {
    ActionBarFirst
  },
  data() {
    return {
      title: 'Welcome to NativeScript-Vue!'
    };
  },
  mounted() {
    shortcuts.handleTask();
  },
  methods: {
    example: function() {
      //this.navigateTo(this, Example);
      this.$navigateTo(Example, {
        animated: true,
        transition: {
          name: 'CustomTransition',
          duration: 1000,
          instance: CustomTransition,
          curve: 'spring'
        },
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
    },
    project: function() {
      this.navigateTo(this, Project,'left');
    }
  }
};
</script>

<style scoped lang="scss">
</style>
