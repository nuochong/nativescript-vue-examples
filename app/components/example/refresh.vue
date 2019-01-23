<template>
    <Page loaded="pageLoaded" ref="page">
        <ActionBar class="action-bar" title="Hello">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
        </ActionBar>
        <GridLayout colums="*" rows="*">
            <Label class="message" :text="msg" col="0" row="0" />
            <PullToRefresh @refresh="refreshList">
                <ListView for="item in listArr">
                    <v-template>
                        <Label :text="item" class="icon" />
                    </v-template>
                </ListView>
            </PullToRefresh>
        </GridLayout>
    </Page>
</template>

<script>
export default {
  data () {
    return {
      msg: "Hello World! ",
      listArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
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
    onButton: function () { }
  }
};
</script>

<style scoped>
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
