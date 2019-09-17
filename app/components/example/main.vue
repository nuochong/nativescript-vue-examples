<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="Vuex计数器" @tap="btnCounter" />
        <Button class="btn btn-primary" text="相机" @tap="btnCamera" />
        <Button class="btn btn-primary" text="模拟登录" @tap="btnLogin" />
        <Button class="btn btn-primary" text="提示" @tap="btnToast" />
        <Button class="btn btn-primary" text="精美提示框" @tap="btnAlert" />
        <Button class="btn btn-primary" text="消息通知" @tap="btnInfo" />
        <Button class="btn btn-primary" text="电话/短信" @tap="btnPhone" />
        <Button class="btn btn-primary" text="定位" @tap="btnGeolocation" />
        <Button class="btn btn-primary" text="获取权限" @tap="btnPermissions" />
        <Button class="btn btn-primary" text="改变按钮" @tap="btnChange" />
        <Button class="btn btn-primary" text="显示隐藏" @tap="btnDisplay" />
        <Label class="split" :text="msg" />
        <Button class="btn btn-primary" text="路由跳转" @tap="btnButtonTap" />
        <Button class="btn btn-primary" text="本地存储" @tap="btnInput" />
        <Button class="btn btn-primary" text="记事薄" @tap="btnFab" />
        <Button class="btn btn-primary" text="备忘录" @tap="btnTodo" />
        <Button class="btn btn-primary" text="图标" @tap="btnIcon" />
        <Button class="btn btn-primary" text="模态对话框" @tap="btnShowModal" />
        <Button class="btn btn-primary" text="侧滑组件" @tap="btnDrawer" />
        <Button class="btn btn-primary" text="大标题导航栏" @tap="btnlargeTitle" />
        <Button class="btn btn-primary" text="动画效果" @tap="btnAnimate" />
        <Button class="btn btn-primary" text="IOS原生方法" @tap="btnIosApi" />
        <Button class="btn btn-primary" text="请求" @tap="btnRequestMain" />
        <Button class="btn btn-primary" text="获取全局数据" @tap="btnCommon" />
        <Button class="btn btn-primary" text="扫码" @tap="btnQrcode" />
        <Button class="btn btn-primary" text="网页" @tap="btnWebview" />
        <Button class="btn btn-primary" text="自定义过渡效果" @tap="btnEffect" />
        <Button class="btn btn-primary" text="简易弹出菜单" @tap="btnPopupmenu" />
        <Button class="btn btn-primary" text="分享" @tap="btnShareMain" />
        <Button class="btn btn-primary" text="检测网络类型" @tap="btnCheckNetworkType" />
        <Button class="btn btn-primary" text="广播" @tap="btnBroadcastReceiver" />
        <Button class="btn btn-primary" text="获取平台信息" @tap="btnPlatform" />
        <Button class="btn btn-primary" text="IOS键盘管理" @tap="btnIQKeyboardManager" />
        <Button class="btn btn-primary" text="下拉刷新" @tap="btnRefreshMain" />
        <Button class="btn btn-primary" text="对话框" @tap="btnDialog" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Counter from './counter';
import Camera from './camera';
import Login from './login';
import Toast from './toast';
import FancyAlert from './fancy-alert';
import Info from './info';

import Phone from './phone';
import Geolocation from './geolocation';
import Permission from './permission';
import ChangeBtn from './change-btn';
import Display from './display';
import Target from './target/target';
import Storage from './storage';
import Fab from './fab/fab';
import Todo from './todo/todo';
import IconMain from './icon/icon-main';
import Modal from './custom-model/modal';
import Drawer from './multi-drawer/drawer';
import LargeTitle from './large-title/large-title';
import Animate from './animate';
import IosApi from './ios-api';
import RequestMain from './request/request-main';
import Qrcode from './qrcode/qrcode';
import Webview from './webview/webview';
import Effect from './effect';
import Popupmenu from './popupmenu';
import ShareMain from './share/share-main';
import CheckNetworkType from './check-network-type';
import BroadcastReceiver from './broadcast-receiver';
import Platform from './platform';
import IQKeyboardManager from './iq-keyboard-manager';
import RefreshMain from './refresh/refresh-main';
import DialogMain from './dialog/refresh-main';

import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '示例',
      msg: '---------- 分割线 ----------'
    };
  },
  mounted() {},
  methods: {
    btnDialog: function() {
      this.navigateTo(this, DialogMain);
    },
    btnRefreshMain: function() {
      this.navigateTo(this, RefreshMain);
    },
    btnIQKeyboardManager: function() {
      this.navigateTo(this, IQKeyboardManager);
    },
    btnPlatform: function() {
      this.navigateTo(this, Platform);
    },
    btnBroadcastReceiver: function() {
      this.navigateTo(this, BroadcastReceiver);
    },
    btnCheckNetworkType: function() {
      this.navigateTo(this, CheckNetworkType);
    },
    btnShareMain: function() {
      this.navigateTo(this, ShareMain);
    },
    btnPopupmenu: function() {
      this.navigateTo(this, Popupmenu);
    },
    btnCounter: function() {
      this.navigateTo(this, Counter);
    },
    btnCamera: function() {
      this.navigateTo(this, Camera);
    },
    btnLogin: function() {
      this.navigateTo(this, Login);
    },
    btnToast: function() {
      this.navigateTo(this, Toast);
    },
    btnAlert: function() {
      this.navigateTo(this, FancyAlert);
    },
    btnInfo: function() {
      this.navigateTo(this, Info);
    },
    btnPhone: function() {
      this.navigateTo(this, Phone);
    },
    btnGeolocation: function() {
      this.navigateTo(this, Geolocation);
    },
    btnPermissions: function() {
      this.navigateTo(this, Permission);
    },
    btnCommon: function() {
      console.log('common：', this.localUrl);
    },
    btnChange: function() {
      this.navigateTo(this, ChangeBtn);
    },
    btnRequestMain: function() {
      this.navigateTo(this, RequestMain);
    },
    btnIosApi: function() {
      this.navigateTo(this, IosApi);
    },
    btnButtonTap: function() {
      this.navigateTo(this, Target);
    },
    btnInput: function() {
      this.navigateTo(this, Storage);
    },
    btnFab: function() {
      this.navigateTo(this, Fab);
    },
    btnTodo: function() {
      this.navigateTo(this, Todo);
    },
    btnIcon: function() {
      this.navigateTo(this, IconMain);
    },
    btnShowModal() {
      this.navigateTo(this, Modal);
    },
    btnDrawer() {
      this.navigateTo(this, Drawer);
    },
    btnlargeTitle() {
      this.navigateTo(this, LargeTitle);
    },
    btnAnimate() {
      this.navigateTo(this, Animate);
    },
    btnDisplay: function() {
      this.navigateTo(this, Display);
    },
    btnQrcode: function() {
      this.navigateTo(this, Qrcode);
    },
    btnWebview: function() {
      this.navigateTo(this, Webview);
    },
    btnEffect: function() {
      this.navigateTo(this, Effect);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
