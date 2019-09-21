<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="震动" @tap="btnVibrate" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Vibrate from './vibrate';
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
  mounted() {},
  methods: {
    btnVibrate: function() {
      this.navigateTo(this, Vibrate);
    },
  }
};
</script>

<style scoped lang="scss">
</style>
