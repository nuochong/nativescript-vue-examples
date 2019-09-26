<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <StackLayout @loaded="stackLoaded" ref="stack">
          <Button class="btn btn-primary" text="截屏" @tap="buttonTap" />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
let image = require('ui/image');
let plugin = require('nativescript-screenshot');
let stackLayout;
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '截屏'
    };
  },
  mounted() {},
  methods: {
    stackLoaded: function(args) {
      stackLayout = this.$refs.stack.nativeView;
    },
    buttonTap: function(args) {
      let img = new image.Image();
      img.imageSource = plugin.getImage(args.object);
      stackLayout.addChild(img);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
