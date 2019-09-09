<template>
  <WrapLayout>
    <StackLayout backgroundColor="#E0E0E0">
      <StackLayout class="hr-light"></StackLayout>
      <Label text="通用设置" class="care-common-list-header text-uppercase t-14 p-l-15 p-t-30 p-b-7"></Label>
      <StackLayout class="hr-light"></StackLayout>
    </StackLayout>
    <GridLayout rows="auto, auto, auto" columns="auto, *, auto,auto" class="p-t-10 p-l-15" @tap="onContactTap()">
      <Label row="0" rowSpan="2" col="0" class="connect-team-avatar p-5 m-r-10 m-y-auto text-center" text="图标"></Label>
      <Label row="0" col="1" text="名称" class="font-weight-bold"></Label>
      <Label row="1" col="1" text="这里是描述的编写" class="text-muted m-b-10"></Label>
      <Label row="0" rowSpan="3" col="1" text="未设置" class="text-muted m-r-10 m-b-10 m-y-auto right-text"></Label>
      <Switch row="0" rowSpan="3" col="2" checked="true" class="text-muted m-r-10 m-b-10 m-y-auto" />
      <FIcon row="0" rowSpan="3" col="3" name="icon-jiantou" type="icon" class="icon setting-icon text-muted m-r-10 m-b-10 m-y-auto" />
      <!-- <Label row="0" rowSpan="3" col="3" :text="icon-jiantou | fonticon" class="icon setting-icon text-muted m-r-10 m-b-10 m-y-auto"></Label> -->
      <StackLayout row="2" colSpan="4" class="hr-light"></StackLayout>
    </GridLayout>
    <GridLayout rows="auto, auto, auto" columns="auto, *, auto" class="p-t-10 p-l-15" @tap="onContactTap()">
      <Label row="0" rowSpan="2" col="0" class="connect-team-avatar p-5 m-r-10 m-y-auto text-center" text="图标"></Label>
      <Label row="0" col="1" text="名称" class="font-weight-bold"></Label>
      <Label row="1" col="1" text="这里是描述的编写" class="text-muted m-b-10"></Label>
      <FIcon row="0" rowSpan="3" col="2" name="icon-jiantou" type="icon" class="icon setting-icon text-muted m-r-10 m-b-10 m-y-auto" />
      <StackLayout row="2" colSpan="3" class="hr-light"></StackLayout>
    </GridLayout>
  </WrapLayout>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    onContactTap: function() {
      console.log('点击了设置按钮');
    }
  }
};
</script>

<style scoped lang="scss">
.care-common-main-header {
  background-color: #f5f4f6;
}

.care-common-list-header {
  background-color: #efeff4;
  color: #6d6d72;
  padding-bottom: 10;
}
.connect-team-avatar {
  min-width: 36;
  color: #ffffff;
  background-color: #808080;
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
