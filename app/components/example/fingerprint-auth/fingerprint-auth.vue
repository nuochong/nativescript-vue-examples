<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="判断指纹识别可用性" @tap="btnFingerprintAuth" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const fingerprintAuthPlugin = require('nativescript-fingerprint-auth');
const fingerprintAuth = new fingerprintAuthPlugin.FingerprintAuth();
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '判断指纹识别可用性'
    };
  },
  mounted() {},
  methods: {
    btnFingerprintAuth() {
      fingerprintAuth.available().then(function(avail) {
        console.log('Available? ' + JSON.stringify(avail));
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
