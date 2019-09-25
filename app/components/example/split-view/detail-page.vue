<template>
  <Page class="page">
    <ActionBar :title="selected.name"></ActionBar>
    <StackLayout col="1" class="p-20">
      <Label class="h1 m-b-10" :text="selected.name"></Label>
      <Image height="200" :src="selected.src" class="thumb img-circle"></Image>
      <Label class="body" textWrap="true" :text="selected.description"></Label>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  props: ['selected']
};
</script>

<style scoped lang="scss">
</style>
