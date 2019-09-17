<template>
  <page class="page">
    <WriteHeader />
    <GridLayout rows="*,auto,auto">
      <ScrollView row="0" col="0" orientation="vertical" scrollBarIndicatorVisible="false" backgroundColor="#019858">
        <StackLayout>
          <TextView hint="请输入标题" v-model="title" ref="txtMessage" />
          <TextView hint="请输入正文" v-model="content" ref="searchBar" />
        </StackLayout>
      </ScrollView>
      <GridLayout row="1" col="0" rows="auto" columns="*,*,*,*,*,*" class="p-t-10 p-l-15 article-list">
        <FIcon name="icon-tu_pian" col="0" type="icon" class="icon task-img article-list-icon" @tap="close" />
        <FIcon name="icon-zitiyanse" col="1" type="icon" class="icon task-img article-list-icon" @tap="close" />
        <FIcon name="icon-gengduo" col="2" type="icon" class="icon task-img article-list-icon" @tap="close" />
        <FIcon name="icon-chexiao" col="3" type="icon" class="icon task-img article-list-icon" @tap="close" />
        <FIcon name="icon-huifu" col="4" type="icon" class="icon task-img article-list-icon" @tap="close" />
        <FIcon name="icon-shezhi" col="5" type="icon" class="icon task-img article-list-icon" @tap="buttonTap" ref="btn" />
      </GridLayout>
      <StackLayout row="2" col="0" ref="StackPanelID" />
    </GridLayout>
  </page>
</template>

