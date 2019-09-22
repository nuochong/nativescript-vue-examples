<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="通讯录1" @tap="btnContacts" />
        <Button class="btn btn-primary" text="通讯录轻量版" @tap="btnContactsLite" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Contacts from './contacts';
import ContactsLite from './contacts-lite';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '通讯录'
    };
  },
  mounted() {},
  methods: {
    btnContacts: function() {
      this.navigateTo(this, Contacts);
    },
    btnContactsLite: function() {
      this.navigateTo(this, ContactsLite);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
