<template>
  <WrapLayout>
    <GridLayout rows=“auto” columns="auto,*" class="p-t-10 p-l-15 task-list-header">
      <!-- <StackLayout class="hr-light"></StackLayout> -->
      <WrapLayout row="0" col="0" class="task-list-headerLeft">
        <FIcon name="icon-wenzhangguanli" height="auto" type="icon" class="icon task-list-headerLeftIcon" />
        <Label text="总资产：" class="task-list-headerLeftTitle"></Label>
        <Label text="2000" class="task-list-headerLeftContent"></Label>
      </WrapLayout>
      <WrapLayout row="0" col="1" class="task-list-headerRight">
        <Label text="查看" class=""></Label>
        <FIcon name="icon-jiantou" type="icon" class="icon m-y-auto task-list-headerRightIcon" />
      </WrapLayout>
      <!-- <StackLayout class="hr-light"></StackLayout> -->
    </GridLayout>
    <GridLayout rows="auto" columns="*, *, *,*" class="p-t-10 p-l-15 task-list">
      <FlexboxLayout row="0" col="0" flexDirection="column">
        <FIcon name="icon-wenzhangguanli" height="auto" type="icon" class="icon task-list-icon" />
        <Label text="我的文章" height="auto" class="task-list-title" />
        <Label text="1篇私密" height="auto" class="task-list-introduce" />
      </FlexboxLayout>
      <FlexboxLayout row="0" col="1" flexDirection="column">
        <FIcon name="icon-jiachang_shujia" height="auto" type="icon" class="icon task-list-icon" />
        <Label text="我的书架" height="auto" class="task-list-title" />
        <Label text="含已购内容" height="auto" class="task-list-introduce" />
      </FlexboxLayout>
      <FlexboxLayout row="0" col="2" flexDirection="column">
        <FIcon name="icon-shoucang" height="auto" type="icon" class="icon task-list-icon" />
        <Label text="赞和收藏" height="auto" class="task-list-title" />
        <Label text="" height="auto" class="task-list-introduce" />
      </FlexboxLayout>
      <FlexboxLayout row="0" col="3" flexDirection="column">
        <FIcon name="icon-jianglijilu" height="auto" type="icon" class="icon task-list-icon" />
        <Label text="奖励任务" height="auto" class="task-list-title" />
        <Label text="领取奖励" height="auto" class="task-list-introduce" />
      </FlexboxLayout>
      <!-- <StackLayout row="2" colSpan="4" class="hr-light"></StackLayout> -->
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
.task-list-header {
  padding: 15 10;
  margin: 0;
  border-top-width: 1;
  border-top-color: black;
  border-bottom-width: 1;
  border-bottom-color: black;
  .task-list-headerLeft {
    padding: 0;
    .task-list-headerLeftIcon {
      color: cadetblue;
    }
    .task-list-headerLeftTitle {
      color: black;
    }
    .task-list-headerLeftContent {
      color: black;
    }
  }
  .task-list-headerRight {
    padding: 0;
    margin: 0;
    text-align: right;
    horizontal-align: right;
    .task-list-headerRightIcon {
      margin: 0;
      text-align: right;
      color: #5b5b5b;
    }
  }
}
.task-list {
  text-align: center;
  padding: 20 15;
  .task-list-icon {
    font-size: 30;
    color: black;
  }
  .task-list-title {
    font-size: 14;
    color: black;
  }
  .task-list-introduce {
    font-size: 10;
  }
}
</style>
