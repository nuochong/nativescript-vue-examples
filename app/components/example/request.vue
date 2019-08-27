<template>
  <Page>
    <me-actionbar :title="'请求'"></me-actionbar>
    <!-- <GridLayout colums="*" rows="*"> -->
    <StackLayout>
      <Button class="btn btn-primary" text="开始请求" @tap="onButton" />
    </StackLayout>
    <!-- </GridLayout> -->
  </Page>
</template>

<script>
import { Http } from '@billow/nsv-http';
import { isAndroid } from 'platform';
import { getString } from 'application-settings'; // Example Only
// import { log } from 'util';
//import * as http from 'http';
import meActionbar from './public/actionbar';
export default {
  components: {
    meActionbar
  },
  data() {
    return {
      msg: 'Hello World! '
    };
  },
  methods: {
    onButton: function() {
      console.log('000');
      let http = new Http({
        // Configure a base url for all requests
        baseUrl: 'https://www.easy-mock.com',

        // Example headers, typically this is what we use when interacting with a Laravel Passport API.
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json;charset=utf-8',
          'Accept-Encoding': isAndroid ? 'identity' : 'gzip, deflate, br', // Android requests fail when the server is gzipping responses, this is a work around.
          'X-Requested-With': 'XMLHttpRequest',
          Authorization: 'Bearer ' + getString('token', '')
        }
      });
      http.post(
        '/mock/5d60c006f81908124e0fcc23/example/upload',
        {},
        function(res) {
          console.log('返回的数据是：', res);
          console.log('返回的内容是：', res.content);
          console.log('拿到数据：', res.content.data.img);
        },
        function(err) {
          console.log('错误是：', err);
        }
      );

      //console.log('hhhhhs', http);
      // console.log('hhhhhs', isAndroid);
      // var formdata = new FormData();
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

      //             console.log('hhhhhs', isAndroid);
      // var formdata = new FormData();
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

<style scoped>
</style>
