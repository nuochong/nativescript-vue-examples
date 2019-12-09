<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <GridLayout colums="*" rows="*">
      <AbsoluteLayout>
        <StackLayout class="dialog-content">
          <Button class="btn btn-primary -primary" text="遮罩层" @tap="showDialog" />
        </StackLayout>

        <StackLayout class="dialog-wrapper" :class="{ dialogOpen: dialogOpen }">
          <StackLayout class="dialog">
            <Label class="label-black" textWrap="true" text="您确定要与他人共享数据吗?" />
            <Button class="btn btn-primary -primary" text="共享" />
            <Button class="btn btn-outline" text="取消" @tap="closeDialog" />
          </StackLayout>
        </StackLayout>

      </AbsoluteLayout>

    </GridLayout>
  </Page>
</template>

<script>
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '遮罩层',
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

<style scoped lang="scss">
.dialog-content {
  width: 100%;
  height: 100%;
}
.dialogOpen {
  opacity: 0;
  &.dialog-wrapper {
    visibility: visible;
    animation-name: show;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
}
.dialog-wrapper {
  visibility: collapse;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-color: rgba(29, 30, 35, 0.9);
  .dialog {
    border-width: 1 0 1 0;
    border-color: black;
    background-color: white;
    width: 60%;
    padding: 20;
    &label {
      margin: 0 15 15 15;
      color: black;
    }
  }
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
