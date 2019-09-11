<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout>
        <Label class="message" :text="msg" col="0" row="0" />
        <Button class="btn btn-primary" text="pop" @tap="buttonTap" ref="btn" />
      </StackLayout>
    </ScrollView>
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
      title: '分享',
      msg: 'Hello World!'
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
