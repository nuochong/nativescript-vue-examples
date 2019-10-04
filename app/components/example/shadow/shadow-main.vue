<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="阴影1" @tap="btnShadow1" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Shadow from './shadow';

import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '阴影'
    };
  },
  mounted() {},
  methods: {
    btnShadow1: function() {
      this.navigateTo(this, Shadow);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
