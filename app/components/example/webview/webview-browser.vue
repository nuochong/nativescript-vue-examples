<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <!-- <ScrollView> -->
    <StackLayout class="hello-world">
      <Button class="btn btn-primary -primary" text="返回" @tap="goBack()" />
      <TextField ref="urlField" hint="请输入 URL" :text="text" returnKeyType="done" autocorrect="false" verticalAlignment="center"
        class="text-field-white input input-border m-t-0 webview-textfield" autocapitalizationType="none" />
      <Button class="btn btn-primary -primary" :isEnabled="enabled" text="前进" @tap="goForward()" />
      <Button class="btn btn-primary -primary" text="访问" @tap="submit()" />
      <GridLayout>
        <WebView class="webview" ref="myWebView" :src="webViewSrc" />
      </GridLayout>
      <Label class="label-white webview-label" row="2" ref="labelResult" />
    </StackLayout>
    <!-- </ScrollView> -->
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
.webview,
.webview-textfield,
.webview-label {
  margin: 10 20;
}
</style>
