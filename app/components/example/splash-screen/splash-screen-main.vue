<template>
  <Page class="page">

    <GridLayout colums="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
    </GridLayout>
  </Page>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      msg: '我是闪屏页面'
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
