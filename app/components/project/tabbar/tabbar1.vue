<template>
  <GridLayout colums="*" rows="*">
    <Label class="message" :text="msg" col="0" row="0" />
    <!-- <Button text="tabbar1" @tap="onButton" /> -->
    <Label textWrap="true">
      <FormattedString>
        <Span text="red " style="color: red" />
        <Span text="Also, this bit is italic, " fontStyle="italic" />
        <Span text="and this bit is bold." fontWeight="bold" />
      </FormattedString>
    </Label>
  </GridLayout>
</template>

<script>
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
    onButtonTap: function() {}
  }
};
</script>

<style scoped lang="scss">
</style>
