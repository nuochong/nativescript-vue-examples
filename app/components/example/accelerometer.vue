<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Label class="label-white" :text="'X: ' + x" />
        <Label class="label-white" :text="'Y: ' + y" />
        <Label class="label-white" :text="'Z: ' + z" />
        <Button class="btn btn-primary -primary" text="启动" @tap="btnStart" />
        <Button class="btn btn-primary -primary" text="停止" @tap="btnStop" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const accelerometer = require('nativescript-accelerometer');
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '加速度计',
      x: 0,
      y: 0,
      z: 0
    };
  },
  mounted() {},
  methods: {
    btnStart: function() {
      try {
        accelerometer.startAccelerometerUpdates(
          data => {
            [this.x, this.y, this.z] = [data.x, data.y, data.z];
            console.log('x: ' + data.x + 'y: ' + data.y + 'z: ' + data.z);
          },
          { sensorDelay: 'ui' }
        );
      } catch (err) {
        console.log('错误：', err);
      }
    },
    btnStop: function() {
      try {
        accelerometer.stopAccelerometerUpdates();
      } catch (err) {
        console.log('错误：', err);
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>
