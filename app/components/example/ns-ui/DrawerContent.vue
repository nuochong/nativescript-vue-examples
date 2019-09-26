<template lang="html">
<GridLayout rows="auto, *" class="sidedrawer sidedrawer-left">
  <StackLayout row="0" class="sidedrawer-header">
      <Label class="sidedrawer-header-image fa" text.decode="&#xf2bd;"></Label>
      <Label class="sidedrawer-header-brand" text="User Name"></Label>
      <Label class="footnote" text="username@mail.com"></Label>
  </StackLayout>

  <ScrollView row="1" class="sidedrawer-content">
      <StackLayout>
          <GridLayout columns="auto, *" :class="'sidedrawer-list-item' + (selectedPage === 'Chart' ? ' selected': '')" @tap="onNavigationItemTap('Chart')">
              <Label col="0" text.decode="&#xf015;" class="fa"></Label>
              <Label col="1" text="Chart" class="p-r-10"></Label>
          </GridLayout>

          <GridLayout columns="auto, *" :class="'sidedrawer-list-item' + (selectedPage === 'Listview' ? ' selected': '')" @tap="onNavigationItemTap('Listview')">
              <Label col="0" text.decode="&#xf1ea;" class="fa"></Label>
              <Label col="1" text="Listview" class="p-r-10"></Label>
          </GridLayout>

          <GridLayout columns="auto, *" :class="'sidedrawer-list-item' + (selectedPage === 'Calendar' ? ' selected': '')" @tap="onNavigationItemTap('Calendar')">
              <Label col="0" text.decode="&#xf002;" class="fa"></Label>
              <Label col="1" text="Calendar" class="p-r-10"></Label>
          </GridLayout>

          <GridLayout columns="auto, *" :class="'sidedrawer-list-item' + (selectedPage === 'Autocomplete' ? ' selected': '')" @tap="onNavigationItemTap('Autocomplete')">
              <Label col="0" text.decode="&#xf005;" class="fa"></Label>
              <Label col="1" text="Autocomplete" class="p-r-10"></Label>
          </GridLayout>

          <StackLayout class="hr-light"></StackLayout>

          <GridLayout columns="auto, *" :class="'sidedrawer-list-item' + (selectedPage === 'Dataform' ? ' selected': '')" @tap="onNavigationItemTap('Dataform')">
              <Label col="0" text.decode="&#xf013;" class="fa"></Label>
              <Label col="1" text="Dataform" class="p-r-10"></Label>
          </GridLayout>
          <GridLayout columns="auto, *" :class="'sidedrawer-list-item' + (selectedPage === 'Gauge' ? ' selected': '')" @tap="onNavigationItemTap('Gauge')">
              <Label col="0" text.decode="&#xf013;" class="fa"></Label>
              <Label col="1" text="Gauge" class="p-r-10"></Label>
          </GridLayout>
      </StackLayout>
  </ScrollView>
</GridLayout>
</template>

<script>
// import Chart from './Chart';
// import Listview from './ListView';
// import Calendar from './Calendar';
// import Autocomplete from './AutoComplete';
// import Dataform from './DataForm';
// import Gauge from './Gauge';
// import * as utils from './shared/utils';
import SelectedPageService from './shared/selected-page-service';

export default {
  mounted() {
    SelectedPageService.getInstance().selectedPage$.subscribe(selectedPage => (this.selectedPage = selectedPage));
  },
  data() {
    return {
      // Chart: Chart,
      // Listview: Listview,
      // Calendar: Calendar,
      // Autocomplete: Autocomplete,
      // Dataform: Dataform,
      // Gauge: Gauge,
      selectedPage: ''
    };
  },
  // components: {
  //   Chart,
  //   Listview,
  //   Calendar,
  //   Autocomplete,
  //   Dataform,
  //   Gauge
  // },
  methods: {
    onNavigationItemTap(component) {
      this.$emit('change', component);
      
      // this.$navigateTo(component, {
      //   clearHistory: true
      // });
      console.log('到了')
       //utils.closeDrawer();
    }
  }
};
</script>

<style scoped lang="scss">
// Custom common variables
@import '../../../ns-ui';

// Drawer navigation custom styles
$sidedrawer-header-image-size: 60;
$sidedrawer-header-image-offset-top: 20;
$sidedrawer-header-image-offset-bottom: 5;
$sidedrawer-list-item-offset-left: 15;
$sidedrawer-list-icon-offset: 10;
$sidedrawer-list-icon-size: 20;
.sidedrawer {
  &.sidedrawer-left {
    background-color: $ab-background;

    .sidedrawer-header-image {
      color: $background-dark;
      height: $sidedrawer-header-image-size;
      width: $sidedrawer-header-image-size;
      font-size: $sidedrawer-header-image-size;
      padding: 0;
      margin-bottom: $sidedrawer-header-image-offset-bottom;
      margin-top: $sidedrawer-header-image-offset-top;
    }

    .footnote {
      color: rgba($ab-color, 0.5);
    }
  }

  .sidedrawer-header {
    background-color: $ab-background;

    .sidedrawer-header-brand {
      color: $ab-color;
    }
  }

  .sidedrawer-content {
    background-color: $side-drawer-background;
  }

  .sidedrawer-list-item {
    padding-left: $sidedrawer-list-item-offset-left;

    label {
      vertical-align: center;
      color: $blue-dark;
    }

    .fa {
      width: $sidedrawer-list-icon-size;
      margin-right: $sidedrawer-list-icon-offset;
    }

    &.selected {
      background-color: $item-active-background;

      label {
        color: $item-active-color;
      }
    }
  }
}
</style>