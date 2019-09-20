<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Label class="label-black" id="feat1" ref="feat1" text="元素1" width="80" />
        <Button class="btn btn-primary" text="开始" @tap=" startTour " />
        <button class="btn btn-primary" id="feat2" ref="feat2" text="元素2" height="80" width="80" />
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
          title: '功能 1',
          description: '功能1描述',
          outerCircleColor: 'orange',
          rippleColor: 'black',
          dismissable: false
        },
        {
          view: feat2,
          title: '功能 2',
          description: '功能2描述',
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
