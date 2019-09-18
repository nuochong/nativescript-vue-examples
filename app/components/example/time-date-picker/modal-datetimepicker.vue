<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="实例" @tap="selectDate" />
        <Button class="btn btn-primary" text="实例" @tap="selectTime" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const ModalPicker = require('nativescript-modal-datetimepicker').ModalDatetimepicker;
const picker = new ModalPicker();
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: 'TimeDatePicker1'
    };
  },
  mounted() {},
  methods: {
    selectDate: function() {
      picker
        .pickDate({
          title: 'Select Your Birthday',
          theme: 'light',
          maxDate: new Date()
        })
        .then(result => {
          // Note the month is 1-12 (unlike js which is 0-11)
          console.log('Date is: ' + result.day + '-' + result.month + '-' + result.year);
          var jsdate = new Date(result.year, result.month - 1, result.day);
        })
        .catch(error => {
          console.log('Error: ' + error);
        });
    },
    selectTime: function() {
      picker
        .pickTime()
        .then(result => {
          console.log('Time is: ' + result.hour + ':' + result.minute);
        })
        .catch(error => {
          console.log('Error: ' + error);
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
