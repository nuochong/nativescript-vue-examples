<template>
  <Page class="page" actionBarHidden="true">
    <ActionBarSecond :title="title" />
    <GridLayout columns="*" rows="*, 50">
      <ScrollView row="0" col="0" class="scroll" v-show="selectedTabview == 0">
        <Tabbar1 />
      </ScrollView>

      <ScrollView row="0" col="0" class="scroll" v-show="selectedTabview == 1">
        <StackLayout ref="ca">
          <Tabbar2 v-for="(place,index) in places" :key="index" :place="place" :index="index" :active="active" />
        </StackLayout>
      </ScrollView>

      <Tabbar3 row="0" col="0" class="scroll" v-show="selectedTabview == 2" />

      <ScrollView row="0" col="0" class="scroll" v-show="selectedTabview == 3">
        <Tabbar4 />
      </ScrollView>

      <Tabbar5 row="0" col="0" class="scroll" v-show="selectedTabview == 4" />

      <Footer class="footer" row="1" @change="change" />
    </GridLayout>
  </Page>
</template>

<script>
import MyHeader from './settings/my-header';
import Footer from './footer';
import Tabbar1 from './tabbar/tabbar1';
import Tabbar2 from './tabbar/tabbar2';
import Tabbar3 from './tabbar/tabbar3';
import Tabbar4 from './tabbar/tabbar4';
import Tabbar5 from './tabbar/tabbar5';
import ActionBarSecond from '../example/public/action-bar-second';

export default {
  components: {
    MyHeader,
    ActionBarSecond,
    Footer,
    Tabbar1,
    Tabbar2,
    Tabbar3,
    Tabbar4,
    Tabbar5
  },
  data() {
    return {
      title: '实例',
      active: 3,
      places: [
        {
          name: '海关大楼',
          type: '建筑学',
          stars: 4,
          media: 'Dublin.jpg'
        },
        {
          name: '基督教堂',
          type: '建筑学',
          stars: 4,
          media: 'Cathedral.jpg'
        },
        {
          name: '剧院',
          type: '建筑学',
          stars: 4,
          media: 'Theater.jpg'
        }
      ],
      selectedTabview: 4
    };
  },
  mounted() {
    // const ca = this.$refs.ca.nativeView;
    // ca.separatorColor = 'white';
    // ca.itemsProperty = 'white';
  },
  methods: {
    change: function(value) {
      console.log('我是父组件接收到的tabbarID', value);
      this.selectedTabview = value;
    }
  }
};
</script>

<style scoped lang="scss">
.scroll {
  background-color: white;
}
.footer {
  padding: 10 50 10;
  height: 50;
}
</style>
