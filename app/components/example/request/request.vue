<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <!-- <GridLayout colums="*" rows="*"> -->
    <StackLayout>
      <Button class="btn btn-primary -primary" text="开始请求" @tap="onButton" />
      <RequestContent :content="content" />
    </StackLayout>
    <!-- </GridLayout> -->
  </Page>
</template>

<script>
import { Http } from '@billow/nsv-http';
import { isAndroid } from 'platform';
import { getString } from 'application-settings';
// import { log } from 'util';
// import * as http from 'http';
import RequestContent from './request-content';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond,
    RequestContent
  },
  data() {
    return {
      title: '请求',
      content: ''
    };
  },
  methods: {
    onButton: function() {
      let http = new Http({
        // 为所有请求配置基本网址
        baseUrl: 'https://www.easy-mock.com',

        // 头部示例，通常是我们与Laravel Passport API交互时使用的头部。
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json;charset=utf-8',
          'Accept-Encoding': isAndroid ? 'identity' : 'gzip, deflate, br', // 服务器将响应压缩后，Android请求失败，这是一种解决方法。
          'X-Requested-With': 'XMLHttpRequest',
          Authorization: 'Bearer ' + getString('token', '')
        }
      });
      http.post(
        '/mock/5d60c006f81908124e0fcc23/example/upload',
        {},
        res => {
          this.content = JSON.stringify(res.content);
          console.log('返回的数据是：', res);
          console.log('返回的内容是：', res.content);
          console.log('拿到数据：', res.content.data.img);
        },
        err => {
          console.log('错误是：', err);
        }
      );
      // let formdata = new FormData();
      // //可以通过append()方法来追加数据
      // formdata.append('name', 'laotie');
      // let content = {
      //     title: 'foos',
      //     body: 'bar',
      //     userId: 1
      // };
      // let header = {
      //     'Content-type': 'application/json; charset=UTF-8'
      // };
      // http.request({ method: 'post', url: 'https://jsonplaceholder.typicode.com/posts', content: JSON.stringify(content), header: header })
      //     .then(response => {
      //         console.dir('HTTP RESPONSE RECEIVED: ' + JSON.stringify(response));
      //         response.content = response.content.toJSON();
      //         console.dir('HTTP RESPONSE RECEIVED: ' + response.statusCode);
      //         console.dir(response.content);
      //         //return this.succeeded(response.statusCode) ? success(response) : failure(response);
      //     })
      //     .catch(error => {
      //         console.log('HTTP REQUEST FAILED: ' + error);
      //         //return failure(error);
      //     });

      // let formdata = new FormData();
      // //可以通过append()方法来追加数据
      // formdata.append('name', 'laotie');
      // let content = {
      //     // title: 'foos',
      //     // body: 'bar',
      //     // userId: 1
      // };
      // let header = {
      //     'Content-type': 'application/json; charset=UTF-8'
      // };
      // http.request({ method: 'post', url: 'https://www.easy-mock.com/mock/5d60c006f81908124e0fcc23/example/upload', content: JSON.stringify(content), header: header })
      //     .then(response => {
      //         console.dir('HTTP RESPONSE RECEIVED: ' + JSON.stringify(response));
      //         response.content = response.content.toJSON();
      //         console.dir('HTTP RESPONSE RECEIVED: ' + response.statusCode);
      //         console.dir(response.content);
      //         //return this.succeeded(response.statusCode) ? success(response) : failure(response);
      //     })
      //     .catch(error => {
      //         console.log('HTTP REQUEST FAILED: ' + error);
      //         //return failure(error);
      //     });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
