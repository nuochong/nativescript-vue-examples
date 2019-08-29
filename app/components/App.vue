<template>
  <Page>
    <ActionBarFirst :title="'Welcome to NativeScript-Vue!'"></ActionBarFirst>
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

export default {
  components: {
    ActionBarFirst
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    example: function() {
      this.navigateTo(this, Example);
    },
    project: function() {
      this.navigateTo(this, Project);
    }
  }
};
</script>

<style scoped>
</style>
