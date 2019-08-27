<template>
  <Page>
    <me-actionbar-main :title="'Welcome to NativeScript-Vue!'"></me-actionbar-main>
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
import example from './example/Main';
import project from './project/Main';

import meActionbarMain from './example/public/actionbarMain';
export default {
  components: {
    meActionbarMain
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    example: function() {
      this.$navigateTo(example);
    },
    project: function() {
      this.$navigateTo(project);
    }
  }
};
</script>

<style scoped>
</style>
