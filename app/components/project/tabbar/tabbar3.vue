<template>
  <Page>
    <ActionBar class="action-bar" title="world">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>
    <GridLayout colums="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
      <Button text="tabbar3" @tap="onButton" />
    </GridLayout>
  </Page>
</template>

<script>
import App from '../../App';
export default {
  data() {
    return {
      msg: 'Hello World!'
    };
  },
  methods: {
    onButtonTap: function() {
      this.$navigateTo(App);
    }
  }
};
</script>

<style scoped>
</style>
