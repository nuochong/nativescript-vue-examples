<template>
  <Page>
    <ActionBar class="action-bar" title="Hello">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
      <StackLayout orientation="horizontal">
        <Image src="res://icon" width="40" height="40" verticalAlignment="center" @tap="open" />
        <Label text="NativeScript" fontSize="24" verticalAlignment="center" />
      </StackLayout>
    </ActionBar>
    <GridLayout colums="*" rows="*">
      <Dialog ref="drawer" v-model="drawerState">
        <Label text="main mian mian" />
        <StackLayout slot="bottom">
          <Label text="Im in the bottom drawer" />
          <Label text="Im in the bottom drawer" />
          <Label text="Im in the bottom drawer" />
          <Label text="Im in the bottom drawer" />
        </StackLayout>
        <Frame />
      </Dialog>
    </GridLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      listOfItems: [{ text: '111' }, { text: '2222' }, { text: '3333' }],
      drawerState: false
    };
  },
  methods: {
    open: function() {
      console.log('打开了');
      if (this.drawerState == 'bottom') {
        this.drawerState = false;
      } else {
        this.drawerState = 'bottom';
      }
      //this.$refs.drawer.open('bottom')
    }
  }
};
</script>

<style scoped>
.wrap {
  border-width: 1;
  border-color: red;
  background-color: green;
}
</style>
