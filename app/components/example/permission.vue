<template>
  <Page class="page">
    <action-bar-second :title="'获取权限'"></action-bar-second>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="test" text="获取权限" />
    </StackLayout>
  </Page>
</template>

<script>
const permissions = require('nativescript-permissions');
//const CALL_PHONE = android.Manifest.permission.CALL_PHONE;
//const Intent = android.content.Intent;
import ActionBarSecond from './public/action-bar-second';
export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: ''
    };
  },
  mounted() {},
  methods: {
    permission: function() {
      // permissions
      //   .requestPermission(
      //     android.Manifest.permission.READ_CONTACTS,
      //     "I need these permissions because I'm cool"
      //   )
      //   .then(function() {
      //     console.log("Woo Hoo, I have the power!");
      //   })
      //   .catch(function() {
      //     console.log("Uh oh, no permissions - plan B time!");
      //   });
    }
  }
};
</script>

<style scoped>
</style>
