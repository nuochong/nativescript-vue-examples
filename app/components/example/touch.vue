<template>
    <Page loaded="pageLoaded" ref="page">
        <ActionBar class="action-bar" title="Hello">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
        </ActionBar>
        <GridLayout colums="*" rows="*">
            <Button class="btn btn-primary m-t-20" ref="btn" text="触摸" @tap="touch" />
        </GridLayout>
    </Page>
</template>

<script>

export default {
  data () {
    return {
      msg: "Hello World! ",
      glyphs: []
    };
  },
  mounted () {
  },
  methods: {
    touch: function () {

      let btn = this.$refs.btn.nativeView;
      console.log('xxxx',btn.ios);
      //设置button按钮文字
      btn.ios.setTitleForState('Button title', UIControlStateNormal);
      btn.ios.
      //btn.ios.addTargetWithActionForControlEvent(this, cccontrol_selector(HelloWorld:: touchDownAction), CCControlEventTouchDown);
      // btn.android.setOnTouchListener(new android.view.View.OnTouchListener({
      //   onTouch: function (view, motionEvent) {
      //     // var action = motionEvent.getAction();
      //     // if (action === android.view.MotionEvent.ACTION_DOWN) { 
      //     //   console.log('######')
      //     // }
      //     // if (action === android.view.MotionEvent.ACTION_UP) { 
      //     //   console.log('@@@@@@')
      //     // }
      //     // return false;
      //     let scale = '0.7f'
      //     let duration = 150;
      //     let interpolator= new android.view.animation.DecelerateInterpolator();
      //     //按钮点击效果
      //     let v = view;
      //     let event = motionEvent;
      //     let MotionEvent = android.view.MotionEvent;
      //     switch (event.getAction()) {
      //       case MotionEvent.ACTION_DOWN:
      //         console.log('按下了');
      //         v.animate().scaleX(scale).scaleY(scale).setDuration(duration).setInterpolator(interpolator);
      //         v.setPressed(true);
      //         break;

      //       case MotionEvent.ACTION_MOVE:
      //         let x = event.getX();
      //         let y = event.getY();
      //         let isInside = (x > 0 && x < v.getWidth() && y > 0 && y < v.getHeight());
      //         if (v.isPressed() != isInside) {
      //           v.setPressed(isInside);
      //         }
      //         break;
      //       case MotionEvent.ACTION_CANCEL:
      //         v.setPressed(false);
      //         v.animate().scaleX(1).scaleY(1).setInterpolator(interpolator);
      //         break;
      //       case MotionEvent.ACTION_UP:
      //         v.animate().scaleX(1).scaleY(1).setInterpolator(interpolator);
      //         if (v.isPressed()) {
      //           v.performClick();
      //           v.setPressed(false);
      //         }
      //         break;
      //     }
      //     return true;
      //   }
      // }));
      console.log('点击了触摸');
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
.icons {
  font-family: "icomoon";
  font-size: 48;
}
.icon {
  font-family: iconfont;
  font-size: 48;
}
</style>