<script>
import WriteHeader from '../settings/write-header';
import { textProperty } from 'tns-core-modules/ui/text-base/text-base';
import { Menu } from '../../../tools/nativescript-menu';
export default {
  components: {
    WriteHeader
  },
  data() {
    return {
      headimg: '~/assets/images/example/multi-drawer/head.jpg',
      title: '愿与你一起看尽人世间的繁华',
      content: `如果 思念有声音，那便是窗前的风声，丝丝入耳。

阳光灿烂，只因为那一路，有你相伴。

我曾一度认为，最有意义的远行是背着背包去 自己想去的地方。

直到遇见你，我才深切的明白，是与你手牵手走过的距离。

我曾一度认为，最富有深情的陪伴是一起去 爱情海的徜徉。

直到遇见你，我才深切明白，是与你相伴渡过的每一个夜晚。

愿与你一起看尽人世间的繁华。

愿与你风烛残年，愿与你一起分享喜怒哀乐。

与你一起走过似水流年。

看尽灯火阑珊的喧嚣世界，陪你一起怀念记忆中的小桥流水人家。

闭着眼睛聆听着你的风花雪月，脑海中想着你应该拥有的模样。

我的世界，因为有你的陪伴，分外绚烂。

你路过我的 人生，惊艳了我的时光。

不管怎样，时至今日，我如此爱你。

希望在你也步入爱的圣殿后，还能听到你的声音。`,
      height: 0
    };
  },
  mounted() {
    let _this = this;
    let txtMessage = this.$refs.txtMessage.nativeView;
    let StackPanelID = this.$refs.StackPanelID.nativeView;
    if (this.$application.ios) {
      console.log('平台', this.$application.ios);
      this.$application.ios.addNotificationObserver(UIKeyboardWillChangeFrameNotification, function(notification) {
        _this.height = notification.userInfo.valueForKey(UIKeyboardFrameEndUserInfoKey).CGRectValue.size.height;
        StackPanelID.height = _this.height;
      });
      this.$application.ios.addNotificationObserver(UIKeyboardWillHideNotification, function(notification) {
        console.log('隐藏了');
        _this.height = notification.userInfo.valueForKey(UIKeyboardFrameEndUserInfoKey).CGRectValue.size.height;
        StackPanelID.height = 0;
      });
    }

    // if (this.$application.ios) {
    //   console.log('动了')
    //   let delegates = require('../../../tools/myUITextViewDelegateImpl');
    //   let _myDelegate = delegates.myUITextViewDelegateImpl.initWithOwner({
    //     owner: new WeakRef(application),
    //     onTextViewShouldBeginEditing: () => {
    //       console.log('xxxxx')
    //       StackPanelID.height = TheCurrentKeyBoardHeight;
    //     },
    //     onTextViewDidEndEditing: () => {
    //       console.log('ooooo')
    //       StackPanelID.height = 0;
    //     }
    //   });

    //   this.$application.ios.delegate = _myDelegate;
    // }
  },
  methods: {
    buttonTap() {
      Menu.popup({
        view: this.$refs.btn.nativeView,
        actions: ['苹果', '香蕉', '橘子']
      })
        .then(action => {
          alert({
            title: '选择的菜单内容是',
            message: action.id + ' - ' + action.title,
            okButtonText: '确认'
          });
        })
        .catch(console.log);
    },
    onContactTap: function() {
      console.log('点击了设置按钮');
    },
    close: function() {
      console.log('关闭');
      this.$refs.txtMessage.nativeView.dismissSoftInput();
      //console.log('原始坐标', this.$refs.btn.nativeView);
      //let btns = this.$refs.btn.nativeView;
      // let StackPanelID = this.$refs.StackPanelID.nativeView;
      // StackPanelID.height = 0;
      // btns.originX = 0;
      // btns.originY = 0;
      // btns
      //   .animate({
      //     delay: 300,
      //     duration: 3000,
      //     iterations: 3,
      //     opacity: 0.8,
      //     rotate: 360,
      //     scale: {
      //       x: 2,
      //       y: 2
      //     },
      //     translate: {
      //       x: 0,
      //       y: 200
      //     }
      //   })
      //   .then(() => {
      //     console.log('Animation finished');
      //   })
      //   .catch(e => {
      //     console.log(e.message);
      //   });
    },
    listen: function() {
      //https://docs.nativescript.org/api-reference/modules/_application_#lowmemoryevent
      console.log('Functions', this.$application.getCssFileName());
      console.log('Variables', this.$application.launchEvent);
      let txtMessage = this.$refs.btn.nativeView;
      //txtMessage.height = 400;

      // this.$application.ios.addNotificationObserver(UIKeyboardWillChangeFrameNotification, function(notification) {
      //   console.log('xxx');
      //   // var frame = frameRef.get();
      //   // if (frame) {
      //   //     frame._handleHigherInCallStatusBarIfNeeded();
      //   //     if (frame.currentPage) {
      //   //         frame.currentPage.requestLayout();
      //   //     }
      //   // }
      // });

      // class CompositeForm extends this.$application.IOSApplication {
      //   constructor() {
      //     super(this);
      //   }
      // }
      // console.log('ttttt')
      // let xxx = new CompositeForm();
      // xxx.addNotificationObserver.addNotificationObserver('UIApplicationDidFinishLaunchingNotification', () => {
      //   console.log('xxx');
      // });
    }
  }
};
</script>

<style scoped lang="scss">
.article-list {
  margin: 0;
  padding: 10 0;
}
.article-list-icon {
  margin: 0;
  padding: 0;
}
.head {
  padding: 15;
}
.head-introduce {
  //background-color: #3c495e;
  .head-introduce-title {
    color: #8e8e8e;
    // background-color:"#43b883";
  }
  .head-introduce-content {
    margin-left: 5;
    margin-right: 10;
    color: #000000;
    // background-color:"#289062";
  }
}
.care-common-main-header {
  background-color: #f5f4f6;
}

.care-common-list-header {
  background-color: #efeff4;
  color: #6d6d72;
  padding-bottom: 10;
}
.connect-team-avatar {
  width: 66;
  height: 66;
  border-radius: 50%;
  padding: 0;
}

.connect-contact-attribute-title {
  color: #62c5f3;
}

.connect-contact-icon {
  color: #62c5f3;
}

.setting-icon {
  color: #5b5b5b;
}
.right-text {
  text-align: right;
}
</style>
