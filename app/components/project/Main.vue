<template>
    <Page class="page" actionBarHidden="true">
        <ScrollView>
            <AbsoluteLayout width="100%" height="100%">
                <FlexboxLayout width="100%" height="100%" justifyContent="center"
                    alignItems="center">
                    <StackLayout id="background" :class="{secondary: isSearching}">
                    </StackLayout>
                </FlexboxLayout>
                <Image src="~/assets/icons/earth.png" opacity="0.25" width="350"
                    height="350" :marginLeft="(width - 250)" :marginTop="(height - 400)"
                    id="earth" />
                <FlexboxLayout flexDirection="column" height="100%" width="100%"
                    id="app">
                    <!-- <Header class="header" :secondary="isSearching" /> -->
                    <StackLayout class="home-panel" flexGrow="7" id="view">

                        <!-- <Home v-on:togglesearch="toggleSearch" v-if="!isSearching" />
                        <Searching v-on:togglesearch="toggleSearch" v-else
                            class="searching" /> -->

                    </StackLayout>
                    <Footer class="footer" v-if="!isSearching" />
                </FlexboxLayout>
            </AbsoluteLayout>
        </ScrollView>
    </Page>
</template>

<script>
    //import Header from "./Header";
    import Footer from "./Footer";
    //import Home from "./Home";
    //import Searching from "./Searching";
    const platform = require("tns-core-modules/platform");
    const application = require("tns-core-modules/application");

    export default {
        methods: {
            toggleSearch() {
                this.isSearching = !this.isSearching;
            }
        },

        data() {
            return {
                platform: "",
                isSearching: false,
                width: 0,
                height: 0
            };
        },

        mounted() {
            this.width = platform.screen.mainScreen.widthDIPs;
            this.height = platform.screen.mainScreen.heightDIPs;
            if (application.ios) {
                this.platform = "ios";
            } else if (application.android) {
                this.platform = "android";
            }
            
        },

        components: {
            //Header,
            Footer,
            //Home,
            //Searching
        }
    };
</script>

<style scoped>
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