<template>
  <Page>
    <ActionBar class="action-bar" title="Welcome to NativeScript-Vue!">
      <ActionItem
        @tap="onTapEdit"
        v-show="!isEditing"
        ios.systemIcon="2"
        ios.position="right"
        android.systemIcon="ic_menu_edit"
      />
      <ActionItem
        @tap="onTapSave"
        v-show="isEditing"
        ios.systemIcon="3"
        ios.position="right"
        android.systemIcon="ic_menu_save"
      />
      <ActionItem
        @tap="onTapCancel"
        v-show="isEditing"
        ios.systemIcon="1"
        android.systemIcon="ic_menu_close_clear_cancel"
      />
    </ActionBar>
    <ScrollView>
      <!--<GridLayout colums="*" rows="*">-->
      <StackLayout>
        <Button class="btn btn-primary" @tap="counter">计数器【Counter】</Button>
        <Button class="btn btn-primary" @tap="hello">Vuex及相机</Button>
        <Button class="btn btn-primary" @tap="login">模拟登录【login】</Button>
        <Button class="btn btn-primary" @tap="btnToast">提示【Toast】</Button>
        <Button class="btn btn-primary" @tap="btnAlert">精美提示框【Alert】</Button>
        <Button class="btn btn-primary" @tap="info">消息通知【Info】</Button>
        <Button class="btn btn-primary" @tap="btnDialog">对话框【Dialog】</Button>
        <Button class="btn btn-primary" @tap="btnPlatformModule">获取设备信息，平台型号【PlatformModule】</Button>
        <Button class="btn btn-primary" @tap="btnPhone">电话【Phone】/短信【Sms】</Button>
        <Button class="btn btn-primary" @tap="btnGeolocation">定位</Button>
        <Button class="btn btn-primary" @tap="btnPermissions">获取权限1</Button>
        <Button class="btn btn-primary" @tap="btnChange">改变按钮【Change Btn】</Button>
        <Label class="message" :text="msg" col="0" row="0" />
        <Button class="btn btn-primary" text="路由跳转" @tap="onButtonTap" />
        <Button class="btn btn-primary" text="本地存储示例" @tap="onInput" />
        <Button class="btn btn-primary" text="记事薄【Fab】" @tap="onFab" />
        <Button class="btn btn-primary" text="备忘录【ToDo】" @tap="onTodo" />
        <Button class="btn btn-primary" text="侧滑菜单【Drawer】" @tap="onDrawer" />
        <Button class="btn btn-primary" text="图标【Icon】" @tap="onIcon" />
        <Button class="btn btn-primary" text="遮罩层【mask】" @tap="onMask" />
        <Button class="btn btn-primary m-t-20" text="模态对话框【Open Modal】" @tap="showModal" />
        <Button class="btn btn-primary m-t-20" text="侧滑组件新【drawer】" @tap="onDrawers" />
        <Button
          class="btn btn-primary m-t-20"
          text="带有大标题的iOS导航栏【iOS NavigationBar with Large Title】"
          @tap="onlargeTitle"
        />
        <Button class="btn btn-primary m-t-20" text="自定义对话框" @tap="dialog" />
        <Button class="btn btn-primary m-t-20" text="自定义弹出框" @tap="pop" />
        <Button class="btn btn-primary m-t-20" text="animateCSS" @tap="animate" />
        <Button class="btn btn-primary m-t-20" text="下拉刷新" @tap="refresh" />
        <Button class="btn btn-primary m-t-20" text="下拉刷新❤新" @tap="refreshNew" />
        <Button class="btn btn-primary m-t-20" text="触摸事件" @tap="touch" />
        <Button class="btn btn-primary m-t-20" text="请求" @tap="request" />
      </StackLayout>
      <!-- </GridLayout> -->
    </ScrollView>
  </Page>
</template>

<script>
import Counter from './Counter';
import HelloWorlds from './HelloWorld';
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

import HelloWorld from './hello';
import Input from './Input';
import Fab from './Fab';
import Todo from './todo/todo';
import Drawer from './drawer';
import Icon from './icon';
import Mask from './mask';
import ModalComponent from './customModel/ModalComponent';
import Drawers from './MultiDrawer/drawers';
import LargeTitle from './largeTitle/largeTitle';
import Dialog from './Dialog/dialog';
import Pop from './pop';
import Animate from './animate';
import Refresh from './refresh';
import RefreshNew from './refreshNew';
import Touch from './touch';
import Request from './request';

