<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="TimeDatePicker1" @tap="btnModalDatetimepicker" />
        <Button class="btn btn-primary" text="TimeDatePicker2" @tap="btnTimedatepicker" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import ModalDatetimepicker from './modal-datetimepicker';
import Timedatepicker from './timedatepicker';
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
    btnTimedatepicker() {
      this.navigateTo(this, Timedatepicker);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
