<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <GridLayout colums="*" rows="*">
      <PullToRefresh @refresh="refreshList">
        <ListView for="item in listOfItems" @itemTap="onItemTap">
          <v-template>
            <label class="label-white lable-refresh" :text="item.text" />
          </v-template>
        </ListView>
      </PullToRefresh>
    </GridLayout>
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
      title: '苹果传感器',
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
.lable-refresh {
  font-size: 48;
  text-align: center;
}
</style>
