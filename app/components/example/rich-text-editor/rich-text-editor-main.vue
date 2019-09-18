<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="第三方编辑器" @tap="btnRichTextEditor" />
        <Button class="btn btn-primary" text="自定义编辑器" @tap="btnRichTextEditorNew" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import RichTextEditor from './rich-text-editor';
import RichTextEditorNew from './rich-text-editor-new';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '富文本编辑器'
    };
  },
  mounted() {},
  methods: {
    btnRichTextEditor: function() {
      this.navigateTo(this, RichTextEditor);
    },
    btnRichTextEditorNew: function() {
      this.navigateTo(this, RichTextEditorNew);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
