<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <StackLayout>
      <Button class="btn btn-primary" text="Get from URL" @tap="axiosGet" />
      <Button class="btn btn-primary" text="Post JSON" @tap="axiosPost" />
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
        .getTest()
        .then(response => {
          console.dir('axios获取的get请求是：', response);
          this.data = JSON.stringify(response);
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
          this.data = JSON.stringify(response);
        })
        .catch(err => {
          console.log(err);
        });
    },
  }
};
</script>

<style scoped lang="scss">
.content {
  padding: 15;
}
</style>