<template>
  <WrapLayout>
    <TabView :selectedIndex="selectedIndex">
      <TabViewItem title="Tab 1">
        <Label text="Content for Tab 1" />
      </TabViewItem>
      <TabViewItem title="Tab 2">
        <Label text="Content for Tab 2" />
      </TabViewItem>
    </TabView>
  </WrapLayout>
</template>

<script>
import App from '../../App';

export default {
  data() {
    return {
      title: '',
      msg: 'Hello World!'
    };
  },
  methods: {
    onButtonTap: function() {
      this.$navigateTo(App);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
