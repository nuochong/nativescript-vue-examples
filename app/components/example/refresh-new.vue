<template>
  <Page class="page" loaded="pageLoaded" ref="page">
    <ActionBarSecond :title="'下拉刷新'"></ActionBarSecond>
    <FlexboxLayout
      flexDirection="column"
      backgroundColor="#3c495e"
      @pan="onDrawerPan(side, $event)"
    >
      <Label
        class="first"
        text="first"
        height="70"
        backgroundColor="#43b883"
        ref="ht"
        flexShrink="0"
      />
      <Label text="second" height="70" backgroundColor="#1c6b48" flexShrink="0" />
      <!-- <Label text="third" height="100%" backgroundColor="#289062" /> -->
      <ListView for="item in listArr" ref="list" @pan="onListPane(side,$event)">
        <v-template>
          <Label :text="item" class="icon" />
        </v-template>
      </ListView>
    </FlexboxLayout>
    <!-- <GridLayout colums="*" rows="*">
            <Label class="message" :text="msg" col="0" row="0" />
            <PullToRefresh @refresh="refreshList">
                <ListView for="item in listArr">
                    <v-template>
                        <Label :text="item" class="icon" />
                    </v-template>
                </ListView>
            </PullToRefresh>
    </GridLayout>-->
  </Page>
</template>

<script>
import ActionBarSecond from './public/action-bar-second';
export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
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
  mounted() {
    this.pageLoaded();
  },
  methods: {
    setIsAbleToPull: function() {},
    pageLoaded: function(args) {},
    await: function() {
      console.log('丁丁事');
      let that = this;
      setTimeout(function() {
        console.log('对不起, 要你久候');
        that.isTime = true;
        console.log('定时了');
        that.restore();
      }, 3000);
    },
    restore: function() {
      console.log('返回了');
      let ht = this.$refs.ht.nativeView;
      console.log('hhhh', ht.marginTop);
      ht.marginTop = -60;
    },
    // refreshList (args) {
    //   var pullRefresh = args.object;
    //   let that = this;
    //   setTimeout(function () {
    //     pullRefresh.refreshing = false;
    //     that.isTime = true;
    //     console.log('定时了');·
    //   }, 1000);
    // },
    onButton: function() {},
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
      console.log('kkk', scrollTop);
      if (scrollTop == 0) {
        this.isStart = true;
      }
      //console.log('kkkk',list.android.smoothScrollToPosition(500));
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

<style scoped>
.first {
  margin-top: -60;
}

.icons {
  font-family: 'icomoon';
  font-size: 48;
}
.icon {
  font-family: iconfont;
  font-size: 48;
}
</style>
