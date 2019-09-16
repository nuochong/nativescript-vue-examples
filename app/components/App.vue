<template>
  <Page class="page" actionBarHidden="true">
    <ActionBarFirst :title="title" />
    <GridLayout>
      <GridLayout class="background" ref="bg" scaleX="1.4" scaleY="1.4" @loaded="startBackgroundAnimation"></GridLayout>
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
  created() {},
  methods: {
    example: function() {
      this.navigateTo(this, Example, 'left');
      //this.$setStatusBarFontColors('black');
    },
    project: function() {
      this.navigateTo(this, Project, 'left');
      //this.$setBarFontColor('black');
      //this.$setStatusBarFontColors('white');
    },
    startBackgroundAnimation: function() {
      this.$refs.bg.nativeView.animate({
        scale: { x: 1.0, y: 1.0 },
        duration: 10000
      });
    }
  }
};
</script>

<style scoped lang="scss">
.background {
  background-image: url('res://bg_login_rabbit');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
