<template>
  <Page class="page">

    <GridLayout colums="*" rows="*">
      <Label class="label-white message" :text="msg" col="0" row="0" />
    </GridLayout>
  </Page>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      msg: '我是闪屏页面',
      see: 'https://market.nativescript.org/plugins/nativescript-splashscreen'
    };
  },
  mounted() {
    console.log('闪屏不是页面，android需要在Manifest中配置，ios需要在main.js中配置');
  },
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
