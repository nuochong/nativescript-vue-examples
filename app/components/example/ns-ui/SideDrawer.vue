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
        <!-- <Chart v-show="currentActive == 'Chart'" />
        <Listview v-show="currentActive == 'Listview'" />
        <Calendar v-show="currentActive =='Calendar'" />
        <Autocomplete v-show="currentActive == 'Autocomplete'" />
        <Dataform v-show="currentActive == 'Dataform'" />
        <Gauge v-show="currentActive == 'Gauge'" /> -->
      </StackLayout>
    </RadSideDrawer>
  </Page>
</template>

<script>
import Chart from './Chart';
import Listview from './ListView';
import Calendar from './Calendar';
import Autocomplete from './AutoComplete';
import Dataform from './DataForm';
import Gauge from './Gauge';

import DrawerContent from './DrawerContent';
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
