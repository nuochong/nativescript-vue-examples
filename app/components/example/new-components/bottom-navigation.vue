<template>
  <Page class="page" loaded="pageLoaded" ref="page">
    <ActionBarSecond :title="title" />

    <BottomNavigation selectedIndex="1">
      <!-- TabStripItem supports the CSS pseudo selector :active (see styling.component.css) -->
      <TabStrip>
        <TabStripItem class="tabstripitem">
          <Label text="Home"></Label>
          <Image src="font://&#xf015;" class="fas t-36"></Image>
        </TabStripItem>
        <TabStripItem class="tabstripitem">
          <Label text="Account"></Label>
          <Image src="font://&#xf007;" class="fas t-36"></Image>
        </TabStripItem>
        <TabStripItem class="tabstripitem">
          <Label text="Search"></Label>
          <Image src="font://&#xf00e;" class="fas t-36"></Image>
        </TabStripItem>
      </TabStrip>

      <TabContentItem class="first-tabcontent">
        <GridLayout>
          <Label text="Home Page" horizontalAlignment="center" verticalAlignment="middle"></Label>
        </GridLayout>
      </TabContentItem>
      <TabContentItem class="second-tabcontent">
        <GridLayout>
          <Label text="Account Page" horizontalAlignment="center" verticalAlignment="middle"></Label>
        </GridLayout>
      </TabContentItem>
      <TabContentItem class="third-tabcontent">
        <GridLayout>
          <Label text="Search Page" horizontalAlignment="center" verticalAlignment="middle"></Label>
        </GridLayout>
      </TabContentItem>
    </BottomNavigation>
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
      title: 'BottomNavigation'
    };
  },
  mounted() {},
  methods: {
    onButton: function() {}
  }
};
</script>

<style scoped lang="scss">
TabStripItem.tabstripitem {
  background-color: teal;
}

TabStripItem.tabstripitem:active {
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

.fas {
  font-family: 'Font Awesome 5 Free', 'fa-solid-900';
  font-weight: 900;
}

.t-36 {
  font-size: 36;
}
</style>
