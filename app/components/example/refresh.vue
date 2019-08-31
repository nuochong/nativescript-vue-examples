<template>
  <Page class="page" loaded="pageLoaded" ref="page">
    <ActionBarSecond :title="title" />

    <GridLayout colums="*" rows="*">
      <PullToRefresh @refresh="refreshList">
        <ListView for="item in listOfItems" @itemTap="onItemTap">
          <v-template>
            <!-- Shows the list item label in the default color and style. -->
            <Label class="message" :text="msg" col="0" row="0" />
            <label :text="item.text" />
          </v-template>
        </ListView>
      </PullToRefresh>
    </GridLayout>
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
      title: '下拉刷新',
      msg: 'Hello World! ',
      listOfItems: [{ text: '下拉刷新' }, { text: '下拉刷新' }, { text: '下拉刷新' }]
    };
  },
  mounted() {
    console.log('下拉刷新');
  },
  methods: {
    await: function() {
      let that = this;
      setTimeout(function() {
        console.log('对不起, 要你久候');
        that.isTime = true;
        console.log('定时了');
      }, 3000);
    },
    refreshList(args) {
      let pullRefresh = args.object;
      setTimeout(function() {
        pullRefresh.refreshing = false;
      }, 1000);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
