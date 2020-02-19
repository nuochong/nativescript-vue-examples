<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="切换布局1" @tap="btnChangeComponents('Label1')" />
        <Button class="btn btn-primary -primary" text="切换布局2" @tap="btnChangeComponents('Label2')" />
        <component class="dynamic-components-center text-center" v-for="(component, index) in viewsArray" :key="index" v-show="component === currentComponent" :is="component" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Label1 from './label1';
import Label2 from './label2';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond,
    Label1,
    Label2
  },
  data() {
    return {
      title: '使用动态组件',
      viewsArray: ['Label1', 'Label2'],
      currentComponent: 'Label1'
    };
  },
  mounted() {},
  methods: {
    btnChangeComponents: function(value) {
      this.currentComponent = value;
      console.log('当前布局', this.currentComponent);
    }
  }
};
</script>

<style scoped lang="scss">
.dynamic-components-center{
  text-align: center;
}
</style>
