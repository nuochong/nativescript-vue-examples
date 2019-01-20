<template>
    <Page loaded="pageLoaded" ref="page">
        <ActionBar class="action-bar" title="Hello">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
        </ActionBar>
        <GridLayout colums="*" rows="*">
            <Label class="dd card" text="xxxx" col="0" row="0" />
        </GridLayout>
    </Page>
</template>

<script>

export default {
  data () {
    return {
      msg: "Hello World! ",
    };
  },
  mounted () {
  },
  methods: {
    onButton: function () { }
  }
};
</script>

<style>
.card {
  animation-name: bounceInOpacity;
  animation-duration: 1s;
  animation-delay: 0.5s;
}
</style>
