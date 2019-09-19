<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="日期时间选择器1" @tap="btnModalDatetimepicker" />
        <Button class="btn btn-primary" text="日期时间选择器2" @tap="btnDatetimepicker" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import ModalDatetimepicker from './modal-datetimepicker';
import Datetimepicker from './datetimepicker';
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
    },
    btnDatetimepicker: function() {
      this.navigateTo(this, Datetimepicker);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
