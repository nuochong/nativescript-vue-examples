<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <StackLayout>
      <Button class="btn btn-primary" text="Get from URL" @tap="axiosGet" />
      <Button class="btn btn-primary" text="自定义get请求" @tap="axiosGetMe" />
      <Button class="btn btn-primary" text="Post JSON" @tap="axiosPost" />
      <Button class="btn btn-primary" text="自定义post请求" @tap="axiosPostMe" />
      <ScrollView ref="scrollView">
        <StackLayout class="content">
          <Label textWrap="true">
            <FormattedString>
              <Span text="返回的数据是如下：" />
              <Span :text="data" />
            </FormattedString>
          </Label>
        </StackLayout>
      </ScrollView>
    </StackLayout>
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
      title: 'NSVue Axios',
      data: ''
    };
  },
  methods: {
    axiosGet() {
      this.axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          console.dir('axios获取的get请求是：', response.data);
          this.data = JSON.stringify(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    axiosGetMe() {
      this.axios
        .getTest()
        .then(response => {
          console.dir('axios获取的get请求是：', response);
          this.data = JSON.stringify(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    axiosPost() {
      this.axios
        .post('https://www.easy-mock.com/mock/5d60c006f81908124e0fcc23/example/upload', {
          headers: { 'Content-Type': 'application/json' },
          body: {
            foo: 'bar',
            one: 'two'
          }
        })
        .then(response => {
          console.dir('axios获取的post请求是：', response.data);
          this.data = JSON.stringify(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    axiosPostMe() {
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
          console.dir('axios获取的自定义post请求是：', response.data);
          this.data = JSON.stringify(response.data);
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