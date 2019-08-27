<template>
  <Page class="page">
    <ActionBar class="action-bar" title="获取位置信息">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="geolocation" text="获取位置信息" />
    </StackLayout>
  </Page>
</template>

<script>
const geolocation = require('nativescript-geolocation');
const { Accuracy } = require('tns-core-modules/ui/enums');
export default {
  data() {
    return {
      title: ''
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
          this.lat = res.latitude;
          this.lon = res.longitude;
          this.speed = res.speed;
          console.log('定位', this.lat);
          console.log('定位', this.lon);
          console.log('定位', this.lat);
        });
    }
  }
};
</script>

<style scoped>
.hello-world {
  margin: 20;
}

label {
  color: red;
}
</style>
