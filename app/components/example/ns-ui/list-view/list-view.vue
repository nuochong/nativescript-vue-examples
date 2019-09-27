<template>
  <StackLayout padding="15">
    <item-list ref="list" :items="itemList" @itemTap="onItemTap" @itemDeleted="onItemDeleted" @pulling="onPulling">
    </item-list>
  </StackLayout>
</template>

<script>
import { simpleItemList } from '../data/data';
import ItemList from './item-list';

export default {
  name: 'list-view',
  components: {
    ItemList
  },
  data() {
    return {
      itemList: simpleItemList,
      itemsPulled: 0
    };
  },
  methods: {
    onItemTap({ item }) {
      console.log(`Tapped on ${item.name}`);
    },
    onPulling(listview) {
      this.itemsPulled++;
      //为了避免出现竞争情况（仅在iOS上），
      //此处的UI可能未完全更新
      //我们使用 this.$nextTick 调用
      this.$nextTick(() => {
        this.itemList.unshift({
          name: `Item ${this.itemsPulled} pulled`,
          description: 'This item was pulled',
          image: '~/assets/images/pulled.jpg'
        });
        listview.notifyPullToRefreshFinished();
        listview.refresh();
      });
    },
    onItemDeleted(item) {
      this.itemList.splice(this.itemList.indexOf(item), 1);
      this.$refs.list.refresh();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
