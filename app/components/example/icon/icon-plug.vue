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
            <FIcon name="fa-heart" type="fa"/>
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
      icons: [0],
      content:
        '目前icon图标仅支持ttf格式，其它还不支持，以上的插件nativescript-vue-fonticon及nativescript-fonticon都有bug，需要修改，如果只使用官方推荐的IcoMoon和Font Awesome则不回出现bug。'
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.fa {
  font-family: 'font-awesome';
  font-size: 48;
  color: green;
}
.icon {
  font-family: 'iconfont';
  font-size: 48;
  color: white;
}
</style>
