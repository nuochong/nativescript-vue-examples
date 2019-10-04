<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Ripple rippleColor="#d50000">
          <Label text="Red Ripples" class="message" textWrap="true" />
        </Ripple>
        <Ripple rippleColor="#fff000">
          <Image src="~/assets/images/NativeScript-Vue.png" margin="10" stretch="aspectFit" />
        </Ripple>
        <Ripple>
          <Label text="Default Ripple" class="message" textWrap="true" />
        </Ripple>
        <Ripple rippleColor="#fff" backgroundColor="#FF4081" borderRadius="30" height="60" width="60">
          <Label text="B" fontSize="30" color="#fff" verticalAlignment="center" horizontalAlignment="center" textWrap="true" />
        </Ripple>
        <Ripple rippleColor="#c8c8c8" class="label-button">
          <Label text="Lighter Ripple" textWrap="true" />
        </Ripple>
        <Ripple rippleColor="#f5f5f5" margin="15" @tap="tapEvent" class="dark-button">
          <Label text="Possibilities" color="#fff" padding="10" textWrap="true" />
        </Ripple>
      </StackLayout>
    </ScrollView>
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
      title: '涟漪效果1'
    };
  },
  mounted() {},
  methods: {
    tapEvent: function() {
      console.log('点解了模拟按钮');
    }
  }
};
</script>

<style scoped lang="scss">
.message {
  color: #000;
  font-size: 20;
  horizontal-align: center;
  padding: 20;
}
.label-button {
  border-width: 1;
  border-color: #888;
  font-size: 14;
  horizontal-align: center;
  padding: 10;
}
.dark-button {
  background-color: #222;
  color: #fff;
  horizontal-align: center;
  font-size: 18;
  padding: 10;
  margin: 15;
  width: 30%;
}
</style>
