<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="设置亮度" @tap="btnBrightness" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Brightness } from 'nativescript-brightness';
const brightness = new Brightness();
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '亮度'
    };
  },
  mounted() {},
  methods: {
    btnBrightness: function() {
      brightness.set({
        intensity: 25
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
