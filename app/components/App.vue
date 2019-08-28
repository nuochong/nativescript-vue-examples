<template>
  <Page>
    <ActionBarFirst :title="'Welcome to NativeScript-Vue!'"></ActionBarFirst>
    <ScrollView>
      <!-- <GridLayout  colums="*" rows="*"> -->
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="示例" @tap="example" />
        <Button class="btn btn-primary" text="应用" @tap="project" />
      </StackLayout>
      <!-- </GridLayout> -->
    </ScrollView>
  </Page>
</template>

<script>
import Example from './Example/Main';
import Project from './Project/Main';
import ActionBarFirst from './Example/Public/ActionBarFirst';

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
