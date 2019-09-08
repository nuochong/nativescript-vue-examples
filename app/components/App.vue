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
      this.navigateTo(this, Example, 'left');
    },
    project: function() {
      this.navigateTo(this, Project, 'left');
    }
  }
};
</script>

<style scoped lang="scss">
</style>
