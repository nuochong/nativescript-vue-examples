<template>
  <Page :class="{ dialogOpen: dialogOpen }">
    <me-actionbar :title="'遮罩层'"></me-actionbar>
    <GridLayout colums="*" rows="*">
      <StackLayout>
        <Label class="message" :text="msg" col="0" row="0" />
        <Button class="btn-mask" text="Button" @tap="showDialog" />
      </StackLayout>

      <AbsoluteLayout class="dialog-wrapper">
        <StackLayout class="dialog">
          <Label
            class="h3"
            textWrap="true"
            text="Are you sure you want to share your data with 42 people?"
          ></Label>
          <Button class="btn btn-primary" text="Share"></Button>
          <Button class="btn btn-outline" text="Cancel" @tap="closeDialog"></Button>
        </StackLayout>
      </AbsoluteLayout>
    </GridLayout>
  </Page>
</template>

<script>
import meActionbar from './public/actionbar';
export default {
  components: {
    meActionbar
  },
  data() {
    return {
      msg: 'Hello World! ',
      dialogOpen: false
    };
  },
  methods: {
    showDialog() {
      this.dialogOpen = true;
    },
    closeDialog() {
      this.dialogOpen = false;
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
.btn-mask {
  width: 500px;
  height: 250px;
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.dialogOpen .content,
.dialogOpen .action-bar {
  opacity: 0.2;
}

.dialogOpen .dialog-wrapper {
  visibility: visible;
  animation-name: show;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
}

.dialog-wrapper {
  visibility: collapse;
  opacity: 0;
  background-color: black;
}

.dialog {
  border-width: 1 0 1 0;
  border-color: black;
  background-color: white;
  width: 100%;
  /* margin-top: 100; */
  padding: 20;
}

.dialog label {
  margin: 0 15 15 15;
  color: black;
}
</style>
