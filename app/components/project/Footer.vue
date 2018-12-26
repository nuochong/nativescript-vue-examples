<template>
    <FlexboxLayout flexDirection="row" justifyContent="space-between" id="footer">
        <!-- <FlexboxLayout class="btn" :class="{ active: (index === active) }"
            v-for="(btn,index) in btns" :key="index" @tap="goTo(btn.link,index)">
            <Image :src=" '~/assets/icons/' + btn.icon" class="icon " />
            <Label class="circle" v-if="index === active" />
        </FlexboxLayout> -->
    </FlexboxLayout>
</template>

<script>
import tabbar1 from './tabbar/tabbar1';
import tabbar2 from './tabbar/tabbar2';
import tabbar3 from './tabbar/tabbar3';
import app from '../App';
import main from './Main';
    export default {
        data() {
            return {
                btns: [{
                        icon: "user.png",
                        link: 'tabbar1'
                    },
                    {
                        icon: "Home.png",
                        link: 'tabbar2'
                    },
                    {
                        icon: "Search-Red.png",
                        link: 'tabbar3'
                    }
                ],
                active: 2,
            };
        },
        methods: {
            goTo(link, index) {
                let pageArr = {
                    'tabbar1':tabbar1,
                    'tabbar2':tabbar2,
                    'tabbar3':tabbar3,
                }
                 if (link !== "") {
                     console.log('keyile',link);
                    this.$navigateTo(pageArr[link]);
                }
            }
        },


    };
</script>

<style scoped>
    #footer {
        background-color:antiquewhite;
    }

    #footer .btn {
        height: 100%;
        padding: 0;
        margin: 0;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    #footer .btn.active {
        /* background:red; */
    }

    #footer .btn.active .icon {
        height: 70%;
    }

    #footer .btn .icon {
        z-index: 100000;
        height: 100%;
        top: 0px;
        left: 0px;
    }

    #footer .btn .circle {
        width: 5;
        height: 5;
        border-radius: 100%;
        background: red;
        margin-top: 5;
    }
</style>