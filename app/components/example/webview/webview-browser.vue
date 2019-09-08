<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" row="0" col="0" text="返回" @tap="goBack()" />
        <TextField
          ref="urlField"
          row="0"
          col="1"
          hint="Enter URL"
          :text="text"
          returnKeyType="done"
          autocorrect="false"
          verticalAlignment="center"
          class="input input-border m-t-0"
          autocapitalizationType="none"
        ></TextField>
        <Button
          class="btn btn-primary"
          :isEnabled="enabled"
          row="0"
          col="2"
          text="前进"
          @tap="goForward()"
        ></Button>
        <Button class="btn btn-primary" row="0" col="2" text="访问" @tap="submit()"></Button>
        <WebView row="1" ref="myWebView" :src="webViewSrc"></WebView>
        <Label row="2" ref="labelResult"></Label>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { WebView, LoadEventData } from 'tns-core-modules/ui/web-view';
import { TextField } from 'tns-core-modules/ui/text-field';
import { Label } from 'tns-core-modules/ui/label';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '简易浏览器',
      text: 'https://cn.bing.com',
      webViewSrc: 'https://m.baidu.com',
      url2: 'https://cn.bing.com',
      enabled: false
    };
  },
  mounted() {
    this.ngAfterViewInit();
  },
  methods: {
    ngAfterViewInit() {
      let webview = this.$refs.myWebView.nativeView;
      let label = this.$refs.labelResult.nativeView;
      label.text = 'WebView 加载中...';

      webview.on(WebView.loadFinishedEvent, function(args) {
        let message;
        if (!args.error) {
          message = 'WebView 完成加载 ' + args.url;
        } else {
          message = '加载错误 ' + args.url + ': ' + args.error;
        }

        label.text = message;
        console.log('WebView 信息 - ' + message);
      });
    },

    goBack() {
      let webview = this.$refs.myWebView.nativeView;
      if (webview.canGoBack) {
        webview.goBack();
        this.enabled = true;
      }
    },
    goForward() {
      console.log('点击了前进');
      let webview = this.$refs.myWebView.nativeView;
      if (webview.canGoForward) {
        webview.goForward();
      } else {
        this.enabled = false;
      }
    },
    submit() {
      console.log('点击了提交');
      //let textField = this.$refs.urlField.nativeView;
      this.enabled = false;
      if (this.text.substring(0, 4) === 'http') {
        console.log('提交了');
        this.webViewSrc = this.text;
        //textField.dismissSoftInput();
        //去除软键盘
      } else {
        alert('请在URL字符串前添加“http://”或“https://”');
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>
