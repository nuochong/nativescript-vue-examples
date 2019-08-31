<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="geolocation" text="获取位置信息" />
    </StackLayout>
  </Page>
</template>

<script>
const geolocation = require('nativescript-geolocation');
const { Accuracy } = require('tns-core-modules/ui/enums');
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '获取位置信息'
    };
  },
  mounted() {},
  methods: {
    geolocation: function() {
      geolocation.enableLocationRequest();
      geolocation
        .getCurrentLocation({
          desiredAccuracy: Accuracy.high,
          maximumAge: 5000,
          timeout: 20000
        })
        .then(res => {
          const lat = res.latitude;
          const lon = res.longitude;
          const speed = res.speed;
          console.log('纬度', lat);
          console.log('经度', lon);
          console.log('速度', speed);
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
