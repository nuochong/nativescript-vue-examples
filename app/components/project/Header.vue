<template>
    <FlexboxLayout flexDirection="row" justifyContent="space-between" id="header">
        <FlexboxLayout class="btn menu">
            <Image src="~/assets/icons/arrow.png" class="icon" v-if="canBack == true"
                @tap="$navigateBack" />
            <Image src="~/assets/icons/Menu-Red.png" class="icon" v-else-if="secondary == false" />
            <Image src="~/assets/icons/Menu-White.png" class="icon" v-else />
        </FlexboxLayout>
        <FlexboxLayout class="btn pp">
            <Image src="~/assets/icons/johndoe.jpg" class="icon" />
        </FlexboxLayout>
    </FlexboxLayout>
</template>

<script>
    export default {
        props: {
            secondary: {
                type: Boolean,
                default: false
            },
            canBack: {
                type: Boolean
            }
        },

        data() {
            return {};
        },
    };
</script>

<style scoped>
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