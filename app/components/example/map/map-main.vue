<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="Mapbox" @tap="btnMapbox" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Mapbox from './mapbox';

import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '地图'
    };
  },
  mounted() {},
  methods: {
    btnMapbox: function() {
      this.navigateTo(this, Mapbox);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
