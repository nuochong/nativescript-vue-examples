<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <GridLayout colums="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
    </GridLayout>
  </Page>
</template>

<script>
import ActionBarSecond from '../../example/public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '设置',
      msg: 'Hello World!'
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
