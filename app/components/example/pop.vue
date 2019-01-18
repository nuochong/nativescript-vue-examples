<template>
    <Page width="100%">
        <ActionBar class="action-bar" title="Hello">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
        </ActionBar>
        <!-- <GridLayout colums="*" rows="*">
            <Label class="message" :text="msg" col="0" row="0"/>
            <Button text="Button" @tap="onButton" />
        </GridLayout> -->
        <!-- <AbsoluteLayout backgroundColor="#3c495e">
            <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883" />
            <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883" />
            <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883" />
            <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883" />
            <Label text="120,120" right="120" top="120" width="100" height="100" backgroundColor="#43b883" />
        </AbsoluteLayout> -->
        <!-- <DockLayout stretchLastChild="false" backgroundColor="#3c495e">
            <Label text="left" dock="left" width="40" backgroundColor="#43b883" />
            <Label text="top" dock="top" height="40" backgroundColor="#289062" />
            <Label text="right" dock="right" width="40" backgroundColor="#43b883" />
            <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062" />
        </DockLayout> -->
        <!-- <FlexboxLayout flexDirection="column-reverse" justifyContent="space-around" backgroundColor="#3c495e">
            <Label text="first" height="70" backgroundColor="#43b883" />
            <Label text="second" alignSelf="center" width="70" height="70" backgroundColor="#1c6b48" />
            <Label text="third\nflex-end" alignSelf="flex-end" width="70" height="70" backgroundColor="#289062" />
            <Label text="fourth" height="70" backgroundColor="#289062" />
        </FlexboxLayout> -->
        <StackLayout backgroundColor="#3c495e">
            <!-- <Label text="left" horizontalAlignment="left" width="33%" height="70" backgroundColor="#43b883" />
            <Label text="center" horizontalAlignment="center" width="33%" height="70" backgroundColor="#289062" />
            <Label text="right" horizontalAlignment="right" top="0" width="33%" height="70" backgroundColor="#1c6b48" />
            <Label text="stretch" horizontalAlignment="stretch" height="70" backgroundColor="#43b883" /> -->
        </StackLayout>
        <AbsoluteLayout backgroundColor="#3c495e" ref='page' width="100%">
            <FlexboxLayout width="100%" height="290" flexDirection="column-reverse" justifyContent="space-around" backgroundColor="#3c495e">
                
                <!-- <Label text="first" height="70" backgroundColor="#43b883" />
                <Label text="second" alignSelf="center" width="70" height="70" backgroundColor="#1c6b48" /> -->
                <!-- <Label text="third\nflex-end" alignSelf="flex-end" width="90" height="270" backgroundColor="#289062" /> -->
                <!-- <Label text="fourth" height="70" backgroundColor="#289062" /> -->
                <ScrollView style="border-radius: 10;" orientation="vertical" alignSelf="flex-end" width="90" height="270" backgroundColor="transparent">
                    <StackLayout>
                        <Label text="" class="sanjiao"/>
                        <Label text="first" height="70" backgroundColor="#43b883" />
                        <Label text="first" height="70" backgroundColor="#43b883" />
                        <Label text="first" height="70" backgroundColor="#43b883" />
                        <Label text="first" height="70" backgroundColor="#43b883" />
                        <Label text="first" height="70" backgroundColor="#43b883" />
                    </StackLayout>
                </ScrollView>
            </FlexboxLayout>
            <Label text="10,10" left="100%-40" top="-10" width="100" height="100" backgroundColor="#289062" />
            <Label text="30,40" left="30" top="40" width="100" height="100" backgroundColor="#43b883" />
        </AbsoluteLayout>
    </Page>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World! '
    }
  },
  mounted () {
    let widht = this.$refs.page.nativeView.width;
    console.log('888888', widht);
  },
  methods: {
    onButton: function () {
      console.log('000');

    }
  }
}
</script>

<style scoped>
.sanjiao{
    width:30;
    height:15;
    
    border-left-width: 30;
    border-right-width: 30;
    border-top-width: 0;
    border-bottom-width: 30;
    /* border-style:solid; */
        border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    border-bottom-color: #333;;
    /* border-color:transparent transparent #333;透明 透明  灰 */
    /* margin:40px auto; */
    /* position:relative; */
    /* background-color: red; */
    /* border-radius: 15; */
}
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
