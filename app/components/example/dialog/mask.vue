<template>
  <Page class="page" :class="{ dialogOpen: dialogOpen }">
    <ActionBarSecond :title="title" />

    <GridLayout colums="*" rows="*">
      <StackLayout>
        <Button class="btn btn-primary" text="遮罩层" @tap="showDialog" />
      </StackLayout>

      <AbsoluteLayout class="dialog-wrapper">
        <StackLayout class="dialog">
          <Label class="h3" textWrap="true" text="您确定要与他人共享数据吗?"></Label>
          <Button class="btn btn-primary" text="共享"></Button>
          <Button class="btn btn-outline" text="取消" @tap="closeDialog"></Button>
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
.dialogOpen {
  opacity: 0.2;
  &.dialog-wrapper {
    visibility: visible;
    animation-name: show;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
}
.dialog-wrapper {
  visibility: collapse;
  opacity: 0;
  background-color: black;
  .dialog {
    border-width: 1 0 1 0;
    border-color: black;
    background-color: white;
    width: 100%;
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
