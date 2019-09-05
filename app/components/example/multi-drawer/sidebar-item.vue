<template>
  <GridLayout columns="auto, *" class="sidedrawer-list-item" @tap="btnDarwerItem">
    <!-- <Label col="0" :text="img" class="fa"></Label> -->
    <FIcon  :name="icon" type="fa" size="20"/>
    <Label col="1" :text="title" class="p-r-10"></Label>
  </GridLayout>
</template>

<script>
export default {
  components: {},
  props: [ 'icon','title'],
  data() {
    return {
      //icon:'fa-heart'
    };
  },
  methods: {
    btnDarwerItem: function() {
      console.log('点击了侧栏按钮');
    }
  }
};
</script>

<style scoped lang="scss">

.sidedrawer-list-item {
  padding-left: 15;
  label {
    vertical-align: center;
    color: #022734;
  }
  .fa {
    width: 20;
    margin-right: 10;
  }
  &.selected {
    background-color: #f8f8f8;
    label {
      color: #3a53ff;
    }
  }
}
</style>
