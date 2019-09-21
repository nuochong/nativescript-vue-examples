<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <card-view margin="10" elevation="40" radius="1">
          <grid-layout rows="200, auto, auto" columns="auto, auto, *">
            <image src="~/assets/images/NativeScript-Vue.png" stretch="aspectFill" colSpan="3" row="0" />
            <label text="Batman wants to be friends?" class="info" textWrap="true" row="1" colSpan="3" />
            <button text="DECLINE" tap="goAway" row="2" col="0" />
            <button text="ACCEPT" row="2" col="1" />
          </grid-layout>
        </card-view>
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
      title: '自定义卡片'
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
