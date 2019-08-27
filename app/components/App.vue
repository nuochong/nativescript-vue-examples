<template>
  <Page>
    <me-actionbar-main :title="'Welcome to NativeScript-Vue!'"></me-actionbar-main>
    <ScrollView>
      <!-- <GridLayout  colums="*" rows="*"> -->
      <StackLayout class="hello-world">
        <Label class="message" :text="msg" col="0" row="0" />
        <Button class="btn btn-primary" text="示例" @tap="example" />
        <Button class="btn btn-primary dd" text="应用" @tap="project" />
        <Button class="btn btn-primary dd" text="应用" @tap="common" />
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
    return {
      msg: 'Hello World!'
    };
  },
  mounted() {},
  methods: {
    example: function() {
      this.$navigateTo(example);
    },
    project: function() {
      this.$navigateTo(project);
      console.log('project');
    },
    onButtonTap: function() {
      this.navigateTo(this, HelloWorld);
    },
    common: function() {
      console.log('xxxxxx', this.localUrl);
    }
  }
};
</script>

<style scoped>
</style>
