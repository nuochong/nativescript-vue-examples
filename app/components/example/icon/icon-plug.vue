<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <ListView for="(item,index) in icons" class="list-group">
        <v-template>
          <GridLayout class="list-group-item" rows="*" columns="auto, *">
            <!--原生nativescript旧方法，已经不能使用-->
            <!-- <Label class="iconfont" text="\uf019;"></Label> -->
            <!--原生nativescript新方法1，目前可用-->
            <!-- <Label class="fa" text="&#xeb68;"></Label> -->
            <!--原生nativescript新方法2，目前可用-->
            <!-- <Image src="'font://&#xeb68;'" stretch="none" class="iconfont"></Image> -->
            <!--以上方法在nativescript-vue中都不支持-->

            <!--原生nativescript插件nativescript-fonticon方法,原生可用，nativescript-vue中不可使用，因为不支持原生模版及过滤器-->
            <!-- <Label class="iconfont" text="{{'fa-mail-reply' | fonticon}}"></Label>  -->

            <!--原生nativescript-vue插件nativescript-vue-fonticon方法,可用，支持vue模版及过滤器，基于原生nativescript-fonticon插件-->
            <!--直接使用vue的过滤器加载原生nativescript-fonticon插件的过滤方法-->
            <!-- <Label class="iconfont" :text="'icon-guanlianshebei' | fonticon"></Label>  -->
            <!--直接使用nativescript-vue-fonticon的组件形式引入icon-->
            <FIcon name="fa-heart" type="fa" size="48" />
            <FIcon name="icon-guanlianshebei" type="icon" />
          </GridLayout>
        </v-template>
      </ListView>
    </ScrollView>
  </Page>
</template>

<script>
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '图标插件',
      icons: [0, 1],
      content:
        '目前icon图标仅支持ttf格式，其它还不支持，以上的插件nativescript-vue-fonticon及nativescript-fonticon都有bug，需要修改，如果只使用官方推荐的IcoMoon和Font Awesome则不回出现bug。'
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
//颜色值不能添加权重符号!important,会导致设置颜色无效。
//通过size属性设置的行内样式权重高于class样式，设置完成后后退重新进入该页面才能显示样式。
//如果只是单单使用同样式方法，那么修改该设置方法的样式是可以快速热更新，不必退出刷新页面。
//如果使用了行内样式，即vue传值，就需要刷新页面才能看到更改后的效果。
.fa {
  font-family: 'font-awesome';
  font-size: 24;
  color: green;
}
.icon {
  font-family: 'iconfont';
  font-size: 96;
  color: white;
}
</style>
