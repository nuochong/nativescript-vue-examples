<template>
  <Page class="page" @loaded="pageLoaded">
    <ActionBarSecond :title="title" />

    <GridLayout columns="*" rows="*">
      <AR debugLevel="FEATURE_POINTS" planeDetection="HORIZONTAL" showStatistics="true" @arLoaded="arLoaded" @planeTapped="addSomethingToThePlane">
      </AR>
    </GridLayout>
  </Page>
</template>

<script>
import { AR } from 'nativescript-ar';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '请求'
    };
  },
  mounted() {
    console.log('AR 安卓和苹果目前都不可用');
  },
  methods: {
    arLoaded(arLoadedEventData) {
      console.log('>> AR Loaded! Object: ' + arLoadedEventData.object);
      const ar = arLoadedEventData.object;
      // 用“ ar”对象做点什么。请参见下面的“ addSomethingToThePlane”
    },
    addSomethingToThePlane(arPlaneTappedEventData) {
      const ar = arPlaneTappedEventData.object;
      ar.addNode({
        position: {
          x: arPlaneTappedEventData.position.x,
          y: arPlaneTappedEventData.position.y + 0.1, // 在我们所乘飞机上方的半米处
          z: arPlaneTappedEventData.position.z
        }
      }).then(node => console.log('node added: ' + node));
    }
  }
};
</script>

<style scoped lang="scss">
</style>
