<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <FlexboxLayout flexDirection="column" backgroundColor="#3c495e" @pan="onDrawerPan(side, $event)">
      <Label class="label-white first" text="first" height="70" backgroundColor="#43b883" ref="ht" flexShrink="0" />
      <Label class="label-white lable-refresh" text="(*_*)" height="70" backgroundColor="#1c6b48" flexShrink="0" />
      <!-- <Label text="third" height="100%" backgroundColor="#289062" /> -->
      <ListView for="item in listArr" ref="list" @pan="onListPane(side,$event)">
        <v-template>
          <Label class="label-white lable-refresh" :text="item" />
        </v-template>
      </ListView>
    </FlexboxLayout>
    <!-- <GridLayout colums="*" rows="*">
            <Label class="label-white message" :text="msg" col="0" row="0" />
            <PullToRefresh @refresh="refreshList">
                <ListView for="item in listArr">
                    <v-template>
                        <Label class="label-white icon" :text="item" />
                    </v-template>
                </ListView>
            </PullToRefresh>
    </GridLayout>-->
  </Page>
</template>

<script>
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '自定义下拉刷新',
      msg: 'Hello World! ',
      listArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      num: 0,
      isStart: false,
      isTime: true,
      //下拉信息
      pull_to_refresh: '下拉可以刷新',
      release_to_refresh: '释放立即刷新',
      refreshing: '正在刷新…',
      not_updated_yet: '暂未更新过',
      updated_at: '上次更新于%1$s前',
      updated_just_now: '刚刚更新',
      time_error: '时间有问题'
    };
  },
  mounted() {},
  methods: {
    setIsAbleToPull: function() {},
    await: function() {
      let that = this;
      setTimeout(function() {
        console.log('对不起, 要你久候');
        that.isTime = true;
        that.restore();
      }, 3000);
    },
    restore: function() {
      console.log('返回了');
      let ht = this.$refs.ht.nativeView;
      console.log('xxx', ht.marginTop);
      ht.marginTop = -60;
    },
    // refreshList (args) {
    //   let pullRefresh = args.object;
    //   let that = this;
    //   setTimeout(function () {
    //     pullRefresh.refreshing = false;
    //     that.isTime = true;
    //     console.log('定时了');·
    //   }, 1000);
    // },
    onDrawerPan(side, args) {
      let ht = this.$refs.ht.nativeView;
      if (ht.marginTop < 0 && this.isStart) {
        ht.marginTop = ht.marginTop + 1;
      } else {
        if (this.isTime) {
          this.isTime = false;
          this.await();
        }
      }
      console.log('xxx', ht.marginTop);
    },
    onListPane(side, args) {
      let list = this.$refs.list.nativeView;
      let scrollTop = this.getScrollY();
      console.log('xxx', scrollTop);
      if (scrollTop == 0) {
        this.isStart = true;
      }
      //console.log('xxx',list.android.smoothScrollToPosition(500));
      //list.scrollToIndex(500)
    },
    getScrollY() {
      let mListView = this.$refs.list.nativeView.android;
      let c = mListView.getChildAt(0);
      if (c == null) {
        return 0;
      }
      let firstVisiblePosition = mListView.getFirstVisiblePosition();
      let top = c.getTop();
      return -top + firstVisiblePosition * c.getHeight();
    }
  }
};
</script>

<style scoped lang="scss">
.first {
  margin-top: -60;
  text-align: center;
}
.lable-refresh {
  font-size: 48;
  text-align: center;
}
</style>
