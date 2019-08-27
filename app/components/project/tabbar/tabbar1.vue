<template>
  <Page>
    <ActionBar class="action-bar" title="world">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>
    <GridLayout colums="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
      <Button text="tabbar1" @tap="onButton" />
      <Label textWrap="true">
        <FormattedString>
          666
          <Span text="This text has a " />
          <Span text="red " style="color: red" />
          <Span text="piece of text. " />
          <Span text="Also, this bit is italic, " fontStyle="italic" />
          <Span text="and this bit is bold." fontWeight="bold" />
        </FormattedString>
      </Label>
    </GridLayout>
  </Page>
</template>

<script>
import app from '../../App';
export default {
  data() {
    return {
      msg: 'Hello World!'
    };
  },
  mounted() {
    console.log('tabbar1');
  },
  methods: {
    onButtonTap: function() {
      console.log('xxxxx');
      this.$navigateTo(app);
    }
  }
};
</script>

<style scoped>
.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
