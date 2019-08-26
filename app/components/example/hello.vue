<template>
  <Page>
    <ActionBar class="action-bar" title="Hello">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>
    <GridLayout colums="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
      <Button text="Button" @tap="onButton" />
    </GridLayout>
  </Page>
</template>

<script>
import app from '../App';
import world from '../example/world';
export default {
  data() {
    return {
      msg: 'Hello World! '
    };
  },
  methods: {
    onButton: function() {
      console.log('000');
      this.$navigateTo(world);
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
