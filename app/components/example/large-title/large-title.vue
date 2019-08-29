<template>
  <Page class="page">
    <ActionBar class="action-bar" :flat="isFlat">
      <Label :text="title" class="hidden" ref="topTitle" fontSize="17" verticalAlignment="center" />
      <ActionItem
        @tap="someMethod"
        ios.systemIcon="13"
        ios.position="right"
        text="refresh"
        android.position="popup"
      ></ActionItem>
    </ActionBar>

    <ScrollView ref="scrollView" @scroll="onScroll()">
      <StackLayout class="container">
        <StackLayout class="header">
          <Label ref="title" :text="title" />
        </StackLayout>
        <StackLayout class="content">
          <Label
            textWrap="true"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            class="description-label"
          />
          <Label
            textWrap="true"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            class="description-label"
          />
          <Label
            textWrap="true"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            class="description-label"
          />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
export default {
  data() {
    return { title: 'My title', isFlat: true };
  },
  methods: {
    onScroll() {
      let topTitle = this.$refs.topTitle.nativeView;
      let scrollView = this.$refs.scrollView.nativeView;
      let title = this.$refs.title.nativeView;
      scrollView.verticalOffset > 59 ? (this.isFlat = false) : (this.isFlat = true);
      scrollView.verticalOffset > 49 ? (topTitle.className = 'visible') : (topTitle.className = 'hidden');
      if (scrollView.verticalOffset < 0) {
        title.translateX = -(scrollView.verticalOffset - scrollView.verticalOffset / 1.05);
      }
    },
    someMethod() {
      console.log('refresh was tapped');
    }
  }
};
</script>

<style>
.page {
  background-color: #f7f7f7;
}

.container {
  margin-top: 0;
}

.content {
  background-color: #fff;
  padding: 20;
  font-size: 20;
}

.action-bar {
  background-color: #f7f7f7;
  border-width: 0;
  margin-bottom: 0;
}

.action-bar label {
  font-weight: bold;
  opacity: 0;
}

.header {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: -16;
  margin-right: -16;
  padding-top: 8;
  padding-bottom: 8;
  padding-left: 16;
  padding-right: 16;
  border-bottom-width: 1;
  border-bottom-color: rgba(0, 0, 0, 0.2);
}

.header label {
  font-size: 36;
  font-weight: bold;
  margin-left: 20;
}

.description-label {
  margin-bottom: 16;
  line-height: 3;
  color: rgba(0, 0, 0, 0.87);
}

.hidden {
  animation-name: show;
  animation-duration: 0.2;
  animation-fill-mode: forwards;
  animation-direction: reverse;
}

.visible {
  animation-name: show;
  animation-duration: 0.2;
  animation-fill-mode: forwards;
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

