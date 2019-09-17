<template>
  <FlexboxLayout flexDirection="row" justifyContent="space-between" id="footer">
    <FlexboxLayout class="btn" :class="{ active: (index === active) }" v-for="(btn,index) in btns" :key="index" @tap="goTo(btn.link,index)">
      <Label class="icon footer-icon" :text="btn.icon | fonticon" />
      <Label class="footer-text" :text="btn.text" />
    </FlexboxLayout>
  </FlexboxLayout>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      btns: [
        {
          icon: 'icon-shouye',
          iconNor: 'icon-shouye',
          iconAct: 'icon-shouye',
          link: 'tabbar1',
          active: false,
          text: '首页'
        },
        {
          icon: 'icon-guanzhu',
          iconNor: 'icon-guanzhu',
          iconAct: 'icon-guanzhu',
          link: 'tabbar2',
          active: false,
          text: '关注'
        },
        {
          icon: 'icon-zuanshi',
          iconNor: 'icon-zuanshi',
          iconAct: 'icon-zuanshi',
          link: 'tabbar3',
          active: true,
          text: '会员'
        },
        {
          icon: 'icon-xiaoxi',
          iconNor: 'icon-xiaoxi',
          iconAct: 'icon-xiaoxi',
          link: 'tabbar4',
          active: false,
          text: '消息'
        },
        {
          icon: 'icon-wode',
          iconNor: 'icon-wode',
          iconAct: 'icon-wode',
          link: 'tabbar5',
          active: false,
          text: '我的'
        }
      ],
      active: 4
    };
  },
  methods: {
    goTo(link, index) {
      console.log('xxx', link, index);
      this.active = index;
      this.btns.forEach(v => {
        if (v['link'] == link && !v.active) {
          console.log('上', v.iconAct);
          v.icon = v.iconAct;
          v.active = true;
        } else {
          console.log('下', v.iconNor);
          v.icon = v.iconNor;
          v.active = false;
        }
      });
      this.$emit('change', index);
    }
  }
};
</script>

<style scoped lang="scss">
#footer {
  background-color: white;
  padding: 3;
  border-top-width: 1;
  border-top-color: gray;
  .btn {
    height: 100%;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: gray;
    &.active {
      color: #ea6f5a;
      .icon {
        color: #ea6f5a;
      }
    }
    .icon {
      font-size: 20;
      top: 0px;
      left: 0px;
      color: gray;
    }
    .footer-text {
      font-size: 10;
    }
    .circle {
      width: 5;
      height: 5;
      border-radius: 100%;
    }
  }
}
</style>