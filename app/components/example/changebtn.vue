<template>
  <Page class="page">
    <ActionBar class="action-bar" title="改变按钮">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary btn-green" @tap="changebtn" ref="btn" text="改变按钮" />
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    };
  },
  mounted() {},
  methods: {
    changebtn: function() {
      let btn = this.$refs.btn.nativeView;
      btn.color = 'blue';
      //btn.background = "red";
      btn.fontSize = 50;
      btn.text = 'xxx';
      btn.rotate = '10';
      btn.opacity = 0.5;
      btn.padding = 10;
      //console.log(btn._getNativeViewsCount());
      // btn.on("tap", function(params) {
      //   console.log("呵呵");
      // });
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
.btn-green {
  background-color: blue;
  color: green;
  font-size: 20px;
}
</style>
