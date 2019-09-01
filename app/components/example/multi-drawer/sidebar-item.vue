<template>
  <GridLayout columns="auto, *" class="sidedrawer-list-item" @tap="btnDarwerItem">
    <Label col="0" :text="img" class="fa"></Label>
    <Label col="1" :text="title" class="p-r-10"></Label>
  </GridLayout>
</template>

<script>
export default {
  components: {},
  props: ['img', 'title'],
  data() {
    return {};
  },
  methods: {
    btnDarwerItem: function() {
      console.log('点击了侧栏按钮');
    }
  }
};
</script>

<style scoped lang="scss">
.fa {
  font-family: 'FontAwesome';
}

.page-content .page-placeholder {
  color: #d7d7d7;
  font-size: 20;
  vertical-align: center;
  horizontal-align: center;
}
.page-content .page-icon {
  font-size: 72;
  vertical-align: top;
  horizontal-align: center;
  color: #d7d7d7;
  margin-top: 20%;
}

.sidedrawer {
  margin-bottom: -100;
}
.sidedrawer-list-item-icon,
.sidedrawer-list-item {
  color: #022734;
}
.sidedrawer.sidedrawer-left {
  background-color: #3a53ff;
}
.sidedrawer.sidedrawer-left .sidedrawer-header-image {
  color: #f8f8f8;
  height: 60;
  width: 60;
  font-size: 60;
  padding: 0;
  margin-bottom: 5;
  margin-top: 20;
}
.sidedrawer.sidedrawer-left .footnote {
  color: rgba(255, 255, 255, 0.5);
}
.sidedrawer .sidedrawer-header {
  background-color: #3a53ff;
}
.sidedrawer .sidedrawer-header .sidedrawer-header-brand {
  color: #fff;
}
.sidedrawer .sidedrawer-content {
  background-color: #fff;
}
.sidedrawer .sidedrawer-content .sidedrawer-list-item {
  padding-left: 15;
}
.sidedrawer .sidedrawer-content .sidedrawer-list-item label {
  vertical-align: center;
  color: #022734;
}
.sidedrawer .sidedrawer-content .sidedrawer-list-item .fa {
  width: 20;
  margin-right: 10;
}
.sidedrawer .sidedrawer-content .sidedrawer-list-item.selected {
  background-color: #f8f8f8;
}
.sidedrawer .sidedrawer-content .sidedrawer-list-item.selected label {
  color: #3a53ff;
}
@font-face {
  font-family: 'iconfont'; /* project id 898591 */
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
