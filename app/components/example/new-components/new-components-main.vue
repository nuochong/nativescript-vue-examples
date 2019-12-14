<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="BottomNavigation" @tap="btnBottomNavigation" />
        <Button class="btn btn-primary -primary" text="Tabs" @tap="btnTabs" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import BottomNavigation from './bottom-navigation';
import Tabs from './tabs';

import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: 'NS6新增组件'
    };
  },
  mounted() {},
  methods: {
    btnBottomNavigation: function() {
      this.navigateTo(this, BottomNavigation);
    },
    btnTabs: function() {
      this.navigateTo(this, Tabs);
    }
  }
};
</script>

<style scoped lang="scss"></style>
