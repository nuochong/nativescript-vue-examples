<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button horizontalAlignment="center" text="Start Linear Acceleration" @tap=" startLinearAcceleration " />
        <Label :text=" sensorMaxFifoEventCount " class="t-20 text-center c-black" textWrap="true" />
        <Label :text=" sensorData " class="t-20 text-center c-black" textWrap="true" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
// import { AndroidSensors, AndroidSensorListener, SensorDelay } from 'nativescript-android-sensors';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '安卓传感器',
      see: 'https://github.com/bradmartin/nativescript-android-sensors',
      message: 'string',
      androidSensors: AndroidSensors,
      sensorMaxFifoEventCount: 'string',
      sensorData: 'string'
    };
  },
  mounted() {
    console.log('仅支持android，由于在ios下引入该插件会报错，所以这里将其注释掉');
    this.init();
  },
  methods: {
    init: function() {
      this.androidSensors = new AndroidSensors();

      const listener = new AndroidSensorListener({
        onSensorChanged: result => {
          console.log('SensorChangedEvent', result);
          // 当前以字符串形式返回结果
          const parsedData = JSON.parse(result);
          const rawSensorData = parsedData.data;
          this.sensorData = rawSensorData.x;
          // const sensor = parsedData.sensor;
          // const time = parsedData.time;
        },
        onAccuracyChanged: (sensor, accuracy) => {
          console.log('Accuracy Changed', sensor, accuracy);
        }
      });

      this.androidSensors.setListener(listener);
    },
    startLinearAcceleration() {
      // 启动加速度传感器
      const acceleration = this.androidSensors.startSensor(android.hardware.Sensor.TYPE_LINEAR_ACCELERATION, SensorDelay.NORMAL, 8000000);
      // 检查它是否支持FIFO
      const x = acceleration.getFifoMaxEventCount();
      this.sensorMaxFifoEventCount = `Max Fifo Event Count: ${x}`;

      // 8秒后，我们将停止加速度传感器
      // 定时20秒自动关闭
      setTimeout(() => {
        this.androidSensors.stopSensor(acceleration);
        this.sensorData = 'Sensor has stopped!';
      }, 20000);
    }
  }
};
</script>

<style scoped lang="scss">
.lable-refresh {
  font-size: 48;
  text-align: center;
}
</style>
