<template>
  <!--组件内嵌页面不用page-->
  <!-- <Page class="page"> -->
  <!-- <RadSideDrawer [drawerTransition]="sideDrawerTransition"> -->
  <GridLayout tkDrawerContent rows="auto, *" class="sidedrawer sidedrawer-left">
    <StackLayout row="0" class="sidedrawer-header">
      <Image class="sidedrawer-header-image" src="~/assets/images/example/multi-drawer/head.jpg" />
      <Label class="sidedrawer-header-brand" text="用户名" />
      <Label class="footnote" text="username@mail.com" />
    </StackLayout>

    <ScrollView row="1">
      <StackLayout class="sidedrawer-content">
        <SidebarItem :icon="'fa-heart'" :title="'测试按钮1'" />
        <SidebarItem :icon="'fa-weixin'" :title="'测试按钮2'" />
        <SidebarItem :icon="'fa-twitter'" :title="'测试按钮3'" />
        <SidebarItem :icon="'fa-weixin'" :title="'测试按钮4'" />
        <SidebarItem :icon="'fa-user'" :title="'测试按钮5'" />
        <SidebarItem :icon="'fa-film'" :title="'测试按钮6'" />
        <SidebarItem :icon="'fa-music'" :title="'测试按钮7'" />
        <SidebarItem :icon="'fa-search'" :title="'测试按钮8'" />
        <SidebarItem :icon="'fa-envelope-o'" :title="'测试按钮9'" />
        <StackLayout class="hr-light" />
        <SidebarItem :icon="'fa-star'" :title="'测试按钮10'" />
        <SidebarItem :icon="'fa-star-o'" :title="'测试按钮11'" />
        <SidebarItem :icon="'fa-th-large'" :title="'测试按钮12'" />
        <SidebarItem :icon="'fa-th'" :title="'测试按钮13'" />
        <SidebarItem :icon="'fa-th-list'" :title="'测试按钮14'" />
        <SidebarItem :icon="'fa-check'" :title="'测试按钮15'" />
        <SidebarItem :icon="'fa-remove'" :title="'测试按钮16'" />
        <StackLayout class="hr-light" />
        <SidebarItem :icon="'fa-home'" :title="'测试按钮17'" />
        <SidebarItem :icon="'fa-search-plus'" :title="'测试按钮18'" />
        <SidebarItem :icon="'fa-inbox'" :title="'测试按钮19'" />
        <SidebarItem :icon="'fa-ambulance'" :title="'测试按钮20'" />
        <SidebarItem :icon="'fa-h-square'" :title="'测试按钮21'" />
        <SidebarItem :icon="'fa-heartbeat'" :title="'测试按钮22'" />
        <SidebarItem :icon="'fa-hospital-o'" :title="'测试按钮23'" />
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
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
$main-theme-color: #53ba82;
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
    background-color: $main-theme-color;
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
    background-color: $main-theme-color;
    .sidedrawer-header-brand {
      color: #fff;
    }
  }
  .sidedrawer-content {
    background-color: #fff;
    padding-bottom: 100;
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
