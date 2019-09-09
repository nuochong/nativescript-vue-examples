<template>
  <!-- <WrapLayout> -->
    <GridLayout rows="*" columns="auto, *" class="header-bar p-t-10 p-l-15 ">
      <FIcon row="0"  col="0" name="icon-saoma" type="icon" class="icon text-muted m-r-10 m-b-10 m-y-auto header-bar-scan" @tap="btnScan"/>
      <!-- <Label row="0" col="0" text="扫码" class="header-bar-scan text-muted m-b-10 m-y-auto" @tap="btnScan"></Label> -->
      <Label row="0" rowSpan="1" col="1" text="写文章" class="header-bar-edit text-muted m-b-10 m-y-auto" @tap="btnEdit"></Label>
    </GridLayout>
  <!-- </WrapLayout> -->
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    btnScan: function() {
      console.log('点击了扫码按钮');
    },
    btnEdit: function() {
      console.log('点击了文章按钮');
    }
  }
};
</script>

<style scoped lang="scss">
.header-bar {
  padding:10 15;
  //border-bottom-width: 1;
  //border-bottom-color: gray;
  label{
    margin:0;
  }
  .header-bar-scan {
    color:gray;
  }
  .header-bar-edit {
    color: #ea6f5a;
    text-align: right;
  }
}
</style>
