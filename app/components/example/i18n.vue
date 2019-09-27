<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout>
        <Label class="label-white" :text="'hello.world' | L" />
        <Label class="label-white" :text="'sprintf' | L" />
        <Label class="label-white" :text="'sprintf' | L('PARTIALLY')" />
        <Label class="label-white" :text="'sprintf' | L('AGAIN', 'OK')" />
        <Label class="label-white" :text="'sprintf.numbered.placeholders' | L('1', '2')" />
        <Label class="label-white" :text="'array' | L" />
        <Label class="label-white" :text="'this.key.does.not.exist' | L" />
        <Label class="label-white" :text="'html' | L" />
        <Label class="label-white" :text="'new.line' | L" />
        <Label class="label-white" :text="'new.line' | L" textWrap="true" />
        <Label class="label-white" :text="'tab' | L" textWrap="true" />
        <Label class="label-white" :text="'special.characters.n' | L" textWrap="true" />
        <Label class="label-white" :text="'special.characters.r' | L" textWrap="true" />
        <Label class="label-white" :text="'special.characters.t' | L" textWrap="true" />
        <Label class="label-white" :text="'special.characters.backslash' | L" textWrap="true" />
        <Label class="label-white" :text="'special.characters.single.quote' | L" textWrap="true" />
        <Label class="label-white" :text="'special.characters.double.quote' | L" textWrap="true" />
        <Label class="label-white" :text="'special.keys.\n' | L" textWrap="true" />
        <Label class="label-white" :text="'special.keys.\r' | L" textWrap="true" />
        <Label class="label-white" :text="'special.keys.\t' | L" textWrap="true" />
        <Label class="label-white" :text="'special.keys.\\' | L" textWrap="true" />
        <Label class="label-white" :text="'special.keys.\'' | L" textWrap="true" />
        <Label class="label-white" :text="'special.keys.&quot;' | L" textWrap="true" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '国际化'
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
label {
  border-color: #cccccc;
  border-width: 1;
  margin-bottom: 10;
  padding: 5;
}
</style>
