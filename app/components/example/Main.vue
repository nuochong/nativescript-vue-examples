<template>
  <Page>
    <me-actionbar-main :title="'示例'"></me-actionbar-main>
    <ScrollView>
      <!-- <GridLayout class="hello-world" colums="*" rows="*"> -->
      <StackLayout>
        <Button class="btn btn-primary" text="Vuex计数器" @tap="counter" />
        <Button class="btn btn-primary" text="相机" @tap="camera" />
        <Button class="btn btn-primary" text="模拟登录" @tap="login" />
        <Button class="btn btn-primary" text="提示" @tap="btnToast" />
        <Button class="btn btn-primary" text="精美提示框" @tap="btnAlert" />
        <Button class="btn btn-primary" text="消息通知" @tap="info" />
        <Button class="btn btn-primary" text="对话框" @tap="btnDialog" />
        <Button class="btn btn-primary" text="获取设备信息" @tap="btnPlatformModule" />
        <Button class="btn btn-primary" text="电话/短信" @tap="btnPhone" />
        <Button class="btn btn-primary" text="定位" @tap="btnGeolocation" />
        <Button class="btn btn-primary" text="获取权限" @tap="btnPermissions" />
        <Button class="btn btn-primary" text="改变按钮" @tap="btnChange" />
        <Button class="btn btn-primary" text="显示隐藏" @tap="btnDisplay" />
        <Label class="message" :text="msg" col="0" row="0" />
        <Button class="btn btn-primary" text="路由跳转" @tap="onButtonTap" />
        <Button class="btn btn-primary" text="本地存储示例" @tap="onInput" />
        <Button class="btn btn-primary" text="记事薄" @tap="onFab" />
        <Button class="btn btn-primary" text="备忘录" @tap="onTodo" />
        <Button class="btn btn-primary" text="侧滑菜单" @tap="onDrawer" />
        <Button class="btn btn-primary" text="图标" @tap="onIcon" />
        <Button class="btn btn-primary" text="遮罩层" @tap="onMask" />
        <Button class="btn btn-primary" text="模态对话框" @tap="showModal" />
        <Button class="btn btn-primary" text="侧滑组件新" @tap="onDrawers" />
        <Button class="btn btn-primary" text="大标题iOS导航栏" @tap="onlargeTitle" />
        <Button class="btn btn-primary" text="自定义对话框" @tap="dialog" />
        <Button class="btn btn-primary" text="自定义弹出框" @tap="pop" />
        <Button class="btn btn-primary" text="动画效果" @tap="animate" />
        <Button class="btn btn-primary" text="下拉刷新" @tap="refresh" />
        <Button class="btn btn-primary" text="下拉刷❤" @tap="refreshNew" />
        <Button class="btn btn-primary" text="触摸事件" @tap="touch" />
        <Button class="btn btn-primary" text="请求" @tap="request" />
        <Button class="btn btn-primary" text="获取全局数据" @tap="common" />
      </StackLayout>
      <!-- </GridLayout> -->
    </ScrollView>
  </Page>
</template>

<script>
import Counter from './Counter';
import camera from './camera';
import Login from './Login';
import Toast from './toast';
import fancyalert from './Fancyalert';
import info from './info';
import dialog from './dialog';
import platformmodule from './platformmodule';
import phone from './phone';
import geolocation from './geolocation';
import permission from './permission';
import changebtn from './changebtn';
import display from './display';

import target from './target/target';
import storage from './storage';
import Fab from './fab/Fab';
import Todo from './todo/todo';
import Drawer from './drawer';
import Icon from './icon';
import Mask from './mask';
import modal from './modal';
import Drawers from './MultiDrawer/drawers';
import LargeTitle from './largeTitle/largeTitle';
import Dialog from './Dialog/dialog';
import Pop from './pop';
import Animate from './animate';
import Refresh from './refresh';
import RefreshNew from './refreshNew';
import Touch from './touch';
import Request from './request';

import meActionbarMain from './public/actionbarMain';
export default {
  components: {
    meActionbarMain
  },
  data() {
    return {
      msg: '---------分割线--------'
    };
  },
  mounted() {},
  methods: {
    counter: function() {
      this.navigateTo(this, Counter);
    },
    camera: function() {
      this.navigateTo(this, camera);
    },
    login: function() {
      this.navigateTo(this, Login);
    },
    btnToast: function() {
      this.navigateTo(this, Toast);
    },
    btnAlert: function() {
      this.navigateTo(this, fancyalert);
    },
    info: function() {
      this.navigateTo(this, info);
    },
    btnDialog: function() {
      this.navigateTo(this, dialog);
    },
    btnPlatformModule: function() {
      this.navigateTo(this, platformmodule);
    },
    btnPhone: function() {
      this.navigateTo(this, phone);
    },
    btnGeolocation: function() {
      this.navigateTo(this, geolocation);
    },
    btnPermissions: function() {
      this.navigateTo(this, permission);
    },
    common: function() {
      console.log('common：', this.localUrl);
    },
    btnChange: function() {
      this.navigateTo(this, changebtn);
    },
    request: function() {
      this.navigateTo(this, Request);
    },
    touch: function() {
      this.navigateTo(this, Touch);
    },
    refreshNew: function() {
      this.navigateTo(this, RefreshNew);
    },
    onDrawer: function() {
      this.navigateTo(this, Drawer);
    },
    onButtonTap: function() {
      this.navigateTo(this, target);
    },
    onInput: function() {
      this.navigateTo(this, storage);
    },
    onFab: function() {
      this.navigateTo(this, Fab);
    },
    onTodo: function() {
      this.navigateTo(this, Todo);
    },
    onIcon: function() {
      this.navigateTo(this, Icon);
    },
    onMask: function() {
      this.navigateTo(this, Mask);
    },
    showModal() {
      this.navigateTo(this, modal);
    },
    onDrawers() {
      this.navigateTo(this, Drawers);
    },
    onlargeTitle() {
      this.navigateTo(this, LargeTitle);
    },
    dialog() {
      this.navigateTo(this, Dialog);
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
      this.navigateTo(this, display);
    }
  }
};
</script>

<style scoped>
</style>
