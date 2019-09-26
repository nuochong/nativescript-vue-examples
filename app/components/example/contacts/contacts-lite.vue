<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="读取所有联系人" @tap="btnGetAllContacts" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
let Contacts = require('nativescript-contacts-lite');
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
    btnGetAllContacts: function() {
      let desiredFields = ['display_name', 'phone'];
      console.log('Loading contacts...');
      let timer = new Date().getTime();
      Contacts.getContacts(desiredFields).then(
        result => {
          console.log(`Loading contacts completed in ${new Date().getTime() - timer} ms.`);
          console.log(`Found ${result.length} contacts.`);
          console.dir(result);
        },
        e => {
          console.dir(e);
        }
      );
    }
  }
};
</script>

<style scoped lang="scss">
</style>
