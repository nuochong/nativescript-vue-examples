<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <StackLayout class="hello-world">
      <Button class="btn btn-primary -primary" text="GET请求" @tap="axiosGet" />
      <Button class="btn btn-primary -primary" text="POST请求" @tap="axiosPost" />
      <RequestContent :content="content" />
    </StackLayout>
  </Page>
</template>

<script>
import RequestContent from './request-content';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond,
    RequestContent
  },
  data() {
    return {
      title: 'NSVue Axios',
      content: ''
    };
  },
  methods: {
    axiosGet() {
      this.axios
        .getTest()
        .then(response => {
          console.dir('axios获取的get请求是：', response);
          this.content = JSON.stringify(response);
        })
        .catch(err => {
          console.log(err);
        });
    },

    axiosPost() {
      const param = {
        foo: 'bar',
        one: 'two'
      };
      const config = {
        headers: { 'Content-Type': 'application/json' }
      };
      this.axios
        .postTest(param, config)
        .then(response => {
          console.dir('axios获取的自定义post请求是：', response);
          this.content = JSON.stringify(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.content {
  padding: 15;
}
</style>