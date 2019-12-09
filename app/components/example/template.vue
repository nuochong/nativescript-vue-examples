<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="" @tap="btn" />
        <RequestContent :content="content" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import RequestContent from './request/request-content';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond,
    RequestContent
  },
  data() {
    return {
      title: '',
      content: 'null'
    };
  },
  mounted() {},
  methods: {
    btn: function() {
      console.log('点击了按钮');
      console.log(this.content);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
