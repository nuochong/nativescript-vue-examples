<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="模糊" @tap="btnBlur" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Blur from './blur';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '模糊'
    };
  },
  mounted() {},
  methods: {
    btnBlur: function() {
      this.navigateTo(this, Blur);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
