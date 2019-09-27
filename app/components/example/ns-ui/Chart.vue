<template>
  <RadCartesianChart height="100%" width="100%">
    <BarSeries v-tkCartesianSeries categoryProperty="Country" valueProperty="Amount" :items="items" />
    <CategoricalAxis v-tkCartesianHorizontalAxis />
    <LinearAxis v-tkCartesianVerticalAxis />
  </RadCartesianChart>
</template>

<script>
import { getCountriesData } from './data/data';

export default {
  name: 'chart-view',
  data() {
    return {
      items: getCountriesData()
    };
  }
};
</script>

<style scoped lang="scss">
</style>
