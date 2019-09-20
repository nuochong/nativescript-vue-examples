<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Label id="feat1" ref="feat1" text="Feature 111" width="50"></Label>
        <Button text="start" @tap=" startTour "></Button>
        <button id="feat2" ref="feat2" text="Feature 2" height="50" width="50"></button>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { AppTour, TourStop, TourEvents } from '../../tools/nativescript-app-tour';
import { topmost } from 'tns-core-modules/ui/frame';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '引导'
    };
  },
  mounted() {},
  methods: {
    startTour() {
      let feat1 = this.$refs.feat1.nativeView;
      let feat2 = this.$refs.feat2.nativeView;
      const stops = [
        {
          view: feat1,
          title: 'Feature 1',
          description: 'Feature 1 Description',
          outerCircleColor: 'orange',
          rippleColor: 'black',
          dismissable: false
        },
        {
          view: feat2,
          title: 'Feature 2',
          description: 'Feature 2 Description',
          outerCircleColor: 'red',
          rippleColor: 'black',
          dismissable: false
        }
      ];

      const handlers = {
        finish() {
          console.log('Tour 结束');
        },
        onStep(lastStopIndex) {
          console.log('User 继续', lastStopIndex);
        },
        onCancel(lastStopIndex) {
          console.log('User 取消', lastStopIndex);
        }
      };

      let tour = new AppTour(stops, handlers);
      tour.show();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
