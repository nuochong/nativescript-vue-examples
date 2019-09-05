<template>
  <Label
    :class="type"
    :color="color"
    :fontSize="size"
    :text="name | fonticon"
    width="${size}"
    textAlignment="center"
    @tap="$emit('tap')"
  />
</template>

<script>
export default {
  name: 'FontIcon',

  props: {
    color: {
      type: String
    },

    name: {
      type: String,
      required: true
    },

    size: {
      type: [String, Number],
      //这里不能设置默认值，行内样式的权重大于class，否则在class中的样式就没有效果。
      //default: 15,
      validation: s => !isNaN(s)
    },

    type: {
      type: String
      //default: 'fa'
    }
  },
  mounted() {
    console.log('name：', this.name);
    console.log('type：', this.type);
  }
};
</script>
<style scoped>
</style>
