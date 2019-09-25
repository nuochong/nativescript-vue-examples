<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="安卓传感器" @tap="btnAndroidSensors" />
        <Button class="btn btn-primary" text="苹果传感器" @tap="btnIosSensors" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import AndroidSensors from './android-sensors';
import IosSensors from './ios-sensors';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '传感器',
      about:'https://github.com/Akylas/nativescript-sensors'
    };
  },
  mounted() {},
  methods: {
    btnAndroidSensors: function() {
      this.navigateTo(this, AndroidSensors);
    },
    btnIosSensors() {
      this.navigateTo(this, IosSensors);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
