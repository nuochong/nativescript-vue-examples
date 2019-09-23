<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
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
      title: '社交登录'
    };
  },
  mounted() {
    console.log('android和ios平台都未测试');
  },
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
