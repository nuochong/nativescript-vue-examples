<template>
    <Page>
        <ActionBar class="action-bar" title="Hello">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
        </ActionBar>
        <GridLayout colums="*" rows="*">
            <MultiDrawer>
                <!-- <StackLayout slot="left">
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
                </StackLayout> -->

                <Frame />
            </MultiDrawer>
        </GridLayout>
    </Page>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello World! "
    };
  },
  methods: {

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
