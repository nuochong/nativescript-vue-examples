<template>
    <Page>
        <ActionBar class="action-bar" title="Welcome to NativeScript-Vue!"/>
        <ScrollView>
            <!--<GridLayout colums="*" rows="*">-->
            <StackLayout>
                <Label class="message" :text="msg" col="0" row="0"/>
                <Button class="btn btn-primary" text="Button" @tap="onButtonTap" />
                <Button class="btn btn-primary" text="Base Function" @tap="onButtonBase" />
                <Button class="btn btn-primary" text="input" @tap="onInput" />
                <Button class="btn btn-primary" text="Fab" @tap="onFab" />
            </StackLayout>
            <!--</GridLayout>-->
        </ScrollView>
    </Page>
</template>

<script>
import HelloWorld from './hello';
import Home from './base/Home';
import Input from './Input';
import Fab from './Fab';
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
              name: "explode",
              duration: 380,
              curve: "spring" 
            },
          });
        },
        onButtonBase:function () {
            this.$navigateTo(Home, {
                animated: true,
                transition: {
                    name: "fade",
                    duration: 380,
                    curve: "spring"
                },
            });
        },
        onInput:function () {
            this.$navigateTo(Input, {
                animated: true,
                transition: {
                    name: "fade",
                    duration: 380,
                    curve: "spring"
                },
            });
        },
        onFab:function () {
            this.$navigateTo(Fab, {
                animated: true,
                transition: {
                    name: "fade",
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
