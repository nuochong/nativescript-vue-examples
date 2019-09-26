<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="实例" @tap="btnCheckNfc" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
let Nfc = require('nativescript-nfc').Nfc;
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: 'NFC'
    };
  },
  mounted() {},
  methods: {
    btnCheckNfc: function() {
      let nfc = new Nfc();

      nfc.available().then(function(avail) {
        console.log(avail ? 'Yes' : 'No');
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
