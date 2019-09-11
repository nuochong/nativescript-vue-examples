<template>
  <Page class="page">
    <ActionBar class="action-bar" :flat="isFlat">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
      <Label :text="title" class="hidden" ref="topTitle" fontSize="17" verticalAlignment="center" />
      <ActionItem @tap="someMethod" ios.systemIcon="13" ios.position="right" text="refresh" android.position="popup"></ActionItem>
    </ActionBar>

    <ScrollView ref="scrollView" @scroll="onScroll()">
      <StackLayout class="container">
        <StackLayout class="header">
          <Label ref="title" :text="title" />
        </StackLayout>
        <StackLayout class="content">
          <Label textWrap="true" :text="content" class="description-label" />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      title: '愿与你一起看尽人世间的繁华',
      isFlat: true,
      content: `如果 思念有声音，那便是窗前的风声，丝丝入耳。

阳光灿烂，只因为那一路，有你相伴。

我曾一度认为，最有意义的远行是背着背包去 自己想去的地方。

直到遇见你，我才深切的明白，是与你手牵手走过的距离。

我曾一度认为，最富有深情的陪伴是一起去 爱情海的徜徉。

直到遇见你，我才深切明白，是与你相伴渡过的每一个夜晚。

愿与你一起看尽人世间的繁华。

愿与你风烛残年，愿与你一起分享喜怒哀乐。

与你一起走过似水流年。

看尽灯火阑珊的喧嚣世界，陪你一起怀念记忆中的小桥流水人家。

闭着眼睛聆听着你的风花雪月，脑海中想着你应该拥有的模样。

我的世界，因为有你的陪伴，分外绚烂。

你路过我的 人生，惊艳了我的时光。

不管怎样，时至今日，我如此爱你。

希望在你也步入爱的圣殿后，还能听到你的声音。`
    };
  },
  methods: {
    onScroll() {
      let topTitle = this.$refs.topTitle.nativeView;
      let scrollView = this.$refs.scrollView.nativeView;
      let title = this.$refs.title.nativeView;
      scrollView.verticalOffset > 59 ? (this.isFlat = false) : (this.isFlat = true);
      scrollView.verticalOffset > 49 ? (topTitle.className = 'visible') : (topTitle.className = 'hidden');
      if (scrollView.verticalOffset < 0) {
        title.translateX = -(scrollView.verticalOffset - scrollView.verticalOffset / 1.05);
      }
    },
    someMethod() {
      console.log('轻敲刷新');
    }
  }
};
</script>

<style scoped lang="scss">
.page {
  //background-color: #f7f7f7;
  .action-bar {
    // background-color: #f7f7f7;
    border-width: 0;
    margin-bottom: 0;
    label {
      font-weight: bold;
      opacity: 0;
    }
    .hidden {
      animation-name: show;
      animation-duration: 0.2;
      animation-fill-mode: forwards;
      animation-direction: reverse;
    }
    .visible {
      animation-name: show;
      animation-duration: 0.2;
      animation-fill-mode: forwards;
    }
  }
  .container {
    margin-top: 0;
    .header {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: -16;
      margin-right: -16;
      padding-top: 8;
      padding-bottom: 8;
      padding-left: 16;
      padding-right: 16;
      border-bottom-width: 1;
      border-bottom-color: rgba(0, 0, 0, 0.2);
      label {
        font-size: 24;
        font-weight: bold;
        margin-left: 20;
        color: whitesmoke;
      }
    }
    .content {
      padding: 20;
      // background-color: #fff;
      font-size: 20;
      .description-label {
        margin-bottom: 16;
        line-height: 3;
        // color: rgba(0, 0, 0, 0.87);
      }
    }
  }
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

