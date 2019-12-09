<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary btn-green" @tap="changebtn" ref="btn" text="改变按钮" />
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
      title: '改变按钮'
    };
  },
  mounted() {
    let btn = this.$refs.btn.nativeView;
    btn.on('tap', params => {
      console.log('点击了按钮');
    });
  },
  methods: {
    changebtn: function() {
      let btn = this.$refs.btn.nativeView;
      btn.color = 'yellow';
      btn.background = 'green';
      btn.fontSize = 50;
      btn.text = 'xxx';
      btn.rotate = '5';
      btn.opacity = 0.5;
      btn.padding = 10;
      console.log(btn._getNativeViewsCount());
    }
  }
};
</script>

<style scoped lang="scss">
.btn-green {
  background-color: blue;
  color: green;
  font-size: 20px;
}
</style>
