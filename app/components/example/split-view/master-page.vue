<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <!-- The [columns] bit here makes this app a two-column layout on tablets, and a one-column layout on phones -->
    <GridLayout :columns="isTablet ? '*, 2*' : '*'">
      <GridLayout col="0" class="left-column">
        <!-- The ListView shows on both tablets and phones. On tablets the list occupies the left-hand side
	          of the screen, and one phones the ListView takes up the whole screen. -->
        <ListView class="list-group" for="item in pokemon" @itemTap="select">
          <v-template>
            <GridLayout class="list-group-item" rows="*" columns="auto, *">
              <Image row="0" col="0" :src="item.src" class="thumb"></Image>
              <Label row="0" col="1" :text="item.name"></Label>
            </GridLayout>
          </v-template>
        </ListView>
      </GridLayout>
      <!-- The markup below is duplicated in the DetailPage. You might want to abstract this bit
	        of code into a shared component, or you may wish to keep the implementations separate so you have the
	        ability to customize the markup based on whether the user is on a phone or tablet. The markup below
	        is the UI that tablet users see, and the markup in DetailPage below is the markup that
	        phone users see. -->
      <StackLayout col="1" class="p-20" v-if="isTablet">
        <Label class="h1 m-b-10" :text="selected.name"></Label>
        <Image height="200" :src="selected.src" class="thumb img-circle"></Image>
        <Label class="body" textWrap="true" :text="selected.description"></Label>
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script>
const DeviceType = require('tns-core-modules/ui/enums').DeviceType;
const isTablet = require('tns-core-modules/platform').device.deviceType == DeviceType.Tablet;
import DetailPage from './detail-page';
const pokemon = require('./data').pokemon;
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '页面分割',
      isTablet: isTablet,
      pokemon: pokemon,
      selected: {}
    };
  },
  methods: {
    select: function(event) {
      // Update the selected instance variable for tablet users
      const selected = pokemon[event.index];
      if (isTablet) {
        this.selected = selected;
      } else {
        // And navigate phone users.
        this.$navigateTo(DetailPage, {
          props: { selected: selected }
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}
</style>
