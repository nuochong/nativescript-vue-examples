<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="自定义卡片" @tap="btnCardView" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import CardView from './card-view';

import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '自定义卡片'
    };
  },
  mounted() {},
  methods: {
    btnCardView: function() {
      this.navigateTo(this, CardView);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
