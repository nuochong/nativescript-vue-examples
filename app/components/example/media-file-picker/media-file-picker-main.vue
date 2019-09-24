<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="多种类文件选择器" @tap="btnMediaFilePicker" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import MediaFilePicker from './media-file-picker';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '多种类文件选择器'
    };
  },
  mounted() {},
  methods: {
    btnMediaFilePicker: function() {
      this.navigateTo(this, MediaFilePicker);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
