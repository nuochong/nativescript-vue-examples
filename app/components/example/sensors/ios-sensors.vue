<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="是否支持加速度计" @tap="btnIsAccelerometerAvailable" />
        <Button class="btn btn-primary -primary" text="是否支持陀螺仪" @tap="btnIsGyroscopeAvailable" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
// let Coremotion = require('nativescript-coremotion');
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '苹果传感器'
    };
  },
  mounted() {
    console.log('仅支持IOS，如果打开插件引用android会报错');
  },
  methods: {
    btnIsAccelerometerAvailable: function() {
      let state = Coremotion.isAccelerometerAvailable();
      console.log('是否支持加速度计：', state);
    },
    btnIsGyroscopeAvailable: function() {
      let state = Coremotion.isGyroscopeAvailable();
      console.log('是否支持陀螺仪：', state);
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
