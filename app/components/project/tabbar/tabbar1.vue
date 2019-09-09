<template>
  <GridLayout colums="*" rows="*">
    <Label class="message" :text="msg" col="0" row="0" />
    <Button text="tabbar1" @tap="onButton" />
    <Label textWrap="true">
      <FormattedString>
        <Span text="This text has a " />
        <Span text="red " style="color: red" />
        <Span text="piece of text. " />
        <Span text="Also, this bit is italic, " fontStyle="italic" />
        <Span text="and this bit is bold." fontWeight="bold" />
      </FormattedString>
    </Label>
  </GridLayout>
</template>

<script>
import App from '../../App';

export default {
  components: {},
  data() {
    return {
      title: '',
      msg: 'Hello World!'
    };
  },
  mounted() {
    console.log('tabbar1');
  },
  methods: {
    onButtonTap: function() {
      this.$navigateTo(App);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
