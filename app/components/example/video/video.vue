<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <!-- <VideoPlayer src="https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" autoplay="true" height="300"></VideoPlayer> -->
        <Video src="~/assets/videos/small.mp4" autoplay="true" height="300" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Video } from 'nativescript-videoplayer';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '视频1'
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
