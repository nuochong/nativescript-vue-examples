<template>
  <ScrollView ref="scrollView">
    <StackLayout class="content">
      <Label textWrap="true">
        <FormattedString>
          <Span class="span-white" text="返回的数据是如下：" />
          <Span class="span-white" :text="content" />
        </FormattedString>
      </Label>
    </StackLayout>
  </ScrollView>
</template>

<script>
export default {
  components: {},
  props: ['content'],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.content {
  padding: 15;
}
</style>