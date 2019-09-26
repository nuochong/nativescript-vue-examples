<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="创建联系人" @tap="create" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
let app = require('application');
let contacts = require('nativescript-contacts');
let imageSource = require('image-source');
const Permissions = require('nativescript-permissions');
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '通讯录1'
    };
  },
  mounted() {},
  methods: {
    create() {
      if (this.$application.android) {
        Permissions.requestPermissions(
          [android.Manifest.permission.GET_ACCOUNTS, android.Manifest.permission.WRITE_CONTACTS],
          "I need these permissions because I'm cool"
        ).then(() => {
          this.operate();
        });
      } else {
        this.operate();
      }
    },
    operate() {
      let newContact = new contacts.Contact();
      newContact.name.given = 'John';
      newContact.name.family = 'Doe';
      newContact.phoneNumbers.push({
        label: contacts.KnownLabel.HOME,
        value: '123457890'
      }); // See below for known labels
      newContact.phoneNumbers.push({ label: 'My Custom Label', value: '11235813' });
      newContact.photo = imageSource.fromFileOrResource('~/assets/images/NativeScript-Vue.png');
      newContact.save();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
