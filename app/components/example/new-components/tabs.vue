<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <Tabs selectedIndex="1">
      <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
      <TabStrip>
        <TabStripItem>
          <Label text="Home"></Label>
          <Image src="font://&#xf015;" class="fas"></Image>
        </TabStripItem>
        <TabStripItem class="special">
          <Label text="Account"></Label>
          <Image src="font://&#xf007;" class="fas"></Image>
        </TabStripItem>
        <TabStripItem class="special">
          <Label text="Search"></Label>
          <Image src="font://&#xf00e;" class="fas"></Image>
        </TabStripItem>
      </TabStrip>

      <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
      <TabContentItem>
        <GridLayout>
          <Label text="Home Page" class="h2 text-center"></Label>
        </GridLayout>
      </TabContentItem>
      <TabContentItem>
        <GridLayout>
          <Label text="Account Page" class="h2 text-center"></Label>
        </GridLayout>
      </TabContentItem>
      <TabContentItem>
        <GridLayout>
          <Label text="Search Page" class="h2 text-center"></Label>
        </GridLayout>
      </TabContentItem>
    </Tabs>
  </Page>
</template>

<script>
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: 'Tabs'
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
Tabs.bottom-nav {
  background-color: orangered;
  color: gold;
  font-size: 24;
}

TabStripItem.tabstripitem-active {
  background-color: teal;
}

TabStripItem.tabstripitem-active:active {
  background-color: yellowgreen;
}

TabContentItem.first-tabcontent {
  background-color: seashell;
  color: olive;
}
TabContentItem.second-tabcontent {
  background-color: slategray;
  color: aquamarine;
}
TabContentItem.third-tabcontent {
  background-color: blueviolet;
  color: antiquewhite;
}
Tabs TabStrip {
  highlight-color: red;
}
</style>
