<template>
  <TabView :selectedIndex="selectedIndex">
    <TabViewItem title="关注">
      <Label text="Content for Tab 1" />
    </TabViewItem>
    <TabViewItem title="专题">
      <Label text="Content for Tab 2" />
    </TabViewItem>
    <TabViewItem title="连载">
      <Label text="Content for Tab 3" />
    </TabViewItem>
    <TabViewItem title="文集">
      <Label text="Content for Tab 4" />
    </TabViewItem>
  </TabView>
</template>

<script>
export default {
  components: {},
  props: {
    place: {
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
</style>