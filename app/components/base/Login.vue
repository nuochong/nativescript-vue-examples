<template>
  <Page class="page" navigatingTo="onNavigatingTo">
    <FlexboxLayout class="page page-login" backgroundImage="res://mesh">
        <StackLayout class="flexbox-item company-name-container">
            <Label class="t-30 company-name" text="Your Company Name"></Label>
        </StackLayout>
        <Image src="res://company_logo" stretch="none" class="company-logo" />
        <StackLayout class="flexbox-item">
            <Label class="t-18 login-text" text="Log in with your organizational account"></Label>
            <Button class="btn btn-login btn-rounded-sm font-weight-bold t-18" @tap="login" text="Log in"></Button>        
        </StackLayout>
    </FlexboxLayout>
  </Page>
</template>
<script>
    import Counter from './Counter';
    export default {
        data() {
            return {
                msg: 'Hello World!'
            }
        },
        mounted(){
            console.log("***********");
        },
        methods:{
            login:function(){
                this.$navigateTo(Counter, {
                    animated: true,
                    transition: {
                        name: "slide",
                        duration: 380,
                        curve: "spring"
                    },
                });
            },
        }
    }
</script>

<style scoped>
/* Common */
.fa {
    font-family: "FontAwesome";
}
.page {
    background-color: #ffffff;
    color: #000000;
    flex-direction: column;
    align-items: center;
}

.btn {
    color: #ffffff;
    background-color: #3C59FD;
    margin: 20 0 30 0;
}

.btn:highlighted {
    background-color: #2241F0;
}

.flexbox-item {
    width: 95%;
    text-align: center;
}

.action-bar {
    background-color: #3C59FD;
    color: #ffffff;
    padding-right: 10;
}
.hr {
    background-color: #3C59FD;
    width: 95%;
    margin-top: 21;
    height: 1;
}

/* Login */
.page-login-container {
    background-color: #3C59FD;
    android-status-bar-background: #3C59FD;
}
.page-login {
    background-color: #3C59FD;
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    color: #ffffff;
    flex-direction: column;
    align-items: center;
}
.company-name-container {
    height: 30%;
}
.company-name{
    margin-top: 60;
}

.company-logo {
    flex-grow: 1;
}

.login-text {
    margin-top: 60;
    white-space: normal;
}

.btn-login {
    color: #000000;
    background-color: #ffffff;
}

.btn-login:highlighted {
    background-color: #EAEAEA;
    color: #000000;
}

/*  Welcome */

.title {
    color: #3C59FD;
    margin-top: 20;
}
.flexbox-item Label {
    margin-bottom: 4;
}

.menu-container {
    width: 90%;
}

.menu-item {
    vertical-align: top;
    width: 50%;
    margin-bottom: 16;
}
.menu-icon {
    width: 90;
    height: 90;    
    vertical-align: top;
    border-width: 1;
    border-radius: 50%;
    font-size: 36;
    color: #3C59FD;
    background-color: #ffffff;
    border-color: #d8d8d8;
}

.action-button{
    font-size: 20;
}
</style>

