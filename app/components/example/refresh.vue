<template>
    <Page loaded="pageLoaded" ref="page">
        <ActionBar class="action-bar" title="Hello">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
        </ActionBar>
        <FlexboxLayout flexDirection="column" backgroundColor="#3c495e" @pan="onDrawerPan(side, $event)">
            <Label class="first" text="first" height="70" backgroundColor="#43b883" ref="ht" flexShrink="0"/>
            <Label text="second" height="70" backgroundColor="#1c6b48" flexShrink="0"/>
            <!-- <Label text="third" height="100%" backgroundColor="#289062" /> -->
            <!-- <ListView for="item in listArr" ref="list" @pan="onListPane(side,$event)">
                    <v-template>
                        <Label :text="item" class="icon" />
                    </v-template>
                </ListView> -->
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
        </GridLayout> -->
    </Page>
</template>

<script>
export default {
  data () {
    return {
      msg: "Hello World! ",
      listArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      num:0,
    };
  },
  mounted () {
    this.pageLoaded();
  },
  methods: {
    pageLoaded: function (args) {

    },
    refreshList (args) {
      var pullRefresh = args.object;
      setTimeout(function () {
        pullRefresh.refreshing = false;
      }, 1000);
    },
    onButton: function () { },
    onDrawerPan(side, args) {
      console.log('xxxx',this.num++);
      let ht = this.$refs.ht.nativeView;
      if(ht.marginTop < 0){
        ht.marginTop = ht.marginTop +5;
      }
    },
    onListPane(side,args){
      let list = this.$refs.list.nativeView;
      console.log('kkk',this.getScrollY());
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
    return -top + firstVisiblePosition * c.getHeight() ;
}
  }
};
</script>

<style scoped>
.first{
  margin-top: -60;
}
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}
.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
.icons {
  font-family: "icomoon";
  font-size: 48;
}
.icon {
  font-family: iconfont;
  font-size: 48;
}
</style>
