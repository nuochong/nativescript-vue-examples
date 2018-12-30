<template>
  <Page class="page">
      <ScrollView>
          <AbsoluteLayout width="100%" height="100%">
            <!-- <ActionBar class="action-bar" title="VUEX及相机">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>
            </ActionBar> -->

            <FlexboxLayout flexDirection="column" height="100%" width="100%" id="app">
                <Header class="header"/>
                <StackLayout class="home-panel" flexGrow="7" id="view">
                    <!-- <Home/> -->
                    <!-- <Tabbar1></Tabbar1> -->
                    <Tabbar2 v-for="(place,index) in places"
                                        :key="index" :place="place" :index="index"
                                        :active="active" width="244" height="315" />
                    <!-- <Tabbar3></Tabbar3> -->
                </StackLayout>
                <Footer class="footer"/>
            </FlexboxLayout>
          </AbsoluteLayout>
      </ScrollView>
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
    data () {
      return {
        surprise: false,
        title: "点击我！【Tap me!】",
        imgsrc:"res://icon",
                        places: [{
                        name: "The Custom House",
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
                ]
      };
    },
            components: {
            Header,
            Footer,
            Home,
            //Searching,
            Tabbar1,
            Tabbar2,
            Tabbar3,
        },
          mounted(){

      },
      methods: {

      }
  };
</script>

<style scoped>
.page{
    margin: 0;
    padding: 0;
}
  .hello-world {
    margin: 20;
  }

  Label {
    color: red;
  }

      .searching {
        z-index: 100000;
    }

    .header {
        margin: 25 10 10;
        height: 30;
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
        background: linear-gradient(-45deg, #ff067F, #ff0154);
        animation-name: circle;
        animation-duration: 1s;
        animation-fill-mode: forwards;

    }

    @keyframes circle {
        from {
            transform: scale(0)
        }

        to {
            transform: scale(10)
        }
    }
</style>
