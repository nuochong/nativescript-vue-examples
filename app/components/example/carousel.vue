<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <GridLayout class="carousel-layout-fix">
          <Carousel id="carousel" @pageChanged="myChangeEvent" autoPagingInterval="5" ios:indicatorOffset="0,-30" ios:finite="true" ios:bounce="false" showIndicator="true"
            indicatorAnimation="SWAP" indicatorColor="#66ccff" indicatorColorUnselected="#cceeff" height="200" width="100%" debug="true">

            <CarouselItem id="slide1" verticalAlignment="middle">
              <Label text="每张幻灯片都是用XML定义的" textWrap="true" margin="30" />
              <Label text="幻灯片 1" backgroundColor="#50000000" horizontalAlignment="center"></Label>
              <Label text="将旋转木马包装成GridLayout，以便将指示器置于顶部(android)" textWrap="true" margin="30" ios:visibility="collapsed" />
            </CarouselItem>

            <CarouselItem id="slide2" verticalAlignment="middle">
              <Label text="'limited'设置为True。传送带将在最后一张幻灯片处停止。" textWrap="true" margin="30" android:visibility="collapsed" />
              <Label text="指示器动画类型:'swap'" textWrap="true" ios:visibility="collapsed" margin="30" />
              <Label text="幻灯片 2" backgroundColor="#50000000" horizontalAlignment="center"></Label>
            </CarouselItem>

            <CarouselItem id="slide3" verticalAlignment="middle">
              <Label text="旋转木马可用于全屏，只需设置高度为100%" textWrap="true" margin="30" />
              <Label text="幻灯片 3" backgroundColor="#50000000" horizontalAlignment="center"></Label>
            </CarouselItem>

            <CarouselItem id="slide4" verticalAlignment="middle">
              <Label text="尽情享受吧:)" textWrap="true" margin="30" />
              <Label text="幻灯片 4" backgroundColor="#50000000" horizontalAlignment="center"></Label>
            </CarouselItem>

          </Carousel>
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const carousel = require('nativescript-carousel');
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '轮播图'
    };
  },
  mounted() {},
  methods: {
    onTextRecognitionResult() {
      console.log('文字识别结果');
    },
    myChangeEvent: function(args) {
      let changeEventText = '页面更改为索引:' + args.index;
      console.log(changeEventText);
    }
  }
};
</script>

<style scoped lang="scss">
#slide1 {
  background: linear-gradient(45deg, #f06f7e, #f34a30);
  vertical-align: center;
}
#slide2 {
  background: linear-gradient(-45deg, #1d976c, #93f9b9);
  vertical-align: center;
}
#slide3 {
  background: linear-gradient(45deg, #1d2b64, #f8cdda);
  vertical-align: center;
}
#slide4 {
  background: linear-gradient(tobottom, #003973, #e5e5be);
  vertical-align: center;
}
.carousel-layout-fix {
  padding: 0.1 0;
  margin: -0.1 0;
}
</style>
