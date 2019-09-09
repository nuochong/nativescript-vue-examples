<template>
  <WrapLayout>
    <GridLayout rows="auto, auto" columns="auto, *" class="head p-t-10 p-l-15" @tap="onContactTap()">
      <Image row="0" rowSpan="2" col="0" class="connect-team-avatar p-5 m-r-10 m-y-auto text-center" :src="headimg" stretch="none" />
      <Label row="0" col="1" text="用户名" class="font-weight-bold"></Label>
      <WrapLayout class="head-introduce" row="1" col="1">
        <Label class="head-introduce-title" text="关注" />
        <Label class="head-introduce-content" text="122" />
        <Label class="head-introduce-title" text="粉丝" />
        <Label class="head-introduce-content" text="45" />
      </WrapLayout>
      <!-- <StackLayout class="head-introduce"  row="1" col="1" orientation="horizontal">
        <Label class="head-introduce-title" text="关注"  />
        <Label class="head-introduce-content" text="122"  />
        <Label class="head-introduce-title" text="粉丝" />
        <Label class="head-introduce-content" text="45" />
      </StackLayout> -->
      <!-- <Label row="1" col="1" text="这里是描述的编写" class="text-muted m-b-10"></Label> -->
    </GridLayout>
  </WrapLayout>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      headimg: '~/assets/images/example/multi-drawer/head.jpg'
    };
  },
  methods: {
    onContactTap: function() {
      console.log('点击了设置按钮');
    }
  }
};
</script>

<style scoped lang="scss">
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
