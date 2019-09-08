<template>
  <FlexboxLayout flexDirection="row" justifyContent="space-between" id="header">
    <FlexboxLayout class="btn menu">
      <Image
        src="~/assets/images/project/arrow.png"
        class="icon"
        v-if="canBack == true"
        @tap="$navigateBack"
      />
      <Image
        src="~/assets/images/project/Menu-Red.png"
        class="icon"
        v-else-if="secondary == false"
      />
      <Image src="~/assets/images/project/Menu-White.png" class="icon" v-else />
    </FlexboxLayout>
    <FlexboxLayout class="btn pp">
      <Image src="~/assets/images/project/johndoe.jpg" class="icon" @tap="btnSettings"/>
    </FlexboxLayout>
  </FlexboxLayout>
</template>

<script>
import SettingsMain from './settings/settings-main';
export default {
  props: {
    secondary: {
      type: Boolean,
      default: false
    },
    canBack: {
      type: Boolean
    }
  },

  data() {
    return {
      title: ''
    };
  },
   methods: {
     btnSettings:function(){
       console.log('点击了设置按钮');
       this.navigateTo(this, SettingsMain);
     }
   }
};
</script>

<style scoped lang="scss">
#header {
  padding: 0;
  width: 100%;
  background-color: yellow;
  .btn {
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    .icon {
      padding: 0;
      margin: 0;
    }
    &.pp {
      height: 100%;
      .icon {
        border: 2px solid #ffffff;
        border-radius: 100%;
      }
    }
    &.menu {
      .icon {
        height: 60%;
      }
    }
  }
}
</style>