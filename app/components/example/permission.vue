<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" @tap="test" text="获取权限" />
      </StackLayout>
    </ScrollView>
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
      title: '获取权限'
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

<style scoped lang="scss">
</style>
