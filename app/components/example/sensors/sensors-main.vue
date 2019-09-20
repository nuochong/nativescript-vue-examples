<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="安卓传感器" @tap="btnAndroidSensors" />
        <Button class="btn btn-primary" text="苹果传感器" @tap="btnCoremotion" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import AndroidSensors from './android-sensors';
import Coremotion from './coremotion';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '传感器'
    };
  },
  mounted() {},
  methods: {
    btnAndroidSensors: function() {
      this.navigateTo(this, AndroidSensors);
    },
    btnCoremotion() {
      this.navigateTo(this, Coremotion);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
