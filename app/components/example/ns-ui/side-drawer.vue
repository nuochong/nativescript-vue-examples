<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <RadSideDrawer ref="drawer" drawerLocation="Left" gesturesEnabled="true" :drawerTransition="transition">
      <StackLayout ~drawerContent backgroundColor="#ffffff">
        <DrawerContent @change="change" />
      </StackLayout>
      <StackLayout height="100%" width="100%" ~mainContent ref="drawerMainContent">
        <!-- <slot name="mainContent"></slot> -->
        <Chart v-show="componentsArr.Chart" />
        <Listview v-show="componentsArr.Listview" />
        <Calendar v-show="componentsArr.Calendar" />
        <Autocomplete v-show="componentsArr.Autocomplete" />
        <Dataform v-show="componentsArr.Dataform" />
        <Gauge v-show="componentsArr.Gauge" />
      </StackLayout>
    </RadSideDrawer>
  </Page>
</template>

<script>
import Chart from './chart';
import Listview from './list-view/list-view';
import Calendar from './calendar';
import Autocomplete from './auto-complete';
import Dataform from './data-form';
import Gauge from './gauge';
import DrawerContent from './drawer-content';
import { SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
import ActionBarSecond from '../public/action-bar-second';

export default {
  name: 'root-view',
  components: {
    ActionBarSecond,
    DrawerContent,
    Chart,
    Listview,
    Calendar,
    Autocomplete,
    Dataform,
    Gauge
  },
  data() {
    return {
      title: 'NSUI',
      transition: new SlideInOnTopTransition(),
      componentsArr: {
        Chart: true,
        Listview: false,
        Calendar: false,
        Autocomplete: false,
        Dataform: false,
        Gauge: false
      },
      currentActive: 'Chart'
    };
  },
  methods: {
    change: function(name) {
      this.componentsArr[this.currentActive] = false;
      this.componentsArr[name] = true;
      this.currentActive = name;
      console.log('xxxx', JSON.stringify(this.componentsArr));
      this.$refs.drawer.closeDrawer();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
