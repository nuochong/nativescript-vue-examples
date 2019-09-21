<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <GridLayout height="100%" width="100%" id="userList" rows="*">
      <Fab id="fabButtonTopLeft" row="0" icon="res://baseline_add_white_24" tap="animate" rippleColor="#ffffff" class="fab-button top-left" hideOnSwipeOfView="userList"
        swipeAnimation="slideUp" />
      <!-- slideDown, slideUp, slideRight, slideLeft, scale -->
      <Fab id="fabButtonTopRight" row="0" icon="res://icon" tap="fabTap" rippleColor="#ffffff" class="fab-button top-right" hideOnSwipeOfView="userList"
        swipeAnimation="slideRight" />
      <!-- slideDown, slideUp, slideRight, slideLeft, scale -->
      <Fab id="fabButtonBottomLeft" row="0" icon="res://baseline_add_white_24" tap="fabTap" rippleColor="#ffffff" class="bottom-left fab-button" hideOnSwipeOfView="userList"
        swipeAnimation="slideLeft" />
      <!-- slideDown, slideUp, slideRight, slideLeft, scale -->
      <Fab id="fabButtonBottomRight" row="0" icon="res://baseline_add_white_24" tap="fabTap" rippleColor="#ffffff" class="fab-button bottom-right" hideOnSwipeOfView="userList"
        swipeAnimation="slideDown" />
      <!-- slideDown, slideUp, slideRight, slideLeft, scale -->
      <Fab id="fabButtonCenter" row="0" icon="res://icon" tap="fabTap" rippleColor="#ffffff" class="fab-button center" hideOnSwipeOfView="userList" swipeAnimation="scale" />
      <!-- slideDown, slideUp, slideRight, slideLeft, scale -->
    </GridLayout>
  </Page>
</template>

<script>
import ActionBarSecond from '../public/action-bar-second';
export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '动态图片'
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
