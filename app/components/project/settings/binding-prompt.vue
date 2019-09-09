<template>
  <WrapLayout>
    <GridLayout rows="auto, auto" columns="auto, *,auto" class="p-t-10 p-l-15 bind-wrap">
      <Label row="0" col="0" text="您还没有绑定手机号和微信号" class="font-weight-bold bind-content bind-content-top"></Label>
      <Label row="1" col="0" text="绑定后可以收取其他用户赠送的兑换币" class="text-muted m-b-10 bind-content"></Label>
      <label row="0" rowSpan="2" col="1" text="去绑定" class=" m-y-auto bind-btn" />
      <FIcon row="0" rowSpan="2" col="2" name="icon-guanbi" type="icon" class="icon bind-icon text-muted m-r-10 m-b-10 m-y-auto" />
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
.bind-wrap {
  background-color: #efeff4;
  padding: 15;
  margin: 0;
}
.bind-content {
  color: black;
  padding: 0;
}
.bind-content-top {
  margin-bottom: 5;
}
.bind-icon {
  vertical-align: center;
  color: gray;
  margin: 0;
  padding: 0;
  font-size:10;
}
.bind-btn {
  width: 50;
  height: 20;
  text-align: center;
  border-width: 1;
  border-color: #009100;
  color: #009100;
  vertical-align: center;
  font-size: 10;
  padding: 2;
  margin: 0;
  border-radius: 50%;
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
