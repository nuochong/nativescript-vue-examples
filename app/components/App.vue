<template>
    <Page>
        <ActionBar class="action-bar" title="Welcome to NativeScript-Vue!"/>
        <ScrollView>
            <!--<GridLayout colums="*" rows="*">-->
            <StackLayout>
                <Label class="message" :text="msg" col="0" row="0"/>
                <Button class="btn btn-primary" text="Button" @tap="onButtonTap" />
                <Button class="btn btn-primary" text="Base Function" @tap="onButtonBase" />
            </StackLayout>
            <!--</GridLayout>-->
        </ScrollView>
    </Page>
</template>

<script>
import HelloWorld from './hello';
import Home from './base/Home';
  export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    },
    methods:{
        onButtonTap:function(){
            console.log('xxxxx');
            this.$navigateTo(HelloWorld, {
            animated: true,
            transition: {
              name: "slide",
              duration: 380,
              curve: "spring" 
            },
          });
        },
        onButtonBase:function () {
            this.$navigateTo(Home, {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 380,
                    curve: "spring"
                },
            });
        }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
