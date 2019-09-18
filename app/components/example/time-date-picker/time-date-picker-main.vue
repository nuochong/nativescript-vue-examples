<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="日期时间选择器" @tap="btnModalDatetimepicker" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import ModalDatetimepicker from './modal-datetimepicker';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '日期时间选择器'
    };
  },
  mounted() {},
  methods: {
    btnModalDatetimepicker: function() {
      this.navigateTo(this, ModalDatetimepicker);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
