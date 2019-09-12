<template>
  <Page class="page background" actionBarHidden="true">
    <ActionBarFirst :title="title" />
    <GridLayout class="body-wrap">
      <!-- <GridLayout ref="bg" scaleX="1.4" scaleY="1.4" class="background"></GridLayout> -->
      <ScrollView>
        <StackLayout class="hello-world">
          <Button class="btn btn-primary" text="示例" @tap="example" />
          <Button class="btn btn-primary" text="实例" @tap="project" />
        </StackLayout>
      </ScrollView>
    </GridLayout>
  </Page>
</template>

<script>
import Example from './example/main';
import Project from './project/main';
import ActionBarFirst from './example/public/action-bar-first';

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
    //this.startBackgroundAnimation();
  },
  methods: {
    example: function() {
      this.navigateTo(this, Example, 'left');
      //this.$setStatusBarFontColors('black');
    },
    project: function() {
      this.navigateTo(this, Project, 'left');
      //this.$setStatusBarFontColors('white');
    },
    startBackgroundAnimation() {
      let background = this.$refs.bg.nativeView;
      background.animate({
        scale: { x: 1.0, y: 1.0 },
        duration: 10000
      });
    }
  }
};
</script>

<style scoped lang="scss">
// .body-wrap{
//   margin-top:15;
// }
.background {
  background-image: url('res://bg_login');
  //background-color: blue;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
