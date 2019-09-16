<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Label class="label-text-white" :text="msg" />
      </StackLayout>
    </ScrollView>
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
      title: '路由跳转-公用页面',
      msg: 'Hello World!'
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
