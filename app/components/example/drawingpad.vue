<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">

        <DrawingPad ref="drawingpad" height="400" id="drawingpad" penColor="#ff4081" penWidth="3">
        </DrawingPad>

        <StackLayout orientation="horizontal">
          <Button class="btn btn-primary" text="Get Drawing" @tap="getMyDrawing()"></Button>
          <Button class="btn btn-primary" text="Clear Drawing" @tap="clearMyDrawing()"></Button>
        </StackLayout>

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
      title: '绘图画板'
    };
  },
  mounted() {},
  methods: {
    getMyDrawing(args) {
      // 获取绘图板的参考
      // const pad = this.DrawingPad.nativeElement;
      const pad = this.$refs.drawingpad.nativeView;

      // 然后获取绘图板的绘图（在Android上为Bitmap）
      let drawingImage;
      pad.getDrawing().then(
        data => {
          console.log(data);
          drawingImage = data;
        },
        err => {
          console.log(err);
        }
      );
    },
    clearMyDrawing(args) {
      // const pad = this.DrawingPad.nativeElement;
      const pad = this.$refs.drawingpad.nativeView;
      pad.clearDrawing();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
