<template>
    <FlexboxLayout flexDirection="row" justifyContent="space-between" id="footer">
        <FlexboxLayout class="btn" :class="{ active: (index === active) }"
            v-for="(btn,index) in btns" @tap="goTo(btn.link,index)">
            <Image :src=" '~/assets/icons/' + btn.icon" class="icon " />
            <Label class="circle" v-if="index === active" />
        </FlexboxLayout>
    </FlexboxLayout>
</template>

<script>
    import App from "../App";

    export default {
        methods: {
            goTo(link, index) {
                if (link !== "") {
                    this.$navigateTo(App);
                }
            }
        },

        data() {
            return {
                btns: [{
                        icon: "user.png",
                        link: ""
                    },
                    {
                        icon: "Home.png",
                        link: ""
                    },
                    {
                        icon: "Search-Red.png",
                        link: App
                    }
                ],
                active: 2,
                app: App
            };
        }
    };
</script>

<style scoped>
    #footer {
        background-color:#ffffff;
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