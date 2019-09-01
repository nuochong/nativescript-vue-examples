<template>
  <!--组件内嵌页面不用page-->
  <!-- <Page class="page"> -->
  <!-- <RadSideDrawer [drawerTransition]="sideDrawerTransition"> -->
  <GridLayout tkDrawerContent rows="auto, *" class="sidedrawer sidedrawer-left">
    <StackLayout row="0" class="sidedrawer-header">
      <Label class="sidedrawer-header-image fa" text="&#xf2bd;"></Label>
      <Label class="sidedrawer-header-brand" text="用户名"></Label>
      <Label class="footnote" text="username@mail.com"></Label>
    </StackLayout>

    <ScrollView row="1">
      <StackLayout class="sidedrawer-content">
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <StackLayout class="hr-light"></StackLayout>
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <StackLayout class="hr-light"></StackLayout>
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
        <SidebarItem :img="'&#xf005;'" :title="'测试按钮'" />
      </StackLayout>
    </ScrollView>
  </GridLayout>
  <!-- </RadSideDrawer> -->
  <!-- </Page> -->
</template>

<script>
import SidebarItem from './sidebar-item';
//import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    //ActionBarSecond,
    SidebarItem
  },
  props: ['drawer'],
  data() {
    return {
      title: ''
    };
  },
  methods: {
    onButton: function() {
      console.log('xxx');
    }
  }
};
</script>

<style scoped lang="scss">
.fa {
  font-family: 'FontAwesome';
}
.page-content {
  .page-placeholder {
    color: #d7d7d7;
    font-size: 20;
    vertical-align: center;
    horizontal-align: center;
  }
  .page-icon {
    font-size: 72;
    vertical-align: top;
    horizontal-align: center;
    color: #d7d7d7;
    margin-top: 20%;
  }
}
.sidedrawer {
  margin-bottom: -100;
  &.sidedrawer-left {
    background-color: #3a53ff;
    .sidedrawer-header-image {
      color: #f8f8f8;
      height: 60;
      width: 60;
      font-size: 60;
      padding: 0;
      margin-bottom: 5;
      margin-top: 20;
    }
    .footnote {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  .sidedrawer-header {
    background-color: #3a53ff;
    .sidedrawer-header-brand {
      color: #fff;
    }
  }
  .sidedrawer-content {
    background-color: #fff;
  }
}
.sidedrawer-list-item-icon,
.sidedrawer-list-item {
  color: #022734;
}
@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/font_898591_b1zihxnkeq6.eot');
  src: url('//at.alicdn.com/t/font_898591_b1zihxnkeq6.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_898591_b1zihxnkeq6.woff') format('woff'), url('//at.alicdn.com/t/font_898591_b1zihxnkeq6.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_898591_b1zihxnkeq6.svg#iconfont') format('svg');
}
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
