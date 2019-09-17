<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="Vuex计数器" @tap="counter" />
        <Button class="btn btn-primary" text="相机" @tap="camera" />
        <Button class="btn btn-primary" text="模拟登录" @tap="login" />
        <Button class="btn btn-primary" text="提示" @tap="btnToast" />
        <Button class="btn btn-primary" text="精美提示框" @tap="btnAlert" />
        <Button class="btn btn-primary" text="消息通知" @tap="info" />
        <Button class="btn btn-primary" text="获取设备信息" @tap="btnPlatformModule" />
        <Button class="btn btn-primary" text="电话/短信" @tap="btnPhone" />
        <Button class="btn btn-primary" text="定位" @tap="btnGeolocation" />
        <Button class="btn btn-primary" text="获取权限" @tap="btnPermissions" />
        <Button class="btn btn-primary" text="改变按钮" @tap="btnChange" />
        <Button class="btn btn-primary" text="显示隐藏" @tap="btnDisplay" />
        <Label class="split" :text="msg" />
        <Button class="btn btn-primary" text="路由跳转" @tap="onButtonTap" />
        <Button class="btn btn-primary" text="本地存储示例" @tap="onInput" />
        <Button class="btn btn-primary" text="记事薄" @tap="onFab" />
        <Button class="btn btn-primary" text="备忘录" @tap="onTodo" />
        <Button class="btn btn-primary" text="图标" @tap="onIcon" />
        <Button class="btn btn-primary" text="遮罩层" @tap="onMask" />
        <Button class="btn btn-primary" text="模态对话框" @tap="showModal" />
        <Button class="btn btn-primary" text="侧滑组件" @tap="onDrawer" />
        <Button class="btn btn-primary" text="大标题导航栏" @tap="onlargeTitle" />
        <Button class="btn btn-primary" text="对话框" @tap="btnDialogNew" />
        <Button class="btn btn-primary" text="自定义弹出框" @tap="pop" />
        <Button class="btn btn-primary" text="动画效果" @tap="animate" />
        <Button class="btn btn-primary" text="下拉刷新" @tap="refresh" />
        <Button class="btn btn-primary" text="自定义下拉刷❤" @tap="refreshNew" />
        <Button class="btn btn-primary" text="触摸事件" @tap="touch" />
        <Button class="btn btn-primary" text="请求" @tap="requestMain" />
        <Button class="btn btn-primary" text="获取全局数据" @tap="common" />
        <Button class="btn btn-primary" text="扫码" @tap="btnQrcode" />
        <Button class="btn btn-primary" text="网页" @tap="btnWebview" />
        <Button class="btn btn-primary" text="自定义过渡效果" @tap="btnEffect" />
        <Button class="btn btn-primary" text="弹出菜单" @tap="btnPopupmenu" />
        <Button class="btn btn-primary" text="分享" @tap="btnShareMain" />
        <Button class="btn btn-primary" text="检测网络类型" @tap="btnCheckNetworkType" />
        <Button class="btn btn-primary" text="广播" @tap="btnBroadcastReceiver" />
        <Button class="btn btn-primary" text="获取平台信息" @tap="btnPlatform" />
        <Button class="btn btn-primary" text="IOS键盘管理" @tap="btnIQKeyboardManager" />
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
import DialogNew from './dialog-new';
import PlatformModule from './platform-module';
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
import Mask from './mask';
import Modal from './custom-model/modal';
import Drawer from './multi-drawer/drawer';
import LargeTitle from './large-title/large-title';
import Pop from './pop';
import Animate from './animate';
import Refresh from './refresh';
import RefreshNew from './refresh-new';
import Touch from './touch';
import RequestMain from './request/request-main';
import Qrcode from './qrcode/qrcode';
import Webview from './webview/webview';
import Effect from './effect';
import Popupmenu from './popupmenu';
import ShareMain from './share/share-main';
import BtnCheckNetworkType from './check-network-type';
import BroadcastReceiver from './broadcast-receiver';
import Platform from './Platform';
import IQKeyboardManager from './iq-keyboard-manager';

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
      this.navigateTo(this, BtnCheckNetworkType);
    },
    btnShareMain: function() {
      this.navigateTo(this, ShareMain);
    },
    btnPopupmenu: function() {
      this.navigateTo(this, Popupmenu);
    },
    counter: function() {
      this.navigateTo(this, Counter);
    },
    camera: function() {
      this.navigateTo(this, Camera);
    },
    login: function() {
      this.navigateTo(this, Login);
    },
    btnToast: function() {
      this.navigateTo(this, Toast);
    },
    btnAlert: function() {
      this.navigateTo(this, FancyAlert);
    },
    info: function() {
      this.navigateTo(this, Info);
    },
    btnPlatformModule: function() {
      this.navigateTo(this, PlatformModule);
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
    common: function() {
      console.log('common：', this.localUrl);
    },
    btnChange: function() {
      this.navigateTo(this, ChangeBtn);
    },
    requestMain: function() {
      this.navigateTo(this, RequestMain);
    },
    touch: function() {
      this.navigateTo(this, Touch);
    },
    refreshNew: function() {
      this.navigateTo(this, RefreshNew);
    },
    onButtonTap: function() {
      this.navigateTo(this, Target);
    },
    onInput: function() {
      this.navigateTo(this, Storage);
    },
    onFab: function() {
      this.navigateTo(this, Fab);
    },
    onTodo: function() {
      this.navigateTo(this, Todo);
    },
    onIcon: function() {
      this.navigateTo(this, IconMain);
    },
    onMask: function() {
      this.navigateTo(this, Mask);
    },
    showModal() {
      this.navigateTo(this, Modal);
    },
    onDrawer() {
      this.navigateTo(this, Drawer);
    },
    onlargeTitle() {
      this.navigateTo(this, LargeTitle);
    },
    btnDialogNew() {
      this.navigateTo(this, DialogNew);
    },
    pop() {
      this.navigateTo(this, Pop);
    },
    animate() {
      this.navigateTo(this, Animate);
    },
    refresh() {
      this.navigateTo(this, Refresh);
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
