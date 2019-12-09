<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" ref="btn" text="IOS原生方法" @tap="btnIos" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { log } from 'util';
import { Color } from 'color';
//const Color = require('color');
//import { Color, layout } from 'tns-core-modules/ui/core/view';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: 'IOS原生方法'
    };
  },
  mounted() {},
  methods: {
    btnIos: function() {
      let btn = this.$refs.btn.nativeView;
      if (this.$application.ios) {
        btn.ios.setTitleColorForState(new Color('red').ios, UIControlStateSelected);
        //设置按钮文字
        btn.ios.setTitleForState('Button title', UIControlStateNormal);
        btn.ios.showsTouchWhenHighlighted = 'YES';
        btn.ios.ButtonType = 'custom';
        btn.ios.setTitleColor = new Color('red');
        btn.ios.setTitleColorForState(new Color('red').ios, UIControlStateNormal);
        btn.ios.setTitleShadowColorForState(new Color('#ff0000').ios, UIControlStateNormal);
        btn.ios.reversesTitleShadowWhenHighlighted = true;
        btn.ios.setShadowOpacity = 0.5;
        let title = btn.ios.currentTitle;
        console.log('获取到的标题是：', title);
        let titleColor = btn.ios.currentTitleColor;
        console.log('获取到的颜色是', titleColor);
      } else {
        console.log('安卓待完成');
      }
      console.log('点击了按钮');
    }
  }
};
</script>

<style scoped lang="scss">
</style>
