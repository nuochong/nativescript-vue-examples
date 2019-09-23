<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ContentView height="100%" width="100%">
      <!-- <Mapbox accessToken="your_token" mapStyle="traffic_day" latitude="50.467735" longitude="13.427718" hideCompass="true" zoomLevel="18" showUserLocation="false"
        disableZoom="false" disableRotation="false" disableScroll="false" disableTilt="false" (mapReady)="onMapReady($event)">
      </Mapbox> -->
    </ContentView>
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
      title: 'mapbox'
    };
  },
  mounted() {
    console.log('在android无法联网，ios pod无法安装');
  },
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
