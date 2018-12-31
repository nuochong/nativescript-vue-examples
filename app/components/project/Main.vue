<template>
  <Page class="page" actionBarHidden="true">
      <!-- <ScrollView> -->
          <!-- <AbsoluteLayout width="100%" height="100%"> -->
            <ActionBar id="header head">
                <StackLayout orientation="horizontal" class="btn menu hh">
                    <Image src="~/assets/icons/arrow.png" class="icon"
                @tap="$navigateBack" width="40" height="40" verticalAlignment="left"/>
                    <Label class="tess" text="NativeScript" fontSize="24" horizontalAlignment="right" /> 
                </StackLayout>
                <!-- <Header class="header" width="100%"/> -->
            <!-- <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack"/> -->
            </ActionBar>
      
      <GridLayout rows="60, *, auto" backgroundColor="#26252A">
          <Header class="header" row="0"/>
              <ScrollView orientation="vertical" row="1" backgroundColor="red"> 
                  <StackLayout >
                        <Tabbar2 v-for="(place,index) in places"
                                        :key="index" :place="place" :index="index"
                                        :active="active" width="100%" height="415" class="dd"/>
                  </StackLayout>
              </ScrollView>
          <Footer class="footer" row="2"/>
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
    data () {
      return {
        surprise: false,
        title: "点击我！【Tap me!】",
        imgsrc:"res://icon",
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
.home-panel{
    background-color: red;
    padding: 0;
}
.box{
    background-color: blue;
    margin-top: 0;
}

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






    /*导航头部*/
    .hh{
        background-color: #ff0154;
        width: 100%;
    }
    .head{
        padding:0;
        margin: 0;
    }
    .tess{
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
</style>
