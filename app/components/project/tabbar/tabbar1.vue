<template>
  <GridLayout colums="*" rows="*">
    <Label textWrap="true">
      <FormattedString>
        <Span text="红色 " style="color: red" />
        <Span text="还有，这段是斜体， " fontStyle="italic" />
        <Span text="这部分是粗体。" fontWeight="bold" />
      </FormattedString>
    </Label>
  </GridLayout>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
