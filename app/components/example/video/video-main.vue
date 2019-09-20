<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="视频1" @tap="btnVideo1" />
        <Button class="btn btn-primary" text="视频2" @tap="btnVideo2" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Video1 from './video';
import Video2 from './video2';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '视频'
    };
  },
  mounted() {},
  methods: {
    btnVideo1: function() {
      this.navigateTo(this, Video1);
    },
    btnVideo2: function() {
      this.navigateTo(this, Video2);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
