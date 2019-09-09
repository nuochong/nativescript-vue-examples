<template>
  <Page class="page" actionBarHidden="false">
    <ActionBarSecond :title="title" />
    <GridLayout rows=" *,auto" backgroundColor="#26252A">
      <ScrollView orientation="vertical" row="0" backgroundColor="white" v-show="selectedTabview == 0">
        <Tabbar1 width="100%" />
      </ScrollView>
      <ScrollView orientation="vertical" row="0" backgroundColor="white" v-show="selectedTabview == 1">
        <StackLayout ref="ca">
          <Header class="header" row="0" />
          <Tabbar2 v-for="(place,index) in places" :key="index" :place="place" :index="index" :active="active" width="100%" />
        </StackLayout>
      </ScrollView>
      <ScrollView orientation="vertical" row="0" backgroundColor="white" v-show="selectedTabview == 2" height="100%">
        <StackLayout>
          <Tabbar3 v-for="(place,index) in places" :key="index" :place="place" :index="index" :active="active" width="100%" />
        </StackLayout>
      </ScrollView>
      <ScrollView orientation="vertical" row="0" backgroundColor="white" v-show="selectedTabview == 3">
        <Tabbar4 width="100%" />
      </ScrollView>
      <StackLayout row="0" backgroundColor="white" v-show="selectedTabview == 4">
        <Tabbar5 row="1" col="0" />
      </StackLayout>
      <Footer class="footer" row="1" @change="change" />
    </GridLayout>
  </Page>
</template>

<script>
import MyHeader from './settings/my-header';
import Footer from './footer';
import Header from './header';
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
    Header,
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
          name: 'The Custom House1',
          type: 'Architecture',
          stars: 4,
          media: 'Dublin.jpg'
        },
        {
          name: "Christ Church's",
          type: 'Architecture',
          stars: 4,
          media: 'Cathedral.jpg'
        },
        {
          name: "Christ Church's",
          type: 'Architecture',
          stars: 4,
          media: 'Cathedral.jpg'
        },
        {
          name: "Christ Church's",
          type: 'Architecture',
          stars: 4,
          media: 'Cathedral.jpg'
        }
      ],
      selectedTabview: 0
    };
  },
  mounted() {
    // console.log('xxx', this.$refs.ca.nativeView);
    // this.$refs.ca.nativeView.separatorColor = 'white';
    // this.$refs.ca.nativeView.itemsProperty = 'white';
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
.dt {
  padding: 0;
}
.home-panel {
  background-color: red;
  padding: 0;
}
.box {
  background-color: blue;
  margin-top: 0;
}
.page {
  margin: 0;
  padding: 0;
}
.header {
  padding: 10;
  height: 40;
}
.footer {
  padding: 10 50 10;
  height: 50;
}
#view {
  vertical-align: center;
}
#app {
  z-index: 10;
}
#earth {
  z-index: 5;
  animation-name: bounceInOpacity;
  animation-duration: 1s;
  animation-delay: 0.5s;
}
#background {
  width: 100;
  height: 100;
  border-radius: 100%;
  &.secondary {
    background: linear-gradient(-45deg, #ff067f, #ff0154);
    animation-name: circle;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
}
/*导航头部*/
.hh {
  background-color: #ff0154;
  width: 100%;
}
.head {
  padding: 0;
  margin: 0;
}
.tess {
  color: black;
}
#header {
  padding: 0;
  .btn {
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    .icon {
      padding: 0;
      margin: 0;
    }
    &.pp {
      height: 100%;
      .icon {
        border: 2px solid #ffffff;
        border-radius: 100%;
      }
    }
    &.menu {
      .icon {
        height: 60%;
      }
    }
  }
}
.ll {
  background-color: black;
}
.card {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(0.85);
  background-color: yellowgreen;
  vertical-align: center;
  margin-bottom: 0;
  .background {
    background-color: green;
    transform: scale(1.05);
    opacity: 0.75;
  }
  &.active {
    animation-name: highlight;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
  }
  &.inactive {
    animation-name: downlight;
    animation-duration: 0.25s;
    animation-fill-mode: backwards;
  }
  .head {
    border-radius: 14 14 0 0;
    background: #ffffff;
    padding: 12;
  }
  .img {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0 0 14 14;
  }
  .title {
    color: #545454;
    font-size: 18;
  }
  .subTitle {
    color: #dadada;
    font-size: 16;
  }
}

@keyframes circle {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(10);
  }
}

@keyframes highlight {
  from {
    transform: scale(0.85);
  }
  to {
    transform: scale(1);
  }
}

@keyframes downlight {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.85);
  }
}
</style>
