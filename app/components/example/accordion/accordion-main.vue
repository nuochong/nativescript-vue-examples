<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="手风琴" @tap="btnAccordion" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Accordion from './accordion';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '手风琴'
    };
  },
  mounted() {},
  methods: {
    btnAccordion: function() {
      this.navigateTo(this, Accordion);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