export default {
  data() {
    return {
      msg: 'Hello World!'
    };
  },
  mounted() {},
  methods: {
    counter: function() {
      this.$navigateTo(Counter, {
        animated: true,
        transition: {
          name: 'slide',
          duration: 380,
          curve: 'easeIn'
        }
      });
    },
    hello: function() {
      this.$navigateTo(HelloWorlds, {
        animated: true,
        transition: {
          name: 'slide',
          duration: 380,
          curve: 'easeIn'
        }
      });
    },
    login: function() {
      this.$navigateTo(Login, {
        animated: true,
        transition: {
          name: 'slide',
          duration: 380,
          curve: 'easeIn'
        }
      });
    },
    btnToast: function() {
      this.$navigateTo(Toast, {
        animated: true,
        transition: {
          name: 'slide',
          duration: 380,
          curve: 'easeIn'
        }
      });
    },
    btnAlert: function() {
      this.$navigateTo(fancyalert, {
        animated: true,
        transition: {
          name: 'slide',
          duration: 380,
          curve: 'easeIn'
        }
      });
    },
    info: function() {
      this.$navigateTo(info, {
        animated: true,
        transition: {
          name: 'slide',
          duration: 380,
          curve: 'easeIn'
        }
      });
    },
    btnDialog: function() {
      this.$navigateTo(dialog, {
        animated: true,
        transition: {
          name: 'slide',
          duration: 380,
          curve: 'easeIn'
        }
      });
    },
    btnPlatformModule: function() {
      this.$navigateTo(platformmodule, {
        animated: true,
        transition: {
          name: 'slide',
          duration: 380,
          curve: 'easeIn'
        }
      });
    },
    btnPhone: function() {
      this.$navigateTo(phone, {
        animated: true,
        transition: {
          name: 'slide',
          duration: 380,
          curve: 'easeIn'
        }
      });
    },
    btnGeolocation: function() {
      this.$navigateTo(geolocation, {
        animated: true,
        transition: {
          name: 'slide',
          duration: 380,
          curve: 'easeIn'
        }
      });
    },
    btnPermissions: function() {
      this.$navigateTo(permission, {
        animated: true,
        transition: {
          name: 'slide',
          duration: 380,
          curve: 'easeIn'
        }
      });
    },
    btnChange: function() {
      this.$navigateTo(changebtn, {
        animated: true,
        transition: {
          name: 'slide',
          duration: 380,
          curve: 'easeIn'
        }
      });
    },
    request: function() {
      this.$navigateTo(Request);
    },
    touch: function() {
      this.$navigateTo(Touch);
    },
    refreshNew: function() {
      this.$navigateTo(RefreshNew);
    },
    onDrawer: function() {
      this.$navigateTo(Drawer);
    },
    onTapEdit: function() {
      console.log('xxxx');
    },
    onButtonTap: function() {
      this.$navigateTo(HelloWorld, {
        animated: true,
        transition: {
          name: 'slide',
          duration: 380,
          curve: 'easeIn'
        }
      });
    },
    onInput: function() {
      this.$navigateTo(Input, {
        animated: true,
        transition: {
          name: 'fade',
          duration: 380,
          curve: 'easeIn'
        }
      });
    },
    onFab: function() {
      this.$navigateTo(Fab, {
        animated: true,
        transition: {
          name: 'fade',
          duration: 380,
          curve: 'easeIn'
        }
      });
    },
    onTodo: function() {
      this.$navigateTo(Todo, {
        animated: true,
        transition: {
          name: 'fade',
          duration: 380,
          curve: 'easeIn'
        }
      });
    },
    onIcon: function() {
      this.$navigateTo(Icon);
    },
    onMask: function() {
      console.log('遮罩层');
      this.$navigateTo(Mask);
    },
    showModal() {
      this.$showModal(ModalComponent);
    },
    onDrawers() {
      this.$navigateTo(Drawers);
    },
    onlargeTitle() {
      this.$navigateTo(LargeTitle);
    },
    dialog() {
      this.$navigateTo(Dialog);
    },
    pop() {
      this.$navigateTo(Pop);
    },
    animate() {
      this.$navigateTo(Animate);
    },
    refresh() {
      this.$navigateTo(Refresh);
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}
.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
