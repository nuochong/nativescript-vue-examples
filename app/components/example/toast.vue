<template>
  <Page class="page">
    <ActionBar class="action-bar" title="提示">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="btnToast" text="提示" />
    </StackLayout>
  </Page>
</template>

<script>
import * as Toast from 'nativescript-toast';
export default {
  data() {
    return {
      title: ''
    };
  },
  mounted() {},
  methods: {
    btnToast: function() {
      let toast = Toast.makeText('你好世界【Hello World】', 'long');
      toast.show();
    }
  }
};
</script>

<style scoped>
.hello-world {
  margin: 20;
}

label {
  color: red;
}
</style>
