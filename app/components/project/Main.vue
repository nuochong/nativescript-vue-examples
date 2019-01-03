<template>
    <Page class="page" actionBarHidden="true">
        <ActionBar id="header head">
            <StackLayout orientation="horizontal" class="btn menu hh">
                <Image src="~/assets/icons/arrow.png" class="icon" @tap="$navigateBack" width="40" height="40" verticalAlignment="left" />
                <Label class="tess" text="NativeScript" fontSize="24" horizontalAlignment="right" />
            </StackLayout>
            <!-- <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack"/> -->
        </ActionBar>

        <GridLayout rows="60, *, auto" backgroundColor="#26252A">
            <Header class="header" row="0" />
            <ScrollView orientation="vertical" row="1" backgroundColor="red" v-show="selectedTabview == 0">
                <StackLayout flexDirection="column" height="100%">
                    <!-- <Tabbar2 v-for="(place,index) in places" :key="index" :place="place" :index="index" :active="active" width="100%" /> -->
                    <ListView ref='ca' v-for="(place,index) in places" :key="index" :place="place" :index="index" :active="active" height="100%" class="dt" backgroundColor="white">
                      <v-template>
                    <WrapLayout  height="415" class="card" flexDirection="column" justifyContent="center" >
                        <AbsoluteLayout width="56%" height="80%" class="ll" alignSelf="center">
                            <Image src="~/assets/icons/box-shadow.png" width="100%" height="97%" class="background" />
                            <FlexboxLayout flexDirection="column" width="100%" height="97%" padding="12">
                                <StackLayout orientation="vertical" class="head">
                                    <Label :text="place.name" class="title bold" />
                                    <Label :text="place.type" class="subTitle semi-bold" horizontalAlignment="center" />
                                    <FlexboxLayout flexDirection="row" height="12" marginTop="4">
                                        <Image src="~/assets/icons/Star-Red.png" v-for="star in place.stars" :key="star" marginRight="4" />
                                        <Image src="~/assets/icons/Star-grey.png" v-for="star in (5 - place.stars)" :key="(star * 10)" marginRight="4" />
                                    </FlexboxLayout>
                                </StackLayout>
                                <StackLayout orientation="vertical" :backgroundImage="'~/assets/media/' + place.media" height="58%" width="100%" class="img">
                                </StackLayout>
                            </FlexboxLayout>
                        </AbsoluteLayout>
                    </WrapLayout>
                    </v-template>
                    <!-- <Label text="first" width="100%" height="415" backgroundColor="#43b883" />
                    <Label text="second" width="100%" height="415" backgroundColor="#1c6b48" />
                    <Label text="third" width="100%" height="415" backgroundColor="#289062" />
                    <Label text="fourth" width="100%" height="415" backgroundColor="#1c6b48" />
                    <Label text="third" width="100%" height="415" backgroundColor="#289062" /> -->
                    </ListView>
                </StackLayout>
            </ScrollView>
            <ScrollView orientation="vertical" row="1" backgroundColor="yellow" v-show="selectedTabview == 1">
                <StackLayout>
                    <Tabbar2 v-for="(place,index) in places" :key="index" :place="place" :index="index" :active="active" width="100%"/>
                </StackLayout>
            </ScrollView>
            <ScrollView orientation="vertical" row="1" backgroundColor="green" v-show="selectedTabview == 2">
                <StackLayout>
                    <Tabbar2 v-for="(place,index) in places" :key="index" :place="place" :index="index" :active="active" width="100%"/>
                </StackLayout>
            </ScrollView>
            <Footer class="footer" row="2" @change="change" />
        </GridLayout>
    </Page>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Tabbar1 from "./tabbar/tabbar1";
import Tabbar2 from "./tabbar/tabbar2";
import Tabbar3 from "./tabbar/tabbar3";
export default {
  components: {
    Header,
    Footer,
    Home,
    //Searching,
    Tabbar1,
    Tabbar2,
    Tabbar3,
  },
  data () {
    return {
      surprise: false,
      title: "点击我！【Tap me!】",
      imgsrc: "res://icon",
      places: [{
        name: "The Custom House1",
        type: "Architecture",
        stars: 4,
        media: "Dublin.jpg"
      },
      {
        name: "Christ Church's",
        type: "Architecture",
        stars: 4,
        media: "Cathedral.jpg"
      },
      {
        name: "Bord Gáis Energ",
        type: "Architecture",
        stars: 5,
        media: "Theater.jpg"
      }
      ],
      selectedTabview: 0,
    };
  },
  mounted () {
    console.log('jjjj',this.$refs.ca.nativeView);
    this.$refs.ca.nativeView.separatorColor = 'white';
    this.$refs.ca.nativeView.itemsProperty = 'white'
  },
  methods: {
    change: function (value) {
      console.log('我是伏组件');
      this.selectedTabview = value;
    }
  }
};
</script>

<style scoped>
.dt{
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
.hello-world {
  margin: 20;
}

label {
  color: red;
}

.searching {
  z-index: 100000;
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
}

#background.secondary {
  background: linear-gradient(-45deg, #ff067f, #ff0154);
  animation-name: circle;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes circle {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(10);
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
}

#header .btn {
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
}

#header .btn .icon {
  padding: 0;
  margin: 0;
}

#header .btn.pp {
  height: 100%;
}

#header .btn.menu .icon {
  height: 60%;
}

#header .btn.pp .icon {
  border: 2px solid #ffffff;
  border-radius: 100%;
}

.ll {
  background-color: black;
}
.card .background {
  background-color: green;
  transform: scale(1.05);
  opacity: 0.75;
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

.card {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(0.85);
  background-color: yellowgreen;
  vertical-align: center;
  margin-bottom: 0;
}

.card.active {
  animation-name: highlight;
  animation-duration: 0.25s;
  animation-fill-mode: forwards;
}

.card.inactive {
  animation-name: downlight;
  animation-duration: 0.25s;
  animation-fill-mode: backwards;
}

.card .head {
  border-radius: 14 14 0 0;
  background: #ffffff;
  padding: 12;
}

.card .img {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0 0 14 14;
}

.card .title {
  color: #545454;
  font-size: 18;
}

.card .subTitle {
  color: #dadada;
  font-size: 16;
}
</style>
