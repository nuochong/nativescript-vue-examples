<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="Vuex计数器" @tap="btnCounter" />
        <Button class="btn btn-primary -primary" text="相机" @tap="btnCamera" />
        <Button class="btn btn-primary -primary" text="模拟登录" @tap="btnLogin" />
        <Button class="btn btn-primary -primary" text="提示" @tap="btnToast" />
        <Button class="btn btn-primary -primary" text="精美提示框" @tap="btnAlert" />
        <Button class="btn btn-primary -primary" text="消息通知" @tap="btnInfo" />
        <Button class="btn btn-primary -primary" text="电话/短信" @tap="btnPhone" />
        <Button class="btn btn-primary -primary" text="定位" @tap="btnGeolocation" />
        <Button class="btn btn-primary -primary" text="获取权限" @tap="btnPermissions" />
        <Button class="btn btn-primary -primary" text="改变按钮" @tap="btnChange" />
        <Button class="btn btn-primary -primary" text="显示隐藏" @tap="btnDisplay" />
        <Label class="split" :text="msg" />
        <Button class="btn btn-primary -primary" text="路由跳转" @tap="btnButtonTap" />
        <Button class="btn btn-primary -primary" text="本地存储" @tap="btnInput" />
        <Button class="btn btn-primary -primary" text="记事薄" @tap="btnFab" />
        <Button class="btn btn-primary -primary" text="备忘录" @tap="btnTodo" />
        <Button class="btn btn-primary -primary" text="图标" @tap="btnIcon" />
        <Button class="btn btn-primary -primary" text="模态对话框" @tap="btnShowModal" />
        <Button class="btn btn-primary -primary" text="侧滑组件" @tap="btnDrawer" />
        <Button class="btn btn-primary -primary" text="大标题导航栏" @tap="btnlargeTitle" />
        <Button class="btn btn-primary -primary" text="动画效果" @tap="btnAnimate" />
        <Button class="btn btn-primary -primary" text="IOS原生方法" @tap="btnIosApi" />
        <Button class="btn btn-primary -primary" text="请求" @tap="btnRequestMain" />
        <Button class="btn btn-primary -primary" text="获取全局数据" @tap="btnCommon" />
        <Button class="btn btn-primary -primary" text="扫码" @tap="btnQrcode" />
        <Button class="btn btn-primary -primary" text="网页" @tap="btnWebview" />
        <Button class="btn btn-primary -primary" text="自定义过渡效果" @tap="btnEffect" />
        <Button class="btn btn-primary -primary" text="简易弹出菜单" @tap="btnPopupmenu" />
        <Button class="btn btn-primary -primary" text="分享" @tap="btnShareMain" />
        <Button class="btn btn-primary -primary" text="检测网络类型" @tap="btnCheckNetworkType" />
        <Button class="btn btn-primary -primary" text="广播" @tap="btnBroadcastReceiver" />
        <Button class="btn btn-primary -primary" text="获取平台信息" @tap="btnPlatform" />
        <Button class="btn btn-primary -primary" text="IOS键盘管理" @tap="btnIQKeyboardManager" />
        <Button class="btn btn-primary -primary" text="下拉刷新" @tap="btnRefreshMain" />
        <Button class="btn btn-primary -primary" text="对话框" @tap="btnDialog" />
        <Button class="btn btn-primary -primary" text="轮播图" @tap="btnCarousel" />
        <Button class="btn btn-primary -primary" text="图像选择器" @tap="btnImagepicker" />
        <Button class="btn btn-primary -primary" text="富文本编辑器" @tap="btnRichTextEditorMain" />
        <Button class="btn btn-primary -primary" text="单选按钮" @tap="btnCheckbox" />
        <Button class="btn btn-primary -primary" text="导航消息反馈" @tap="btnFeedback" />
        <Button class="btn btn-primary -primary" text="动图" @tap="btnLottie" />
        <Button class="btn btn-primary -primary" text="剪贴板" @tap="btnClipboard" />
        <Button class="btn btn-primary -primary" text="日期时间选择器" @tap="btnTimeDatePicker" />
        <Button class="btn btn-primary -primary" text="打开应用" @tap="btnOpenApp" />
        <Button class="btn btn-primary -primary" text="动态图" @tap="btnGif" />
        <Button class="btn btn-primary -primary" text="加速度计" @tap="btnAccelerometer" />
        <Button class="btn btn-primary -primary" text="生命周期" @tap="btnLifecycleHooks" />
        <Button class="btn btn-primary -primary" text="可缩放矢量图形" @tap="btnSvg" />
        <Button class="btn btn-primary -primary" text="键盘助手" @tap="btnKeyboardToolbar" />
        <Button class="btn btn-primary -primary" text="涟漪效果" @tap="btnRipple" />
        <Button class="btn btn-primary -primary" text="引导" @tap="btnAppTour" />
        <Button class="btn btn-primary -primary" text="传感器" @tap="btnSensorsMain" />
        <Button class="btn btn-primary -primary" text="音频" @tap="btnAudio" />
        <Button class="btn btn-primary -primary" text="蓝牙" @tap="btnBluetooth" />
        <Button class="btn btn-primary -primary" text="视频" @tap="btnVideoMain" />
        <Button class="btn btn-primary -primary" text="图标徽章" @tap="btnBadge" />
        <Button class="btn btn-primary -primary" text="应用评分" @tap="btnRater" />
        <Button class="btn btn-primary -primary" text="底部提示" @tap="btnSnackBar" />
        <Button class="btn btn-primary -primary" text="图片选择器" @tap="btnImagePicker" />
        <Button class="btn btn-primary -primary" text="亮度" @tap="btnBrightness" />
        <Button class="btn btn-primary -primary" text="震动" @tap="btnVibrateMain" />
        <Button class="btn btn-primary -primary" :text="'accordion' | L" @tap="btnAccordionMain" />
        <Button class="btn btn-primary -primary" text="卡片" @tap="btnCardMain" />
        <Button class="btn btn-primary -primary" text="浮动按钮" @tap="btnFloatingActionButton" />
        <Button class="btn btn-primary -primary" text="加载动画" @tap="btnLoadingIndicator" />
        <Button class="btn btn-primary -primary" text="旋转屏幕" @tap="btnScreenOrientation" />
        <Button class="btn btn-primary -primary" text="检查应用" @tap="btnAppAvailability" />
        <Button class="btn btn-primary -primary" text="截屏" @tap="btnScreenshot" />
        <Button class="btn btn-primary -primary" text="绘图" @tap="btnCanvas" />
        <Button class="btn btn-primary -primary" text="日历事件" @tap="btnCalendar" />
        <Button class="btn btn-primary -primary" text="下载" @tap="btnDownloader" />
        <Button class="btn btn-primary -primary" text="录音" @tap="btnRecord" />
        <Button class="btn btn-primary -primary" text="导航栏" @tap="btnStatusBarMain" />
        <Button class="btn btn-primary -primary" text="通讯录" @tap="btnContactsMain" />
        <Button class="btn btn-primary -primary" text="短信接收器" @tap="btnSmsReceiver" />
        <Button class="btn btn-primary -primary" text="模态窗口" @tap="btnWindowedModal" />
        <Button class="btn btn-primary -primary" text="视频录制" @tap="btnVideoRecorder" />
        <Button class="btn btn-primary -primary" :text="'i18n' | L" @tap="btnI8n" />
        <Button class="btn btn-primary -primary" text="微信分享" @tap="btnWechatShare" />
        <Button class="btn btn-primary -primary" text="微信登录" @tap="btnWechatLogin" />
        <Button class="btn btn-primary -primary" text="指纹识别" @tap="btnFingerprintAuth" />
        <Button class="btn btn-primary -primary" text="NFC" @tap="btnNfc" />
        <Button class="btn btn-primary -primary" text="社交登录(待完善）" @tap="btnSocialLogin" />
        <Button class="btn btn-primary -primary" text="地图(待完善）" @tap="btnMapMain" />
        <Button class="btn btn-primary -primary" text="修改图标(仅IOS）" @tap="btnIconChangerMain" />
        <Button class="btn btn-primary -primary" text="多种类文件选择器" @tap="btnMediaFilePickerMain" />
        <Button class="btn btn-primary -primary" text="网络检测" @tap="btnNetWorkConnectivity" />
        <Button class="btn btn-primary -primary" text="页面分割" @tap="btnMasterPage" />
        <Button class="btn btn-primary -primary" text="NSUI" @tap="btnNSUI" />
        <Button class="btn btn-primary -primary" text="阴影" @tap="btnShadow" />
        <Button class="btn btn-primary -primary" text="绘图画板" @tap="btnDrawingpad" />
        <Button class="btn btn-primary -primary" text="图像编辑" @tap="btnImagecropper" />
        <Button class="btn btn-primary -primary" text="渐变" @tap="btnGradient" />
        <Button class="btn btn-primary -primary" text="模糊" @tap="btnBlurMain" />
        <Button class="btn btn-primary -primary" text="AR" @tap="btnArMain" />
        <Button class="btn btn-primary -primary" text="通过属性名称改变背景" @tap="btnPropertyChangeBg" />
        <Button class="btn btn-primary -primary" text="NS6新增组件" @tap="btnNewComponents" />
        <Button class="btn btn-primary -primary" text="使用动态组件" @tap="btnDynamicComponents" />
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
import ScreenOrientation from './screen-orientation';
import AppAvailability from './appavailability';
import Screenshot from './screenshot';
import Canvas from './canvas';
import Calendar from './calendar';
import Downloader from './downloader';
import Record from './audio/record';
import StatusBarMain from './status-bar/status-bar-main';
import ContactsMain from './contacts/contacts-main';
import SmsReceiver from './sms-receiver';
import WindowedModal from './windowed-modal/windowed-modal';
import VideoRecorder from './video-recorder';
import I18n from './i18n';
import WechatShare from './wechat/wechat-share';
import FingerprintAuth from './fingerprint-auth/fingerprint-auth';
import Nfc from './nfc';
import SocialLogin from './social-login/social-login';
import MapMain from './map/map-main';
import WechatLogin from './wechat/wechat-login';
import IconChangerMain from './icon-changer/icon-changer-main';
import MediaFilePickerMain from './media-file-picker/media-file-picker-main';
import NetworkConnectivity from './network-connectivity';
import MasterPage from './split-view/master-page';
import SideDrawer from './ns-ui/side-drawer';
import ShadowMain from './shadow/shadow-main';
import Drawingpad from './drawingpad';
import Imagecropper from './imagecropper';
import Dradient from './gradient';
import BlurMain from './blur/blur-main';
import ArMain from './ar/ar-main';
import PropertyChangeBg from './property-change-bg';
import NewComponents from './new-components/new-components-main';
import DynamicComponents from './dynamic-components/dynamic-components';

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
    btnDynamicComponents:function(){
      this.navigateTo(this, DynamicComponents);
    },
    btnNewComponents:function () {
      this.navigateTo(this, NewComponents);
    },
    btnPropertyChangeBg: function() {
      this.navigateTo(this, PropertyChangeBg);
    },
    btnArMain: function() {
      this.navigateTo(this, ArMain);
    },
    btnBlurMain: function() {
      this.navigateTo(this, BlurMain);
    },
    btnGradient: function() {
      this.navigateTo(this, Dradient);
    },
    btnImagecropper: function() {
      this.navigateTo(this, Imagecropper);
    },
    btnDrawingpad: function() {
      this.navigateTo(this, Drawingpad);
    },
    btnShadow: function() {
      this.navigateTo(this, ShadowMain);
    },
    btnNSUI: function() {
      this.navigateTo(this, SideDrawer);
    },
    btnMasterPage: function() {
      this.navigateTo(this, MasterPage);
    },
    btnNetWorkConnectivity: function() {
      this.navigateTo(this, NetworkConnectivity);
    },
    btnMediaFilePickerMain: function() {
      this.navigateTo(this, MediaFilePickerMain);
    },
    btnIconChangerMain: function() {
      this.navigateTo(this, IconChangerMain);
    },
    btnWechatLogin: function() {
      this.navigateTo(this, WechatLogin);
    },
    btnMapMain: function() {
      this.navigateTo(this, MapMain);
    },
    btnSocialLogin: function() {
      this.navigateTo(this, SocialLogin);
    },
    btnNfc: function() {
      this.navigateTo(this, Nfc);
    },
    btnFingerprintAuth: function() {
      this.navigateTo(this, FingerprintAuth);
    },
    btnWechatShare: function() {
      this.navigateTo(this, WechatShare);
    },
    btnI8n: function() {
      this.navigateTo(this, I18n);
    },
    btnVideoRecorder: function() {
      this.navigateTo(this, VideoRecorder);
    },
    btnWindowedModal: function() {
      this.navigateTo(this, WindowedModal);
    },
    btnSmsReceiver: function() {
      this.navigateTo(this, SmsReceiver);
    },
    btnContactsMain: function() {
      this.navigateTo(this, ContactsMain);
    },
    btnStatusBarMain: function() {
      this.navigateTo(this, StatusBarMain);
    },
    btnRecord: function() {
      this.navigateTo(this, Record);
    },
    btnDownloader: function() {
      this.navigateTo(this, Downloader);
    },
    btnCalendar: function() {
      this.navigateTo(this, Calendar);
    },
    btnCanvas: function() {
      this.navigateTo(this, Canvas);
    },
    btnScreenshot: function() {
      this.navigateTo(this, Screenshot);
    },
    btnAppAvailability: function() {
      this.navigateTo(this, AppAvailability);
    },
    btnScreenOrientation: function() {
      this.navigateTo(this, ScreenOrientation);
    },
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
