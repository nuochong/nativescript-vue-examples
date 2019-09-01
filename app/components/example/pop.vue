<template>
  <Page width="100%">
    <ActionBarSecond :title="title" />
    <StackLayout backgroundColor="#3c495e"></StackLayout>
    <AbsoluteLayout backgroundColor="#3c495e" ref="page" width="100%">
      <FlexboxLayout
        width="100%"
        height="290"
        flexDirection="column-reverse"
        justifyContent="space-around"
        backgroundColor="#3c495e"
      >
        <ScrollView
          style="border-radius: 10;"
          orientation="vertical"
          alignSelf="flex-end"
          width="90"
          height="270"
          backgroundColor="transparent"
        >
          <StackLayout>
            <Label text class="sanjiao" />
          </StackLayout>
        </ScrollView>
      </FlexboxLayout>
      <Label
        text="10,10"
        left="100%-40"
        top="-10"
        width="100"
        height="100"
        backgroundColor="#289062"
      />
      <Label text="30,40" left="30" top="40" width="100" height="100" backgroundColor="#43b883" />
    </AbsoluteLayout>
  </Page>
</template>

<script>
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '自定义弹出框',
    };
  },
  mounted() {
    let widht = this.$refs.page.nativeView.width;
    console.log('xxx', widht);
  },
  methods: {
    onButton: function() {
      console.log('xxx');
    }
  }
};
</script>

<style scoped lang="scss">
.sanjiao {
  width: 30;
  height: 15;

  border-left-width: 30;
  border-right-width: 30;
  border-top-width: 0;
  border-bottom-width: 30;
  /* border-style:solid; */
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: #333;
  /* border-color:transparent transparent #333;透明 透明  灰 */
  /* margin:40px auto; */
  /* position:relative; */
  /* background-color: red; */
  /* border-radius: 15; */
}
</style>
