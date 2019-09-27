<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="实例" @tap="btnVibrate" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Vibrate } from '../../../tools/nativescript-vibrate';
let vibrator = new Vibrate();
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '震动'
    };
  },

  methods: {
    btnVibrate: function() {
      console.log('震动');
      vibrator.vibrate([100, 200, 300]);
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  margin: 12;
}

label {
  font-size: 14;
  color: #333333;
  margin-top: 50;
}

label.slider-value {
  margin-top: 12;
  color: #53ba82;
  text-align: center;
}

Slider {
  color: #53ba82;
  background-color: #53ba82;
}

button {
  font-size: 14;
  border-radius: 3;
  border-width: 2;
  border-color: #63d4a5;
  color: #63d4a5;
  padding: 12 0;
  margin: 12 6;
}
</style>
