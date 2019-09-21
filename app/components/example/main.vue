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
        <Button class="btn btn-primary" text="轮播图" @tap="btnCarousel" />
        <Button class="btn btn-primary" text="图像选择器" @tap="btnImagepicker" />
        <Button class="btn btn-primary" text="富文本编辑器" @tap="btnRichTextEditorMain" />
        <Button class="btn btn-primary" text="单选按钮" @tap="btnCheckbox" />
        <Button class="btn btn-primary" text="导航消息反馈" @tap="btnFeedback" />
        <Button class="btn btn-primary" text="动图" @tap="btnLottie" />
        <Button class="btn btn-primary" text="剪贴板" @tap="btnClipboard" />
        <Button class="btn btn-primary" text="日期时间选择器" @tap="btnTimeDatePicker" />
        <Button class="btn btn-primary" text="打开应用" @tap="btnOpenApp" />
        <Button class="btn btn-primary" text="动态图" @tap="btnGif" />
        <Button class="btn btn-primary" text="加速度计" @tap="btnAccelerometer" />
        <Button class="btn btn-primary" text="生命周期" @tap="btnLifecycleHooks" />
        <Button class="btn btn-primary" text="可缩放矢量图形" @tap="btnSvg" />
        <Button class="btn btn-primary" text="键盘助手" @tap="btnKeyboardToolbar" />
        <Button class="btn btn-primary" text="涟漪效果" @tap="btnRipple" />
        <Button class="btn btn-primary" text="引导" @tap="btnAppTour" />
        <Button class="btn btn-primary" text="传感器" @tap="btnSensorsMain" />
        <Button class="btn btn-primary" text="音频" @tap="btnAudio" />
        <Button class="btn btn-primary" text="蓝牙" @tap="btnBluetooth" />
        <Button class="btn btn-primary" text="视频" @tap="btnVideoMain" />
        <Button class="btn btn-primary" text="图标徽章" @tap="btnBadge" />
        <Button class="btn btn-primary" text="应用评分" @tap="btnRater" />
        <Button class="btn btn-primary" text="底部提示" @tap="btnSnackBar" />
        <Button class="btn btn-primary" text="图片选择器" @tap="btnImagePicker" />
        <Button class="btn btn-primary" text="亮度" @tap="btnBrightness" />
        <Button class="btn btn-primary" text="震动" @tap="btnVibrateMain" />
        <Button class="btn btn-primary" text="手风琴" @tap="btnAccordionMain" />
        <Button class="btn btn-primary" text="卡片" @tap="btnCardMain" />
        <Button class="btn btn-primary" text="浮动按钮" @tap="btnFloatingActionButton" />
        <Button class="btn btn-primary" text="加载动画" @tap="btnLoadingIndicator" />
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
import Carousel from './carousel';
import Imagepicker from './imagepicker';
import RichTextEditorMain from './rich-text-editor/rich-text-editor-main';
import Checkbox from './checkbox';
import Feedback from './feedback';
import Lottie from './lottie';
import Clipboard from './clipboard';
import TimeDatePickerMain from './time-date-picker/time-date-picker-main';
import OpenApp from './open-app';
import Gif from './gif';
import Accelerometer from './accelerometer';
import LifecycleHooks from './lifecycle-hooks';
import Svg from './svg';
import KeyboardToolbar from './keyboard-toolbar';
import Ripple from './ripple';
import AppTour from './app-tour';
import SensorsMain from './sensors/sensors-main';
import Audio from './audio/audio';
import Bluetooth from './bluetooth';
import VideoMain from './video/video-main';
import Badge from './badge';
import Rater from './rater';
import SanckBar from './snack-bar';
import ImagePikcer from './image-picker';
import Brightness from './brightness';
import VibrateMain from './vibrate/vibrate-main';
import AccordionMain from './accordion/accordion-main';
import CardMain from './card/card-main';
import FloatingActionButton from './floating-action-button/floating-action-button';
import LoadingIndicator from './loading-indicator/loading-indicator';

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
    btnLoadingIndicator: function() {
      this.navigateTo(this, LoadingIndicator);
    },
    btnFloatingActionButton: function() {
      this.navigateTo(this, FloatingActionButton);
    },
    btnCardMain: function() {
      this.navigateTo(this, CardMain);
    },
    btnAccordionMain: function() {
      this.navigateTo(this, AccordionMain);
    },
    btnVibrateMain: function() {
      this.navigateTo(this, VibrateMain);
    },
    btnBrightness: function() {
      this.navigateTo(this, Brightness);
    },
    btnImagePicker: function() {
      this.navigateTo(this, ImagePikcer);
    },
    btnSnackBar: function() {
      this.navigateTo(this, SanckBar);
    },
    btnRater: function() {
      this.navigateTo(this, Rater);
    },
    btnBadge: function() {
      this.navigateTo(this, Badge);
    },
    btnVideoMain: function() {
      this.navigateTo(this, VideoMain);
    },
    btnBluetooth: function() {
      this.navigateTo(this, Bluetooth);
    },
    btnAudio: function() {
      this.navigateTo(this, Audio);
    },
    btnSensorsMain: function() {
      this.navigateTo(this, SensorsMain);
    },
    btnAppTour: function() {
      this.navigateTo(this, AppTour);
    },
    btnRipple: function() {
      this.navigateTo(this, Ripple);
    },
    btnKeyboardToolbar: function() {
      this.navigateTo(this, KeyboardToolbar);
    },
    btnSvg: function() {
      this.navigateTo(this, Svg);
    },
    btnLifecycleHooks: function() {
      this.navigateTo(this, LifecycleHooks);
    },
    btnAccelerometer: function() {
      this.navigateTo(this, Accelerometer);
    },
    btnGif: function() {
      this.navigateTo(this, Gif);
    },
    btnOpenApp: function() {
      this.navigateTo(this, OpenApp);
    },
    btnTimeDatePicker: function() {
      this.navigateTo(this, TimeDatePickerMain);
    },
    btnClipboard: function() {
      this.navigateTo(this, Clipboard);
    },
    btnLottie: function() {
      this.navigateTo(this, Lottie);
    },
    btnFeedback: function() {
      this.navigateTo(this, Feedback);
    },
    btnCheckbox: function() {
      this.navigateTo(this, Checkbox);
    },
    btnRichTextEditorMain: function() {
      this.navigateTo(this, RichTextEditorMain);
    },
    btnImagepicker: function() {
      this.navigateTo(this, Imagepicker);
    },
    btnCarousel: function() {
      this.navigateTo(this, Carousel);
    },
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
