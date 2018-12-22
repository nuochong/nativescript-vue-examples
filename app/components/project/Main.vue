<template>
  <Page class="page">
      <ScrollView>
          <AbsoluteLayout width="100%" height="100%">
            <!-- <ActionBar class="action-bar" title="VUEX及相机">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>
            </ActionBar> -->

            <FlexboxLayout flexDirection="column" height="100%" width="100%"
                    id="app">

                <!-- <StackLayout class="hello-world">
                <Label class="body" textWrap=true text="这是一个hello world组件，如果你挑战，请点击这个按钮"/>
                <Label class="body" textWrap=true text="This is a hello world component, tap the button if you dare"/>

                <Button class="btn btn-primary" @tap="surprise = !surprise" :text="title"/>
                <Image v-if="surprise" src="~/assets/images/NativeScript-Vue.png"/>
                <Button class="btn btn-primary" @tap="test" text="相机!"/>
                <Image :src="imgsrc" stretch="none" ref="img"/> 
                </StackLayout>-->
                <Header class="header"/>
                    <StackLayout class="home-panel" flexGrow="7" id="view">
                        <!-- <Home/> -->
                        <Label textWrap="true">
  <FormattedString>666
    <Span text="This text has a " />
    <Span text="red " style="color: red" />
    <Span text="piece of text. " />
    <Span text="Also, this bit is italic, " fontStyle="italic" />
    <Span text="and this bit is bold." fontWeight="bold" />

  </FormattedString>
</Label>
<Label text="www" textWrap="true"> 
eee
</Label>
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
  export default {
    data () {
      return {
        surprise: false,
        title: "点击我！【Tap me!】",
        imgsrc:"res://icon",
      };
    },
            components: {
            Header,
            Footer,
            Home,
            //Searching
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
