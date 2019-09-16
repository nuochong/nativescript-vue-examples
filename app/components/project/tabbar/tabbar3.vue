<template>
  <StackLayout>
    <TabView :selectedIndex="selectedIndex">
      <TabViewItem title="关注">
        <!-- <Label text="关注的内容" /> -->
        <WrapLayout>
          <GridLayout rows="auto, auto" columns="auto, *" class=" p-t-10 p-l-15">
            <Image row="0" rowSpan="2" col="0" class="connect-team-avatar p-5 m-r-10 m-y-auto text-center" :src="headimg" stretch="none" />
            <Label row="0" col="1" text="吴江月" class="font-weight-bold"></Label>
            <WrapLayout class="head-introduce" row="1" col="1">
              <Label class="head-introduce-title" text="攒了文章 |" />
              <Label class="head-introduce-content" text="08.31 06:15" />
            </WrapLayout>
          </GridLayout>
          <GridLayout rows="auto, auto" columns="*, auto" class=" p-t-10 p-l-15">
            <Label row="0" colSpan="2" col="0" class="focus-title" text="生活明朗，万物可爱，人间值得，未来可期。" />
            <Label row="1" col="0" class="focus-content" ref="textview">
              <FormattedString>
                <Span :text="content" />
              </FormattedString>
            </Label>
            <Image @loaded="goToPlace" row="1" col="1" class="focus-content-img p-5 m-r-10 m-y-auto text-center" :src="headimg" stretch="none" />
          </GridLayout>
        </WrapLayout>
      </TabViewItem>
      <TabViewItem title="专题">
        <Label text="专题的内容" />
      </TabViewItem>
      <TabViewItem title="连载">
        <Label text="连载的内容" />
      </TabViewItem>
      <TabViewItem title="文集">
        <Label text="文集的内容" />
      </TabViewItem>
    </TabView>
  </StackLayout>
</template>

<script>
const platformModule = require('tns-core-modules/platform');
export default {
  components: {},
  props: {
    place: {
      type: Object
    }
  },
  data() {
    return {
      headimg: '~/assets/images/example/multi-drawer/head.jpg',
      selectedIndex: 0,
      content:
        '人要学会果断拒绝和头也不回的离开。你要学会喜欢简单的事情，干净的东西和清楚的感觉，这样才会更加坚定自己的选择，才会减少犹豫不决的机率。' +
        '千里江山万里山河都化成了浅笑，安宁朴素过自己有滋有味的生活。远离了圆滑世故，是一个人仰着头听槐花落、低着头闻桂花香了。'
    };
  },
  mounted() {},
  methods: {
    goToPlace(place) {
      if (platformModule.isAndroid) {
        const nv = this.$refs.textview.nativeView;
        nv.opacity = 0.3;
        nv.rowSpan = 3;
        nv.height = 50;
        nv.android.setEllipsize(android.text.TextUtils.TruncateAt.valueOf('END'));
        nv.android.setSingleLine(true);
        nv.android.setMaxEms(7);
        nv.android.setMinLines(2);
      } else {
        console.log('IOS不支持此功能');
        // alert({
        //   title: '温馨提示',
        //   message: ' IOS不支持此功能',
        //   okButtonText: '确定'
        // }).then(() => {
        //   console.log('点击了确认');
        // });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.focus-content {
  font-size: 14;
  height: 70;
  width: 100%;
}
.focus-content-img {
  width: 100;
  height: 70;
  border-radius: 10;
}
.connect-team-avatar {
  width: 66;
  height: 66;
  border-radius: 50%;
  padding: 0;
}
.head-introduce {
  //background-color: #3c495e;
  .head-introduce-title {
    color: #8e8e8e;
    // background-color:"#43b883";
  }
  .head-introduce-content {
    margin-left: 5;
    margin-right: 10;
    color: #000000;
    // background-color:"#289062";
  }
}
</style>