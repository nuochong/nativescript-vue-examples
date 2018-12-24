<template>
    <Page>
        <ActionBar class="action-bar" title="world">
        <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>
        </ActionBar>
        <GridLayout colums="*" rows="*">
            <Label class="message" :text="msg" col="0" row="0"/>
            <Button text="tabbar2" @tap="onButton" />
        </GridLayout>
    </Page>
</template>

<script>
import app from '../../App';
  export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    },
    methods:{
        onButtonTap:function(){
            console.log('xxxxx');
            this.$navigateTo(app);
        },
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
