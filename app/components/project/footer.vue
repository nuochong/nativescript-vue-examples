<template>
  <FlexboxLayout flexDirection="row" justifyContent="space-between" id="footer">
    <FlexboxLayout
      class="btn"
      :class="{ active: (index === active) }"
      v-for="(btn,index) in btns"
      :key="index"
      @tap="goTo(btn.link,index)"
    >
      <Image :src=" '~/assets/icons/' + btn.icon+'.png'" class="icon" />
      <Label class="circle" v-if="index === active" />
    </FlexboxLayout>
  </FlexboxLayout>
</template>

<script>
import Tabbar1 from './tabbar/tabbar1';
import Tabbar2 from './tabbar/tabbar2';
import Tabbar3 from './tabbar/tabbar3';
import main from './main';
export default {
  data() {
    return {
      title: '',
      btns: [
        {
          icon: 'user',
          iconNor: 'user',
          iconAct: 'user-Red',
          link: 'tabbar1',
          active: false
        },
        {
          icon: 'Home',
          iconNor: 'Home',
          iconAct: 'Home-Red',
          link: 'tabbar2',
          active: false
        },
        {
          icon: 'Search-Red',
          iconNor: 'Search',
          iconAct: 'Search-Red',
          link: 'tabbar3',
          active: true
        }
      ],
      active: 2
    };
  },
  methods: {
    goTo(link, index) {
      // let pageArr = {
      //     'tabbar1':tabbar1,
      //     'tabbar2':tabbar2,
      //     'tabbar3':tabbar3,
      // }
      //  if (link !== "") {
      //      console.log('keyile',link);
      //     this.$navigateTo(pageArr[link]);
      // }
      this.active = index;
      this.btns.forEach(v => {
        if (v['link'] == link && !v.active) {
          v.icon = v.iconAct;
          v.active = true;
        } else {
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
  background-color: antiquewhite;
}

#footer .btn {
  height: 100%;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#footer .btn.active {
  /* background:red; */
}

#footer .btn.active .icon {
  height: 70%;
}

#footer .btn .icon {
  z-index: 100000;
  height: 100%;
  top: 0px;
  left: 0px;
}

#footer .btn .circle {
  width: 5;
  height: 5;
  border-radius: 100%;
  background: red;
  margin-top: 5;
}
</style>