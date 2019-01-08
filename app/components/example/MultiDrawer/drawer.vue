<template>
    <Page>
        <ActionBar class="action-bar" title="Hello">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
              <StackLayout orientation="horizontal">
                    <Image src="res://icon" width="40" height="40" verticalAlignment="center" @tap="open"/>
                    <Label text="NativeScript" fontSize="24" verticalAlignment="center" />
                </StackLayout>
        </ActionBar>
        <GridLayout colums="*" rows="*">
            <MultiDrawer ref="drawer" v-model="drawerState">
                <StackLayout slot="left">
                    <ListView for="item in listOfItems">
                        <v-template>
                            <!-- Shows the list item label in the default color and style. -->
                            <Label :text="item.text" />
                        </v-template>
                    </ListView>
                    <Label text="Im in the left drawer" />
                </StackLayout>
                <StackLayout slot="right">
                    <Label text="Im in the right drawer" />
                </StackLayout>
                <StackLayout slot="top">
                    <Label text="Im in the top drawer" />
                </StackLayout>
                <StackLayout slot="bottom">
                    <Label text="Im in the bottom drawer" />
                </StackLayout>

                <Frame />
            </MultiDrawer>
        </GridLayout>
    </Page>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello World! ",
      listOfItems:[{text:'111'},{text:'2222'},{text:'3333'}],
      drawerState: false,
    };
  },
  methods: {
      open:function(){
          console.log('打开了');
          if(this.drawerState == 'bottom'){
                this.drawerState = false;
          }else{
              this.drawerState = 'bottom'
          }
          
          //this.$refs.drawer.open('left')
      }
  }
};
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
