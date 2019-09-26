<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="实例" @tap="openModalTap" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Modal from './modal';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '模态窗口'
    };
  },
  mounted() {},
  methods: {
    openModalTap() {
      this.$showModal(Modal, {
        props: {},
        fullscreen: false,
        animated: true,
        stretched: false,
        dimAmount: 0.5 // Sets the alpha of the background dim,
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
